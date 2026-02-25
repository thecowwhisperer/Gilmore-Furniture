"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const props = [
  {
    title: "Design & Engineering",
    description:
      "We integrate with your team during the design process to ensure value engineering for strength, durability, and cost effectiveness without compromising aesthetic intent.",
    cta: { label: "Learn More", href: "/solutions" },
  },
  {
    title: "Premium Quality",
    description:
      "Complex designs requiring a high degree of craftsmanship and technical expertise are our forte. We utilize the highest quality materials and advanced technology.",
    cta: { label: "Our Story", href: "/story" },
  },
  {
    title: "Drop Shipping",
    description:
      "Complete private label finishing and drop ship programs. We handle manufacturing, finishing, packaging, and shipping directly to your customers.",
    cta: { label: "Start a Project", href: "/quote" },
  },
];

export default function ValueProps() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-linen py-24 lg:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28"
      >
        {/* Section header */}
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.1] tracking-[-0.02em]"
          >
            Exceptional Craftsmanship
            <br />
            <span className="text-muted">&amp; Business Acumen</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mt-8 h-[2px] w-20 bg-brass"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-10 max-w-3xl text-[16px] leading-[1.9] text-muted"
          >
            We don&apos;t just build furniture; we build relationships. As an
            outstanding OEM source for many notable furniture manufacturers for
            over 40 years, Gilmore is committed to producing value-engineered
            products to standards that meet or exceed your own.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-sm border border-charcoal/[0.06] bg-cream p-14 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full bg-linen text-brass shadow-sm transition-transform duration-300 group-hover:scale-110">
                <span className="font-serif text-2xl font-light">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mb-5 font-serif text-[1.6rem] font-light text-charcoal">
                {prop.title}
              </h3>
              <p className="mb-8 text-[14px] leading-[1.9] text-muted">
                {prop.description}
              </p>
              <Link
                href={prop.cta.href}
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
              >
                {prop.cta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
