#!/usr/bin/env bash
# Launch, check, and stop an isolated wncelrcn-v3 dev server.
# Cleanup stops this run's process group and deletes its .next-verify directory and .run state. It never deletes artifacts.
set -euo pipefail

SKILL_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ROOT="$(cd "$SKILL_DIR/../../.." && pwd)"
RUN_DIR="${VERIFY_RUN_DIR:-$SKILL_DIR/.run}"
EVIDENCE_DIR="${VERIFY_EVIDENCE_DIR:-$SKILL_DIR/artifacts}"

dist_name() {
  local name="${1:-.next-verify}"
  if [[ ! "$name" =~ ^\.next-verify[A-Za-z0-9._-]*$ ]]; then
    echo "VERIFY_DIST_DIR must be a single .next-verify* directory name, not '$name'" >&2
    exit 1
  fi
  printf '%s\n' "$name"
}

usage() {
  echo "usage: verify.sh launch|doctor|cleanup" >&2
  exit 2
}

listener_pids() {
  lsof -nP -iTCP:"$1" -sTCP:LISTEN -t 2>/dev/null || true
}

pgid_of() {
  ps -o pgid= -p "$1" 2>/dev/null | tr -d '[:space:]'
}

stop_group() {
  local pgid="$1"
  if [[ -z "$pgid" || "$pgid" -le 1 ]]; then
    echo "refusing to signal process group '${pgid:-empty}'" >&2
    exit 1
  fi
  kill -TERM -"$pgid" 2>/dev/null || true
  local i
  for i in 1 2 3 4 5 6 7 8 9 10; do
    if ! pgrep -g "$pgid" >/dev/null 2>&1; then
      return 0
    fi
    sleep 0.4
  done
  kill -KILL -"$pgid" 2>/dev/null || true
  sleep 0.2
}

remove_run_dir() {
  if [[ -n "$RUN_DIR" && "$RUN_DIR" != "/" && -d "$RUN_DIR" ]]; then
    rm -rf "$RUN_DIR"
  fi
}

remove_dist_dir() {
  local name="$1"
  [[ -z "$name" ]] && return 0
  name="$(dist_name "$name")"
  local path="$ROOT/$name"
  if [[ -d "$path" ]]; then
    rm -rf "$path"
  fi
}

