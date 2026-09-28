"use client";

import { gsap } from "@/lib/animations/gsap";

/**
 * Runs `build` only while motion is allowed and `el` is actually rendered.
 * The hero renders a mobile and a desktop lockup; the breakpoint condition
 * re-runs this when the viewport crosses md so the visible copy animates.
 */
export function loopWhenVisible(el: Element, build: () => void) {
  const mm = gsap.matchMedia();
  mm.add(
    {
      motion: "(prefers-reduced-motion: no-preference)",
      desktop: "(min-width: 768px)",
      mobile: "(max-width: 767px)",
    },
    (ctx) => {
      if (!ctx.conditions?.motion || el.getClientRects().length === 0) return;
      build();
    },
  );
  return () => mm.revert();
}
