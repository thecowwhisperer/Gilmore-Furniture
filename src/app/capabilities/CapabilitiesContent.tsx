"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { capabilityPillars } from "@/content/capabilities";

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "150K", label: "Sq Ft Facility" },
  { value: "3", label: "Core Disciplines" },
  { value: "100%", label: "American Made" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/WC18_Gilmore__47_f67ac56a.jpg"
            alt="Gilmore Furniture manufacturing capabilities"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
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
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              Three core manufacturing disciplines — upholstery, woodworking,
              and metal fabrication — integrated in a single 150,000 sq ft
              American facility with over 40 years of expertise.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-charcoal/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="flex flex-col items-center border-r border-charcoal/10 px-8 py-16 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                  {stat.value}
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Three Pillars */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Three Core Disciplines
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-charcoal">
                Everything Under One Roof
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] text-muted">
                From soft goods to hardwood to steel, our integrated facility
                means faster turnarounds, tighter quality control, and a single
                point of contact for complex, multi-material products.
              </p>
            </FadeIn>

            <div className="space-y-24 lg:space-y-32">
              {capabilityPillars.map((pillar, i) => (
                <FadeIn
                  key={pillar.slug}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-80px"
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
                    i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <span className="font-serif text-6xl font-light text-brass/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.15em] text-brass">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-6 text-[15px] leading-[1.9] text-muted">
                      {pillar.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {pillar.processes.slice(0, 3).map((proc) => (
                        <li
                          key={proc.title}
                          className="flex items-start gap-4 text-[14px] leading-[1.7] text-muted"
                        >
                          <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brass" />
                          {proc.title}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/capabilities/${pillar.slug}`}
                      className="mt-10 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
                    >
                      Explore {pillar.title}
                      <span className="transition-transform duration-300 hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                      i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <Image
                      src={pillar.cardImage}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Partner With Us
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to Scale Your Production?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Whether you need upholstered seating, precision wood components,
                or metal fabrications — our integrated facility delivers it all
                under one roof. Let&apos;s discuss your requirements.
              </p>
              <Button
                href="/quote"
                variant="primary"
                className="mt-12 inline-block"
              >
                Start the Conversation
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
