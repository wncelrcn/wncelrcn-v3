# Scroll reveal uses IntersectionObserver, not ScrollTrigger

Scroll-triggered entrance motion lives in `ScrollReveal`, which pairs a native `IntersectionObserver` with GSAP for the fade/rise animation. GSAP ScrollTrigger is not registered.

We chose IntersectionObserver because it fires immediately for elements already in the viewport on load. ScrollTrigger can leave above-the-fold content stuck at `opacity: 0` until the user scrolls. For a portfolio where key sections are visible on first paint, that is unacceptable.

Mount-triggered motion stays in `Reveal`. Both wrappers honor `prefers-reduced-motion` via `@/lib/animations/prefers-reduced-motion`.
