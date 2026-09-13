import type { ReactNode } from "react";
import { Building2, GraduationCap } from "lucide-react";
import { education, workExperience, type Company, type Institution } from "@/lib/about/content";

type PlaceholderLogoKind = "company" | "institution";

function PlaceholderLogo({ kind }: { kind: PlaceholderLogoKind }) {
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

function GroupShell({
  kind,
  name,
  children,
}: {
  kind: PlaceholderLogoKind;
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[50px_minmax(0,1fr)] gap-x-6">
      <div className="relative">
        <PlaceholderLogo kind={kind} />
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
    <GroupShell kind="company" name={company.name}>
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
    <GroupShell kind="institution" name={institution.name}>
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
    <div className="flex flex-col gap-10 text-lead">
      {workExperience.map((company) => (
        <CompanyGroup key={company.id} company={company} />
      ))}
    </div>
  );
}

export function EducationPanel() {
  return (
    <div className="flex flex-col gap-10 text-lead">
      {education.map((institution) => (
        <InstitutionGroup key={institution.id} institution={institution} />
      ))}
    </div>
  );
}
