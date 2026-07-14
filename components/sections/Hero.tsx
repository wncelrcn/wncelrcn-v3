import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Doodle } from "@/components/sections/hero/Doodle";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-14 pb-16 md:pt-24 md:pb-28">
        <Reveal>
          {/* Mobile: doodles as an accent above a naturally-wrapping headline */}
          <div className="md:hidden">
            <div className="mb-5 flex items-end gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figma/doodle-heart-pencil.svg"
                alt=""
                aria-hidden="true"
                className="h-14 w-auto -rotate-6 select-none"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figma/doodle-gears.svg"
                alt=""
                aria-hidden="true"
                className="h-12 w-auto rotate-6 select-none"
              />
            </div>
            <h1 className="text-[clamp(2.5rem,12vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.01em] text-balance">
              I turn great ideas into things people actually use.
            </h1>
          </div>

          {/* Desktop (md+): exact Figma 3-line lockup with inline doodles */}
          <h1 className="mx-auto hidden w-fit text-display font-medium tracking-[-0.01em] md:block">
            <span className="block whitespace-nowrap">
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
            <span className="block whitespace-nowrap">
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
            <span className="block whitespace-nowrap">actually use.</span>
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}
