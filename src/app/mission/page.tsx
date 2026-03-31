import { buildPageMetadata } from "@/lib/metadata";
import MissionContent from "./MissionContent";

export const metadata = buildPageMetadata({
  title: "Mission & Values",
  description:
    "Quality, partnership, American manufacturing, innovation, integrity, and sustainability. Discover the values that drive Gilmore Furniture.",
  path: "/mission",
});

export default function MissionPage() {
  return <MissionContent />;
}
