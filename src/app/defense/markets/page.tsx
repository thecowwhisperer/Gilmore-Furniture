import type { Metadata } from "next";
import DefenseMarketsContent from "./Content";

export const metadata: Metadata = {
  title: "Markets Served — Defense, Aerospace, Naval, Industrial",
  description:
    "Serving defense and military, naval and marine, aerospace, government and GSA, healthcare, and industrial OEM markets with precision-manufactured components and assemblies.",
  alternates: {
    canonical: "https://defense.gilmorefurnitureinc.com/markets",
  },
};

export default function DefenseMarketsPage() {
  return <DefenseMarketsContent />;
}
