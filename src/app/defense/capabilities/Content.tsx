"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DefenseNavigation from "@/components/defense/DefenseNavigation";
import DefenseFooter from "@/components/defense/DefenseFooter";
import FadeIn from "@/components/FadeIn";

const capabilities = [
  {
    number: "01",
    title: "Metal Fabrication",
    subtitle: "Stainless Steel · Carbon Steel · Aluminum",
    description:
      "Full-service metal shop with 25+ years of fabrication experience. From raw material to finished, inspected product — all under one roof.",
    details: [
      "Waterjet cutting — complex profiles in hardened steel, aluminum, and composites",
      "MIG, TIG, and spot welding — structural and cosmetic joins",
      "CNC machining — multi-axis milling and turning to tight tolerances",
      "Buffing and polishing — mirror finish, satin, or brushed",
      "Powder coat finishing — durable, mil-spec ready coatings",
      "Component parts or fully assembled products",
    ],
    applications: [
      "Armor plate fabrication",
      "Equipment housings & enclosures",
      "Weapons storage systems",
      "Vehicle structural components",
      "Naval hardware & fittings",
      "Mounting brackets & frames",
    ],
    image: "/images/Cambridge-Metal-631x498_50754349.jpg",
  },
  {
    number: "02",
    title: "Tactical Textiles & Upholstery",
    subtitle: "Cut & Sew · Foam Systems · Assembly",
    description:
      "Industrial-grade cut-and-sew operations with decades of experience in precision fabric work. From single prototypes to production volumes.",
    details: [
      "Pattern development and production cutting",
      "Multi-layer assembly for ballistic and protective applications",
      "Foam lamination and shaping for energy absorption",
      "Upholstery — leather, fabric, and specialty materials",
      "Sealing, bonding, and edge finishing",
      "Quality inspection and lot traceability",
    ],
    applications: [
      "Body armor carriers & plate carriers",
      "Vehicle and aircraft seating",
      "Tactical pouches, packs, & load-bearing gear",
      "Ballistic blankets & spall liners",
      "Protective covers & cases",
      "Tent and shelter components",
    ],
    image: "/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg",
  },
  {
    number: "03",
    title: "Precision CNC Machining",
    subtitle: "5-Axis Routing · Milling · Complex Geometry",
    description:
      "Advanced multi-axis CNC centers capable of producing complex geometries with sub-millimeter precision at production scale.",
    details: [
      "5-axis CNC routing and milling",
      "Complex compound curves and 3D profiles",
      "High-volume production with repeatable precision",
      "Rapid prototyping and short-run capability",
      "Wood, composite, and polymer machining",
      "Integrated finishing and surface treatment",
    ],
    applications: [
      "Composite tooling and molds",
      "Transit case and container components",
      "Structural composite parts",
      "Prototype and test fixtures",
      "Custom packaging inserts",
      "Specialized jigs and tooling",
    ],
    image: "/images/WC18_Gilmore__65-293x449_c05f5377.jpg",
  },
  {
    number: "04",
    title: "Assembly & Integration",
    subtitle: "Build · Test · Package · Ship",
    description:
      "Complete assembly and integration services from component-level kitting through finished, packaged product ready for deployment or distribution.",
    details: [
      "Multi-discipline assembly (metal + textile + machined)",
      "Hardware installation and fastener integration",
      "Quality inspection and testing protocols",
      "Custom packaging engineering",
      "White-label and OEM packaging",
      "Drop-ship and direct fulfillment",
    ],
    applications: [
      "Complete weapon storage systems",
      "Assembled seating systems",
      "Integrated equipment kits",
      "Field-ready workstations",
      "Packaged component sets",
      "Deployed-ready systems",
    ],
    image: "/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg",
  },
];

const equipmentHighlights = [
  "Multi-axis CNC machining centers",
  "Industrial waterjet cutting system",
  "MIG / TIG welding stations",
  "Automated powder coat line",
  "Industrial sewing and cutting tables",
  "Foam lamination and shaping",
  "Buffing and polishing stations",
  "Automated finishing lines",
];

export default function DefenseCapabilitiesContent() {
  return (
    <>

      <DefenseNavigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__47_f67ac56a.jpg"
            alt="Manufacturing facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#070b14]/90" />
          <div className="defense-grid-bg absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]"
            >
              Manufacturing Excellence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-[#f1f5f9]"
            >
              Our Capabilities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#94a3b8]"
            >
              Three core manufacturing disciplines — metal fabrication, tactical
              textiles, and precision machining — integrated in a single 150,000
              sq ft American facility.
            </motion.p>
          </div>
        </section>

        {/* Capability Details */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="space-y-32 lg:space-y-44">
              {capabilities.map((cap, i) => (
                <FadeIn
                  key={cap.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-80px"
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid items-start gap-16 lg:grid-cols-2 lg:gap-24 ${
                    i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <span className="text-6xl font-light text-[#c8a24d]/20">
                      {cap.number}
                    </span>
                    <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-[#f1f5f9]">
                      {cap.title}
                    </h2>
                    <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.15em] text-[#c8a24d]">
                      {cap.subtitle}
                    </p>
                    <p className="mt-6 text-[15px] leading-[1.9] text-[#94a3b8]">
                      {cap.description}
                    </p>

                    <div className="mt-10">
                      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Process & Equipment
                      </h4>
                      <ul className="space-y-3">
                        {cap.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-[14px] leading-[1.7] text-[#94a3b8]"
                          >
                            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#c8a24d]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10">
                      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Defense & Industrial Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cap.applications.map((app) => (
                          <span
                            key={app}
                            className="border border-white/[0.06] bg-[#0c1220] px-4 py-2 text-[12px] text-[#94a3b8]"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${
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
                    <div className="absolute inset-0 bg-[#070b14]/10" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Grid */}
        <section className="border-y border-white/[0.06] bg-[#0c1220] py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                On Our Floor
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light text-[#f1f5f9]">
                Equipment & Infrastructure
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {equipmentHighlights.map((item, i) => (
                <FadeIn
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * i }}
                  className="border border-white/[0.06] bg-[#111827] p-8 text-center"
                >
                  <span className="text-[13px] leading-[1.6] text-[#94a3b8]">
                    {item}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Partner With Us
              </span>
              <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Have a Manufacturing Requirement?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-[#94a3b8]">
                From prototype to production, we work with prime contractors and
                government agencies to deliver precision-manufactured components
                and assemblies on schedule and to spec.
              </p>
              <Link
                href="/defense/contact"
                className="group relative mt-12 inline-block overflow-hidden border border-[#c8a24d] px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-500 hover:text-[#070b14]"
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-[#c8a24d] transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <DefenseFooter />
    </>
  );
}
