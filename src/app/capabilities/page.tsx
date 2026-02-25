"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const capabilities = [
  {
    number: "01",
    title: "Advanced CNC Machining",
    description:
      "Multi-axis CNC centers capable of complex geometry and high-volume throughput with precision tolerances.",
    details: [
      "5-axis CNC routing and milling",
      "Complex geometry and compound curves",
      "High-volume production with sub-millimeter tolerances",
      "Rapid prototyping and small-batch capability",
    ],
    image: "/images/WC18_Gilmore__65-293x449_c05f5377.jpg",
  },
  {
    number: "02",
    title: "Private Label Finishing",
    description:
      "Automated and hand-spray finishing lines offering UV, water-based, and custom stain matching services.",
    details: [
      "UV-cured and water-based finish systems",
      "Custom stain matching and color development",
      "Automated spray lines for volume consistency",
      "Hand-applied specialty finishes",
    ],
    image: "/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg",
  },
  {
    number: "03",
    title: "Assembly & Packaging",
    description:
      "Full assembly, hardware installation, and white-label packaging services ready for drop-shipment.",
    details: [
      "Complete assembly and hardware installation",
      "White-label and private-label packaging",
      "Drop-ship ready fulfillment",
      "Custom packaging engineering",
    ],
    image: "/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg",
  },
  {
    number: "04",
    title: "Material Expertise",
    description:
      "Deep experience working with solid woods, veneers, laminates, metals, stone, and glass integration.",
    details: [
      "Domestic and exotic solid wood species",
      "Premium veneer and laminate applications",
      "Stainless steel, carbon steel, and aluminum",
      "Stone and glass integration",
    ],
    image: "/images/WC18_Gilmore__15-420x280_3d793e9b.jpg",
  },
];

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "150K", label: "Sq Ft Facility" },
  { value: "5-Axis", label: "CNC Precision" },
  { value: "100%", label: "American Made" },
];

export default function CapabilitiesPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg"
            alt="Gilmore Furniture manufacturing capabilities"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative z-10 mx-auto w-full max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Manufacturing Excellence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              Our Capabilities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/45"
            >
              State-of-the-art technology meets skilled American craftsmanship.
              Our Grand Rapids facility combines modern CNC precision with 40
              years of hands-on furniture-making expertise.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-charcoal/5 bg-white">
          <div className="mx-auto grid max-w-[1800px] grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="flex flex-col items-center border-r border-charcoal/5 px-8 py-16 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                  {stat.value}
                </span>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Capability details */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <div className="space-y-32 lg:space-y-40">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
                    i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <span className="font-serif text-6xl font-light text-brass/25">
                      {cap.number}
                    </span>
                    <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                      {cap.title}
                    </h2>
                    <p className="mt-6 text-[15px] leading-[1.9] text-muted">
                      {cap.description}
                    </p>
                    <ul className="mt-8 space-y-4">
                      {cap.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-4 text-[14px] leading-[1.7] text-muted"
                        >
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brass" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                      i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
                Partner With Us
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to Scale Your Production?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/40">
                We specialize in high-volume production runs with consistent
                quality control. From prototyping to full-scale manufacturing,
                let&apos;s discuss how our capabilities align with your
                requirements.
              </p>
              <Link
                href="/quote"
                className="group relative mt-12 inline-block overflow-hidden border border-brass px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
