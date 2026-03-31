"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="bg-linen py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
        {/* Two-column intro: image + text */}
        <div
          ref={headerRef}
          className="mb-24 grid items-center gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <motion.div style={{ y: parallaxY }} className="absolute inset-x-0 -top-[8%] -bottom-[8%]">
                <Image
                  src="/images/partner.jpg"
                  alt="Gilmore Furniture finished products"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Our Approach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] tracking-[-0.01em]"
            >
              A dedicated partner
              <br />
              <span className="text-muted">for your brand.</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="mt-10 h-[2px] w-20 origin-left bg-brass"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted"
            >
              <p>
                Gilmore Inc. brings three core competencies — upholstery,
                woodworking, and metal fabrication — together under one roof. We
                manufacture complete furniture and precision components in small
                to medium production runs, unfinished or fully finished.
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
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/story"
                className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
              >
                Read Our Full Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-8 sm:gap-10 md:grid-cols-3">
          {props.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-sm border border-stone bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-14"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-brass/30 bg-brass/10 text-brass transition-transform duration-300 group-hover:scale-110">
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
