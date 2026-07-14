# Design: Professional Personal Portfolio (wncelrcn-v3)

**Date:** 2026-07-14
**Status:** Draft — awaiting user review
**Owner:** Wince Rivano (wncelrcn)

## 1. Purpose

Build the third iteration of a professional, multi-disciplinary personal
portfolio. The visual design already exists in Figma; this project is about
choosing the right Next.js UI/animation stack and scaffolding a clean,
well-structured app that the Figma frames can be translated into faithfully.

The audience is mixed (engineering recruiters/managers and design-oriented
viewers), so the site must present both technical projects and visually crafted
work well.

## 2. Scope

**In scope**
- Scaffold a correctly configured Next.js application.
- Establish styling, component, and animation foundations.
- Create the routing structure and section/page shells the Figma design maps to.
- Establish the design-token → CSS-variable → Tailwind theme pipeline.

**Out of scope (for this spec)**
- Faithful pixel translation of the actual Figma frames. This is the
  immediately-following phase, gated on the Figma file URL and (ideally) the
  Figma Dev Mode MCP connector being authorized.
- Content authoring (copy, real project data, images).
- Backend, CMS, or a contact-form submission service.
- Blog/writing section (explicitly deferred; not requested).

## 3. Decisions (confirmed with user)

| Decision | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Component primitives | shadcn/ui (owned in-repo, unstyled → styled to Figma) |
| Animation | GSAP via `@gsap/react` (`useGSAP`) + ScrollTrigger |
| Package manager | npm |
| Page model | Hybrid: scroll-driven home page + additional routed pages |
| Theming | Match Figma only (no extra light/dark toggle unless the design has one) |
| Source of design | Figma (translation is a follow-on phase) |

## 4. Architecture

### 4.1 Rationale for the stack

A custom Figma design argues **against** opinionated component libraries
(MUI/Chakra/Mantine), which ship their own visual language and force override
work. Tailwind + shadcn/ui gives full pixel ownership while retaining
accessible, structured primitives. GSAP is the animation engine of choice, with
`@gsap/react`'s `useGSAP` hook providing React-safe scoping and automatic
cleanup so imperative timelines don't fight React's render lifecycle.

### 4.2 Directory structure

```
app/
  layout.tsx            # Root layout: fonts (next/font), <html>/<body>, metadata
  page.tsx              # Home — scroll-driven, composes stacked sections
  globals.css           # Tailwind layers + design tokens as CSS variables
  (site)/               # Optional route group for standalone pages
    <page>/page.tsx     # Additional routed pages (named once Figma is read)
components/
  sections/             # Hero, and other home-page scroll sections
  ui/                   # shadcn primitives (button, dialog, etc.)
  layout/               # Nav, footer, shared chrome
  animations/           # Reusable GSAP wrappers (<Reveal>, <ScrollFade>, ...)
lib/
  utils.ts              # cn() and small helpers
public/                 # Static assets exported from Figma
```

Boundaries: each section component is self-contained and presentational;
animation wrappers are the single place GSAP is instantiated; `lib/utils.ts`
holds cross-cutting helpers only. A section can be understood and changed
without reading the others.

### 4.3 Routing

- `app/page.tsx` is the scroll-driven home page composing section components in
  order (Hero first). Anchor-based in-page navigation between sections.
- Standalone pages become sibling routes under the App Router. Exact route
  names and whether any use dynamic segments (e.g. `work/[slug]`) will be
  finalized when the Figma frames are read.

### 4.4 Design-token pipeline

1. Extract tokens from Figma (colors, spacing, type scale, radii).
2. Define them as CSS custom properties in `app/globals.css`.
3. Reference those variables from `tailwind.config.ts` so utilities and tokens
   stay in sync.

Code is the single source of truth; the Figma design is mirrored into it. This
keeps theming consistent and avoids scattering hard-coded values.

### 4.5 Animation approach

- Animations are created only inside reusable client components under
  `components/animations/`, each using `useGSAP` scoped to a ref.
- Scroll-driven motion uses ScrollTrigger, registered once.
- `gsap.matchMedia()` handles responsive variants and honors
  `prefers-reduced-motion` (accessibility: motion is reduced/disabled when the
  user requests it).

## 5. Error handling & resilience

- App Router `error.tsx` / `not-found.tsx` boundaries for graceful failures.
- GSAP effects are guarded so they no-op cleanly if a target ref is absent
  (defensive against conditional rendering).
- Reduced-motion path ensures the site is fully usable without animation.

## 6. Testing / verification

Portfolio is presentation-heavy, so verification is primarily:
- `npm run build` and `npm run lint` succeed.
- Type-checking passes (TypeScript strict).
- The dev server renders the home page and each routed page without console
  errors.
- Manual visual check against Figma frames during the translation phase.
- (Optional, later) lightweight component tests only where logic exists.

## 7. Phased delivery

1. **Scaffold (this spec's implementation):** create the Next.js app, install
   and configure Tailwind + shadcn/ui + GSAP, set up the directory structure,
   token pipeline placeholders, one demonstration GSAP animation wrapper, and
   the routing shells. App builds and runs.
2. **Figma translation (next phase, separate plan):** with the Figma file URL
   (and ideally the Dev Mode MCP connector authorized), translate each frame
   into its section/page, populate real tokens, and refine animations.

## 8. Prerequisites / open items

- **Figma file URL** required before the translation phase.
- **Figma Dev Mode MCP connector** (optional but recommended) must be authorized
  in an interactive session for `get_design_context`/`get_code`/`get_variable_defs`.
  Without it, translation proceeds from rendered thumbnails + user guidance.
- Exact standalone page names/routes to be confirmed from the Figma frames.

## 9. Risks

- Translating from thumbnails (without Dev Mode extraction) is less precise;
  mitigated by iterating section-by-section with user feedback.
- Over-scaffolding before seeing the design; mitigated by keeping phase 1 to
  structure + config, not speculative UI.
