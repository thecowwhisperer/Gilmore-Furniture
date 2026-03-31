import { buildPageMetadata } from "@/lib/metadata";
import StoryContent from "./StoryContent";

export const metadata = buildPageMetadata({
  title: "Our Story",
  description:
    "Four decades of American craftsmanship, innovation, and partnership from Grand Rapids, Michigan. Learn about Gilmore Furniture's history since 1983.",
  path: "/story",
});

export default function StoryPage() {
  return <StoryContent />;
}
