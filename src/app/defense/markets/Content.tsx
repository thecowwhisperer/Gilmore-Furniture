"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DefenseNavigation from "@/components/defense/DefenseNavigation";
import DefenseFooter from "@/components/defense/DefenseFooter";
import FadeIn from "@/components/FadeIn";

const markets = [
  {
    title: "Defense & Military",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description:
      "Components and assemblies for ground vehicles, weapons systems, soldier equipment, and base infrastructure. From armor fabrication to tactical textile products.",
    products: [
      "Weapons storage & armory systems",
      "Vehicle seating & interior components",
      "Body armor carriers & plate carriers",
      "Tactical pouches, packs, & load-bearing equipment",
      "Ballistic blankets & spall liners",
      "Field-deployable workstations & furniture",
      "Equipment housings & enclosures",
      "Ammunition storage & transport containers",
    ],
  },
  {
    title: "Naval & Marine",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    description:
      "Shipboard furniture, deck hardware, marine-grade fittings, and corrosion-resistant components. Leveraging our existing marine component expertise with polished 316 stainless steel.",
    products: [
      "Shipboard furniture & fixtures",
      "Wardroom & mess hall furnishings",
      "316 stainless steel deck hardware",
      "Marine fittings, rub rails, & tubing",
      "Corrosion-resistant enclosures",
      "Submarine interior components",
      "Coast Guard vessel outfitting",
      "Polished stainless steel hardware",
    ],
  },
  {
    title: "Aerospace",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    description:
      "Interior cabin components, crew seating structures, and precision-machined parts for aircraft and rotorcraft applications.",
    products: [
      "Aircraft interior structural components",
      "Crew and passenger seat frames",
      "Cabin panel and trim components",
      "Helicopter interior outfitting",
      "UAV / drone frame components",
      "Tooling and production fixtures",
      "Composite and polymer machined parts",
      "Prototype and test articles",
    ],
  },
  {
    title: "Government / GSA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    description:
      "GSA Schedule-ready office furniture, secure facility furnishings, and government-spec manufactured products for federal, state, and local agencies.",
    products: [
      "Federal office furniture (GSA Schedule)",
      "SCIF & secure facility furnishings",
      "Barracks & billeting furniture",
      "Conference and briefing room tables",
      "Reception and lobby furnishings",
      "Custom government-spec cabinetry",
      "Modular furniture systems",
      "ADA-compliant workstations",
    ],
  },
  {
    title: "Healthcare & Medical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    description:
      "Medical facility furniture, equipment housings, exam room components, and healthcare infrastructure leveraging our precision manufacturing capabilities.",
    products: [
      "Exam room cabinetry & furniture",
      "Patient room furnishings",
      "Medical cart frames & housings",
      "Waiting room and clinical seating",
      "Surgical suite components",
      "Medical equipment enclosures",
      "Dental operatory cabinetry",
      "Laboratory furniture & workstations",
    ],
  },
  {
    title: "Industrial OEM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    description:
      "Contract manufacturing for OEM partners across energy, transportation, data infrastructure, and specialty vehicle markets.",
    products: [
      "Server rack enclosures & housings",
      "Data center infrastructure",
      "Specialty vehicle interiors",
      "Emergency vehicle outfitting",
      "Energy sector components",
      "Transportation equipment",
      "Custom electronics enclosures",
      "RV & luxury coach interiors",
    ],
  },
];

export default function DefenseMarketsContent() {
  return (
    <>

      <DefenseNavigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/other-metal-components-1-420x280_cf20020c.jpg"
            alt="Precision manufactured components"
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
              Industries We Serve
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-[#f1f5f9]"
            >
              Markets Served
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#94a3b8]"
            >
              Our vertically integrated manufacturing capabilities serve defense,
              government, aerospace, healthcare, and industrial markets with
              precision-built components and complete assemblies.
            </motion.p>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="bg-[#111827] py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="space-y-20">
              {markets.map((market, i) => (
                <FadeIn
                  key={market.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border border-white/[0.06] bg-[#0c1220] p-7 sm:p-10 md:p-14"
                >
                  <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
                    <div>
                      <div className="mb-5 text-[#c8a24d]">{market.icon}</div>
                      <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-light text-[#f1f5f9]">
                        {market.title}
                      </h2>
                      <p className="mt-4 text-[15px] leading-[1.9] text-[#94a3b8]">
                        {market.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a24d]">
                        Products & Applications
                      </h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {market.products.map((product) => (
                          <div
                            key={product}
                            className="flex items-start gap-3 text-[14px] leading-[1.6] text-[#94a3b8]"
                          >
                            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#c8a24d]/60" />
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#0c1220] py-36 lg:py-44">
          <div className="defense-grid-bg absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]">
                Your Industry, Our Expertise
              </span>
              <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-[#f1f5f9]">
                Don&apos;t See Your Market Listed?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-[#94a3b8]">
                Our metal, textile, and machining capabilities extend across many
                industries. If you need a domestic manufacturing partner with
                multi-discipline capability, let&apos;s talk.
              </p>
              <Link
                href="/defense/contact"
                className="group relative mt-12 inline-block overflow-hidden border border-[#c8a24d] px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-500 hover:text-[#070b14]"
              >
                <span className="relative z-10">Contact Us</span>
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
