"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const partners = [
  { name: "Steelcase", logo: "/images/steelcase_49b8dead.gif" },
  { name: "Haworth", logo: "/images/haworth_87461589.gif" },
  { name: "Kimball", logo: "/images/kimball_ebd6efb2.jpg" },
  { name: "HBF", logo: "/images/hbf_b9884d38.gif" },
  { name: "HON", logo: "/images/hon_d66e289b.gif" },
  { name: "Coalesse", logo: "/images/coalesse_b187b1fe.jpg" },
  { name: "Cumberland", logo: "/images/cumberland_81273bc1.jpg" },
  { name: "OFS", logo: "/images/OFS_47bdcf2d.jpg" },
  { name: "Tuohy", logo: "/images/tuohy_44e5bcf4.gif" },
  { name: "JSI", logo: "/images/jsi_5ed4811f.gif" },
  { name: "Brayton", logo: "/images/brayton_2a3eceda.gif" },
  { name: "Martin Brattrud", logo: "/images/martinbrattud_e6cb59ea.gif" },
  { name: "Nevins Ltd", logo: "/images/NevinsLtd_842c3fbb.jpg" },
  { name: "Agati", logo: "/images/agati_62e99788.gif" },
  { name: "Berco", logo: "/images/berco_ebbe1cd7.jpg" },
  { name: "Neudorfer", logo: "/images/neudorfer_0b12a145.gif" },
  { name: "Worden", logo: "/images/worden_91e36845.gif" },
  { name: "Westing Nielsen", logo: "/images/westinnielsen_23dccfff.gif" },
];

export default function CustomersPage() {
  return (
    <>

      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/Customers_6c052355.jpg"
            alt="Gilmore Furniture partners"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass"
            >
              Trusted Partnerships
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
              Our Customers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              We&apos;re proud to serve the leaders of the contract furniture
              industry. Our partnerships are built on trust, quality, and a
              shared commitment to excellence.
            </motion.p>
          </div>
        </section>

        {/* Partners grid */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Industry Leaders
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-charcoal">
                Partnering with the Best
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] text-muted">
                From Fortune 500 furniture brands to specialized manufacturers,
                Gilmore is the trusted OEM partner for companies that demand the
                highest quality.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6">
              {partners.map((partner, i) => (
                <FadeIn
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col items-center justify-center rounded-sm border border-stone bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-8"
                >
                  <div className="relative h-12 w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain grayscale transition-all duration-500 hover:grayscale-0"
                      sizes="150px"
                    />
                  </div>
                  <span className="mt-4 text-xs uppercase tracking-[0.1em] text-muted">
                    {partner.name}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Products in the Wild */}
        <section className="bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                In the Field
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-charcoal">
                Our Products, Your Brand
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.9] text-muted">
                Gilmore-manufactured furniture and components in real customer
                settings — lobbies, offices, conference rooms, and public spaces
                around the country.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  image: "/images/Customers%20Page/cumberland_Spanner_slide_13_Environment_1151-024.jpg",
                  caption: "Occasional tables in a hospitality setting",
                },
                {
                  image: "/images/Customers%20Page/cumberland_ENV_circo_venlo_001-1.jpg",
                  caption: "Venlo lounge seating for contract interiors",
                },
                {
                  image: "/images/Customers%20Page/cumberland_ENV_current_port_current_001.jpg",
                  caption: "Custom table designs for commercial spaces",
                },
                {
                  image: "/images/Customers%20Page/cumberland_DET_revo_001.jpg",
                  caption: "Material detail and finish quality",
                },
                {
                  image: "/images/Customers%20Page/cumberland_DET_BN_pax_001.jpg",
                  caption: "Wood and metal integration for modern furniture",
                },
                {
                  image: "/images/Customers%20Page/cumberland_ENV_alton_002.jpg",
                  caption: "Bench seating for lobby and public areas",
                },
              ].map((item, i) => (
                <FadeIn
                  key={item.image}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * i }}
                  className="group overflow-hidden rounded-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-muted/70">
                    {item.caption}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-charcoal py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl text-center"
            >
              <span className="mb-10 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Why They Choose Us
              </span>
              <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.4] text-white/80">
                &ldquo;Quality, consistency, and a true understanding of
                contract furniture manufacturing. Gilmore delivers what others
                promise.&rdquo;
              </blockquote>
              <div className="mt-10 h-[1px] mx-auto w-16 bg-brass/40" />
              <p className="mt-8 text-[15px] leading-[1.9] text-white/70">
                Our customers return year after year because we treat every
                project — whether 10 pieces or 10,000 — with the same
                dedication to precision and quality.
              </p>
              <Button
                href="/quote"
                variant="primary"
                className="mt-12 inline-block"
              >
                Become a Partner
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
