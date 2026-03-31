"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DefenseNavigation from "@/components/defense/DefenseNavigation";
import DefenseFooter from "@/components/defense/DefenseFooter";
import FadeIn from "@/components/FadeIn";

const milestones = [
  {
    year: "1983",
    title: "Founded in Grand Rapids",
    description:
      "Gilmore Furniture Inc. established in Grand Rapids, Michigan — America's furniture manufacturing capital.",
  },
  {
    year: "1990s",
    title: "OEM Component Manufacturing",
    description:
      "Expanded into contract component manufacturing for major industry brands, building the OEM model that defines us today.",
  },
  {
    year: "2000s",
    title: "Metal Fabrication Division",
    description:
      "Added stainless steel, carbon steel, and aluminum fabrication — waterjet, welding, CNC machining, and finishing under one roof.",
  },
  {
    year: "2010s",
    title: "Advanced CNC & Automation",
    description:
      "Invested in multi-axis CNC machining centers and automated finishing lines, expanding precision and production capacity.",
  },
  {
    year: "Today",
    title: "Defense & Industrial Expansion",
    description:
      "Leveraging 40+ years of manufacturing expertise to serve defense, military, aerospace, and industrial markets from our 150,000 sq ft facility.",
  },
];

const differentiators = [
  {
    title: "Vertically Integrated",
    description:
      "Metal, textile, and machining disciplines under one roof. One PO, one point of contact, one facility.",
  },
  {
    title: "OEM Contract Model",
    description:
      "We build to your spec, ship under your name, and never compete for your customer. Your IP stays protected.",
  },
  {
    title: "Domestic Production",
    description:
      "100% American manufactured in Grand Rapids, Michigan. Shorter lead times, easier communication, ITAR-compatible.",
  },
  {
    title: "Scale Flexibility",
    description:
      "From single prototypes to 5,000+ unit production runs. Engineering support from design through delivery.",
  },
  {
    title: "Quality Culture",
    description:
      "40+ years of manufacturing excellence for the most demanding brands in the industry. Quality is non-negotiable.",
  },
  {
    title: "Supply Chain Stability",
    description:
      "Diversified revenue across furniture and industrial markets means stable operations and consistent capacity for every customer.",
  },
];

export default function DefenseAboutContent() {
  return (
    <>

      <DefenseNavigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__51-300x300_8e3387e9.jpg"
            alt="Gilmore manufacturing facility"
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
              Since 1983
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-[#f1f5f9]"
            >
              About Gilmore
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#94a3b8]"
            >
              Four decades of American manufacturing precision. One facility,
              three disciplines, and an unwavering commitment to the partners
              who trust us with their production.
            </motion.p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="/images/WC18_Gilmore__24_04406fcc.jpg"
                  alt="Gilmore manufacturing team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#070b14]/10" />
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                  Who We Are
                </span>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] tracking-[-0.01em] text-[#f1f5f9]">
                  The manufacturing backbone
                  <br />
                  <span className="text-[#64748b]">behind the brands you know.</span>
                </h2>
                <div className="mt-10 h-[2px] w-20 bg-[#c8a24d]" />
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-[#94a3b8]">
                  <p>
                    Gilmore Defense & Industrial is a division of Gilmore
                    Furniture Inc., a 40+ year American manufacturer based in
                    Grand Rapids, Michigan. For decades, we&apos;ve been the
                    production partner behind some of the most recognized names
                    in the contract furniture industry.
                  </p>
                  <p>
                    Now, we&apos;re bringing that same manufacturing precision,
                    OEM discipline, and quality culture to the defense, military,
                    and industrial sectors. Our 150,000 square foot facility
                    houses three core disciplines — metal fabrication, tactical
                    textiles, and precision machining — all under one roof.
                  </p>
                  <p>
                    We don&apos;t compete with our customers. We build what they
                    design, to the standards they set, and ship it under their
                    name. That&apos;s been our model for 40 years, and it&apos;s
                    exactly what defense prime contractors need.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Gilmore */}
        <section className="border-y border-white/[0.06] bg-[#0c1220] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Our Advantage
              </span>
              <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Why Partner With Gilmore
              </h2>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <FadeIn
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-30px"
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border border-white/[0.06] bg-[#111827] p-7 sm:p-10"
                >
                  <h3 className="mb-4 text-[17px] font-medium text-[#f1f5f9]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[#94a3b8]">
                    {item.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Our Journey
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#f1f5f9]">
                40+ Years of Manufacturing Excellence
              </h2>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-8 top-0 hidden h-full w-[1px] bg-white/[0.06] md:block" />
              <div className="space-y-16 md:space-y-20">
                {milestones.map((milestone, i) => (
                  <FadeIn
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewportMargin="-50px"
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid md:grid-cols-[80px_1fr] md:gap-16"
                  >
                    <div className="relative mb-4 md:mb-0">
                      <span className="text-2xl font-light text-[#c8a24d]">
                        {milestone.year}
                      </span>
                      <div className="absolute left-[31px] top-3 hidden h-3 w-3 rounded-full border-2 border-[#c8a24d] bg-[#111827] md:block" />
                    </div>
                    <div className="border border-white/[0.06] bg-[#0c1220] p-7 sm:p-10">
                      <h3 className="text-xl font-light text-[#f1f5f9]">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.8] text-[#94a3b8]">
                        {milestone.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facility */}
        <section className="border-t border-white/[0.06] bg-[#0c1220] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                  Grand Rapids, Michigan
                </span>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-light leading-[1.15] text-[#f1f5f9]">
                  Our Facility
                </h2>
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-[#94a3b8]">
                  <p>
                    Our 150,000 square foot manufacturing campus houses
                    metal fabrication, textile operations, precision CNC machining,
                    assembly, and finishing — all in one location.
                  </p>
                  <p>
                    Located in Grand Rapids, Michigan — historically the furniture
                    capital of America — we draw from a deep regional talent pool
                    of skilled machinists, welders, and fabricators.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {[
                    { value: "150K", label: "Sq Ft Under Roof" },
                    { value: "40+", label: "Years Operating" },
                    { value: "3", label: "Manufacturing Disciplines" },
                    { value: "1", label: "Integrated Facility" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-l-2 border-[#c8a24d]/30 pl-6">
                      <span className="text-2xl font-light text-[#f1f5f9]">
                        {stat.value}
                      </span>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-[#64748b]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/WC18_Gilmore__47_f67ac56a.jpg"
                    alt="Gilmore facility"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#070b14]/10" />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/metal-furniture-components-5-313x470_f6b09182.jpg"
                    alt="Metal fabrication"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#070b14]/10" />
                </div>
              </FadeIn>
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
                Ready to Work Together?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-[#94a3b8]">
                We partner with prime contractors, government agencies, and
                industrial OEMs who need a reliable domestic manufacturing source.
                Let&apos;s discuss your requirements.
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
