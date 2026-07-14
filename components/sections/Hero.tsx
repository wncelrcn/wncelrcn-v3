import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

export function Hero() {
  return (
    <section className="relative">
      <Container className="pt-[90px] pb-24 md:pt-[150px] md:pb-40">
        <Reveal>
          <h1 className="max-w-[1180px] text-[clamp(2.5rem,9vw,128px)] font-medium leading-[1.03] tracking-tight">
            I turn{" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figma/doodle-heart-pencil.svg"
              alt=""
              aria-hidden="true"
              className="mx-[0.08em] inline-block h-[1.35em] w-auto translate-y-[0.12em] rotate-[20deg] align-middle select-none"
            />{" "}
            great ideas into things{" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figma/doodle-gears.svg"
              alt=""
              aria-hidden="true"
              className="mx-[0.08em] inline-block h-[1.1em] w-auto translate-y-[0.1em] rotate-[10deg] align-middle select-none"
            />{" "}
            people actually use.
          </h1>
        </Reveal>
      </Container>
    </section>
  );
}
