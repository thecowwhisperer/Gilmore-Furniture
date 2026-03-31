import { buildPageMetadata } from "@/lib/metadata";
import WoodworkingContent from "./WoodworkingContent";

export const metadata = buildPageMetadata({
  title: "CNC Woodworking & Wood Manufacturing",
  description:
    "5-axis CNC machining, private label finishing, and complete assembly for wood furniture and components. Solid wood, veneer, and laminate — from Grand Rapids, MI.",
  path: "/capabilities/woodworking",
  image: "/images/WC18_Gilmore__65-293x449_c05f5377-og.jpg",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is 5-axis CNC woodworking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5-axis CNC woodworking uses computer-controlled routing and milling centers that move along five independent axes simultaneously. This enables complex geometry, compound curves, and 3D profiles with sub-millimeter tolerances — ideal for components like clover-style parts and gun stock profiles.",
      },
    },
    {
      "@type": "Question",
      name: "What wood species does Gilmore Furniture work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with over 40 domestic and exotic wood species, as well as veneer and laminate materials. Components can be delivered unfinished or completely finished to your specification.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manufacture complete wood furniture or just components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We produce individual wood components (legs, rails, skirts, tops, door frames) for your assembly line, as well as fully assembled, finished, and boxed furniture ready for drop-ship to your customers.",
      },
    },
    {
      "@type": "Question",
      name: "What finishing options are available for wood products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer UV-cured and water-based finish systems, custom stain matching and color development, automated spray lines for high-volume consistency, and hand-applied specialty finishes for unique requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer private label woodworking services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide complete private label manufacturing including assembly, hardware installation, and white-label packaging. Products ship drop-ship ready directly to your customers with your brand on the label.",
      },
    },
  ],
};

export default function WoodworkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <WoodworkingContent />
    </>
  );
}
