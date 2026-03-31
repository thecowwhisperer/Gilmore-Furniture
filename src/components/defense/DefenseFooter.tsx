"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const footerLinks = {
  Capabilities: [
    { name: "Metal Fabrication", href: "/defense/capabilities" },
    { name: "Tactical Textiles", href: "/defense/capabilities" },
    { name: "Precision Machining", href: "/defense/capabilities" },
    { name: "Assembly & Integration", href: "/defense/capabilities" },
  ],
  Markets: [
    { name: "Defense & Military", href: "/defense/markets" },
    { name: "Naval & Marine", href: "/defense/markets" },
    { name: "Aerospace", href: "/defense/markets" },
    { name: "Government / GSA", href: "/defense/markets" },
  ],
  Company: [
    { name: "About Gilmore", href: "/defense/about" },
    { name: "Certifications", href: "/defense/certifications" },
    { name: "Contact", href: "/defense/contact" },
    { name: "Gilmore Furniture", href: "/" },
  ],
};

export default function DefenseFooter() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="border-t border-white/[0.06] bg-[#070b14]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 md:px-20 lg:px-28">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-[#c8a24d]/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-[#c8a24d]"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold tracking-[0.08em] text-[#f1f5f9]">
                    GILMORE
                  </span>
                  <span className="text-[9px] font-medium tracking-[0.25em] text-[#c8a24d]">
                    DEFENSE & INDUSTRIAL
                  </span>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-[14px] leading-[1.9] text-[#94a3b8]">
                Vertically integrated American manufacturer delivering precision
                metal fabrication, tactical textiles, and advanced machining for
                defense, military, and industrial applications.
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-[13px] text-[#94a3b8]">
                  <span className="font-medium text-[#f1f5f9]">Address:</span>{" "}
                  321 Terminal Street SW, Grand Rapids, MI 49548
                </p>
                <p className="text-[13px] text-[#94a3b8]">
                  <span className="font-medium text-[#f1f5f9]">Phone:</span>{" "}
                  <a
                    href="tel:616-475-5100"
                    className="transition-colors hover:text-[#c8a24d]"
                  >
                    616-475-5100
                  </a>
                </p>
                <p className="text-[13px] text-[#94a3b8]">
                  <span className="font-medium text-[#f1f5f9]">Email:</span>{" "}
                  <a
                    href="mailto:defense@gilmorefurnitureinc.com"
                    className="transition-colors hover:text-[#c8a24d]"
                  >
                    defense@gilmorefurnitureinc.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * (i + 1) }}
            >
              <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#f1f5f9]">
                {category}
              </h3>
              <ul className="flex flex-col gap-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#64748b] transition-colors hover:text-[#c8a24d]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-12 md:flex-row"
        >
          <p className="text-[12px] text-[#64748b]">
            &copy; {new Date().getFullYear()} Gilmore Furniture Inc. All rights
            reserved. A division of Gilmore Furniture Inc.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[12px] text-[#64748b] transition-colors hover:text-[#94a3b8]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-[#64748b] transition-colors hover:text-[#94a3b8]"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
