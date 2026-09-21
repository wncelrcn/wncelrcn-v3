import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { certifications } from "@/lib/certifications";

export function CertificationsIndex() {
  return (
    <>
      <ScrollReveal>
        <h1 className="text-center text-[clamp(2.5rem,6vw,64px)] font-medium text-balance">
          Certifications
        </h1>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
        {certifications.map((certification, index) => (
          <ScrollReveal key={certification.id} className="h-full" delay={(index % 3) * 0.1} y={20}>
            <CertificationCard certification={certification} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
