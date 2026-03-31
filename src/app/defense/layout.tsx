import type { Metadata } from "next";
import "./defense.css";

const defenseUrl = "https://defense.gilmorefurnitureinc.com";

export const metadata: Metadata = {
  title: {
    default: "Gilmore Defense & Industrial — American Precision Manufacturing",
    template: "%s | Gilmore Defense & Industrial",
  },
  description:
    "Vertically integrated American manufacturer specializing in metal fabrication, tactical textiles, and precision machining for defense, military, aerospace, and industrial applications. Grand Rapids, MI.",
  keywords: [
    "defense manufacturing",
    "military contractor",
    "metal fabrication",
    "tactical textiles",
    "CNC machining",
    "waterjet cutting",
    "OEM defense",
    "American manufacturing",
    "Grand Rapids",
    "ITAR",
    "defense OEM",
    "precision machining",
    "military furniture",
    "aerospace components",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gilmore Defense & Industrial",
    title: "Gilmore Defense & Industrial — American Precision Manufacturing",
    description:
      "Vertically integrated American manufacturer for defense, military, aerospace, and industrial applications. Metal fabrication, tactical textiles, and precision CNC machining.",
    url: defenseUrl,
    images: [
      {
        url: "/images/Cambridge-Metal-631x498_50754349-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gilmore Defense & Industrial — Precision Metal Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilmore Defense & Industrial — American Precision Manufacturing",
    description:
      "Vertically integrated American manufacturer for defense, military, aerospace, and industrial applications.",
    images: ["/images/Cambridge-Metal-631x498_50754349-og.jpg"],
  },
};

const defenseJsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "Gilmore Defense & Industrial",
  url: defenseUrl,
  logo: `https://gilmorefurnitureinc.com/images/Gilmore-Logo_9f627029.png`,
  image: `https://gilmorefurnitureinc.com/images/Cambridge-Metal-631x498_50754349.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "321 Terminal Street SW",
    addressLocality: "Grand Rapids",
    addressRegion: "MI",
    postalCode: "49548",
    addressCountry: "US",
  },
  telephone: "+1-616-475-5100",
  foundingDate: "1983",
  description:
    "Vertically integrated American manufacturer specializing in precision metal fabrication, tactical textiles, and CNC machining for defense, military, aerospace, and industrial applications.",
  areaServed: "US",
  knowsAbout: [
    "Defense manufacturing",
    "Metal fabrication for military applications",
    "Tactical textiles",
    "Precision CNC machining",
    "Waterjet cutting",
    "ITAR-compliant manufacturing",
    "Aerospace components",
    "Military furniture and fixtures",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 200,
  },
};

export default function DefenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="defense-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(defenseJsonLd) }}
      />
      <div className="defense-grain" />
      {children}
    </div>
  );
}
