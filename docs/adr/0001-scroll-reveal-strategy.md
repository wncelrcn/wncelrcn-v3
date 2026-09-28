# Scroll reveal uses IntersectionObserver, not ScrollTrigger

Scroll-triggered entrance motion uses a native `IntersectionObserver`, not GSAP ScrollTrigger. ScrollTrigger is not registered.

We chose IntersectionObserver because it fires immediately for elements already in the viewport on load. ScrollTrigger can leave above-the-fold content stuck at `opacity: 0` until the user scrolls. For a portfolio where key sections are visible on first paint, that is unacceptable.

The one-shot observer (threshold 0.15, root margin that cuts 8% off the bottom) lives in `lib/animations/when-visible.ts` (`observeOnce`). `ScrollReveal` is the adapter for a single fade/rise. A sequenced entrance, such as the About Me timeline, calls `observeOnce` and keeps its own GSAP timeline. That timeline is not a second observer contract.

Mount-triggered motion stays in `Reveal`. Both wrappers honor `prefers-reduced-motion` via `@/lib/animations/prefers-reduced-motion`.
