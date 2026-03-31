import type { Metadata } from "next";
import DefenseHomeContent from "./DefenseHomeContent";

export const metadata: Metadata = {
  title: "Gilmore Defense & Industrial — American Precision Manufacturing",
  description:
    "Vertically integrated American manufacturer for defense, military, aerospace, and industrial applications. Metal fabrication, tactical textiles, and precision CNC machining from Grand Rapids, MI.",
  alternates: {
    canonical: "https://defense.gilmorefurnitureinc.com",
  },
};

export default function DefenseHomePage() {
  return <DefenseHomeContent />;
}
