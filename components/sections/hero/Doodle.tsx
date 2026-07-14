import { cn } from "@/lib/utils";

/**
 * A decorative hand-drawn doodle woven into the hero headline.
 * Rendered as a plain <img> (not next/image) because it's sized in `em`
 * relative to the surrounding text and rotated inline.
 */
export function Doodle({ src, className }: { src: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={cn(
        "mx-[0.08em] inline-block w-auto align-middle select-none",
        className,
      )}
    />
  );
}
