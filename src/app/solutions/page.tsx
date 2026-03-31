import { buildPageMetadata } from "@/lib/metadata";
import SolutionsContent from "./SolutionsContent";

export const metadata = buildPageMetadata({
  title: "Furniture Solutions",
  description:
    "Complete furniture solutions manufactured under your brand. Cylinder tables, occasional tables, benches, and lounge seating from Gilmore Furniture.",
  path: "/solutions",
  image: "/images/Venlo-Lounge-Pair-418x323_57c611d7-og.jpg",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Cylinder & Cube Table Manufacturing",
      description:
        "Custom cylinder, tapered cylinder, cube, square, and rectangular monoform tables in veneer, laminate, or metal wrap. Unfinished or finished, produced at volume.",
      provider: {
        "@type": "ManufacturingBusiness",
        name: "Gilmore Furniture Inc.",
        url: "https://gilmorefurnitureinc.com",
      },
      areaServed: "US",
      serviceType: "Contract Furniture Manufacturing",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Occasional Table Manufacturing",
      description:
        "Small-lot and made-to-order production of end tables, coffee tables, and side tables for the contract furniture industry. Complete and ready to finish, or finished and boxed per order.",
      provider: {
        "@type": "ManufacturingBusiness",
        name: "Gilmore Furniture Inc.",
        url: "https://gilmorefurnitureinc.com",
      },
      areaServed: "US",
      serviceType: "Contract Furniture Manufacturing",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Commercial Bench Manufacturing",
      description:
        "High-quality lobby, reception, and collaborative seating benches in solid wood and upholstered options with custom dimensions, finishes, and tailored delivery scheduling.",
      provider: {
        "@type": "ManufacturingBusiness",
        name: "Gilmore Furniture Inc.",
        url: "https://gilmorefurnitureinc.com",
      },
      areaServed: "US",
      serviceType: "Contract Furniture Manufacturing",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Lounge Seating Manufacturing",
      description:
        "Contract-grade lounge seating upholstered in leather or fabric. Trained upholstery artisans delivering exceptional durability and attention to detail with custom frame and finish options.",
      provider: {
        "@type": "ManufacturingBusiness",
        name: "Gilmore Furniture Inc.",
        url: "https://gilmorefurnitureinc.com",
      },
      areaServed: "US",
      serviceType: "Contract Furniture Manufacturing",
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <SolutionsContent />
    </>
  );
}
