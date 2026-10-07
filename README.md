# wncelrcn-v3

Professional personal portfolio — Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP.

Design implemented from Figma: *Portfolio Redesign V3*.

## Development

```bash
npm run dev      # start the dev server (Turbopack)
npm run build    # production build
npm run lint     # lint
npm run test     # run unit tests (Vitest)
```

## Structure

- `app/` — routes (`/`, `/projects`, `/certifications`, `/awards`), root layout, global styles
- `components/sections/` — homepage sections (Nav, Hero, About, FeaturedProjects, Footer)
- `components/about/` — About Me, Work Experience, Education
- `components/sections/hero/` — headline lockup and doodles
- `components/projects/` — Projects page and Project modal
- `components/certifications/` — Certifications page
- `components/animations/` — Reveal, ScrollReveal, Typewriter
- `lib/` — content, routes, utilities, and animation setup
- `public/figma/` — design assets exported from Figma
- `CONTEXT.md` and `docs/adr/` — living domain language and decisions

Design tokens live in `app/globals.css` (`@theme`).

`docs/superpowers/` is the July 2026 scaffold. It is not the current design: scroll motion follows ADR-0001 (no ScrollTrigger), and shadcn has been removed.
