# Session Progress Log

## Current State

**Last Updated:** 2026-11-02
**Active Feature:** Awards page — placeholder rows from Figma 179:2

## Status

### What's Done

- [x] 2026-11-02: Awards spacing and photos. Heading-to-list gap is `mt-10 md:mt-12` (48px), the same as Projects and Certifications. Records take `photos: { src, alt }[]` and an optional `blurb`. `components/awards/AwardPhotos.tsx` is a scroll-snap carousel: swipe on touch, arrows on hover or focus, counter only with 2+ photos, an empty card with no photos. On mobile the month sits 12px above the event. `./init.sh` passed (47 tests). Browser check at 1276px and 390px.

- [x] 2026-11-02: `/awards` is a dedicated page. Four placeholder rows from Figma 179:2 (month, event, black serif-italic place, sentence, empty photo card with `1 / 3`). Place line is `text-ink`, not spark blue. `dedicatedSlugs` includes awards, so `[slug]` no longer claims it.

- [x] 2026-10-23: Work Experience order is newest start first: GoTymeX, Neko Labs, GoTyme Bank, Codebility, Headstarter AI. Neko Labs (Apr 2026 - Present) sits above AI Engineer Rookie (Jan 2026 - Jul 2026). Content tests passed (14). Browser at 1280px showed GoTymeX, then Neko Labs.

- [x] 2026-10-23: Removed the Freelance company (Freelance Software Developer, Dec 2024 - Feb 2025) from Work Experience. Order is now GoTymeX, GoTyme Bank, Neko Labs, Codebility, Headstarter AI. Content tests passed (14). Browser at 1280px showed Codebility followed by Headstarter AI.

- [x] 2026-10-18: The craft phrase uses the same blue stream as the designer and builder lines (`text-stream`, 2.8s). “AI Engineer” and “Co-Founder” are solid spark blue (`text-spark`) with no sweep. The rainbow `text-rgb` path is gone.

- [x] 2026-10-18: `/projects` returned 500 (`ComponentMod.handler is not a function`) because Turbopack treated `/Users/wincelarcen/package-lock.json` as the workspace root. `next.config.ts` now pins `turbopack.root` and `outputFileTracingRoot` to this repo. After a fresh dev cache, `/`, `/projects`, `/certifications`, and `/awards` returned 200 and the lockfile warning was gone.

- [x] 2026-10-10: `npm run dev` drops `.next/dev` when its Turbopack cache was written for another directory. The move from `Documents/CodingStuff` left absolute paths in that cache, and Turbopack panicked with “Next.js package not found” while writing `/projects`. After the reset, `/projects`, `/`, and `/certifications` returned 200 with no panic.

- [x] 2026-10-07: “thinks like a designer” and “builds with intention” use a continuous blue sweep (`text-stream`, 2.8s). Spark blue, light blue, and deep blue repeat with no ink gap. Reduced motion keeps the phrases in ink.

- [x] 2026-10-07: “craft, clarity, and how things feel to use” carries a continuous rainbow (`text-rgb`, 4.2s). The gradient repeats red through violet with no ink gap, so the sweep does not return to black. Reduced motion keeps the phrase in ink.

- [x] 2026-10-07: The thinking spark is the eight traced frames of `public/figma/claude-thinking.gif` again, stepped with the CSS `mark-spark` opacity cycle (200ms each). The GSAP hub spin was reverted.

- [x] 2026-10-07: The build mark between “and” and “builds” is the GIF’s blob, eyes, hammer, and anvil, in the spark blue. The hammer swings on a GSAP timeline (`loopWhenVisible`, same gate as the hero gears) instead of stepping opacity between silhouettes. Checked at 1280px on the About Me line.

- [x] 2026-10-07: Education bullet reads “Graduating as Summa Cum Laude (1.155 GWA)”. Seen on the Education tab.

- [x] 2026-10-07: Current AI Engineer role is its own GoTymeX company (`/figma/tymex-logo.png`, rounded, Ho Chi Minh City). GoTyme Bank keeps AI Engineer Rookie. About Me mentions GoTymeX and opens https://www.gotyme.com/gotyme-x. Content tests passed (13). Browser at 1280px showed the rounded mark and the href. `./init.sh` passed 2026-10-07 (39 tests). Verification map corrected for the desktop-only nav underline and the project-dialog tech line.

