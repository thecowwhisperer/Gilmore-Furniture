"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const timeline = [
  {
    year: "1830s",
    title: "Lumber & the Grand River",
    description:
      "Vast white-pine forests and the Grand River made the region a natural hub for lumber milling. Sawmills lined the riverbanks, and the raw material for a furniture empire was abundant and cheap.",
  },
  {
    year: "1876",
    title: "The Centennial Exposition",
    description:
      "Grand Rapids manufacturers displayed their wares at the Philadelphia Centennial Exposition, stunning the nation with quality that rivaled the finest Eastern and European makers. Orders flooded in overnight.",
  },
  {
    year: "Early 1900s",
    title: '"Furniture City" at Its Peak',
    description:
      "By the turn of the century, dozens of furniture companies operated in Grand Rapids, and the city produced more furniture than anywhere else in America. The semi-annual Grand Rapids Furniture Market drew buyers from coast to coast.",
  },
  {
    year: "Mid-1900s",
    title: "The Contract Furniture Era",
    description:
      "As the industry evolved, Grand Rapids pivoted toward office and contract furniture — a shift that gave rise to Steelcase, Herman Miller, and Haworth. The city's identity deepened from craft to innovation.",
  },
  {
    year: "1983",
    title: "Gilmore Is Founded",
    description:
      "Gilmore Furniture Inc. opened its doors in Grand Rapids, building on the city's 150-year manufacturing tradition. From day one, the mission was clear: American-made quality, built with craft and integrity.",
  },
  {
    year: "Today",
    title: "A Living Legacy",
    description:
      "Grand Rapids remains the heart of American furniture manufacturing. Gilmore continues the tradition from a 150,000 sq ft facility, pairing generations of craft knowledge with advanced CNC and finishing technology.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Skilled Workforce",
    description:
      "Generations of furniture-making have created a deep talent pool — machinists, finishers, upholsterers, and engineers who grew up around the craft.",
  },
  {
    number: "02",
    title: "Supply Chain Heritage",
    description:
      "Hardwood suppliers, hardware vendors, finishing specialists, and logistics partners are all within reach, built up over more than a century of industry concentration.",
  },
  {
    number: "03",
    title: "Manufacturing Infrastructure",
    description:
      "Purpose-built facilities, specialized tooling suppliers, and a culture of continuous investment in equipment keep Grand Rapids at the leading edge of production capability.",
  },
  {
    number: "04",
    title: "Culture of Craft",
    description:
      "This city doesn't just make furniture — it takes pride in it. Quality is a point of identity, not just a business metric, and that ethos permeates every shop floor.",
  },
];

