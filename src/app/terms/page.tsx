"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function TermsPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pb-20 pt-48">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Legal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[clamp(3rem,7vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] text-white"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 text-[14px] text-white/40"
            >
              Last updated: February 2026
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-linen py-28 lg:py-36">
          <div className="mx-auto max-w-[1800px] px-10 md:px-20 lg:px-28">
            <div className="mx-auto max-w-3xl space-y-16">
              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Acceptance of Terms
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    By accessing and using the Gilmore Furniture Inc. website,
                    you accept and agree to be bound by these Terms of Service.
                    If you do not agree to these terms, please do not use our
                    website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Use of Website
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    This website is provided for informational purposes and to
                    facilitate business inquiries. You agree to use the website
                    only for lawful purposes and in a way that does not infringe
                    on the rights of others or restrict their use of the
                    website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Intellectual Property
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    All content on this website — including text, images,
                    graphics, logos, and design — is the property of Gilmore
                    Furniture Inc. and is protected by applicable intellectual
                    property laws. You may not reproduce, distribute, or create
                    derivative works from any content without our express written
                    permission.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Quote Requests
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    Submitting a quote request through our website does not
                    constitute a binding agreement. All quotes provided by
                    Gilmore Furniture Inc. are estimates and are subject to
                    change based on final specifications, materials, and project
                    scope. A formal agreement will be established through a
                    separate contract.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Limitation of Liability
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    Gilmore Furniture Inc. shall not be liable for any direct,
                    indirect, incidental, or consequential damages resulting from
                    the use or inability to use this website. We make no
                    warranties, expressed or implied, regarding the accuracy or
                    completeness of the information on this website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Governing Law
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    These Terms of Service shall be governed by and construed in
                    accordance with the laws of the State of Michigan, without
                    regard to conflict of law provisions.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Changes to Terms
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    We reserve the right to modify these Terms of Service at any
                    time. Changes will be effective immediately upon posting to
                    this website. Your continued use of the website after changes
                    constitutes acceptance of the updated terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Contact Us
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    If you have questions about these Terms of Service, please
                    contact us at:
                  </p>
                  <p>
                    Gilmore Furniture Inc.
                    <br />
                    321 Terminal Street SW
                    <br />
                    Grand Rapids, MI 49548
                    <br />
                    <a
                      href="mailto:info@gilmorefurnitureinc.com"
                      className="text-brass transition-colors hover:text-charcoal"
                    >
                      info@gilmorefurnitureinc.com
                    </a>
                    <br />
                    <a
                      href="tel:616-475-5100"
                      className="text-brass transition-colors hover:text-charcoal"
                    >
                      616-475-5100
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
