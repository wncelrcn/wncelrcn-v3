import type { ReactNode } from "react";

/**
 * Fixed-width spacer for a hero doodle. Sizes are in em so the gap stays
 * font-independent and scales with the headline. Children render at 1em.
 */
export function Doodle({
  children,
  width,
  height,
  rotate,
  offsetY = 0,
}: {
  children: ReactNode;
  /** Width of the gap the doodle sits in, in em. */
  width: number;
  /** Rendered art height, in em. */
  height: number;
  /** Rotation in degrees. */
  rotate: number;
  /** Vertical nudge from the line's optical center, in em. */
  offsetY?: number;
}) {
  return (
    <span
      data-hero-word
      className="relative inline-block align-middle"
      style={{ width: `${width}em`, height: "1em" }}
      aria-hidden="true"
    >
      <span
        className="pointer-events-none absolute top-1/2 left-1/2 select-none"
        style={{
          fontSize: `${height}em`,
          transform: `translate(-50%, calc(-50% + ${offsetY / height}em)) rotate(${rotate}deg)`,
        }}
      >
        {children}
      </span>
    </span>
  );
}
