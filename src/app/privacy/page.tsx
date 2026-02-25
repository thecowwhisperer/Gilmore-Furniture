"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function PrivacyPage() {
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
              Privacy Policy
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
                  Information We Collect
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    When you visit our website, we may collect certain
                    information automatically, including your IP address, browser
                    type, referring URLs, and pages visited. When you submit a
                    quote request or contact form, we collect the personal
                    information you provide, such as your name, email address,
                    phone number, and company name.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  How We Use Your Information
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>We use the information we collect to:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Respond to your quote requests and inquiries</li>
                    <li>Improve our website and services</li>
                    <li>
                      Communicate with you about products, services, and company
                      updates
                    </li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Information Sharing
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties. We may share information with
                    trusted service providers who assist us in operating our
                    website and conducting our business, provided they agree to
                    keep this information confidential.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Data Security
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    We implement reasonable security measures to protect your
                    personal information. However, no method of transmission over
                    the internet or electronic storage is 100% secure, and we
                    cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Cookies
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    Our website may use cookies to enhance your browsing
                    experience. You can choose to disable cookies through your
                    browser settings, though this may affect certain website
                    functionality.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-light text-charcoal">
                  Contact Us
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted">
                  <p>
                    If you have questions about this Privacy Policy, please
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
