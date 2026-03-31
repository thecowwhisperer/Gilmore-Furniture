import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { componentsCatalog, getComponentBySlug } from "@/content/componentsCatalog";
import ComponentDetailContent from "./ComponentDetailContent";

export function generateStaticParams() {
  return componentsCatalog.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponentBySlug(slug);
  if (!component) return {};

  return buildPageMetadata({
    title: component.page.metaTitle,
    description: component.page.metaDescription,
    path: `/components/${component.slug}`,
  });
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);
  if (!component) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: component.page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: component.title,
    description: component.description,
    manufacturer: {
      "@type": "ManufacturingBusiness",
      name: "Gilmore Furniture Inc.",
      url: "https://gilmorefurnitureinc.com",
    },
    category: "Furniture Components",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqJsonLd, productJsonLd]),
        }}
      />
      <ComponentDetailContent component={component} />
    </>
  );
}
