import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import QuoteBanner from "@/components/QuoteBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://gilmorefurnitureinc.com";

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gilmore Furniture Inc. — Redefining OEM",
    template: "%s | Gilmore Furniture Inc.",
  },
  description:
    "Premier American OEM manufacturer of contract furniture and components. Upholstery, woodworking, and metal fabrication under one roof since 1983. Grand Rapids, MI.",
  keywords: [
    "OEM furniture",
    "contract furniture",
    "furniture manufacturer",
    "Grand Rapids",
    "wood components",
    "metal components",
    "private label furniture",
    "upholstery manufacturer",
    "CNC woodworking",
    "metal fabrication",
    "5-axis CNC",
    "furniture upholstery",
    "waterjet cutting",
    "powder coat finishing",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Gilmore Furniture Inc.",
    title: "Gilmore Furniture Inc. — Redefining OEM",
    description:
      "Premier American OEM manufacturer of contract furniture and components since 1983. Grand Rapids, MI.",
    url: siteUrl,
    images: [
      {
        url: "/images/CompleteFeatureSlider-539x367_7ac3ec23-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gilmore Furniture Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilmore Furniture Inc. — Redefining OEM",
    description:
      "Premier American OEM manufacturer of contract furniture and components since 1983.",
    images: ["/images/CompleteFeatureSlider-539x367_7ac3ec23-og.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    name: "Gilmore Furniture Inc.",
    url: siteUrl,
    logo: `${siteUrl}/images/Gilmore-Logo_9f627029.png`,
    image: `${siteUrl}/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "321 Terminal Street SW",
      addressLocality: "Grand Rapids",
      addressRegion: "MI",
      postalCode: "49548",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.9296,
      longitude: -85.6814,
    },
    telephone: "+1-616-475-5100",
    foundingDate: "1983",
    description:
      "Premier American OEM manufacturer of contract furniture and components. Upholstery, woodworking, and metal fabrication under one roof since 1983.",
    areaServed: "US",
    knowsAbout: [
      "OEM furniture manufacturing",
      "Contract furniture",
      "CNC woodworking",
      "Metal fabrication",
      "Furniture upholstery",
      "Private label manufacturing",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gilmore Furniture Inc.",
    url: siteUrl,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${cormorant.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border focus:border-charcoal/20 focus:bg-linen focus:px-4 focus:py-2 focus:text-[13px] focus:text-charcoal"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BreadcrumbJsonLd />
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <QuoteBanner />
      </body>
    </html>
  );
}
