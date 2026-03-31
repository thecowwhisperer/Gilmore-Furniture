"use client";

import { usePathname } from "next/navigation";

const BASE_URL = "https://gilmorefurnitureinc.com";

const LABEL_MAP: Record<string, string> = {
  "": "Home",
  solutions: "Furniture Solutions",
  components: "Components",
  capabilities: "Capabilities",
  upholstery: "Upholstery",
  woodworking: "Woodworking",
  "metal-fabrication": "Metal Fabrication",
  blog: "Blog",
  story: "Our Story",
  "grand-rapids": "Grand Rapids Heritage",
  mission: "Mission & Values",
  customers: "Customers",
  careers: "Careers",
  quote: "Request a Quote",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
};

function segmentLabel(segment: string): string {
  return (
    LABEL_MAP[segment] ??
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = [
    { name: "Home", url: BASE_URL },
    ...segments.map((seg, i) => ({
      name: segmentLabel(seg),
      url: `${BASE_URL}/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
