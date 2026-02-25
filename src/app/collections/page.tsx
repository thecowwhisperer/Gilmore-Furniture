"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const products = [
  {
    title: "Cylinder & Cube Tables",
    description:
      "The ubiquitous cylinder table has been around for more than 40 years and is still a popular table. We are specialists at producing these monoform tables in veneer, laminate, metal; unfinished or finished.",
    image: "/images/CylinderTables-350x450_73bb2661.jpg",
    category: "Complete Solution",
  },
  {
    title: "Occasional Tables",
    description:
      "We produce many different types of occasional tables for our customers in the Contract Furniture industry, complete and ready to finish or finished and boxed per order.",
    image: "/images/Tusk-Tables-359x423_b8c23323.jpg",
    category: "Complete Solution",
  },
  {
    title: "Benches",
    description:
      "As one of the leading bench suppliers for the leaders in the industry, Gilmore delivers high-quality seating according to a tailored delivery schedule.",
    image: "/images/Sirra-Bench-370x443_8c2ffa0c.jpg",
    category: "Complete Solution",
  },
  {
    title: "Lounge Seating",
    description:
      "Fine products upholstered in either leather or fabric, crafted with an incredible attention to detail and outstanding durability.",
    image: "/images/Venlo-Lounge-Pair-418x323_57c611d7.jpg",
    category: "Complete Solution",
  },
  {
    title: "Conference Table Bases",
    description:
      "Grade A select and balanced veneer faces laminated over a smooth and concentric core, fully enclosed ends with moisture resistant bottoms.",
    image: "/images/WC18_Gilmore__57-420x280_cdfddacb.jpg",
    category: "Component",
  },
  {
    title: "Wood Furniture Components",
    description:
      "Table legs & rails, table skirts, table tops, table bases, bench parts, and door frames — available in any species, unfinished or completely finished.",
    image: "/images/WC18_Gilmore__65-293x449_c05f5377.jpg",
    category: "Component",
  },
  {
    title: "Metal Furniture Components",
    description:
      "Quality stainless steel, carbon steel, and aluminum fabrications. From simple components to complex parts with 25 years of experience.",
    image: "/images/WC18_Gilmore__15-420x280_3d793e9b.jpg",
    category: "Component",
  },
  {
    title: "Other Components",
    description:
      "Marine components for boat builders including rub rail, fittings, tubing, hinges, and polished 316 stainless steel hardware.",
    image: "/images/other-metal-components-1-420x280_cf20020c.jpg",
    category: "Component",
  },
];

export default function SolutionsPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero header */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg"
            alt="Complete furniture solutions"
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
              Our Products
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
              Solutions &amp; Components
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/45"
            >
              Gilmore Inc. is a resource for completely assembled wooden office
              furniture — manufactured per order or in small and medium sized
              runs. Acting as a dedicated partner, we maintain your design intent
              and quality standards.
            </motion.p>
          </div>
        </section>

        {/* Product grid */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <div className="grid gap-x-12 gap-y-24 md:grid-cols-2">
              {products.map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group"
                >
                  <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  </div>
                  <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-[1.6rem] font-light text-charcoal">
                    {product.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[14px] leading-[1.9] text-muted">
                    {product.description}
                  </p>
                  <Link
                    href="/quote"
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-brass"
                  >
                    Request Quote
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
