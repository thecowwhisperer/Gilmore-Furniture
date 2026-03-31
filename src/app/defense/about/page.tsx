import type { Metadata } from "next";
import DefenseAboutContent from "./Content";

export const metadata: Metadata = {
  title: "About Gilmore Defense — History & Facility",
  description:
    "40+ years of American manufacturing excellence. 150,000 sq ft integrated facility in Grand Rapids, MI serving defense, aerospace, and industrial markets.",
  alternates: {
    canonical: "https://defense.gilmorefurnitureinc.com/about",
  },
};

export default function DefenseAboutPage() {
  return <DefenseAboutContent />;
}
