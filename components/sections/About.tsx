"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Building2, GraduationCap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { Typewriter } from "@/components/animations/Typewriter";
import {
  experience,
  education,
  roles,
  type OrgGroup,
  type OrgKind,
} from "@/lib/portfolio-data";

type Tab = "about" | "work" | "education";

function OrgMark({ kind }: { kind: OrgKind }) {
  const Icon = kind === "institution" ? GraduationCap : Building2;
  return (
    <div
      className="flex size-[50px] shrink-0 items-center justify-center rounded-[10px] bg-accent-surface text-muted-ink"
      aria-hidden
    >
      <Icon className="size-6" strokeWidth={1.5} />
    </div>
  );
}

function OrgGroupBlock({ org }: { org: OrgGroup }) {
  return (
    <div className="grid grid-cols-[50px_minmax(0,1fr)] gap-x-6">
      <div className="relative">
        <OrgMark kind={org.kind} />
        <span
          aria-hidden
          className="absolute top-[50px] left-1/2 h-[32px] w-7 -translate-x-px rounded-bl-[10px] border-b border-l border-ink"
        />
      </div>
      <div>
        <p className="flex min-h-[50px] items-center font-medium text-ink">{org.name}</p>
        <div className="mt-4 flex flex-col gap-5">
          {org.entries.map((entry) => (
            <div key={entry.id}>
              <p className="font-medium text-ink">{entry.title}</p>
              {entry.meta && (
                <p className="mt-1 font-serif text-muted-ink italic">{entry.meta}</p>
              )}
              {entry.details && (
                <ul className="mt-2 list-disc space-y-1 pl-5 font-serif text-muted-ink italic marker:text-muted-ink">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrgList({ items }: { items: OrgGroup[] }) {
  return (
    <div className="flex flex-col gap-10 text-lead">
      {items.map((org) => (
        <OrgGroupBlock key={org.id} org={org} />
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
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "whitespace-nowrap transition-[color,scale] active:scale-[0.96]",
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
                I&rsquo;m <Typewriter words={roles} />
              </span>
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mt-14 md:mt-20" delay={0.05}>
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

        <div className="mx-auto mt-10 max-w-[960px] md:mt-14">
          {tab === "work" && <OrgList items={experience} />}
          {tab === "education" && <OrgList items={education} />}
        </div>
      </ScrollReveal>
    </Section>
  );
}
