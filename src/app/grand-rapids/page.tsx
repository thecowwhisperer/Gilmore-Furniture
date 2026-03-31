import { buildPageMetadata } from "@/lib/metadata";
import GrandRapidsContent from "./GrandRapidsContent";

export const metadata = buildPageMetadata({
  title: "Grand Rapids Heritage",
  description:
    "Grand Rapids, Michigan — the furniture capital of America. Discover the city's 150-year manufacturing legacy and Gilmore Furniture's roots in this storied tradition.",
  path: "/grand-rapids",
  image: "/images/WC18_Gilmore__47-631x421_f6c8082c-og.jpg",
});

export default function GrandRapidsPage() {
  return <GrandRapidsContent />;
}
