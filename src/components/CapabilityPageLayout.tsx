"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import type { CapabilityPillar } from "@/content/capabilities";

interface Props {
  pillar: CapabilityPillar;
}

export default function CapabilityPageLayout({ pillar }: Props) {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src={pillar.heroImage}
            alt={`${pillar.title} manufacturing at Gilmore Furniture`}
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
              {pillar.tagline}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              {pillar.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              {pillar.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 text-[13px] font-medium uppercase tracking-[0.15em] text-brass/80"
            >
              {pillar.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-charcoal/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
            {pillar.stats.map((stat, i) => (
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

        {/* Processes */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Process &amp; Equipment
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-charcoal">
                How We Work
              </h2>
            </FadeIn>

            <div className="space-y-20 lg:space-y-28">
              {pillar.processes.map((process, i) => (
                <FadeIn
                  key={process.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-80px"
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="grid items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16"
                >
                  <span className="hidden font-serif text-6xl font-light text-brass/50 lg:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-light leading-[1.2] text-charcoal">
                      <span className="mr-3 font-serif text-brass/30 lg:hidden">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {process.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-[15px] leading-[1.9] text-muted">
                      {process.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What We Produce */}
        <section className="border-t border-charcoal/10 bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                {pillar.products.heading}
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-charcoal">
                Finished Goods &amp; Components
              </h2>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillar.products.items.map((item) => (
                <FadeIn
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-4 rounded-sm border border-charcoal/8 bg-linen/50 p-6"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  <span className="text-[14px] leading-[1.7] text-muted">
                    {item}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="border-t border-charcoal/10 bg-linen py-28">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                On Our Floor
              </span>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light text-charcoal">
                Equipment &amp; Infrastructure
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {pillar.equipmentHighlights.map((item, i) => (
                <FadeIn
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * i }}
                  className="border border-charcoal/8 bg-white p-8 text-center"
                >
                  <span className="text-[13px] leading-[1.6] text-muted">
                    {item}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Back + CTA */}
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
                From prototyping to full-scale manufacturing, let&apos;s discuss
                how our {pillar.title.toLowerCase()} capabilities align with
                your requirements.
              </p>
              <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                <Button
                  href="/quote"
                  variant="primary"
                  className="inline-block"
                >
                  Start the Conversation
                </Button>
                <Link
                  href="/capabilities"
                  className="text-[12px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-brass"
                >
                  &larr; All Capabilities
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
