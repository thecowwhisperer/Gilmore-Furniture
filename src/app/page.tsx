import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Marquee from "@/components/Marquee";
import ValueProps from "@/components/ValueProps";
import FeaturedCollections from "@/components/FeaturedCollections";
import Philosophy from "@/components/Philosophy";
import CustomerLogos from "@/components/CustomerLogos";
import ComponentsShowcase from "@/components/ComponentsShowcase";
import Capabilities from "@/components/Capabilities";
import Insights from "@/components/Insights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <Marquee />
        <ValueProps />
        <FeaturedCollections />
        <Philosophy />
        <CustomerLogos />
        <ComponentsShowcase />
        <Capabilities />
        <Insights />
        <Newsletter />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
