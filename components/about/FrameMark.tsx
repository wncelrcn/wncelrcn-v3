export function FrameMark({
  frames,
  viewBox,
  motionClass,
}: {
  frames: readonly string[];
  viewBox: string;
  motionClass: "mark-spark";
}) {
  return (
    <svg
      aria-hidden
      viewBox={viewBox}
      className="mx-[0.12em] inline-block overflow-visible align-[-0.2em] text-spark"
      style={{ height: "1.15em", width: "auto" }}
    >
      {frames.map((d, index) => (
        <path
          key={index}
          d={d}
          fill="currentColor"
          className={`mark-frame ${motionClass}`}
          style={{ ["--i" as string]: index }}
        />
      ))}
    </svg>
  );
}
