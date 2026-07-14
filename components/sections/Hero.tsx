import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Doodle } from "@/components/sections/hero/Doodle";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-14 pb-16 md:pt-24 md:pb-28">
        <Reveal>
          <h1 className="text-display font-medium tracking-[-0.01em]">
            <span className="relative block whitespace-pre">
              {`I turn           great ideas`}
              <Doodle
                src="/figma/doodle-heart-pencil.svg"
                left={3.4}
                height={1.59}
                rotate={20.26}
                offsetY={-0.28}
              />
            </span>
            <span className="relative block whitespace-pre">
              {`into things          people`}
              <Doodle
                src="/figma/doodle-gears.svg"
                left={5.35}
                height={1.37}
                rotate={9.55}
                offsetY={0}
              />
            </span>
            <span className="block whitespace-pre">actually use.</span>
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}
