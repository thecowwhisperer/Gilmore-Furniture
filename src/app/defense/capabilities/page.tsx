import type { Metadata } from "next";
import DefenseCapabilitiesContent from "./Content";

export const metadata: Metadata = {
  title: "Defense Manufacturing Capabilities — Metal, Textiles, CNC",
  description:
    "Metal fabrication, tactical textiles and upholstery, precision 5-axis CNC machining, and multi-discipline assembly. Waterjet, welding, powder coat, and more.",
  alternates: {
    canonical: "https://defense.gilmorefurnitureinc.com/capabilities",
  },
};

export default function DefenseCapabilitiesPage() {
  return <DefenseCapabilitiesContent />;
}
