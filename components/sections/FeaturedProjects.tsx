import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

function Card({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-[240px] rounded-[30px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 md:h-[335px]",
        className,
      )}
    />
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="relative flex flex-col items-center gap-3 md:block md:text-center">
            <h2 className="text-center text-[clamp(1.75rem,4.5vw,64px)] font-medium">
              Featured Projects
            </h2>
            <Link
              href="#projects"
              className="inline-flex items-center gap-1 text-[clamp(1rem,1.6vw,24px)] text-black/50 underline decoration-solid underline-offset-4 transition-colors hover:text-black/70 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2"
            >
              See all Projects
              <ArrowUpRight className="size-[1.1em]" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-[15px] md:mt-14">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-[15px] md:grid-cols-[700fr_455fr]">
              <Card />
              <Card />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 md:grid-cols-[390fr_360fr_390fr]">
              <Card />
              <Card />
              <Card />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
