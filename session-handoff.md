# Session Handoff

## Current Objective

- Goal: real Certification records, or the Awards page
- Current status: About Me body, Company and Institution marks, and hero doodles are on `main` (`62421d8`). `./init.sh` passed 2026-09-28 (37 tests).
- Branch: `main`

## Completed

- [x] 2026-09-28: Review fixes. Company `href` replaces `gotymeBankUrl`. About Me body is `aboutMe` runs. Group logos use `alt=""`. `observeOnce` is the shared scroll seam. Hero tokens live in `components/sections/hero/lockup.ts`. `HeartPencil.tsx` and `Gears.tsx` were not modified.
- [x] 2026-09-28: Hero doodles animate on a loop. The SVGs are inlined as `components/sections/hero/HeartPencil.tsx` (pencil tip follows the heart strokes as they draw, then rests in the Figma pose) and `Gears.tsx` (four gears spin on their hubs via `svgOrigin`). `loop.ts` gates both on `prefers-reduced-motion` and runs only the visible lockup. `Doodle` now takes art as children. `./init.sh` passed; checked in the browser at 1280px.
- [x] 2026-09-28: Hero entrance reveals word by word. Doodles count as words in the stagger. The reading order and delays live in `components/sections/hero/lockup.ts`. The pencil starts writing an empty heart as its slot rises (`HeartPencil delay`). The gears sit still and then spin up to speed after their slot lands (`Gears delay`, a timeScale ramp from 0 to 1). The heart finishes about 1.7s after the last word, as the closing beat.

- [x] 2026-09-28: About Me tab body from Figma 37:2 in `components/about/AboutMePanel.tsx`. GoTyme Bank links to https://www.gotyme.com.ph/ in a new tab with an up-right arrow; Neko Labs is hover-only until it has a site. Checked in browser at 1280px and 390px.

- [x] Hero section fills the space under the nav (`min-h: 100dvh` minus nav). Headline stays centered. About greeting starts below the fold on desktop (1440×900, ~133px of scroll) and mobile (390×844, ~206px of scroll).
- [x] Domain: Certification vs Project; Certification link vs Project link; View Certification + circular arrow as one control; Issuer Placeholder logos; twelve dummy cards; Certification-only (not Awards)
- [x] Dedicated `/certifications` route with a 3-column card grid
- [x] Configurable records in `lib/certifications.ts` (`id`, `title`, `issuer`, `href`, optional `cta` / `logoSrc`)

## Verification Evidence

| Check | Command | Result | Notes |
|---|---|---|---|
| Install / lint / test / build | `./init.sh` | passed 2026-09-28 | 37 tests; About Me records, company marks, hero lockup |
| Routes | `npm run build` | `/certifications` static; `[slug]` → `/awards` | |
| Browser | `/certifications` | 12 cards; CTA `target="_blank"` to placeholder href; titles inert | 2026-09-15 |
| Browser | `/`, `/projects`, `/awards` | homepage, projects, awards placeholder unchanged | 2026-09-15 |
| Browser | `/certifications` 390px | single-column cards | 2026-09-15 |
| Portfolio UI skill | `verify.sh launch`, doctor, click Projects, cleanup | passed 2026-10-07 | Isolated server on 4173 with `.next-verify`. Evidence remains in `artifacts/navigation/` after cleanup. |

## Startup for the next session

1. Read `AGENTS.md` and `CONTEXT.md`
2. Read `feature_list.json` (feat-001–007 done) and this file
3. Run `./init.sh` before editing
4. Fill real Certification records or start Awards
5. UI proof uses `.cursor/skills/verify-portfolio/` (`/maintain-verification-skill` when the map drifts)

## Key files

| What | Path |
|---|---|
| Certification records | `lib/certifications.ts` |
| Card / index | `components/certifications/` |
| Certifications page | `app/certifications/page.tsx` |
| Project records | `lib/projects.ts` |
| Site routes | `lib/site-routes.ts` |
| About content | `lib/about/content.ts` |
| About Me panel | `components/about/AboutMePanel.tsx` |
| Hero lockup | `components/sections/hero/lockup.ts` |
| Scroll observer | `lib/animations/when-visible.ts` |
| UI verification | `.cursor/skills/verify-portfolio/` |

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
