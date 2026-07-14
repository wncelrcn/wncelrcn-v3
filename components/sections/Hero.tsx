import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Doodle } from "@/components/sections/hero/Doodle";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-14 pb-16 md:pt-24 md:pb-28">
        <Reveal>
          <h1 className="text-display font-medium tracking-[-0.01em]">
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
