# Session Handoff

## Current Objective

- Goal: feat-006 Projects page from Figma Desktop-5
- Current status: done; harness green; About tab panels stagger in with Reveal
- Branch: `main`

## Completed

- [x] Domain: Project highlight vs listing vs Featured Projects; Tagline vs Tech stack; Blurb vs Extended description; Project modal
- [x] `/projects` route with highlights, listings, and modal
- [x] Configurable records in `lib/projects.ts`
- [x] Homepage featured grid left as blank cover cards

## Verification Evidence

| Check | Command | Result | Notes |
|---|---|---|---|
| Install / lint / test / build | `./init.sh` | passed 2026-09-15 | 26 tests |
| Routes | `npm run build` | `/projects` static; `[slug]` → `/certifications`, `/awards` | |
| Browser | `/projects` + `/` | highlights and listings open the modal; homepage cards unchanged | |
| Browser | `/projects` modal | 390px: media above copy; 1280px: copy left, media right | 2026-09-15 |
| Browser | `/projects` listing gap | 80px mobile / 128px desktop between highlights and listings | 2026-09-15 |
| Browser | `/projects` modal motion | enter finishes with visible copy; X and `cancel` close after exit tween; reopen works | 2026-09-15 |
| Browser | `/` About tabs | Work and Education groups enter on mount; About Me stays empty | 2026-09-15 |

## Startup for the next session

1. Read `AGENTS.md` and `CONTEXT.md`
2. Read `feature_list.json` (feat-001–006 done) and this file
3. Run `./init.sh` before editing
4. Fill real Project records in `lib/projects.ts` or start Certifications/Awards

## Key files

| What | Path |
|---|---|
| Project records | `lib/projects.ts` |
| Highlights / listings / modal | `components/projects/` |
| Projects page | `app/projects/page.tsx` |
| Site routes | `lib/site-routes.ts` |
| About content | `lib/about/content.ts` |

## Domain (from CONTEXT.md)

- **Project highlights** are the six named tiles; **Project listings** are the wide rows
- **Featured Projects** is homepage-only, five blank cover cards
- Click opens the **Project modal**, not a case-study route
- **Tagline** / **Blurb** are listing-only; **Tech stack** / **Extended description** are modal-only

## Deferred

- Real marks, screenshots, and live links (edit the Project records)
- Deep-link / share URL for an open modal
- Certifications and Awards real pages

## Recommended next step

Replace placeholder fields on each Project in `lib/projects.ts` as real copy and assets land.
