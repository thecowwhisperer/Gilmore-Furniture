"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const components = [
  {
    title: "Conference Table Bases",
    description:
      "Grade A select and balanced veneer faces laminated over a smooth and concentric core, with fully enclosed ends.",
    image: "/images/WC18_Gilmore__57-420x280_cdfddacb.jpg",
  },
  {
    title: "Wood Furniture Components",
    description:
      "Table legs, rails, skirts, tops, bases, bench parts, and door frames in any species, unfinished or finished.",
    image: "/images/WC18_Gilmore__65-293x449_c05f5377.jpg",
  },
  {
    title: "Metal Furniture Components",
    description:
      "Stainless steel, carbon steel, and aluminum fabrications from simple components to complex parts.",
    image: "/images/WC18_Gilmore__15-420x280_3d793e9b.jpg",
  },
  {
    title: "Other Components",
    description:
      "Marine components, rub rail, fittings, and polished 316 stainless steel hardware.",
    image: "/images/other-metal-components-1-420x280_cf20020c.jpg",
  },
];

export default function ComponentsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
        <div
          ref={headerRef}
          className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Supply Chain
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em]"
            >
              Components We Offer
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-md text-right text-[14px] leading-relaxed text-muted"
          >
            Custom or mass production capabilities for your assembly line. One
            of our strengths is working with customers at the design phase.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20 lg:pl-28">
        {components.map((comp, i) => (
          <motion.div
            key={comp.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-[400px] flex-shrink-0 md:w-[480px]"
          >
            <Link href="/components" className="group block">
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={comp.image}
                  alt={comp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="460px"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
              <div className="px-1 pt-1">
                <h3 className="font-serif text-xl text-charcoal transition-colors group-hover:text-brass">
                  {comp.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.8] text-muted">
                  {comp.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
