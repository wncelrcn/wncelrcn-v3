# Session Handoff

## Current Objective

- Goal: feat-007 Certifications page from Figma Desktop-6
- Current status: done; harness green
- Branch: `main`

## Completed

- [x] Domain: Certification vs Project; Certification link vs Project link; View Certification + circular arrow as one control; Issuer Placeholder logos; twelve dummy cards; Certification-only (not Awards)
- [x] Dedicated `/certifications` route with a 3-column card grid
- [x] Configurable records in `lib/certifications.ts` (`id`, `title`, `issuer`, `href`, optional `cta` / `logoSrc`)

## Verification Evidence

| Check | Command | Result | Notes |
|---|---|---|---|
| Install / lint / test / build | `./init.sh` | passed 2026-09-15 | 31 tests |
| Routes | `npm run build` | `/certifications` static; `[slug]` → `/awards` | |
| Browser | `/certifications` | 12 cards; CTA `target="_blank"` to placeholder href; titles inert | 2026-09-15 |
| Browser | `/`, `/projects`, `/awards` | homepage, projects, awards placeholder unchanged | 2026-09-15 |
| Browser | `/certifications` 390px | single-column cards | 2026-09-15 |

## Startup for the next session

1. Read `AGENTS.md` and `CONTEXT.md`
2. Read `feature_list.json` (feat-001–007 done) and this file
3. Run `./init.sh` before editing
4. Fill real Certification records or start Awards

## Key files

| What | Path |
|---|---|
| Certification records | `lib/certifications.ts` |
| Card / index | `components/certifications/` |
| Certifications page | `app/certifications/page.tsx` |
| Project records | `lib/projects.ts` |
| Site routes | `lib/site-routes.ts` |
| About content | `lib/about/content.ts` |

## Domain (from CONTEXT.md)

- A **Certification** is not a **Project**; no **Project modal**
- **View Certification** and the circular arrow are one **Certification link** (new tab)
- **Issuer** marks are **Placeholder logos** until real files land
- The **Certification** card is not an Awards tile

## Deferred

- Real Certification titles, Issuers, Certification links, and issuer marks
- Real Project marks, screenshots, and live links
- Deep-link / share URL for an open Project modal
- Awards real page

## Recommended next step

Replace placeholder fields on each Certification in `lib/certifications.ts` as real credentials land, or start the Awards page from its Figma frame.
