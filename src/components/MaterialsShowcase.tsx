"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const materials = [
  {
    title: "Solid Wood",
    description: "Domestic and exotic species — oak, walnut, maple, cherry, ash, and more.",
    image: "/images/Materials/Maple/maple.jpg",
  },
  {
    title: "Stone & Glass",
    description: "Integrated with wood and metal frames for complete furniture assemblies.",
    image: "/images/Materials/Stone%20%26%20Glass/glass.jpg",
  },
  {
    title: "Stainless & Carbon Steel",
    description: "Polished, brushed, or powder coated — from furniture components to marine hardware.",
    image: "/images/Materials/Stainless%20%26%20Carbon%20Steel/steel.jpg",
  },
  {
    title: "Leather & Fabric",
    description: "Contract-grade upholstery materials crafted by trained artisans.",
    image: "/images/Materials/Leather%20%26%20Fabric/leather.jpg",
  },
  {
    title: "Aluminum",
    description: "Lightweight fabrications machined and finished to precision tolerances.",
    image: "/images/Materials/Aluminum/aluminum.jpg",
  },
  {
    title: "Veneer & Laminate",
    description: "Grade A select veneer faces and premium laminates for wrapping complex shapes.",
    image: "/images/Materials/Veneer%20%26%20Laminate/laminate.jpg",
  },
];

export default function MaterialsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
        <div ref={ref} className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
          >
            Material Expertise
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
            The Materials We Work With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted"
          >
            From domestic hardwoods to polished stainless steel, every material
            is selected and handled with the precision it deserves.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden rounded-sm border border-charcoal/8"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="bg-linen/50 p-6">
                <h3 className="font-serif text-lg text-charcoal">
                  {mat.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-muted">
                  {mat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
