import { buildPageMetadata } from "@/lib/metadata";
import ComponentsContent from "./ComponentsContent";

export const metadata = buildPageMetadata({
  title: "Components",
  description:
    "Custom wood and metal furniture components. Conference table bases, wood parts, metal fabrications, and marine components from Gilmore Furniture.",
  path: "/components",
  image: "/images/ComponentsFeatureSlider-539x367_112a0e6d-og.jpg",
});

export default function ComponentsPage() {
  return <ComponentsContent />;
}
