# Session Progress Log

## Current State

**Last Updated:** 2026-09-14
**Active Feature:** none — planned list (feat-001–005) is complete

## Status

### What's Done

- [x] feat-001: design tokens, accent surfaces, Lucide icons, waving-hand kept
- [x] feat-002: GSAP-only motion; ADR-0001 (IntersectionObserver, not ScrollTrigger)
- [x] feat-003: About Me / Work Experience / Education tabs; grouped companies and Mapúa only
- [x] feat-004: Nav is Projects, Certifications, Awards via `siteRoutes` + `app/[slug]`
- [x] feat-005: harness green; handoff files current
- [x] Architecture: domain types in `lib/about/content.ts`; `Project` + `ProjectCard`; unused shadcn removed
- [x] Pushed: `3578ca5` on `origin/main`

### What's In Progress

- none

### What's Next

Add new items to `feature_list.json` in the next session. Likely content/design work:

1. About Me body when a Figma frame exists
2. Project case studies (`featuredProjects` / `projects[]`)
3. Certifications and Awards pages (promote out of `[slug]` when they have real UI)
4. Real company / institution marks

## Blockers / Risks

- About Me body blank until Figma
- Real org marks pending; Lucide placeholders in use
- `projects[]` empty until case studies are designed
- Social URLs in `lib/contact.ts` unconfirmed (noted in source)

## Architecture Decisions

- **Data:** `Company` / `Role` / `Institution` / `Program` in `lib/about/content.ts`
- **Routes:** `siteRoutes` → `navLinks` + `app/[slug]/page.tsx`
- **Motion:** IntersectionObserver + GSAP per ADR-0001; no ScrollTrigger
- **Projects:** `featuredProjects` (five slots) + shared `ProjectCard`
- **Tests:** structural invariants, not full copy snapshots
- **Stack:** Next.js App Router, Tailwind v4, Lucide, GSAP — no shadcn

## Evidence of Completion

- [x] `./init.sh` passed 2026-09-14 (feat-005 close-out)
- [x] 19 tests, lint, build green
- [x] Routes: `/`, `/projects`, `/certifications`, `/awards` via SSG `[slug]`
