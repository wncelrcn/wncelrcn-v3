# Session Progress Log

## Current State

**Last Updated:** 2026-09-15
**Active Feature:** feat-007 Certifications page — done

## Status

### What's Done

- [x] feat-001 through feat-006 (prior)
- [x] feat-007: `/certifications` from Figma Desktop-6
  - Twelve dummy **Certification** cards, data-driven in `lib/certifications.ts`
  - **Issuer** **Placeholder logos** (`BadgeCheck`) until real marks land
  - **View Certification** + circular arrow are one **Certification link** (`target="_blank"`)
  - Dedicated route; Awards stays on `app/[slug]`
- [x] feat-006: `/projects` from Figma Desktop-5
- [x] About section motion: greeting splits (avatar then copy), tabs on their own ScrollReveal, Work/Education groups stagger in with `Reveal` on tab change

### What's In Progress

- none

### What's Next

1. Replace placeholder copy, links, and media on each Project record
2. Drop in real highlight marks (replace Lucide `AppWindow`)
3. About Me body when a Figma frame exists
4. Real Certification titles, Issuers, Certification links, and issuer marks
5. Awards page

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
- **Motion:** ScrollReveal per highlight/listing/certification tile; modal enter/exit via GSAP timelines; About greeting/tabs via ScrollReveal (no parent wrapping the panels); Work/Education groups use mount `Reveal` with 0.1s stagger. No ScrollTrigger.

## Evidence of Completion

- [x] `./init.sh` passed 2026-09-15 (31 tests, lint, build)
- [x] Browser: `/certifications` 12 cards, CTA opens example.com, original tab stays; `/`, `/projects`, `/awards` unchanged
- [x] Browser 2026-09-15: mobile 390px single-column cards
- [x] Routes: `/projects` and `/certifications` static; `[slug]` → `/awards`
