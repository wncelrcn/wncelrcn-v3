import type { ReactNode } from "react";

/**
 * A decorative hand-drawn doodle laid into the hero headline, matching the
 * Figma composition. Renders a fixed-width inline spacer (the gap between the
 * words) with the doodle absolutely centered on top — so the gap is
 * font-independent (identical in SF Pro, Inter, or any fallback). All sizes are
 * in `em` so the whole composition scales as one unit with the headline.
 * The art (children) must be sized at `height: 1em`.
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
