import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { getSiteRoute, siteRoutes } from "@/lib/site-routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteRoutes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getSiteRoute(slug);
  if (!route) return {};

  return {
    title: `${route.title} — Wince Larcen Rivano`,
    description: route.metaDescription,
  };
}

export default async function SiteRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = getSiteRoute(slug);
  if (!route) notFound();

  return <PagePlaceholder title={route.title} description={route.description} />;
}
