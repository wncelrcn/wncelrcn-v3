/**
 * Returns true when the user has requested reduced motion.
 * Injectable `matchMedia` keeps this pure and testable; defaults to the
 * browser's window.matchMedia and safely returns false during SSR.
 */
export function prefersReducedMotion(
  matchMedia: typeof window.matchMedia | undefined = typeof window !== "undefined"
    ? window.matchMedia
    : undefined,
): boolean {
  if (!matchMedia) return false;
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}
