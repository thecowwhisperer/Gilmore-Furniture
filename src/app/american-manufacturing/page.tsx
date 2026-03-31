import { buildPageMetadata } from "@/lib/metadata";
import AmericanManufacturingContent from "./AmericanManufacturingContent";

export const metadata = buildPageMetadata({
  title: "American Manufacturing — Built Here, Built Right",
  description:
    "Gilmore Furniture has manufactured in Grand Rapids, MI since 1983. As American industry resurges, we're proud to be part of the reindustrialization story — 150,000 sq ft, three disciplines, 100% domestic.",
  path: "/american-manufacturing",
  image: "/images/WC18_Gilmore__47-631x421_f6c8082c-og.jpg",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "American Manufacturing: Our Role in the Reindustrialization Story",
  description:
    "How Gilmore Furniture is contributing to the American manufacturing renaissance from Grand Rapids, Michigan — with 40+ years of domestic production.",
  author: {
    "@type": "Organization",
    name: "Gilmore Furniture Inc.",
    url: "https://gilmorefurnitureinc.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Gilmore Furniture Inc.",
    url: "https://gilmorefurnitureinc.com",
    logo: {
      "@type": "ImageObject",
      url: "https://gilmorefurnitureinc.com/images/Gilmore-Logo_9f627029.png",
    },
  },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
};

export default function AmericanManufacturingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <AmericanManufacturingContent />
    </>
  );
}
