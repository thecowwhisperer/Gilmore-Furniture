import { buildPageMetadata } from "@/lib/metadata";
import CapabilitiesContent from "./CapabilitiesContent";

export const metadata = buildPageMetadata({
  title: "Manufacturing Capabilities",
  description:
    "Three core manufacturing disciplines — upholstery, woodworking, and metal fabrication — in a single 150,000 sq ft American facility. Explore Gilmore Furniture's capabilities.",
  path: "/capabilities",
  image: "/images/WC18_Gilmore__47-631x421_f6c8082c-og.jpg",
});

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
