import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FeaturedCollections from "@/components/FeaturedCollections";
import CustomerLogos from "@/components/CustomerLogos";
import ComponentsShowcase from "@/components/ComponentsShowcase";
import MaterialsShowcase from "@/components/MaterialsShowcase";
import Capabilities from "@/components/Capabilities";
import Insights from "@/components/Insights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gilmore Furniture Inc. — Redefining OEM",
  description:
    "Premier American OEM manufacturer of contract furniture and components. Partnering with industry leaders since 1983 from Grand Rapids, Michigan.",
  alternates: {
    canonical: "https://gilmorefurnitureinc.com",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ValueProps />
        <FeaturedCollections />
        <CustomerLogos />
        <ComponentsShowcase />
        <MaterialsShowcase />
        <Capabilities />
        <Insights />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
