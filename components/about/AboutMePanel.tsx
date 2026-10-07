"use client";

import { Fragment, useRef, type ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { observeOnce } from "@/lib/animations/when-visible";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";
import { cn } from "@/lib/utils";
import { BuildMark } from "@/components/about/BuildMark";
import { ThinkingSpark } from "@/components/about/ThinkingSpark";
import {
  aboutMe,
  companyById,
  type AboutRun,
  type Company,
} from "@/lib/about/content";

function Em({
  children,
  flow,
  wave,
}: {
  children: ReactNode;
  flow?: true;
  wave?: true;
}) {
  return (
    <em
      className={cn(
        "font-serif italic",
        flow && "animate-stream text-stream motion-reduce:animate-none",
        wave && "animate-rgb text-rgb motion-reduce:animate-none",
      )}
    >
      {children}
    </em>
  );
}

/** Inline logo + underlined name. With a Company site it opens in a new tab; without, hover only. */
function CompanyMention({ company }: { company: Company }) {
  const logo = (
    <Image
      src={company.logo}
      alt=""
      width={50}
      height={50}
      data-about-logo
      className={cn(
        "mr-[0.3em] ml-[0.1em] inline-block size-[1.25em] align-[-0.3em]",
        company.contain ? "object-contain" : "object-cover",
        company.rounded && "rounded-[0.2em]",
      )}
    />
  );

  const label = (
    <span className="relative inline-block font-medium">
      {company.name}
      <span
        aria-hidden
        data-about-underline
        className="absolute inset-x-0 bottom-[0.02em] h-[0.06em] origin-left bg-ink"
      />
    </span>
  );

  const className =
    "group inline-block whitespace-nowrap transition-opacity hover:opacity-60 active:scale-[0.98]";

  if (company.href) {
    return (
      <a href={company.href} target="_blank" rel="noopener noreferrer" className={className}>
        {logo}
        {label}
        <ArrowUpRight
          aria-hidden
          strokeWidth={2.5}
          className="ml-[0.08em] inline-block size-[0.7em] -translate-y-[0.3em] transition-transform duration-200 ease-out group-hover:translate-x-[0.08em] group-hover:-translate-y-[0.38em] motion-reduce:transition-none"
        />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <span className={className}>
      {logo}
      {label}
    </span>
  );
}

function Runs({ runs }: { runs: AboutRun[] }) {
  return runs.map((run, index) => {
    switch (run.kind) {
      case "text":
        return <Fragment key={index}>{run.text}</Fragment>;
      case "em":
        return (
          <Em key={index} flow={run.flow} wave={run.wave}>
            {run.text}
          </Em>
        );
      case "spark":
        return <ThinkingSpark key={index} />;
      case "build":
        return <BuildMark key={index} />;
      case "company":
        return <CompanyMention key={run.id} company={companyById(run.id)} />;
      default: {
        const exhaustive: never = run;
        return exhaustive;
      }
    }
  });
}

export function AboutMePanel() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const lines = el.querySelectorAll("[data-about-line]");
      const logos = el.querySelectorAll("[data-about-logo]");
      const underlines = el.querySelectorAll("[data-about-underline]");

      if (prefersReducedMotion()) {
        gsap.set(lines, { opacity: 1, y: 0 });
        gsap.set(logos, { opacity: 1, scale: 1, rotation: 0 });
        gsap.set(underlines, { scaleX: 1 });
        return;
      }

      gsap.set(lines, { opacity: 0, y: 16 });
      gsap.set(logos, { opacity: 0, scale: 0.6, rotation: -12 });
      gsap.set(underlines, { scaleX: 0 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      tl.to(lines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 })
        .to(
          logos,
          { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)", stagger: 0.12 },
          0.45,
        )
        .to(underlines, { scaleX: 1, duration: 0.5, ease: "power2.inOut", stagger: 0.12 }, 0.6);

      return observeOnce(el, () => tl.play());
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="flex flex-col gap-[1.2em] text-prose text-ink">
      {aboutMe.map((runs, index) => (
        <p key={index} data-about-line>
          <Runs runs={runs} />
        </p>
      ))}
    </div>
  );
}
