"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const productInterests = [
  "Cylinder & Cube Tables",
  "Occasional Tables",
  "Benches",
  "Lounge Seating",
  "Conference Table Bases",
  "Wood Components",
  "Metal Components",
  "Other / Custom",
];

const volumeRanges = [
  "Prototype / Sample",
  "1–50 units",
  "50–500 units",
  "500–5,000 units",
  "5,000+ units",
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  function toggleProduct(product: string) {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[45vh] items-end overflow-hidden pb-24 pt-48">
          <Image
            src="/images/CompleteFeatureSlider-539x367_7ac3ec23.jpg"
            alt="Gilmore Furniture manufacturing"
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
              Get Started
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
              Request a Quote
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/45"
            >
              Tell us about your project and we&apos;ll provide a detailed
              proposal. Most quotes are returned within two business days.
            </motion.p>
          </div>
        </section>

        {/* Form section */}
        <section className="bg-linen py-32 lg:py-40">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <div className="grid gap-20 lg:grid-cols-[1fr_380px] lg:gap-28">
              {/* Form */}
              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center rounded-sm border border-charcoal/5 bg-white px-12 py-28 text-center"
                  >
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-brass/10">
                      <svg
                        className="h-7 w-7 text-brass"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="font-serif text-3xl font-light text-charcoal">
                      Thank You
                    </h2>
                    <p className="mt-4 max-w-md text-[15px] leading-[1.8] text-muted">
                      We&apos;ve received your request and will be in touch
                      within two business days. For immediate assistance, call us
                      at{" "}
                      <a
                        href="tel:616-475-5100"
                        className="text-brass transition-colors hover:text-brass-light"
                      >
                        616-475-5100
                      </a>
                      .
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                  >
                    {/* Contact info */}
                    <fieldset>
                      <legend className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                        Contact Information
                      </legend>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full border border-charcoal/10 bg-white px-5 py-4 text-[14px] text-charcoal outline-none transition-colors focus:border-brass"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full border border-charcoal/10 bg-white px-5 py-4 text-[14px] text-charcoal outline-none transition-colors focus:border-brass"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full border border-charcoal/10 bg-white px-5 py-4 text-[14px] text-charcoal outline-none transition-colors focus:border-brass"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full border border-charcoal/10 bg-white px-5 py-4 text-[14px] text-charcoal outline-none transition-colors focus:border-brass"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="company"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="w-full border border-charcoal/10 bg-white px-5 py-4 text-[14px] text-charcoal outline-none transition-colors focus:border-brass"
                          />
                        </div>
                      </div>
                    </fieldset>

                    {/* Product interest */}
                    <fieldset>
                      <legend className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                        Product Interest
                      </legend>
                      <p className="mb-6 text-[13px] text-muted">
                        Select all that apply.
                      </p>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {productInterests.map((product) => (
                          <button
                            key={product}
                            type="button"
                            onClick={() => toggleProduct(product)}
                            className={`border px-4 py-3.5 text-[12px] leading-snug transition-all duration-300 ${
                              selectedProducts.includes(product)
                                ? "border-brass bg-brass/10 text-charcoal"
                                : "border-charcoal/10 bg-white text-muted hover:border-charcoal/25"
                            }`}
                          >
                            {product}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    {/* Volume */}
                    <fieldset>
                      <legend className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                        Estimated Annual Volume
                      </legend>
                      <div className="flex flex-wrap gap-3">
                        {volumeRanges.map((range) => (
                          <label key={range} className="cursor-pointer">
                            <input
                              type="radio"
                              name="volume"
                              value={range}
                              className="peer sr-only"
                            />
                            <span className="block border border-charcoal/10 bg-white px-5 py-3.5 text-[12px] text-muted transition-all duration-300 peer-checked:border-brass peer-checked:bg-brass/10 peer-checked:text-charcoal hover:border-charcoal/25">
                              {range}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Project details */}
                    <fieldset>
                      <legend className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                        Project Details
                      </legend>
                      <div className="space-y-6">
                        <div>
                          <label
                            htmlFor="timeline"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            Target Timeline
                          </label>
                          <input
                            type="text"
                            id="timeline"
                            name="timeline"
                            placeholder="e.g., Q3 2026, 6 months, ASAP"
                            className="w-full border border-charcoal/10 bg-white px-5 py-4 text-[14px] text-charcoal placeholder:text-charcoal/25 outline-none transition-colors focus:border-brass"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="mb-2 block text-[13px] text-muted"
                          >
                            Tell us about your project *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            placeholder="Describe your project requirements, specifications, materials, or any questions you have..."
                            className="w-full resize-none border border-charcoal/10 bg-white px-5 py-4 text-[14px] leading-[1.8] text-charcoal placeholder:text-charcoal/25 outline-none transition-colors focus:border-brass"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      className="group relative overflow-hidden border border-brass px-14 py-5 text-[12px] uppercase tracking-[0.2em] text-brass transition-all duration-500 hover:text-white"
                    >
                      <span className="relative z-10">Submit Request</span>
                      <span className="absolute inset-0 z-0 translate-y-full bg-brass transition-transform duration-500 group-hover:translate-y-0" />
                    </button>
                  </motion.form>
                )}
              </div>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-10 lg:sticky lg:top-36 lg:self-start"
              >
                <div className="rounded-sm border border-charcoal/5 bg-white p-10">
                  <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                    Direct Contact
                  </h3>
                  <div className="space-y-5 text-[14px]">
                    <div>
                      <span className="mb-1 block text-[12px] text-muted">
                        Phone
                      </span>
                      <a
                        href="tel:616-475-5100"
                        className="text-charcoal transition-colors hover:text-brass"
                      >
                        616-475-5100
                      </a>
                    </div>
                    <div>
                      <span className="mb-1 block text-[12px] text-muted">
                        Email
                      </span>
                      <a
                        href="mailto:info@gilmorefurnitureinc.com"
                        className="text-charcoal transition-colors hover:text-brass"
                      >
                        info@gilmorefurnitureinc.com
                      </a>
                    </div>
                    <div>
                      <span className="mb-1 block text-[12px] text-muted">
                        Address
                      </span>
                      <p className="leading-[1.7] text-charcoal">
                        321 Terminal Street SW
                        <br />
                        Grand Rapids, MI 49548
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-sm border border-charcoal/5 bg-white p-10">
                  <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                    What to Expect
                  </h3>
                  <ol className="space-y-5">
                    {[
                      {
                        step: "01",
                        text: "We review your requirements and specifications",
                      },
                      {
                        step: "02",
                        text: "Our team prepares a detailed proposal with pricing",
                      },
                      {
                        step: "03",
                        text: "We schedule a call to discuss next steps",
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="shrink-0 font-serif text-lg text-brass/40">
                          {item.step}
                        </span>
                        <p className="text-[13px] leading-[1.7] text-muted">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-sm bg-charcoal p-10">
                  <p className="text-[13px] leading-[1.8] text-white/40">
                    &ldquo;Gilmore has been an outstanding manufacturing
                    partner. Their quality and reliability are unmatched in the
                    contract furniture industry.&rdquo;
                  </p>
                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-brass">
                    — Industry Partner
                  </p>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
