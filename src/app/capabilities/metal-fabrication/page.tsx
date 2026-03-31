import { buildPageMetadata } from "@/lib/metadata";
import MetalFabricationContent from "./MetalFabricationContent";

export const metadata = buildPageMetadata({
  title: "Metal Fabrication Services",
  description:
    "Waterjet cutting, welding, CNC machining, buffing, and powder coat finishing. Stainless steel and carbon steel components and assemblies from Grand Rapids, MI.",
  path: "/capabilities/metal-fabrication",
  image: "/images/Cambridge-Metal-631x498_50754349-og.jpg",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What metals does Gilmore Furniture fabricate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We fabricate stainless steel, carbon steel, and aluminum. Our capabilities include everything from simple brackets and frames to complex, high-specification assemblies for furniture, marine, and industrial applications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer powder coating and metal finishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide a full range of finishing services including powder coat painting in any color, mirror-finish high polish, satin finish, and brushed textures. All finishing is done in-house on our automated powder coat line.",
      },
    },
    {
      "@type": "Question",
      name: "What is waterjet cutting and what materials can it cut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waterjet cutting uses a high-pressure stream of water mixed with abrasive to cut complex profiles in hardened steel, stainless steel, aluminum, and composites. It produces precision cuts without heat-affected zones, making it ideal for intricate shapes and tight tolerances.",
      },
    },
    {
      "@type": "Question",
      name: "What welding processes do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer MIG, TIG, and spot welding for both structural and cosmetic joins. Our experienced welders work with stainless steel and carbon steel for furniture components and complex assemblies.",
      },
    },
    {
      "@type": "Question",
      name: "Can you produce marine-grade metal components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We manufacture marine components including rub rail, fittings, tubing, hinges, and polished 316 stainless steel hardware for boat builders and marine applications.",
      },
    },
  ],
};

export default function MetalFabricationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MetalFabricationContent />
    </>
  );
}
