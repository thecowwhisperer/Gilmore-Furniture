import type { MetadataRoute } from "next";
import { posts } from "./blog/data";
import { verticals } from "@/content/verticals";
import { componentsCatalog } from "@/content/componentsCatalog";

const BASE_URL = "https://gilmorefurnitureinc.com";

const SITE_LAST_UPDATED = "2026-03-27";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    route: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { route: "", priority: 1, changeFrequency: "monthly" },
    { route: "/solutions", priority: 0.9, changeFrequency: "monthly" },
    { route: "/components", priority: 0.9, changeFrequency: "monthly" },
    { route: "/capabilities", priority: 0.8, changeFrequency: "monthly" },
    {
      route: "/capabilities/upholstery",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      route: "/capabilities/woodworking",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      route: "/capabilities/metal-fabrication",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { route: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { route: "/story", priority: 0.6, changeFrequency: "monthly" },
    { route: "/mission", priority: 0.6, changeFrequency: "monthly" },
    { route: "/customers", priority: 0.7, changeFrequency: "monthly" },
    { route: "/careers", priority: 0.6, changeFrequency: "monthly" },
    { route: "/quote", priority: 0.9, changeFrequency: "monthly" },
    {
      route: "/american-manufacturing",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" },
    ...verticals.map((v) => ({
      route: `/solutions/${v.slug}`,
      priority: 0.85 as number,
      changeFrequency: "monthly" as const,
    })),
    ...componentsCatalog.map((c) => ({
      route: `/components/${c.slug}`,
      priority: 0.8 as number,
      changeFrequency: "monthly" as const,
    })),
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.route}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
