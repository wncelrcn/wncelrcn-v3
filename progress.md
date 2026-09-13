# Session Progress Log

## Current State

**Last Updated:** 2026-09-13
**Active Feature:** feat-004 - Navbar update (not started)

## Status

### What's Done

- [x] feat-001 done: `bg-accent-surface` (#F7F7F7) on Nav pill, mobile menu, FeaturedProjects cards, Footer; no `bg-white` remains on raised surfaces
- [x] feat-002 done: GSAP-only audit; `motion-reduce:animate-none` on Nav mobile menu; motion invariant clarified in `AGENTS.md`
- [x] feat-003 done: About Me / Work Experience / Education tabs; default About Me is blank; Work Experience grouped from Figma `38:158`; Education is Mapúa MCL only; Lucide placeholder logos; waving-hand kept
- [x] Instrument Sans + Instrument Serif loaded in `app/layout.tsx`
- [x] Page background set to `#F6F4F2`
- [x] Role line uses Instrument Serif Italic
- [x] About waving-hand emoji confirmed intentional and kept
- [x] `./init.sh` passed after feat-001 + feat-002 + feat-003

### What's In Progress

- [ ] feat-004: Navbar update (not started)
  - Details: Projects, Certifications, Awards; remove Practicum
  - Blockers: route destinations for Certifications / Awards still open

### What's Next

1. Implement feat-004 (Navbar: Projects, Certifications, Awards; remove Practicum)
2. Keep `./init.sh` green per feature (feat-005)

## Blockers / Risks

- [ ] Featured project cards have no design yet (out of scope for feat-003; tracked separately)
- [ ] feat-004 will need route changes (Practicum removal; Certifications/Awards destinations)
- [ ] Real company / university marks still pending; Lucide placeholders ship until then
- [ ] About Me body is blank until a Figma frame exists

## Decisions Made

- **GSAP for motion**: entrance/scroll via `@/lib/animations/gsap`; hover/active via Tailwind transitions; wave/blink micro-loops with `motion-reduce` guards; no second JS animation library
- **Icons**: Lucide / shadcn only. Sole emoji exception: About waving hand
- **feat-003 rescoped**: About refactor instead of project cards
- **feat-004 rescoped**: Navbar update (Projects, Certifications, Awards; drop Practicum)
- **About Me**: default tab, blank until designed
- **Education**: Mapúa MCL only; ACM and JPCS dropped for now
- **Placeholder logos**: 50×50 Lucide `Building2` / `GraduationCap` until real marks land
- **Issue tracker**: GitHub Issues via `gh` (`docs/agents/issue-tracker.md`)

## Files Modified This Session

- `components/sections/About.tsx` - three tabs, grouped org layout, placeholder marks
- `lib/portfolio-data.ts` - Company / Institution groups matching the Figma frames
- `lib/portfolio-data.test.ts` - Work Experience and Education copy specs
- `CONTEXT.md` - About section language from the grilling session
- `feature_list.json` - feat-003 done
- `progress.md` - this log
- `session-handoff.md` - restart path

## Evidence of Completion

- [x] Tests pass: `./init.sh` (npm install, lint, test, build) green 2026-09-13 after feat-003
- [x] feat-001 evidence in `feature_list.json`
- [x] feat-002 evidence in `feature_list.json`
- [x] feat-003 evidence in `feature_list.json`

## Notes for Next Session

Start with feat-004. Design invariants live in `AGENTS.md`. Domain language lives in `CONTEXT.md`. Do not invent About Me copy. Swap placeholder logos when the real files arrive.
