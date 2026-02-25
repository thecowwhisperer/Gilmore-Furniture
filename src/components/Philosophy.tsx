"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-linen py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div style={{ y: parallaxY }} className="absolute inset-[-10%]">
                <Image
                  src="/images/WC18_Gilmore__51-300x300_8e3387e9.jpg"
                  alt="The Gilmore workshop process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden border border-brass/20 p-10 lg:block">
              <span className="font-serif text-5xl font-light text-brass/30">
                40+
              </span>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Right — Text */}
          <div ref={textRef} className="lg:py-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              The Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] tracking-[-0.01em]"
            >
              A dedicated partner
              <br />
              <span className="text-muted">for your brand.</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-10 h-[2px] w-20 origin-left bg-brass"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted"
            >
              <p>
                Gilmore Inc. is a resource for completely assembled wooden office
                furniture, unfinished as well as finished; we manufacture
                occasional tables, conference tables, benches and case goods per
                order or in small and medium sized runs.
              </p>
              <p>
                By utilizing our private label finishing and drop ship program,
                Gilmore Inc. will produce your designs through engineering,
                prototyping, manufacturing, finishing and packaging, and then
                drop shipping them directly to your customers with your name on
                the label.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="/story"
                className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
              >
                Read Our Full Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
