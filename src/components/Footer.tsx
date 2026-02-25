"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Solutions: [
    { name: "Cylinder & Cube Tables", href: "/solutions" },
    { name: "Occasional Tables", href: "/solutions" },
    { name: "Benches", href: "/solutions" },
    { name: "Lounge Seating", href: "/solutions" },
  ],
  Components: [
    { name: "Conference Table Bases", href: "/components" },
    { name: "Wood Components", href: "/components" },
    { name: "Metal Components", href: "/components" },
    { name: "Other Components", href: "/components" },
  ],
  Company: [
    { name: "Our Story", href: "/story" },
    { name: "Mission & Values", href: "/mission" },
    { name: "Customers", href: "/customers" },
    { name: "Careers", href: "/careers" },
    { name: "Capabilities", href: "/capabilities" },
  ],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="border-t border-charcoal/5 bg-linen">
      <div className="mx-auto max-w-[1800px] px-10 py-28 md:px-20 lg:px-28">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/Gilmore-Logo_9f627029.png"
                alt="Gilmore Furniture Inc."
                width={160}
                height={40}
                className="h-8 w-auto"
              />
              <p className="mt-6 max-w-sm text-[14px] leading-[1.9] text-muted">
                Premier American OEM manufacturer of contract furniture and
                components. Partnering with industry leaders since 1983 from our
                workshop in Grand Rapids, Michigan.
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-[13px] text-muted">
                  <span className="font-medium text-charcoal">Address:</span>{" "}
                  321 Terminal Street SW, Grand Rapids, MI 49548
                </p>
                <p className="text-[13px] text-muted">
                  <span className="font-medium text-charcoal">Phone:</span>{" "}
                  <a
                    href="tel:616-475-5100"
                    className="transition-colors hover:text-brass"
                  >
                    616-475-5100
                  </a>
                </p>
                <p className="text-[13px] text-muted">
                  <span className="font-medium text-charcoal">Email:</span>{" "}
                  <a
                    href="mailto:info@gilmorefurnitureinc.com"
                    className="transition-colors hover:text-brass"
                  >
                    info@gilmorefurnitureinc.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * (i + 1) }}
            >
              <h3 className="mb-7 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal">
                {category}
              </h3>
              <ul className="flex flex-col gap-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted transition-colors hover:text-charcoal"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-charcoal/5 pt-12 md:flex-row"
        >
          <p className="text-[12px] text-muted">
            &copy; {new Date().getFullYear()} Gilmore Furniture Inc. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[12px] text-muted transition-colors hover:text-charcoal"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-muted transition-colors hover:text-charcoal"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
