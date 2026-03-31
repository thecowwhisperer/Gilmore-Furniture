"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/Button";

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 opacity-[0.02]">
        <span className="font-serif text-[28rem] leading-none text-white">
          G
        </span>
      </div>

      <div
        ref={ref}
        className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 rounded-sm border border-white/[0.06] bg-white/[0.02] p-8 text-center sm:gap-20 sm:p-14 md:flex-row md:p-20 md:text-left">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-white"
            >
              Ready to partner with a premier American manufacturer?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 text-[15px] leading-[1.8] text-white/60"
            >
              Whether you need complete solutions, custom components, or
              engineering support — let&apos;s discuss how Gilmore can become
              your dedicated manufacturing partner.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <Button href="/quote" variant="primary" className="text-center">
              Request a Quote
            </Button>
            <a
              href="tel:616-475-5100"
              className="text-center text-[14px] text-white/70 transition-colors hover:text-white"
            >
              or call 616-475-5100
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
