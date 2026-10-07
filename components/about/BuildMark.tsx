"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { loopWhenVisible } from "@/components/sections/hero/loop";

/** Grip, in viewBox units. The hammer turns around this point. */
const GRIP = "168 88";
/** Feet. The body squashes toward the ground on the strike. */
const FEET = "90 144";
/** Midpoint of the two eyes. */
const EYES = "90 78";

export function BuildMark() {
  const ref = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = ref.current;
      if (!svg) return;

      return loopWhenVisible(svg, () => {
        const strike = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
        strike
          .to("[data-hammer]", {
            rotation: -36,
            svgOrigin: GRIP,
            duration: 0.42,
            ease: "power2.inOut",
          })
          .to("[data-hammer]", {
            rotation: 96,
            svgOrigin: GRIP,
            duration: 0.18,
            ease: "power3.in",
          })
          .to(
            "[data-eyes]",
            { scaleY: 0.2, svgOrigin: EYES, duration: 0.05, ease: "power1.in" },
            "<",
          )
          .to(
            "[data-body]",
            { scaleY: 0.94, svgOrigin: FEET, duration: 0.06, ease: "power1.out" },
            "<",
          )
          .to("[data-hammer]", {
            rotation: 86,
            svgOrigin: GRIP,
            duration: 0.08,
            ease: "power2.out",
          })
          .to("[data-eyes]", {
            scaleY: 1,
            svgOrigin: EYES,
            duration: 0.14,
            ease: "power2.out",
          })
          .to(
            "[data-body]",
            { scaleY: 1, svgOrigin: FEET, duration: 0.24, ease: "power2.out" },
            "<",
          )
          .to("[data-hammer]", {
            rotation: 0,
            svgOrigin: GRIP,
            duration: 0.5,
            ease: "power2.inOut",
          });
        strike.timeScale(0);
        gsap.to(strike, { timeScale: 1, duration: 0.6, ease: "power2.inOut" });
      });
    },
    { scope: ref },
  );

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox="0 0 260 164"
      className="mx-[0.12em] inline-block overflow-visible align-[-0.22em] text-spark"
      style={{ height: "1.15em", width: "auto" }}
    >
      <g data-body fill="currentColor">
        <rect x="29" y="44" width="121" height="76" />
        <rect x="7" y="76" width="22" height="24" />
        <rect x="150" y="76" width="24" height="24" />
        <rect x="40" y="120" width="11" height="24" />
        <rect x="62" y="120" width="11" height="24" />
        <rect x="107" y="120" width="11" height="24" />
        <rect x="129" y="120" width="11" height="24" />
      </g>
      <g data-eyes fill="var(--color-page-from)">
        <rect x="51" y="67" width="11" height="22" />
        <rect x="118" y="67" width="11" height="22" />
      </g>
      <g data-anvil fill="currentColor">
        <rect x="207" y="122" width="33" height="22" />
        <rect x="195" y="144" width="57" height="12" />
        <rect x="212" y="116" width="22" height="8" />
      </g>
      <g data-hammer fill="currentColor">
        <path d="M166 10L197 18L192 38L182 36L180 39L167 89L157 87L171 35L169 32L161 30L165 12L167 10Z" />
      </g>
    </svg>
  );
}
