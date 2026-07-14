"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { experience, education, type ExperienceItem } from "@/lib/portfolio-data";

type Tab = "work" | "education";

function Timeline({ items }: { items: ExperienceItem[] }) {
  if (items.length === 0) {
    return <p className="text-center text-black/40">More coming soon.</p>;
  }
  return (
    <div className="flex flex-col gap-6 text-[clamp(0.95rem,1.6vw,24px)]">
      {items.map((item) => (
        <div
          key={item.role}
          className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(200px,270px)_1fr]"
        >
          <p className="text-black/50">{item.period}</p>
          <div>
            <p className="text-ink">{item.role}</p>
            <p className="text-black/50">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function About() {
  const [tab, setTab] = useState<Tab>("work");

  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
            <Image
              src="/figma/avatar.png"
              alt="Wince Larcen Rivano"
              width={150}
              height={150}
              className="size-[110px] shrink-0 rounded-full object-cover md:size-[150px]"
              priority
            />
            <div>
              <h2 className="text-[clamp(1.75rem,4.5vw,64px)] font-medium leading-tight">
                Hi, I&rsquo;m Wince Larcen M. Rivano!
              </h2>
              <p className="mt-1 text-[clamp(1.25rem,3vw,40px)] font-medium">
                I&rsquo;m an AI Engineer
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-14 md:mt-20" delay={0.05}>
          <div className="flex justify-center gap-10 text-[clamp(1.1rem,2.2vw,36px)] font-medium md:gap-16">
            <button
              type="button"
              onClick={() => setTab("work")}
              className={cn(
                "transition-colors",
                tab === "work" ? "text-ink" : "text-black/25 hover:text-black/50",
              )}
            >
              Work Experience
            </button>
            <button
              type="button"
              onClick={() => setTab("education")}
              className={cn(
                "transition-colors",
                tab === "education" ? "text-ink" : "text-black/25 hover:text-black/50",
              )}
            >
              Education
            </button>
          </div>

          <div className="mx-auto mt-10 max-w-[900px] md:mt-14">
            <Timeline items={tab === "work" ? experience : education} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
