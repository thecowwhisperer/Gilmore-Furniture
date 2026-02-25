"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Advanced CNC Machining",
    description:
      "Multi-axis CNC centers capable of complex geometry and high-volume throughput with precision tolerances.",
    number: "01",
  },
  {
    title: "Private Label Finishing",
    description:
      "Automated and hand-spray finishing lines offering UV, water-based, and custom stain matching services.",
    number: "02",
  },
  {
    title: "Assembly & Packaging",
    description:
      "Full assembly, hardware installation, and white-label packaging services ready for drop-shipment.",
    number: "03",
  },
  {
    title: "Material Expertise",
    description:
      "Deep experience working with solid woods, veneers, laminates, metals, stone, and glass integration.",
    number: "04",
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28"
      >
        <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
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
              Our Capabilities
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="self-end text-[16px] leading-[1.9] text-white/40"
          >
            State-of-the-art technology meets skilled American craftsmanship. Our
            Grand Rapids facility combines modern CNC precision with 40 years of
            hands-on furniture-making expertise.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex gap-8 rounded-sm border border-white/[0.06] bg-white/[0.03] p-12 backdrop-blur-sm transition-all duration-500 hover:border-brass/20 hover:bg-white/[0.06]"
            >
              <span className="shrink-0 font-serif text-4xl font-light text-brass/30 transition-colors duration-300 group-hover:text-brass/60">
                {cap.number}
              </span>
              <div>
                <h3 className="mb-4 font-serif text-xl text-white">
                  {cap.title}
                </h3>
                <p className="text-[14px] leading-[1.8] text-white/40">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 flex flex-col items-center justify-between gap-10 rounded-sm border border-white/10 bg-white/[0.03] p-14 md:flex-row md:p-16"
        >
          <div>
            <h3 className="font-serif text-2xl text-white">Ready to Scale?</h3>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/40">
              We specialize in high-volume production runs with consistent
              quality control. Let&apos;s discuss your annual volume
              requirements.
            </p>
          </div>
          <Link
            href="/quote"
            className="group relative shrink-0 overflow-hidden border border-brass px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
          >
            <span className="relative z-10">Start the Conversation</span>
            <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
