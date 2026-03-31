import { buildPageMetadata } from "@/lib/metadata";
import UpholsteryContent from "./UpholsteryContent";

export const metadata = buildPageMetadata({
  title: "Upholstery Manufacturing",
  description:
    "Cut and sew, foam application, and upholstery services for contract furniture. Leather, fabric, and specialty materials — finished goods and components from Grand Rapids, MI.",
  path: "/capabilities/upholstery",
  image: "/images/Venlo-Lounge-Pair-418x323_57c611d7-og.jpg",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What materials can Gilmore Furniture upholster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with leather, fabric, vinyl, and specialty materials including performance textiles and antimicrobial fabrics. Our trained artisans handle everything from standard contract-grade upholstery to complex, multi-material applications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer cut and sew services for contract furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide full pattern development, production cutting, multi-layer assembly, precision seaming, and edge finishing — all in-house at our Grand Rapids, MI facility.",
      },
    },
    {
      "@type": "Question",
      name: "Can you produce both finished goods and upholstered components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We manufacture fully assembled upholstered furniture (finished goods) as well as upholstered components — cushions, panels, inserts, and seat pads — for integration into your own assembly line.",
      },
    },
    {
      "@type": "Question",
      name: "What is your minimum order quantity for upholstery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support everything from single prototypes to high-volume production runs. Our facility is designed for flexibility, allowing us to scale from small-lot made-to-order projects to full production volumes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide quality traceability for upholstered products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We maintain rigorous inspection at every stage from incoming material through finished product, with full lot traceability for all contract and OEM programs.",
      },
    },
  ],
};

export default function UpholsteryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <UpholsteryContent />
    </>
  );
}
