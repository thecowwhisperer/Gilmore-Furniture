"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { getPostBySlug, getRelatedPosts } from "../data";

export default function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/40" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <Link
                href="/blog"
                className="text-xs uppercase tracking-[0.4em] text-white/70 transition-colors duration-300 hover:text-brass"
              >
                Blog
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                {post.category}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 max-w-4xl font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brass/20 text-xs font-semibold uppercase text-brass">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <span className="block text-[13px] text-white/70">
                    {post.author.name}
                  </span>
                  <span className="block text-xs text-white/60">
                    {post.author.role}
                  </span>
                </div>
              </div>
              <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
              <span className="text-[13px] text-white/70">{post.date}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-white/40" />
              <span className="text-[13px] text-white/70">
                {post.readTime}
              </span>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-linen py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="mx-auto max-w-3xl">
              {post.content.map((block, i) => {
                if (block.type === "paragraph") {
                  return (
                    <FadeIn
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewportMargin="-30px"
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <p className="mb-8 text-[16px] leading-[2] text-muted">
                        {block.text}
                      </p>
                    </FadeIn>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <FadeIn
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewportMargin="-30px"
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <h2 className="mb-6 mt-16 font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-light leading-[1.3] text-charcoal">
                        {block.text}
                      </h2>
                    </FadeIn>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <FadeIn
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      viewportMargin="-30px"
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <blockquote className="my-14 border-l-2 border-brass py-2 pl-8">
                        <p className="font-serif text-xl italic leading-[1.8] text-charcoal/80">
                          {block.text}
                        </p>
                      </blockquote>
                    </FadeIn>
                  );
                }

                if (block.type === "image") {
                  return (
                    <FadeIn
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewportMargin="-30px"
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <figure className="my-14">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                          <Image
                            src={block.src!}
                            alt={block.alt || block.caption || post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 720px"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="mt-4 text-center text-[13px] italic text-muted">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    </FadeIn>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </section>

        {/* Share & Back */}
        <section className="border-t border-charcoal/10 bg-linen py-12">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="mx-auto flex max-w-3xl items-center justify-between">
              <Link
                href="/blog"
                className="group flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-brass"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  &larr;
                </span>
                Back to Blog
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-charcoal/50">
                  Share
                </span>
                <div className="ml-3 flex gap-4">
                  <button
                    className="text-[13px] text-muted transition-colors hover:text-brass"
                    aria-label="Copy link"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                  >
                    Link
                  </button>
                  <button
                    className="text-[13px] text-muted transition-colors hover:text-brass"
                    aria-label="Share on LinkedIn"
                    onClick={() => {
                      window.open(
                        `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                        "_blank",
                        "noopener",
                      );
                    }}
                  >
                    LinkedIn
                  </button>
                  <button
                    className="text-[13px] text-muted transition-colors hover:text-brass"
                    aria-label="Share via email"
                    onClick={() => {
                      window.location.href = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`;
                    }}
                  >
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Continue Reading
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-charcoal">
                Related Articles
              </h2>
            </FadeIn>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
              {relatedPosts.map((related, i) => (
                <FadeIn
                  key={related.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.8,
                    delay: 0.1 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                        {related.category}
                      </span>
                      <span className="h-[3px] w-[3px] rounded-full bg-charcoal/20" />
                      <span className="text-[12px] tracking-wide text-muted">
                        {related.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-light leading-[1.35] text-charcoal transition-colors duration-300 group-hover:text-brass">
                      {related.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                      {related.excerpt}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

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
                Partner With Us
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Ready to Work Together?
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Join the industry leaders who trust Gilmore as their dedicated
                manufacturing partner. Let&apos;s discuss how we can bring your
                designs to life.
              </p>
              <Link
                href="/quote"
                className="group relative mt-12 inline-block overflow-hidden border border-brass px-12 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
