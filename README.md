# wncelrcn-v3

Professional personal portfolio — Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + GSAP.

Design implemented from Figma: *Portfolio Redesign V3*.

## Development

```bash
npm run dev      # start the dev server (Turbopack)
npm run build    # production build
npm run lint     # lint
npm run test     # run unit tests (Vitest)
```

## Structure

- `app/` — routes, root layout, global styles
- `components/sections/` — page sections (Nav, Hero, About, FeaturedProjects, Footer)
- `components/animations/` — reusable GSAP wrappers
- `components/ui/` — shadcn/ui primitives
- `lib/` — utilities and animation setup
- `public/figma/` — design assets exported from Figma
- `docs/superpowers/` — design spec and implementation plan

Design tokens live in `app/globals.css` (`@theme`).
