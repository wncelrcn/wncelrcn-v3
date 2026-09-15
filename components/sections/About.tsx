"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { Typewriter } from "@/components/animations/Typewriter";
import { typewriterRoles } from "@/lib/about/content";
import { EducationPanel, WorkExperiencePanel } from "@/components/about/groups";

type Tab = "about" | "work" | "education";

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
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-10 items-center whitespace-nowrap transition-[color,scale] active:scale-[0.96]",
        active ? "text-ink" : "text-faint-ink hover:text-muted-ink",
      )}
    >
      {children}
    </button>
  );
}

export function About() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-8 sm:text-left">
        <ScrollReveal y={20}>
          <Image
            src="/figma/avatar.png"
            alt="Wince Larcen Rivano"
            width={150}
            height={150}
            className="size-[110px] shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/10 md:size-[150px]"
            priority
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1} y={20}>
          <div>
            <h2 className="text-title font-medium text-balance">
              Hi, I&rsquo;m Wince Larcen M. Rivano!{" "}
              <span
                role="img"
                aria-label="waving hand"
                className="animate-wave inline-block origin-[70%_80%] motion-reduce:animate-none"
              >
                👋
              </span>
            </h2>
            <p
              className="mt-1 font-serif text-subtitle italic"
              aria-label="I'm an AI Engineer, a Builder, a Problem Solver, a Creative Thinker, and a Lifelong Learner"
            >
              <span aria-hidden="true">
                I&rsquo;m <Typewriter words={typewriterRoles} />
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-14 md:mt-20" delay={0.2} y={20}>
        <div
          role="group"
          aria-label="About"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-tab font-medium sm:gap-x-10 md:gap-x-16"
        >
          <TabButton active={tab === "about"} onClick={() => setTab("about")}>
            About Me
          </TabButton>
          <TabButton active={tab === "work"} onClick={() => setTab("work")}>
            Work Experience
          </TabButton>
          <TabButton active={tab === "education"} onClick={() => setTab("education")}>
            Education
          </TabButton>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-10 max-w-[960px] md:mt-14">
        {tab === "work" && <WorkExperiencePanel />}
        {tab === "education" && <EducationPanel />}
      </div>
    </Section>
  );
}
