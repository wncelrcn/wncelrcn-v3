import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certificationCta, type Certification } from "@/lib/certifications";

function IssuerMark({ certification }: { certification: Certification }) {
  if (certification.logoSrc) {
    return (
      <Image
        src={certification.logoSrc}
        alt=""
        width={84}
        height={44}
        className="h-11 w-auto max-w-[84px] object-contain outline outline-1 -outline-offset-1 outline-black/10"
      />
    );
  }

  return <BadgeCheck className="size-7 text-ink" strokeWidth={1.5} aria-hidden />;
}

export function CertificationCard({ certification }: { certification: Certification }) {
  const cta = certificationCta(certification);

  return (
    <article className="flex h-full min-h-[252px] flex-col rounded-[20px] bg-accent-surface px-8 pt-8 pb-6 shadow-card">
      <div className="flex h-11 items-center justify-center self-center" aria-hidden>
        <IssuerMark certification={certification} />
      </div>
      <span className="sr-only">{certification.issuer}</span>

      <h2 className="mt-3 text-center text-2xl leading-snug font-semibold text-balance">
        {certification.title}
      </h2>

      <div className="min-h-8 flex-1" aria-hidden />

      <a
        href={certification.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${cta} for ${certification.title} from ${certification.issuer}`}
        className="inline-flex min-h-10 w-fit items-center gap-2 self-end transition-[opacity,transform] duration-150 ease-out hover:opacity-70 active:scale-[0.96]"
      >
        <span className="font-serif text-base leading-[1.2] italic underline decoration-solid underline-offset-2">
          {cta}
        </span>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-accent-surface">
          <ArrowUpRight className="size-7 translate-x-px -translate-y-px" strokeWidth={2} aria-hidden />
        </span>
      </a>
    </article>
  );
}
