"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DefenseNavigation from "@/components/defense/DefenseNavigation";
import DefenseFooter from "@/components/defense/DefenseFooter";

const capabilityInterests = [
  "Metal Fabrication",
  "Tactical Textiles / Cut & Sew",
  "CNC Machining",
  "Assembly & Integration",
  "Waterjet Cutting",
  "Welding",
  "Finishing / Powder Coat",
  "Other / Custom",
];

const marketSegments = [
  "Defense / Military",
  "Naval / Marine",
  "Aerospace",
  "Government / GSA",
  "Healthcare",
  "Industrial OEM",
];

const inquiryTypes = [
  "Request Capability Statement",
  "RFQ / Request for Quote",
  "Program Discussion",
  "Facility Tour",
  "General Inquiry",
];

export default function DefenseContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([]);

  function toggleCapability(cap: string) {
    setSelectedCapabilities((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>

      <DefenseNavigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[45vh] items-end overflow-hidden pb-24 pt-48">
          <Image
            src="/images/ComponentsFeatureSlider-539x367_112a0e6d.jpg"
            alt="Manufacturing precision"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#070b14]/92" />
          <div className="defense-grid-bg absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-[#c8a24d]"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.02em] text-[#f1f5f9]"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[#94a3b8]"
            >
              Request a capability statement, submit an RFQ, or start a
              conversation about your manufacturing requirements.
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-[#111827] py-32 lg:py-40">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid gap-20 lg:grid-cols-[1fr_380px] lg:gap-28">
              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center border border-white/[0.06] bg-[#0c1220] px-12 py-28 text-center"
                  >
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a24d]/10">
                      <svg
                        className="h-7 w-7 text-[#c8a24d]"
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
                    <h2 className="text-3xl font-light text-[#f1f5f9]">
                      Message Received
                    </h2>
                    <p className="mt-4 max-w-md text-[15px] leading-[1.8] text-[#94a3b8]">
                      We&apos;ve received your inquiry and will respond within
                      one business day. For immediate assistance, call us at{" "}
                      <a
                        href="tel:616-475-5100"
                        className="text-[#c8a24d] transition-colors hover:text-[#d4b162]"
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
                    {/* Inquiry Type */}
                    <fieldset>
                      <legend className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Inquiry Type
                      </legend>
                      <div className="flex flex-wrap gap-3">
                        {inquiryTypes.map((type) => (
                          <label key={type} className="cursor-pointer">
                            <input
                              type="radio"
                              name="inquiryType"
                              value={type}
                              className="peer sr-only"
                            />
                            <span className="block border border-white/[0.06] bg-[#0c1220] px-5 py-3.5 text-[12px] text-[#94a3b8] transition-all duration-300 peer-checked:border-[#c8a24d]/40 peer-checked:bg-[#c8a24d]/10 peer-checked:text-[#f1f5f9] hover:border-white/[0.12]">
                              {type}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Contact Info */}
                    <fieldset>
                      <legend className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Contact Information
                      </legend>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="mb-2 block text-[13px] text-[#94a3b8]">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] outline-none transition-colors focus:border-[#c8a24d]/40 placeholder:text-[#475569]"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] outline-none transition-colors focus:border-[#c8a24d]/40 placeholder:text-[#475569]"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] outline-none transition-colors focus:border-[#c8a24d]/40 placeholder:text-[#475569]"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] outline-none transition-colors focus:border-[#c8a24d]/40 placeholder:text-[#475569]"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Company / Organization *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] outline-none transition-colors focus:border-[#c8a24d]/40 placeholder:text-[#475569]"
                          />
                        </div>
                        <div>
                          <label htmlFor="title" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Title / Role
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] outline-none transition-colors focus:border-[#c8a24d]/40 placeholder:text-[#475569]"
                          />
                        </div>
                      </div>
                    </fieldset>

                    {/* Market Segment */}
                    <fieldset>
                      <legend className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Market Segment
                      </legend>
                      <div className="flex flex-wrap gap-3">
                        {marketSegments.map((segment) => (
                          <label key={segment} className="cursor-pointer">
                            <input
                              type="radio"
                              name="market"
                              value={segment}
                              className="peer sr-only"
                            />
                            <span className="block border border-white/[0.06] bg-[#0c1220] px-5 py-3.5 text-[12px] text-[#94a3b8] transition-all duration-300 peer-checked:border-[#c8a24d]/40 peer-checked:bg-[#c8a24d]/10 peer-checked:text-[#f1f5f9] hover:border-white/[0.12]">
                              {segment}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* Capability Interest */}
                    <fieldset>
                      <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Capabilities of Interest
                      </legend>
                      <p className="mb-6 text-[13px] text-[#64748b]">
                        Select all that apply.
                      </p>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {capabilityInterests.map((cap) => (
                          <button
                            key={cap}
                            type="button"
                            onClick={() => toggleCapability(cap)}
                            className={`border px-4 py-3.5 text-[12px] leading-snug transition-all duration-300 ${
                              selectedCapabilities.includes(cap)
                                ? "border-[#c8a24d]/40 bg-[#c8a24d]/10 text-[#f1f5f9]"
                                : "border-white/[0.06] bg-[#0c1220] text-[#94a3b8] hover:border-white/[0.12]"
                            }`}
                          >
                            {cap}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    {/* Project Details */}
                    <fieldset>
                      <legend className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                        Project Details
                      </legend>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="program" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Program / Project Name
                          </label>
                          <input
                            type="text"
                            id="program"
                            name="program"
                            placeholder="e.g., Vehicle Modernization Program, GSA Schedule Fulfillment"
                            className="w-full border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] text-[#f1f5f9] placeholder:text-[#475569] outline-none transition-colors focus:border-[#c8a24d]/40"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="mb-2 block text-[13px] text-[#94a3b8]">
                            Tell us about your requirements *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            placeholder="Describe your manufacturing needs, specifications, materials, quantities, timeline, or any questions..."
                            className="w-full resize-none border border-white/[0.06] bg-[#0c1220] px-5 py-4 text-[14px] leading-[1.8] text-[#f1f5f9] placeholder:text-[#475569] outline-none transition-colors focus:border-[#c8a24d]/40"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      className="group relative overflow-hidden border border-[#c8a24d] px-14 py-5 text-[12px] uppercase tracking-[0.2em] text-[#c8a24d] transition-all duration-500 hover:text-[#070b14]"
                    >
                      <span className="relative z-10">Submit Inquiry</span>
                      <span className="absolute inset-0 z-0 translate-y-full bg-[#c8a24d] transition-transform duration-500 group-hover:translate-y-0" />
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
                <div className="border border-white/[0.06] bg-[#0c1220] p-7 sm:p-10">
                  <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                    Direct Contact
                  </h3>
                  <div className="space-y-5 text-[14px]">
                    <div>
                      <span className="mb-1 block text-[12px] text-[#64748b]">Phone</span>
                      <a
                        href="tel:616-475-5100"
                        className="text-[#f1f5f9] transition-colors hover:text-[#c8a24d]"
                      >
                        616-475-5100
                      </a>
                    </div>
                    <div>
                      <span className="mb-1 block text-[12px] text-[#64748b]">Email</span>
                      <a
                        href="mailto:defense@gilmorefurnitureinc.com"
                        className="text-[#f1f5f9] transition-colors hover:text-[#c8a24d]"
                      >
                        defense@gilmorefurnitureinc.com
                      </a>
                    </div>
                    <div>
                      <span className="mb-1 block text-[12px] text-[#64748b]">Address</span>
                      <p className="leading-[1.7] text-[#f1f5f9]">
                        321 Terminal Street SW
                        <br />
                        Grand Rapids, MI 49548
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/[0.06] bg-[#0c1220] p-7 sm:p-10">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                    What to Expect
                  </h3>
                  <ol className="space-y-5">
                    {[
                      {
                        step: "01",
                        text: "We review your requirements and identify the right team members",
                      },
                      {
                        step: "02",
                        text: "We respond within one business day with initial assessment",
                      },
                      {
                        step: "03",
                        text: "We schedule a call or facility visit to discuss details",
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="shrink-0 text-lg text-[#c8a24d]/40">
                          {item.step}
                        </span>
                        <p className="text-[13px] leading-[1.7] text-[#94a3b8]">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-[#c8a24d]/5 border border-[#c8a24d]/20 p-7 sm:p-10">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c8a24d]">
                    Capability Statement
                  </h3>
                  <p className="text-[13px] leading-[1.8] text-[#94a3b8]">
                    Need a formal capability statement for your procurement
                    records? Select &ldquo;Request Capability Statement&rdquo;
                    above and we&apos;ll send a comprehensive PDF within 24
                    hours.
                  </p>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
      <DefenseFooter />
    </>
  );
}
