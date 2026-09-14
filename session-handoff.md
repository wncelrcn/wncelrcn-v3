# Session Handoff

## Current Objective

- Goal: planned features feat-001–005 are done; next session starts new work
- Current status: harness green; `origin/main` at `3578ca5` plus this feat-005 doc update
- Branch: `main`

## Completed

- [x] feat-001 through feat-004 (product)
- [x] feat-005 (verification and handoff)
- [x] Domain split, site-routes registry, About groups, ProjectCard, ADR-0001
- [x] Unused shadcn / `@base-ui` / `cva` / `tw-animate-css` removed

## Verification Evidence

| Check | Command | Result | Notes |
|---|---|---|---|
| Install / lint / test / build | `./init.sh` | passed 2026-09-14 | 19 tests |
| Routes | `npm run build` | `/`, `/[slug]` → `/projects`, `/certifications`, `/awards` | SSG via `generateStaticParams` |
| Remote | `git status` | `main` tracks `origin/main` | product commit `3578ca5` pushed |

## Startup for the next session

1. Read `AGENTS.md` and `CONTEXT.md`
2. Read `feature_list.json` (all five features done) and this file
3. Run `./init.sh` before editing
4. Add new features to `feature_list.json` — do not reopen 001–005 unless something is broken
5. One feature at a time

## Key files

| What | Path |
|---|---|
| About content | `lib/about/content.ts` |
| Site routes | `lib/site-routes.ts` |
| Projects | `lib/projects.ts` |
| Contact | `lib/contact.ts` |
| About groups | `components/about/groups.tsx` |
| Placeholder pages | `app/[slug]/page.tsx` |
| Scroll reveal | `docs/adr/0001-scroll-reveal-strategy.md` |

## Domain (from CONTEXT.md)

- **About section** has three tabs: **About Me** (default, blank), **Work Experience**, **Education**
- Do not invent About Me copy; do not put ACM/JPCS in Education
- Use **Placeholder logos** until real marks land

## Deferred (do not reopen without cause)

- Shared fade-in hook for `Reveal` / `ScrollReveal` (two wrappers, different triggers)
- `docs/superpowers/*` is historical; live rules are `AGENTS.md` + ADR-0001
- Promote `/projects` to `app/projects/page.tsx` only when case studies exist

## Recommended next step

Add the next feature to `feature_list.json` and implement it. Content is blocked on Figma for About Me, project cards, Certifications, and Awards.
