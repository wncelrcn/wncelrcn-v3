"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";
import { education, workExperience, type Company, type Institution } from "@/lib/about/content";

function GroupLogo({ src, rounded }: { src: string; rounded?: boolean }) {
  return (
    <Image
      src={src}
      alt=""
      width={50}
      height={50}
      className={cn("size-[50px] shrink-0 object-cover", rounded && "rounded-[10px]")}
    />
  );
}

function GroupShell({
  name,
  logo,
  rounded,
  children,
}: {
  name: string;
  logo: string;
  rounded?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[50px_minmax(0,1fr)] gap-x-6">
      <div className="relative">
        <GroupLogo src={logo} rounded={rounded} />
        <span
          aria-hidden
          className="absolute top-[50px] left-1/2 h-[32px] w-7 -translate-x-px rounded-bl-[10px] border-b border-l border-ink"
        />
      </div>
      <div>
        <p className="flex min-h-[50px] items-center font-medium text-ink">{name}</p>
        <div className="mt-4 flex flex-col gap-5">{children}</div>
      </div>
    </div>
  );
}

export function CompanyGroup({ company }: { company: Company }) {
  return (
    <GroupShell name={company.name} logo={company.logo} rounded={company.rounded}>
      {company.roles.map((role) => (
        <div key={role.id}>
          <p className="font-medium text-ink">{role.title}</p>
          <p className="mt-1 font-serif text-muted-ink italic">{role.meta}</p>
        </div>
      ))}
    </GroupShell>
  );
}

export function InstitutionGroup({ institution }: { institution: Institution }) {
  return (
    <GroupShell name={institution.name} logo={institution.logo}>
      {institution.programs.map((program) => (
        <div key={program.id}>
          <p className="font-medium text-ink">{program.title}</p>
          {program.details && (
            <ul className="mt-2 list-disc space-y-1 pl-5 font-serif text-muted-ink italic marker:text-muted-ink">
              {program.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </GroupShell>
  );
}

export function WorkExperiencePanel() {
  return (
    <div className="flex flex-col gap-10 text-entry">
      {workExperience.map((company, index) => (
        <Reveal key={company.id} delay={index * 0.1} y={16}>
          <CompanyGroup company={company} />
        </Reveal>
      ))}
    </div>
  );
}

export function EducationPanel() {
  return (
    <div className="flex flex-col gap-10 text-entry">
      {education.map((institution, index) => (
        <Reveal key={institution.id} delay={index * 0.1} y={16}>
          <InstitutionGroup institution={institution} />
        </Reveal>
      ))}
    </div>
  );
}
