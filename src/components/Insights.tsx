"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "The Strategic Advantage of Domestic OEM Manufacturing",
    excerpt:
      "In an era of global supply chain uncertainty, partnering with an American manufacturer offers unmatched speed, quality control, and brand security.",
    date: "March 10, 2026",
    tag: "Manufacturing",
    image: "/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg",
  },
  {
    title: "Scaling Production: High-Volume Wood Components",
    excerpt:
      "How advanced CNC technology and skilled craftsmanship combine to deliver consistency at scale for office furniture leaders.",
    date: "February 14, 2026",
    tag: "Technology",
    image: "/images/ComponentsFeatureSlider-539x367_112a0e6d.jpg",
  },
  {
    title: "Grand Rapids: The Silicon Valley of Furniture",
    excerpt:
      "Why our location in West Michigan gives our partners access to the best talent and material resources in the world.",
    date: "January 22, 2026",
    tag: "Heritage",
    image: "/images/CraftsmanFeatureSlider-539x367_e2cc779a.jpg",
  },
];

export default function Insights() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-linen py-24 lg:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28"
      >
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
          >
            Industry Insights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] font-light"
          >
            Manufacturing Excellence
          </motion.h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-sm border border-stone bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-8"
            >
              <Link href="/blog" className="block">
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-brass" />
                  <span className="text-brass">{post.tag}</span>
                </div>
                <h3 className="font-serif text-[1.4rem] font-light leading-[1.3] text-charcoal transition-colors group-hover:text-brass">
                  {post.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-charcoal transition-colors group-hover:text-brass">
                  Read Article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