cmd="${1:-}"
case "$cmd" in
  launch)
    port="${VERIFY_PORT:-4173}"
    url="http://127.0.0.1:${port}"
    dist="$(dist_name "${VERIFY_DIST_DIR:-.next-verify}")"
    export VERIFY_DIST_DIR="$dist"
    if [[ -f "$RUN_DIR/pid" ]]; then
      existing="$(cat "$RUN_DIR/pid")"
      if kill -0 "$existing" 2>/dev/null; then
        echo "verification server already running (pid $existing). Run doctor, or cleanup before launch." >&2
        exit 1
      fi
    fi
    busy="$(listener_pids "$port" | tr '\n' ' ')"
    if [[ -n "${busy// /}" ]]; then
      echo "port $port is already in use by pid(s): $busy" >&2
      echo "refusing to attach. Pick a free VERIFY_PORT and a distinct VERIFY_RUN_DIR." >&2
      exit 1
    fi
    if [[ ! -x "$ROOT/node_modules/next/dist/bin/next" && ! -f "$ROOT/node_modules/next/dist/bin/next" ]]; then
      echo "next is not installed. From $ROOT run: npm install" >&2
      exit 1
    fi
    mkdir -p "$RUN_DIR" "$EVIDENCE_DIR"
    log="$RUN_DIR/server.log"
    python3 -c 'import os, sys; os.setsid(); os.execvp(sys.argv[1], sys.argv[1:])' \
      node "$ROOT/node_modules/next/dist/bin/next" dev --hostname 127.0.0.1 --port "$port" \
      >"$log" 2>&1 &
    pid="$!"
    echo "$pid" >"$RUN_DIR/pid"
    sleep 0.3
    pgid="$(pgid_of "$pid")"
    if [[ -z "$pgid" || "$pgid" -le 1 ]]; then
      echo "could not read a safe process group for pid $pid" >&2
      echo "--- server log ---" >&2
      tail -n 40 "$log" >&2 || true
      if [[ -n "$pgid" && "$pgid" -gt 1 ]]; then
        stop_group "$pgid" 2>/dev/null || true
      fi
      remove_dist_dir "$dist"
      remove_run_dir
      exit 1
    fi
    echo "$pgid" >"$RUN_DIR/pgid"
    echo "$port" >"$RUN_DIR/port"
    echo "$url" >"$RUN_DIR/url"
    echo "$dist" >"$RUN_DIR/dist"
    ready=0
    for _ in $(seq 1 60); do
      if curl -fsS --max-time 3 "$url/" 2>/dev/null | grep -q "Wince Larcen Rivano"; then
        ready=1
        break
      fi
      if ! kill -0 "$pid" 2>/dev/null; then
        break
      fi
      sleep 2
    done
    if [[ "$ready" -ne 1 ]]; then
      echo "server did not become ready at $url" >&2
      echo "--- server log ---" >&2
      tail -n 60 "$log" >&2 || true
      stop_group "$pgid"
      remove_dist_dir "$dist"
      remove_run_dir
      exit 1
    fi
    echo "ready $url pid=$pid pgid=$pgid"
    echo "evidence $EVIDENCE_DIR"
    ;;
  doctor)
    if [[ ! -f "$RUN_DIR/pid" || ! -f "$RUN_DIR/pgid" || ! -f "$RUN_DIR/port" || ! -f "$RUN_DIR/url" || ! -f "$RUN_DIR/dist" ]]; then
      echo "no verification instance in $RUN_DIR" >&2
      exit 1
    fi
    pid="$(cat "$RUN_DIR/pid")"
    pgid="$(cat "$RUN_DIR/pgid")"
    port="$(cat "$RUN_DIR/port")"
    url="$(cat "$RUN_DIR/url")"
    if [[ -n "${VERIFY_PORT:-}" && "$VERIFY_PORT" != "$port" ]]; then
      echo "VERIFY_PORT=$VERIFY_PORT does not match the running port $port" >&2
      exit 1
    fi
    if ! kill -0 "$pid" 2>/dev/null; then
      echo "saved pid $pid is not running" >&2
      exit 1
    fi
    owned=""
    for listener in $(listener_pids "$port"); do
      if [[ "$(pgid_of "$listener")" == "$pgid" ]]; then
        owned="$listener"
        break
      fi
    done
    if [[ -z "$owned" ]]; then
      echo "port $port is not owned by process group $pgid" >&2
      exit 1
    fi
    if ! curl -fsS --max-time 10 "$url/" | grep -q "Wince Larcen Rivano"; then
      echo "homepage at $url did not contain the portfolio title" >&2
      exit 1
    fi
    echo "ok"
    echo "url=$url"
    echo "pid=$pid"
    echo "pgid=$pgid"
    echo "port=$port"
    echo "listener=$owned"
    echo "dist=$(cat "$RUN_DIR/dist")"
    echo "evidence=$EVIDENCE_DIR"
    ;;
  cleanup)
    if [[ ! -f "$RUN_DIR/pgid" ]]; then
      echo "nothing to clean in $RUN_DIR"
      echo "evidence left at $EVIDENCE_DIR"
      exit 0
    fi
    pgid="$(cat "$RUN_DIR/pgid")"
    dist=""
    if [[ -f "$RUN_DIR/dist" ]]; then
      dist="$(cat "$RUN_DIR/dist")"
    fi
    if pgrep -g "$pgid" >/dev/null 2>&1; then
      stop_group "$pgid"
    fi
    if pgrep -g "$pgid" >/dev/null 2>&1; then
      echo "process group $pgid is still running; leaving its files in place" >&2
      exit 1
    fi
    remove_dist_dir "$dist"
    remove_run_dir
    echo "stopped process group $pgid"
    echo "evidence left at $EVIDENCE_DIR"
    ;;
  *)
    usage
    ;;
esac
