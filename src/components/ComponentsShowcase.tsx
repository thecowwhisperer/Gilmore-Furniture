"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const components = [
  {
    title: "Conference Table Bases",
    description:
      "Grade A select and balanced veneer faces laminated over a smooth and concentric core, with fully enclosed ends.",
    image: "/images/components/conference-table-bases/cumberland_WS_MT_metros_001.jpg",
  },
  {
    title: "Wood Furniture Components",
    description:
      "Table legs, rails, skirts, tops, bases, bench parts, and door frames in any species, unfinished or finished.",
    image: "/images/components/wood-furniture-components/wood%20components.jpg",
  },
  {
    title: "Metal Furniture Components",
    description:
      "Stainless steel, carbon steel, and aluminum fabrications from simple components to complex parts.",
    image: "/images/components/metal-furniture-components/metal%20components.jpg",
  },
  {
    title: "Other Components",
    description:
      "Marine components, rub rail, fittings, and polished 316 stainless steel hardware.",
    image: "/images/components/other-components/Generated%20Image%20March%2031%2C%202026%20-%201_36PM.jpg",
  },
];

export default function ComponentsShowcase() {
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.releasePointerCapture(e.pointerId);
      scrollRef.current.style.cursor = "";
    }
  }, []);

  return (
    <section className="overflow-hidden bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
        <div
          ref={headerRef}
          className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
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

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 pr-6 pb-4 sm:gap-10 sm:pl-10 md:pl-20 lg:pl-28 cursor-grab scrollbar-hide select-none"
      >
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
            className="w-[280px] flex-shrink-0 snap-start sm:w-[400px] md:w-[480px]"
          >
            <Link href="/components" className="group block" draggable={false}>
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={comp.image}
                  alt={comp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="460px"
                  draggable={false}
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
      </div>
    </section>
  );
}
