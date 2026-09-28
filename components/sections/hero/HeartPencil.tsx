"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { loopWhenVisible } from "@/components/sections/hero/loop";

/** `delay`: seconds before the pencil lifts to start the first stroke. */
export function HeartPencil({ delay = 0 }: { delay?: number }) {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = ref.current;
      if (!svg) return;

      return loopWhenVisible(svg, () => {
        const strokes = gsap.utils.toArray<SVGPathElement>("[data-stroke]", svg);
        const pencil = svg.querySelector("[data-pencil]");
        if (strokes.length !== 2 || !pencil) return;

        const lengths = strokes.map((p) => p.getTotalLength() + 1);
        // The Figma pose has the pencil tip resting where the last stroke ends.
        const rest = strokes[1].getPointAtLength(lengths[1] - 1);
        const tipAt = (path: SVGPathElement, at: number) => {
          const pt = path.getPointAtLength(at);
          return { x: pt.x - rest.x, y: pt.y - rest.y };
        };

        gsap.set(strokes, {
          strokeDasharray: (i) => lengths[i],
          strokeDashoffset: (i) => lengths[i],
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3, delay });
        strokes.forEach((path, i) => {
          tl.to(pencil, { ...tipAt(path, 0), duration: i === 0 ? 0.4 : 0.2, ease: "power2.inOut" });
          tl.to(path, {
            strokeDashoffset: 0,
            duration: i === 0 ? 1.1 : 1.3,
            ease: "sine.inOut",
            onUpdate(this: gsap.core.Tween) {
              gsap.set(pencil, tipAt(path, lengths[i] * this.ratio));
            },
          });
        });
        tl.to(strokes, { opacity: 0, duration: 0.45, ease: "power1.in" }, "+=2.2");
      });
    },
    { scope: ref },
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 253.115 207.716"
      fill="none"
      overflow="visible"
      className="block"
      style={{ height: "1em", width: "1.2186em" }}
    >
      <g stroke="currentColor" strokeWidth={4} strokeLinecap="round">
        <path
          data-stroke
          d="M105.707 175.103C108.282 141.407 104.162 75.8825 67.0819 83.3525C30.0019 90.8225 28.4569 133.017 32.3194 153.181C35.7527 164.954 55.4086 159.514 39.6152 121.514"
        />
        <path
          data-stroke
          d="M26.7404 117.455C16.2973 117.184 -8.0913 127.44 6.56951 162.112C25.4528 206.77 122.445 232.346 150.77 162.112"
        />
        <g data-pencil>
          <path
            d="M176.09 140.595C168.794 132.476 160.64 140.595 152.915 132.476V152.954C154.288 156.201 157.514 152.954 159.352 151.557L176.09 140.595Z"
            fill="currentColor"
            stroke="none"
          />
          <path d="M191.969 129.634L160.714 150.753C157.394 152.996 152.915 150.617 152.915 146.61V107.711" />
          <path d="M170.511 98.374L198.407 45.1911" />
          <path d="M212.999 46.0031L181.241 107.306" />
          <path d="M223.299 58.1822L195.832 110.553" />
          <path d="M187.679 40.3192L154.803 103.699C154.405 104.466 155.11 105.375 155.966 105.261C161.204 104.559 168.746 105.604 169.932 113.679C170.044 114.445 170.913 114.913 171.602 114.562C176.194 112.223 182.975 111.077 183.402 120.114C183.443 120.974 184.466 121.511 185.196 121.054C188.931 118.718 194.01 117.261 195.449 122.856C195.713 123.885 197.355 124.266 197.845 123.323L231.454 58.5882" />
          <path
            d="M227.162 2.56352C212.742 0.290049 205.989 5.40535 204.416 8.24718L196.235 23.3562C195.867 24.036 196.368 24.8637 197.141 24.8659C208.999 24.9 231.263 29.0453 239.119 43.3248C239.523 44.0592 240.616 44.0943 241.008 43.3533L242.612 40.3193L251.003 24.0468C251.126 23.8085 251.151 23.5352 251.062 23.2823C248.87 17.0543 241.279 4.78928 227.162 2.56352Z"
            fill="currentColor"
          />
          <path d="M239.608 45.5971L233.636 56.2311C233.181 57.0406 231.858 56.877 231.495 56.0226C228.312 48.5366 216.946 37.0332 191.446 36.2919C190.705 36.2703 190.217 35.4856 190.553 34.8247L194.974 26.1102" />
          <path d="M197.548 31.3883C203.414 30.5764 218.492 32.038 231.882 44.3795" />
        </g>
      </g>
    </svg>
  );
}