- [x] 2026-09-28 review fixes: Company site URL and logo live on the Company record; About Me prose is records (`aboutMe`) that mention those Companies; Work/Education logos are decorative (`alt=""`); scroll observer shared via `observeOnce` (ADR-0001); hero word order and doodle delays live in `lockup.ts`. HeartPencil and Gears timelines were not edited. `./init.sh` passed (37 tests).

- [x] feat-001 through feat-006 (prior)
- [x] feat-007: `/certifications` from Figma Desktop-6
  - Twelve dummy **Certification** cards, data-driven in `lib/certifications.ts`
  - **Issuer** **Placeholder logos** (`BadgeCheck`) until real marks land
  - **View Certification** + circular arrow are one **Certification link** (`target="_blank"`)
  - Dedicated route; Awards stays on `app/[slug]`
- [x] feat-006: `/projects` from Figma Desktop-5
- [x] About section motion: greeting splits (avatar then copy), tabs on their own ScrollReveal, Work/Education groups stagger in with `Reveal` on tab change
- [x] Hero fills the viewport under the nav so the About greeting starts below the fold (desktop and mobile)
- [x] Hero entrance is word by word on both lockups, from `components/sections/hero/lockup.ts`. Heart and gears delays follow that order. Skipped when reduced motion is on.
- [x] About Me panel from Figma 37:2 (`components/about/AboutMePanel.tsx`): four `aboutMe` paragraphs with serif-italic emphasis. GoTyme Bank’s site URL is `href` on the Company record and the mention opens it in a new tab; Neko Labs has no site, so that mention is hover-only. Work Experience and Education use `text-entry`. Company and Institution marks are logo files on the records, with empty alt. `./init.sh` passed 2026-09-28 (37 tests). Pushed to `main` as `62421d8`.

### What's In Progress

- none

### What's Next

1. Replace placeholder copy, links, and media on each Project record
2. Drop in real highlight marks (replace Lucide `AppWindow`)
3. Real Certification titles, Issuers, Certification links, and issuer marks
4. Awards page

## Blockers / Risks

- Project icons and screenshots are placeholders
- Dummy Github hrefs point at `https://github.com`
- Dummy Certification links point at `https://example.com/certification`
- Social URLs in `lib/contact.ts` unconfirmed (noted in source)

## Architecture Decisions

- **Projects page:** `app/projects/page.tsx`
- **Certifications page:** `app/certifications/page.tsx`; awards stay on `app/[slug]`
- **Data:** `certifications` array; optional `cta` and `logoSrc` on each record
- **Homepage:** `featuredProjects` remains five `FeaturedSlot`s; `ProjectCard` unchanged
- **Modal:** native `<dialog>`, not a route; optional fields omit themselves
- **Motion:** `observeOnce` is the shared scroll observer (ADR-0001). ScrollReveal is the single fade per highlight, listing, certification tile, and the About greeting/tabs (no parent wrapping the panels). About Me calls `observeOnce` and keeps its own timeline. Work/Education groups use mount `Reveal` with 0.1s stagger. Modal enter/exit is a GSAP timeline. No ScrollTrigger.

## Evidence of Completion

- [x] `./init.sh` passed 2026-09-15 (31 tests, lint, build)
- [x] Browser: `/certifications` 12 cards, CTA opens example.com, original tab stays; `/`, `/projects`, `/awards` unchanged
- [x] Browser 2026-09-15: mobile 390px single-column cards
- [x] Routes: `/projects` and `/certifications` static; `[slug]` → `/awards`
- [x] 2026-09-28: Hero doodles loop (pencil draws the heart, gears turn). `./init.sh` passed; in the browser the pencil returns to (0,0) each loop and gear centers hold steady while rotating
- [x] 2026-09-28: Hero entrance is word by word and paced with the doodles (heart draws from empty on entrance, gears spin up). `./init.sh` passed (32 tests); timing sampled in the browser
- [x] 2026-10-07: Project-local UI verification skill at `.cursor/skills/verify-portfolio/`. `next.config.ts` sends `VERIFY_DIST_DIR` to its own output folder so a check does not take the `.next` dev lock. Proved by launching on port 4173, clicking Projects, and confirming `artifacts/navigation/` survived cleanup.