export default function GrandRapidsContent() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-28 pt-48">
          <Image
            src="/images/EdisonLightPlant_01_edit_d44d23a2.jpg"
            alt="Historic Grand Rapids, Michigan"
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
              Furniture Capital of America
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
              Grand Rapids Heritage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-2xl text-[16px] leading-relaxed text-white/70"
            >
              For over 150 years, Grand Rapids, Michigan has been the beating
              heart of American furniture. Our roots run deep in this storied
              tradition.
            </motion.p>
          </div>
        </section>

        {/* City History */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <Image
                  src="/images/WC18_Gilmore__47_f67ac56a.jpg"
                  alt="Gilmore Furniture workshop in Grand Rapids"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  A City Built on Craft
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] tracking-[-0.01em] text-charcoal">
                  The making of
                  <br />
                  <span className="text-muted">Furniture City.</span>
                </h2>
                <div className="mt-10 h-[2px] w-20 bg-brass" />
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted">
                  <p>
                    In the 1830s, the vast white-pine forests surrounding the
                    Grand River drew lumber mills to western Michigan. Within
                    decades, enterprising craftsmen realized they could turn that
                    lumber into finished furniture right where it was
                    harvested — and Grand Rapids was born as a manufacturing
                    city.
                  </p>
                  <p>
                    The 1876 Philadelphia Centennial Exposition was the turning
                    point. Grand Rapids exhibitors earned national recognition
                    for quality and value, and the city quickly became the
                    furniture capital of the United States — a title it has never
                    fully relinquished.
                  </p>
                  <p>
                    By the early 1900s, the Grand Rapids Furniture Market was one
                    of the most important trade events in America, drawing buyers
                    from every state. The city&apos;s name became synonymous with
                    craftsmanship, integrity, and the American-made ideal.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                A Storied Timeline
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                150+ Years of Furniture Making
              </h2>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-[112px] top-0 hidden h-full w-[1px] bg-charcoal/10 md:block" />
              <div className="space-y-16 md:space-y-20">
                {timeline.map((milestone, i) => (
                  <FadeIn
                    key={milestone.year}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewportMargin="-50px"
                    transition={{
                      duration: 0.8,
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid md:grid-cols-[80px_1fr] md:gap-16"
                  >
                    <div className="relative mb-4 md:mb-0">
                      <span className="font-serif text-2xl font-light text-brass">
                        {milestone.year}
                      </span>
                      <div className="absolute left-[106px] top-3 hidden h-3 w-3 rounded-full border-2 border-brass bg-white md:block" />
                    </div>
                    <div className="rounded-sm border border-stone bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-10">
                      <h3 className="font-serif text-xl text-charcoal">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.8] text-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Grand Rapids */}
        <section className="bg-linen py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <FadeIn
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center"
            >
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                Why It Matters
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">
                The Grand Rapids Advantage
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-muted">
                Being rooted in Grand Rapids isn&apos;t just geography — it&apos;s
                access to an ecosystem that has been perfecting furniture
                manufacturing for over a century.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {advantages.map((item, i) => (
                <FadeIn
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  viewportMargin="-50px"
                  transition={{
                    duration: 0.8,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-sm border border-stone bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-10"
                >
                  <span className="font-serif text-3xl font-light text-brass/75">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.8] text-muted">
                    {item.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Gilmore's Place */}
        <section className="bg-white py-36 lg:py-44">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-20 lg:px-28">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
              <FadeIn
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-brass">
                  Our Place in the Story
                </span>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.15] text-charcoal">
                  Continuing the Tradition
                </h2>
                <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted">
                  <p>
                    When Gilmore Furniture opened in 1983, we didn&apos;t just
                    choose Grand Rapids — we inherited a responsibility. Every
                    piece we produce carries the weight of a city that built its
                    identity on the promise that American-made furniture could be
                    the best in the world.
                  </p>
                  <p>
                    Today, our 150,000 square foot facility houses the same
                    spirit that animated Grand Rapids&apos; earliest workshops:
                    a relentless commitment to material quality, honest
                    construction, and designs that endure. We pair that ethos
                    with modern CNC machining, automated finishing, and metal
                    fabrication capabilities that our predecessors could only
                    have imagined.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {[
                    { value: "1983", label: "Founded" },
                    { value: "150K", label: "Sq Ft Facility" },
                    { value: "40+", label: "Years in GR" },
                    { value: "100%", label: "American Made" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l-2 border-brass/20 pl-6"
                    >
                      <span className="font-serif text-2xl font-light text-charcoal">
                        {stat.value}
                      </span>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.15em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/WC18_Gilmore__65-293x449_c05f5377.jpg"
                    alt="Gilmore craftsman at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/WC18_Gilmore__24_04406fcc.jpg"
                    alt="Gilmore manufacturing floor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
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
                Continue the Legacy
              </span>
              <h2 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.1] text-white">
                Built in the Furniture Capital
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/70">
                Partner with a manufacturer rooted in 150 years of Grand Rapids
                tradition. Let&apos;s bring your next project to life from the
                heart of American furniture making.
              </p>
              <Button
                href="/quote"
                variant="primary"
                className="mt-12 inline-block"
              >
                Start the Conversation
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
