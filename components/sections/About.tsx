"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { experience, education, type ExperienceItem } from "@/lib/portfolio-data";

type Tab = "work" | "education";

function Timeline({ items }: { items: ExperienceItem[] }) {
  if (items.length === 0) {
    return <p className="text-center text-muted-ink">More coming soon.</p>;
  }
  return (
    <div className="flex flex-col gap-6 text-lead">
      {items.map((item) => (
        <div
          key={item.role}
          className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(200px,270px)_1fr]"
        >
          <p className="text-muted-ink">{item.period}</p>
          <div>
            <p className="text-ink">{item.role}</p>
            <p className="text-muted-ink">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "transition-[color,scale] active:scale-[0.96]",
        active ? "text-ink" : "text-faint-ink hover:text-muted-ink",
      )}
    >
      {children}
    </button>
  );
}

export function About() {
  const [tab, setTab] = useState<Tab>("work");

  return (
    <Section id="about">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-8 sm:text-left">
          <Image
            src="/figma/avatar.png"
            alt="Wince Larcen Rivano"
            width={150}
            height={150}
            className="size-[110px] shrink-0 rounded-full object-cover ring-1 ring-black/10 md:size-[150px]"
            priority
          />
          <div>
            <h2 className="text-title font-medium text-balance">
              Hi, I&rsquo;m Wince Larcen M. Rivano!
            </h2>
            <p className="mt-1 text-subtitle font-medium">I&rsquo;m an AI Engineer</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-14 md:mt-20" delay={0.05}>
        <div className="flex justify-center gap-10 text-tab font-medium md:gap-16">
          <TabButton active={tab === "work"} onClick={() => setTab("work")}>
            Work Experience
          </TabButton>
          <TabButton active={tab === "education"} onClick={() => setTab("education")}>
            Education
          </TabButton>
        </div>

        <div className="mx-auto mt-10 max-w-[900px] md:mt-14">
          <Timeline items={tab === "work" ? experience : education} />
        </div>
      </ScrollReveal>
    </Section>
  );
}
