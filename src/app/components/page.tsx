"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const components = [
  {
    title: "Conference Table Bases",
    description:
      "Grade A select and balanced veneer faces laminated over a smooth and concentric core, fully enclosed ends with moisture resistant bottoms. Available in a wide range of species and finishes.",
    image: "/images/WC18_Gilmore__57-420x280_cdfddacb.jpg",
    gallery: [
      "/images/table-bases-1-153x316_ef8f19a2.jpg",
      "/images/table-bases-4-474x316_c7e0b984.jpg",
    ],
    features: [
      "Grade A select veneer faces",
      "Smooth, concentric core construction",
      "Moisture resistant bottoms",
      "Multiple species and finish options",
    ],
  },
  {
    title: "Wood Furniture Components",
    description:
      "Table legs & rails, table skirts, table tops, table bases, bench parts, and door frames — available in any species, unfinished or completely finished to your specification.",
    image: "/images/WC18_Gilmore__65-293x449_c05f5377.jpg",
    gallery: [
      "/images/GIL-DOOR_72-350x450_36b10918.jpg",
      "/images/GIL-DOOR_721-350x450_01393651.jpg",
    ],
    features: [
      "Table legs, rails, skirts, and tops",
      "Bench parts and door frames",
      "Any domestic or exotic species",
      "Unfinished or completely finished",
    ],
  },
  {
    title: "Metal Furniture Components",
    description:
      "Quality stainless steel, carbon steel, and aluminum fabrications. From simple components to complex parts, backed by 25 years of metalworking experience.",
    image: "/images/WC18_Gilmore__15-420x280_3d793e9b.jpg",
    gallery: [
      "/images/metal-furniture-components-5-313x470_f6b09182.jpg",
      "/images/metal-furniture-components-6-631x421_4d07ae21.jpg",
    ],
    features: [
      "Stainless steel, carbon steel, aluminum",
      "Simple to complex fabrications",
      "Precision CNC machining",
      "25+ years of metalworking expertise",
    ],
  },
  {
    title: "Other Components",
    description:
      "Marine components for boat builders including rub rail, fittings, tubing, hinges, and polished 316 stainless steel hardware. Custom component solutions for specialty applications.",
    image: "/images/other-metal-components-1-420x280_cf20020c.jpg",
    gallery: [
      "/images/other-metal-components-7-314x209_c27a6d74.jpg",
      "/images/other-metal-components-8-313x209_773d7d3c.jpg",
    ],
    features: [
      "Marine-grade components",
      "Rub rail, fittings, and tubing",
      "Polished 316 stainless steel",
      "Custom specialty applications",
    ],
  },
];

export default function ComponentsPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/ComponentsFeatureSlider-539x367_112a0e6d.jpg"
            alt="Furniture components manufacturing"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative z-10 mx-auto w-full max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Supply Chain
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              Components
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/45"
            >
              Custom or mass production capabilities for your assembly line. One
              of our strengths is working with customers at the design phase to
              engineer components that meet exact specifications.
            </motion.p>
          </div>
        </section>

        {/* Components */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <div className="space-y-36 lg:space-y-44">
              {components.map((comp, i) => (
                <motion.div
                  key={comp.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
                      i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                      <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
                        Component
                      </span>
                      <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.1] text-charcoal">
                        {comp.title}
                      </h2>
                      <p className="mt-6 text-[15px] leading-[1.9] text-muted">
                        {comp.description}
                      </p>
                      <ul className="mt-8 space-y-4">
                        {comp.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-4 text-[14px] leading-[1.7] text-muted"
                          >
                            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brass" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/quote"
                        className="mt-10 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-brass"
                      >
                        Request Quote
                        <span className="transition-transform duration-300 hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                        i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <Image
                        src={comp.image}
                        alt={comp.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Gallery row */}
                  <div className="mt-12 grid grid-cols-2 gap-6">
                    {comp.gallery.map((img) => (
                      <div
                        key={img}
                        className="relative aspect-[3/2] overflow-hidden rounded-sm"
                      >
                        <Image
                          src={img}
                          alt={comp.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass">
                Engineering Partnership
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Need Custom Components?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/40">
                We work with your engineering team from the design phase through
                production. Whether you need a single prototype or a full
                production run, our facility is equipped to deliver.
              </p>
              <Link
                href="/quote"
                className="group relative mt-12 inline-block overflow-hidden border border-brass px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
