/**
 * A decorative hand-drawn doodle laid into the hero headline, matching the
 * Figma composition. Renders a fixed-width inline spacer (the gap between the
 * words) with the doodle absolutely centered on top — so the gap is
 * font-independent (identical in SF Pro, Inter, or any fallback). All sizes are
 * in `em` so the whole composition scales as one unit with the headline.
 */
export function Doodle({
  src,
  width,
  height,
  rotate,
  offsetY = 0,
}: {
  src: string;
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
      className="relative inline-block align-middle"
      style={{ width: `${width}em`, height: "1em" }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 max-w-none select-none"
        style={{
          height: `${height}em`,
          width: "auto",
          transform: `translate(-50%, calc(-50% + ${offsetY}em)) rotate(${rotate}deg)`,
        }}
      />
    </span>
  );
}
