"use client";

import { Fragment, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";
import { Doodle } from "@/components/sections/hero/Doodle";
import { Gears } from "@/components/sections/hero/Gears";
import { HeartPencil } from "@/components/sections/hero/HeartPencil";
import {
  desktopLines,
  doodleDelay,
  doodleFrames,
  HERO_STAGGER,
  HERO_START,
  heroTokens,
  type HeroToken,
} from "@/components/sections/hero/lockup";

function isWord(token: HeroToken | undefined) {
  return token !== undefined && token !== "heart" && token !== "gears";
}

function HeroTokens({
  tokens,
  frames,
}: {
  tokens: readonly HeroToken[];
  frames: (typeof doodleFrames)[keyof typeof doodleFrames];
}) {
  return tokens.map((token, i) => {
    if (token === "heart" || token === "gears") {
      const Art = token === "heart" ? HeartPencil : Gears;
      return (
        <Doodle key={token} {...frames[token]}>
          <Art delay={doodleDelay(token)} />
        </Doodle>
      );
    }

    return (
      <Fragment key={`${token}-${i}`}>
        {isWord(tokens[i - 1]) ? " " : null}
        <span data-hero-word className="inline-block">{token}</span>
      </Fragment>
    );
  });
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const lockup = gsap.utils
        .toArray<HTMLElement>("[data-hero]", ref.current)
        .find((el) => getComputedStyle(el).display !== "none");
      if (!lockup) return;

      gsap.from(gsap.utils.toArray<HTMLElement>("[data-hero-word]", lockup), {
        opacity: 0,
        yPercent: 40,
        duration: 0.9,
        delay: HERO_START,
        stagger: HERO_STAGGER,
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
          <h1
            data-hero
            className="text-[clamp(2.5rem,12vw,3.75rem)] leading-[1.15] font-medium tracking-[-0.01em] md:hidden"
          >
            <HeroTokens tokens={heroTokens} frames={doodleFrames.mobile} />
          </h1>

          <h1
            data-hero
            className="mx-auto hidden w-fit text-display font-medium tracking-[-0.01em] md:block"
          >
            {desktopLines.map((line) => (
              <span key={line[0]} className="block whitespace-nowrap">
                <HeroTokens tokens={line} frames={doodleFrames.desktop} />
              </span>
            ))}
          </h1>
        </div>
      </Container>
    </section>
  );
}
