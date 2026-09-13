# AGENTS.md

Personal portfolio of Wince Larcen Rivano. Next.js App Router, Tailwind v4, shadcn, GSAP.

## Startup Workflow

Before writing code:

1. Confirm working directory with `pwd`
2. Read this file completely
3. Read `docs/agents/domain.md` and `CONTEXT.md` if present
4. Run `./init.sh` to verify the environment
5. Read `feature_list.json` for current feature state
6. Review `progress.md` and `git log --oneline -5`

If baseline verification is failing, repair that first.

## Design invariants

These are non-negotiable. Do not introduce alternatives.

| Token | Value | Use |
|---|---|---|
| Font sans | Instrument Sans | Body, nav, headings, UI |
| Font serif | Instrument Serif Italic | Role line and other italic emphasis only |
| Background | `#F6F4F2` | Page surface (`--color-page-from` / `--color-page-to`) |
| Accent | `#F7F7F7` | Cards, pills, raised surfaces (`--color-accent-surface`) |
| Text | `#000000` | Primary ink (`--color-ink`) |

- **Icons**: Lucide (`lucide-react`) or shadcn. No emojis in UI, copy, alt text, or commits, except the intentional waving-hand emoji after the About greeting in `components/sections/About.tsx`. Do not remove it.
- **Motion**: entrance/scroll/sequence motion goes through GSAP + `@gsap/react` (`useGSAP`) via `@/lib/animations/gsap`. Instant hover/active feedback may use Tailwind transitions; `animate-wave`/`animate-blink` micro-loops stay with `motion-reduce` guards. Honor `prefers-reduced-motion`. Do not add a second JS animation library.
- Reuse existing tokens in `app/globals.css`. Do not hardcode a parallel palette.

## Working Rules

- **One feature at a time** from `feature_list.json`
- **Verification required** before claiming done (`./init.sh`)
- **Stay in scope**: do not modify unrelated files
- **Update artifacts** before ending: `progress.md`, `feature_list.json`, `session-handoff.md`
- Issues live on GitHub via `gh`. See `docs/agents/issue-tracker.md`

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `wncelrcn/wncelrcn-v3` via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default roles: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` plus `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Definition of Done

A feature is done only when all of the following are true:

- [ ] Target behavior is implemented
- [ ] Design invariants above still hold
- [ ] `./init.sh` ran and passed
- [ ] Evidence recorded in `feature_list.json` or `progress.md`
- [ ] Repo is restartable from this file

## End of Session

1. Update `progress.md` and `feature_list.json`
2. Record blockers in `session-handoff.md`
3. Leave the repo clean enough to run `./init.sh` immediately

## Verification

```bash
./init.sh
```

Required checks:

- `npm install`
- `npm run lint`
- `npm test`
- `npm run build`
