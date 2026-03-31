import type { Metadata } from "next";

const BASE_URL = "https://gilmorefurnitureinc.com";
const SITE_NAME = "Gilmore Furniture Inc.";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetaOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? "/images/CompleteFeatureSlider-539x367_7ac3ec23-og.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
