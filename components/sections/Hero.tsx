import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Doodle } from "@/components/sections/hero/Doodle";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-14 pb-16 md:pt-24 md:pb-24">
        <Reveal>
          <h1 className="max-w-[1180px] text-display font-medium tracking-tight text-balance">
            I turn{" "}
            <Doodle
              src="/figma/doodle-heart-pencil.svg"
              className="h-[1.35em] translate-y-[0.12em] rotate-[20deg]"
            />{" "}
            great ideas into things{" "}
            <Doodle
              src="/figma/doodle-gears.svg"
              className="h-[1.1em] translate-y-[0.1em] rotate-[10deg]"
            />{" "}
            people actually use.
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}
