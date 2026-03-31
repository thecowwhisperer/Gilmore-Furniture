import { buildPageMetadata } from "@/lib/metadata";
import CareersContent from "./CareersContent";

export const metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Join Gilmore Furniture in Grand Rapids, MI. Explore open positions in CNC machining, finishing, assembly, and quality control.",
  path: "/careers",
});

export default function CareersPage() {
  return <CareersContent />;
}
