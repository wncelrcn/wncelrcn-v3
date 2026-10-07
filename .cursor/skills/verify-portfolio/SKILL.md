---
name: verify-portfolio
description: "Drive the wncelrcn-v3 portfolio web UI the way a visitor does. Launch an isolated Next.js dev server, exercise nav, about tabs, project modals, certifications, and the footer, and capture proof. Use when verifying portfolio UI, routes, or changes to Nav, About, projects, certifications, awards, or the footer."
---

# Verify the portfolio

wncelrcn-v3 is a read-only Next.js portfolio. A visitor uses the sticky nav, the homepage (hero, about tabs, featured-project covers), `/projects` modals, `/certifications`, the `/awards` placeholder, and the footer. There is no auth, database, or required env var. Content is compiled into the page.

Drive only a server this skill started. Next.js allows one `next dev` process per output directory. This launcher sets `VERIFY_DIST_DIR` to `.next-verify` (dev files land in `.next-verify/dev`) so it does not take the `.next` lock and does not stop a server already running on port 3000. Never kill the pid from an "already running" message. A second verification instance needs its own `VERIFY_PORT`, `VERIFY_RUN_DIR`, and `VERIFY_DIST_DIR`.

## Launch

From the repo root:

```bash
.cursor/skills/verify-portfolio/scripts/verify.sh launch
```

That starts `next dev` on `127.0.0.1:4173` in its own process group, with output in `.next-verify`, and waits until `http://127.0.0.1:4173/` returns HTML containing `Wince Larcen Rivano`. Ready output includes the URL, pid, and process group. The log is `.cursor/skills/verify-portfolio/.run/server.log`.

Override the port, run directory, and dist directory together when you need another instance:

```bash
VERIFY_PORT=4174 \
VERIFY_RUN_DIR=/tmp/wncelrcn-verify-4174 \
VERIFY_DIST_DIR=.next-verify-4174 \
  .cursor/skills/verify-portfolio/scripts/verify.sh launch
```

`VERIFY_DIST_DIR` must be a single directory name starting with `.next-verify`. Use that same trio for `doctor` and `cleanup`. If `next` is missing, run `npm install` from the repo root and launch again.

First boot can spend time downloading Instrument Sans and Instrument Serif. The launcher waits up to about two minutes.

## Doctor

```bash
.cursor/skills/verify-portfolio/scripts/verify.sh doctor
```

Require every line before driving:

- `ok`
- `url=` is the origin you will open
- `pid=` is alive
- `listener=` is a process in `pgid=`
- `port=` matches the URL

Doctor fails when the saved pid is dead, the port belongs to another process, or the homepage no longer contains `Wince Larcen Rivano`.

## Drive

Use the Cursor IDE browser. Read `.cursor/skills/verify-portfolio/features/README.md`, then the feature file. A proof that uses one entry point is incomplete when that file lists others.

1. `browser_tabs` with `action` `list`. Reuse a tab only if it is already on this verification origin. Otherwise `browser_navigate` to the doctor URL with `newTab` true. Omit `position` unless the user asked to see the browser.
2. `browser_lock` with `action` `lock`.
3. Set a known viewport before interacting. Desktop recipes need width at least 768: `browser_cdp` method `Emulation.setDeviceMetricsOverride` with params `{ "width": 1280, "height": 800, "deviceScaleFactor": 1, "mobile": false }`. Mobile nav needs `{ "width": 390, "height": 844, "deviceScaleFactor": 2, "mobile": true }`.
4. `browser_snapshot`. Click through `browser_click` using the ref whose accessible name matches the feature file. Do not click by coordinates.
5. Snapshot again after the action and wait until the feature file's observable text is present. Hero words and About Me lines animate in from opacity 0; scroll the target into view with `browser_scroll` (`scrollIntoView` true on its ref) and snapshot again instead of sleeping a fixed time.
6. `browser_lock` with `action` `unlock` when finished. Clear the viewport with `browser_cdp` method `Emulation.clearDeviceMetricsOverride` and params `{}`.

External destinations (certification CTAs, project `Github` links, footer socials, `mailto:`) are production boundaries. Read the rendered `href`. Do not activate them.

There is no test-only route. HTTP checks with `curl` against the doctor URL are for doctor and for confirming a navigation response, not a substitute for the click path.

## Evidence

Write proof under `.cursor/skills/verify-portfolio/artifacts/<feature-id>/`. Cleanup must not delete this directory.

For each entry point you actually drive, save:

- `<entry>.aria.txt` — accessibility snapshot that shows the control you used and the resulting state
- `<entry>.png` — screenshot of that resulting state, with the portfolio nav or page title visible. `browser_take_screenshot` returns a temp path in `Saved to`. Copy that file to the absolute path under `artifacts/`. The `filename` argument alone does not leave the proof in the skill directory.
- `action.txt` — feature id, entry point, URL before and after, and the visible result

Capture the action and the result. A final screenshot with no record of what was clicked is not proof. Do not mark a skipped entry point as verified by a different one.

## Cleanup

```bash
.cursor/skills/verify-portfolio/scripts/verify.sh cleanup
```

This signals only the process group recorded in `.run/pgid`, deletes that run's `.next-verify*` directory, then deletes `.run`. It leaves `artifacts/` in place. Confirm the evidence files still exist after cleanup. If launch fails partway, run cleanup before trying again so the port and pid file are not stranded.

Pass the same `VERIFY_PORT`, `VERIFY_RUN_DIR`, and `VERIFY_DIST_DIR` you launched with. Cleanup of a missing run directory is a no-op.

## Helpers

`.cursor/skills/verify-portfolio/scripts/verify.sh` is the only helper. Invoke it as shown above. Subcommands are `launch`, `doctor`, and `cleanup`.
