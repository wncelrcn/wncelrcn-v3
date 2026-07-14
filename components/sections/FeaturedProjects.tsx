import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

function Card({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-[240px] rounded-[30px] bg-white shadow-card transition-transform duration-300 hover:-translate-y-1 md:h-[335px]",
        className,
      )}
    />
  );
}

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <ScrollReveal>
        <div className="relative flex flex-col items-center gap-3 md:block md:text-center">
          <h2 className="text-center text-title font-medium text-balance">Featured Projects</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-lead text-muted-ink underline decoration-solid underline-offset-4 transition-[color,scale] hover:text-ink active:scale-[0.96] md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2"
          >
            See all Projects
            <ArrowUpRight className="size-[1.1em]" aria-hidden="true" />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-10 flex flex-col gap-[15px] md:mt-14">
        <div className="grid grid-cols-1 gap-[15px] md:grid-cols-[700fr_455fr]">
          <Card />
          <Card />
        </div>
        <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 md:grid-cols-[390fr_360fr_390fr]">
          <Card />
          <Card />
          <Card />
        </div>
      </ScrollReveal>
    </Section>
  );
}
