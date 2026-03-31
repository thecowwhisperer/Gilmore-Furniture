"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { posts, categories } from "./data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>

      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-charcoal pb-28 pt-48">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,155,110,0.08),transparent_70%)]" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Insights & Perspectives
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
              Furniture Manufacturing Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              Stories from the workshop floor — exploring craftsmanship,
              innovation, and the future of American furniture manufacturing.
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section
          className="border-b border-charcoal/10 bg-linen"
          aria-label="Filter by category"
        >
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div
              className="flex gap-6 overflow-x-auto py-6 scrollbar-hide sm:gap-10"
              role="tablist"
              aria-orientation="horizontal"
            >
              {categories.map((category, i) => {
                const selected = category === activeCategory;
                return (
                  <motion.button
                    key={category}
                    type="button"
                    role="tab"
                    id={`blog-tab-${category}`}
                    aria-selected={selected}
                    aria-controls="blog-posts-panel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-brass ${
                      selected ? "text-brass" : "text-muted"
                    }`}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost ? (
          <section
            id="blog-posts-panel"
            role="tabpanel"
            aria-labelledby={`blog-tab-${activeCategory}`}
            className="bg-linen py-24 lg:py-32"
          >
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group grid gap-12 lg:grid-cols-2 lg:gap-20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                        {featuredPost.category}
                      </span>
                      <span className="h-[3px] w-[3px] rounded-full bg-charcoal/20" />
                      <span className="text-[12px] tracking-wide text-muted">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="mt-6 font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light leading-[1.2] tracking-[-0.01em] text-charcoal transition-colors duration-300 group-hover:text-brass">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-6 text-[15px] leading-[1.9] text-muted">
                      {featuredPost.excerpt}
                    </p>
                    <span className="mt-8 text-[12px] tracking-wide text-muted">
                      {featuredPost.date}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </section>
        ) : (
          <section
            id="blog-posts-panel"
            className="bg-linen py-24 lg:py-32"
            aria-live="polite"
          >
            <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-10 md:px-20 lg:px-28">
              <p className="text-[15px] text-muted">
                No posts in this category yet.
              </p>
            </div>
          </section>
        )}

        {/* Post Grid */}
        {gridPosts.length > 0 && (
          <section className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
                {gridPosts.map((post, i) => (
                  <FadeIn
                    key={post.slug}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewportMargin="-50px"
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                          {post.category}
                        </span>
                        <span className="h-[3px] w-[3px] rounded-full bg-charcoal/20" />
                        <span className="text-[12px] tracking-wide text-muted">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mt-4 font-serif text-xl font-light leading-[1.35] text-charcoal transition-colors duration-300 group-hover:text-brass">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 block text-[12px] tracking-wide text-charcoal/50">
                        {post.date}
                      </span>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Get Started
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to discuss your next project?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Whether you need complete solutions, custom components, or
                engineering support — let&apos;s discuss how Gilmore can become
                your dedicated manufacturing partner.
              </p>
              <div className="mt-12 flex flex-col items-center gap-5">
                <Link
                  href="/quote"
                  className="group relative overflow-hidden border border-brass px-14 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
                >
                  <span className="relative z-10">Request a Quote</span>
                  <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
                </Link>
                <a
                  href="tel:616-475-5100"
                  className="text-[14px] text-white/70 transition-colors hover:text-white"
                >
                  or call 616-475-5100
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
