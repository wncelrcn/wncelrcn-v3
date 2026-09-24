"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";
import { Doodle } from "@/components/sections/hero/Doodle";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const lockup = gsap.utils
        .toArray<HTMLElement>("[data-hero]", ref.current)
        .find((el) => getComputedStyle(el).display !== "none");
      if (!lockup) return;

      const lines = gsap.utils.toArray<HTMLElement>("[data-hero-line]", lockup);
      const rises = lines.length > 0 && lines.every((el) => getComputedStyle(el).display === "block");
      gsap.from(lines.length ? lines : lockup, {
        opacity: 0,
        ...(rises ? { y: 18 } : {}),
        duration: 1.6,
        stagger: 0.32,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });
    },
    { scope: ref },
  );

  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] items-center md:min-h-[calc(100dvh-5.5rem)]">
      <Container className="w-full py-16 md:py-24">
        <div ref={ref}>
          {/* Mobile: inline doodles that flow with a naturally-wrapping headline */}
          <h1
            data-hero
            className="text-[clamp(2.5rem,12vw,3.75rem)] leading-[1.15] font-medium tracking-[-0.01em] md:hidden"
          >
            <span data-hero-line>
              {"I turn"}
              <Doodle
                src="/figma/doodle-heart-pencil.svg"
                width={2.2}
                height={1.45}
                rotate={20.26}
                offsetY={-0.16}
              />
            </span>
            <span data-hero-line>
              {"great ideas into things"}
              <Doodle
                src="/figma/doodle-gears.svg"
                width={1.9}
                height={1.3}
                rotate={9.55}
                offsetY={0.05}
              />
            </span>
            <span data-hero-line>{"people actually use."}</span>
          </h1>

          {/* Desktop (md+): exact Figma 3-line lockup with inline doodles */}
          <h1
            data-hero
            className="mx-auto hidden w-fit text-display font-medium tracking-[-0.01em] md:block"
          >
            <span data-hero-line className="block whitespace-nowrap">
              {"I turn"}
              <Doodle
                src="/figma/doodle-heart-pencil.svg"
                width={2.5}
                height={1.6}
                rotate={20.26}
                offsetY={-0.28}
              />
              {"great ideas"}
            </span>
            <span data-hero-line className="block whitespace-nowrap">
              {"into things"}
              <Doodle
                src="/figma/doodle-gears.svg"
                width={2}
                height={1.38}
                rotate={9.55}
                offsetY={0.05}
              />
              {"people"}
            </span>
            <span data-hero-line className="block whitespace-nowrap">
              actually use.
            </span>
          </h1>
        </div>
      </Container>
    </section>
  );
}
