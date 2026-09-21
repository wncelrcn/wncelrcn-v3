export interface Certification {
  id: string;
  title: string;
  issuer: string;
  href: string;
  cta?: string;
  logoSrc?: string;
}

export const VIEW_CERTIFICATION_LABEL = "View Certification";

export function certificationCta(certification: Certification): string {
  return certification.cta ?? VIEW_CERTIFICATION_LABEL;
}

/** Dummy credential URL until a real Certification link replaces it on the record. */
const PLACEHOLDER_HREF = "https://example.com/certification";

const PLACEHOLDER_TITLE = "Exploratory Data Analysis for Machine Learning";

function cert(id: string, issuer: string): Certification {
  return {
    id,
    title: PLACEHOLDER_TITLE,
    issuer,
    href: PLACEHOLDER_HREF,
  };
}

/** Twelve dummy cards matching Figma Desktop-6. Fill real fields on each record later. */
export const certifications: Certification[] = [
  cert("cert-1", "IBM"),
  cert("cert-2", "IBM"),
  cert("cert-3", "IBM"),
  cert("cert-4", "Databricks"),
  cert("cert-5", "Databricks"),
  cert("cert-6", "Databricks"),
  cert("cert-7", "IBM"),
  cert("cert-8", "IBM"),
  cert("cert-9", "IBM"),
  cert("cert-10", "Databricks"),
  cert("cert-11", "Databricks"),
  cert("cert-12", "Databricks"),
];
