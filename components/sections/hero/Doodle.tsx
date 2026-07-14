/**
 * A decorative hand-drawn doodle laid over the hero headline, matching the
 * Figma composition. Positioned absolutely inside its line so it locks to that
 * line vertically; `left`, `height`, and `offsetY` are in `em` (relative to the
 * headline font size) so the whole composition scales as one unit.
 */
export function Doodle({
  src,
  left,
  height,
  rotate,
  offsetY = 0,
}: {
  src: string;
  /** Horizontal center of the doodle, in em from the line's start. */
  left: number;
  /** Rendered art height, in em. */
  height: number;
  /** Rotation in degrees. */
  rotate: number;
  /** Vertical nudge from the line's optical center, in em. */
  offsetY?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 max-w-none select-none"
      style={{
        left: `${left}em`,
        height: `${height}em`,
        width: "auto",
        transform: `translate(-50%, calc(-50% + ${offsetY}em)) rotate(${rotate}deg)`,
      }}
    />
  );
}
