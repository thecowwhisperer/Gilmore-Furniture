import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { verticals, getVerticalBySlug } from "@/content/verticals";
import VerticalContent from "./VerticalContent";

export function generateStaticParams() {
  return verticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical: slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) return {};

  return buildPageMetadata({
    title: vertical.metaTitle,
    description: vertical.metaDescription,
    path: `/solutions/${vertical.slug}`,
    image: `${vertical.heroImage.replace(/\.jpg$/, "-og.jpg")}`,
  });
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical: slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: vertical.title,
    description: vertical.description,
    provider: {
      "@type": "ManufacturingBusiness",
      name: "Gilmore Furniture Inc.",
      url: "https://gilmorefurnitureinc.com",
    },
    areaServed: "US",
    serviceType: "Contract Furniture Manufacturing",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <VerticalContent vertical={vertical} />
    </>
  );
}
