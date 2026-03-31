"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { capabilityPillars } from "@/content/capabilities";

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28"
      >
        <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Manufacturing Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white"
            >
              Three Core Disciplines
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="self-end text-[16px] leading-[1.9] text-white/70"
          >
            Upholstery, woodworking, and metal fabrication — all under one roof
            in our Grand Rapids facility. This integrated approach means faster
            turnarounds, tighter quality, and a single point of contact for
            complex, multi-material products.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {capabilityPillars.map((pillar, i) => (
            <motion.div
              key={pillar.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/capabilities/${pillar.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-brass/20 hover:bg-white/[0.06]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pillar.cardImage}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-10">
                  <h3 className="mb-2 font-serif text-xl text-white">
                    {pillar.title}
                  </h3>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.15em] text-brass/70">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 flex-1 text-[14px] leading-[1.8] text-white/70">
                    {pillar.description.split(".")[0]}.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-brass/80 transition-colors duration-300 group-hover:text-brass">
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 flex flex-col items-center justify-between gap-10 rounded-sm border border-white/10 bg-white/[0.03] p-8 sm:p-14 md:flex-row md:p-16"
        >
          <div>
            <h3 className="font-serif text-2xl text-white">Ready to Scale?</h3>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/70">
              We specialize in high-volume production runs with consistent
              quality control. Let&apos;s discuss your annual volume
              requirements.
            </p>
          </div>
          <Button href="/quote" variant="primary" className="shrink-0">
            Start the Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
