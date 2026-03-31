import { buildPageMetadata } from "@/lib/metadata";
import BlogContent from "./BlogContent";

export const metadata = buildPageMetadata({
  title: "Furniture Manufacturing Insights & Industry Blog",
  description:
    "Expert insights on contract furniture manufacturing, CNC woodworking, metal fabrication, and OEM partnership from Gilmore Furniture in Grand Rapids, MI.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogContent />;
}
