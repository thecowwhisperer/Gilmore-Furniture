export interface IndustryVertical {
  slug: string;
  title: string;
  headline: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  products: string[];
  whyGilmore: {
    title: string;
    description: string;
  }[];
  stats: { value: string; label: string }[];
}

export const verticals: IndustryVertical[] = [
  {
    slug: "hospitality",
    title: "Hospitality Furniture",
    headline: "Hospitality",
    eyebrow: "Industry Solutions",
    description:
      "Contract-grade furniture built for the demands of hotels, restaurants, and commercial hospitality environments. From lobby seating to dining tables, manufactured at scale under your brand.",
    heroImage: "/images/Venlo-Lounge-Pair-418x323_57c611d7.jpg",
    heroAlt: "Contract lounge seating for hospitality environments",
    metaTitle: "Hospitality Furniture Manufacturing",
    metaDescription:
      "Contract-grade hospitality furniture manufacturing — lounge seating, dining tables, benches, and custom pieces for hotels, restaurants, and commercial spaces. OEM partner since 1983.",
    intro:
      "Hospitality environments demand furniture that looks beautiful on day one and holds up through years of heavy daily use. Our 40+ years of contract furniture manufacturing means we understand the unique requirements of this market: durability ratings, fire-retardant materials, rapid replacement programs, and the design flexibility to match any interior concept. We manufacture complete hospitality furniture under your brand, from prototype to packaged product.",
    capabilities: [
      {
        title: "Lobby & Lounge Seating",
        description:
          "Upholstered lounge chairs, sofas, and benches in contract-grade leather and performance fabrics. Engineered for high-traffic hotel lobbies, airport lounges, and reception areas with tested durability ratings.",
      },
      {
        title: "Dining & Restaurant Tables",
        description:
          "Cylinder, cube, and occasional tables in veneer, laminate, or metal wrap. Available in custom dimensions and finishes to match any F&B concept, from fine dining to casual hotel restaurants.",
      },
      {
        title: "Guest Room Furnishings",
        description:
          "Desks, nightstands, luggage benches, and media consoles manufactured to hospitality specifications. Custom finishes, integrated power solutions, and designed for efficient room installation.",
      },
      {
        title: "Common Area & Conference",
        description:
          "Conference tables, collaboration furniture, and communal workspace pieces for hotel business centers and meeting spaces. Veneer-wrapped bases with integrated wire management.",
      },
    ],
    products: [
      "Lobby lounge chairs and sofas",
      "Restaurant and bar tables",
      "Guest room case goods and desks",
      "Conference and meeting room tables",
      "Lobby benches and banquette seating",
      "Custom millwork and accent pieces",
    ],
    whyGilmore: [
      {
        title: "Durability at Scale",
        description:
          "Our furniture is built to withstand the demands of 24/7 hospitality environments. Contract-grade materials, reinforced joinery, and commercial-grade finishes ensure longevity across hundreds or thousands of units.",
      },
      {
        title: "Design Flexibility",
        description:
          "Over 40 wood species, full metal fabrication, and in-house upholstery mean we can match any design concept — from classic luxury to modern minimalist — without compromising on quality or lead time.",
      },
      {
        title: "Private Label & Drop Ship",
        description:
          "Complete white-label manufacturing with direct-to-property shipping. Your brand on every piece, delivered directly to the project site, eliminating warehouse handling and reducing damage.",
      },
    ],
    stats: [
      { value: "40+", label: "Years Experience" },
      { value: "150K", label: "Sq Ft Facility" },
      { value: "3", label: "Disciplines In-House" },
      { value: "100%", label: "American Made" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Furniture",
    headline: "Healthcare",
    eyebrow: "Industry Solutions",
    description:
      "Furniture engineered for clinical, waiting room, and administrative healthcare environments. Cleanable surfaces, antimicrobial materials, and compliance-ready construction.",
    heroImage: "/images/Sirra-Bench-370x443_8c2ffa0c.jpg",
    heroAlt: "Commercial bench seating for healthcare waiting areas",
    metaTitle: "Healthcare Furniture Manufacturing",
    metaDescription:
      "Healthcare furniture manufacturing — waiting room seating, clinical tables, and administrative furnishings with cleanable surfaces and antimicrobial materials. Grand Rapids, MI.",
    intro:
      "Healthcare facilities require furniture that meets strict infection control standards while providing comfort for patients, visitors, and staff. Our manufacturing capabilities span upholstery with antimicrobial and bleach-cleanable fabrics, sealed wood and laminate surfaces that resist harsh cleaning agents, and metal components with durable powder-coat or stainless steel finishes. Every piece is engineered for the unique demands of clinical, waiting room, and administrative healthcare environments.",
    capabilities: [
      {
        title: "Waiting Room Seating",
        description:
          "Benches, lounge chairs, and modular seating systems with antimicrobial upholstery, sealed seams, and cleanable surfaces. Designed for high-traffic waiting areas with infection control in mind.",
      },
      {
        title: "Clinical & Exam Room",
        description:
          "Side tables, supply carts, and seating with sealed surfaces that withstand aggressive cleaning protocols. Metal and laminate construction for maximum durability and hygiene compliance.",
      },
      {
        title: "Administrative & Office",
        description:
          "Desks, conference tables, and collaborative workspace furniture for healthcare administration. Designed to integrate with standard healthcare IT infrastructure and accessibility requirements.",
      },
      {
        title: "Common Areas & Cafeteria",
        description:
          "Dining tables, benches, and casual seating for hospital cafeterias and break rooms. Commercial-grade construction that balances comfort with easy maintenance and cleaning.",
      },
    ],
    products: [
      "Waiting room benches and chairs",
      "Antimicrobial upholstered seating",
      "Clinical side tables and carts",
      "Administrative desks and conference tables",
      "Cafeteria tables and seating",
      "Patient room guest chairs",
    ],
    whyGilmore: [
      {
        title: "Infection Control Ready",
        description:
          "We work with antimicrobial, bleach-cleanable, and fluid-barrier fabrics. Sealed seams, moisture-resistant substrates, and non-porous finishes support rigorous infection control protocols.",
      },
      {
        title: "Compliance & Standards",
        description:
          "Our furniture can be manufactured to meet healthcare-specific standards including BIFMA, CAL 133, and Greenguard certifications. We work with your team to meet the exact specifications required.",
      },
      {
        title: "Volume & Consistency",
        description:
          "Healthcare systems often require hundreds of identical units across multiple facilities. Our CNC-driven manufacturing ensures part-to-part consistency whether you order 10 or 10,000.",
      },
    ],
    stats: [
      { value: "40+", label: "Years Experience" },
      { value: "CNC", label: "Precision Manufacturing" },
      { value: "In-House", label: "Quality Control" },
      { value: "100%", label: "American Made" },
    ],
  },
  {
    slug: "government",
    title: "Government Furniture",
    headline: "Government",
    eyebrow: "Industry Solutions",
    description:
      "American-made furniture for federal, state, and local government facilities. TAA-compliant, Berry Amendment eligible, and manufactured to GSA contract specifications.",
    heroImage: "/images/WC18_Gilmore__47_f67ac56a.jpg",
    heroAlt: "American-made wood furniture manufacturing for government contracts",
    metaTitle: "Government & GSA Contract Furniture Manufacturing",
    metaDescription:
      "American-made government furniture manufacturing — TAA-compliant, Berry Amendment eligible, GSA contract ready. Federal, state, and military facilities. Grand Rapids, MI.",
    intro:
      "Government procurement demands domestic manufacturing, strict compliance standards, and transparent supply chains. As an American manufacturer operating from a single facility in Grand Rapids, MI, Gilmore is positioned to meet federal, state, and local government furniture requirements. Our vertically integrated operation — upholstery, woodworking, and metal fabrication under one roof — simplifies procurement and ensures full traceability from raw material to delivered product.",
    capabilities: [
      {
        title: "Office & Administrative",
        description:
          "Desks, conference tables, and workstation components for government offices. Manufactured to GSA specification with full domestic sourcing documentation and TAA compliance.",
      },
      {
        title: "Courtroom & Judicial",
        description:
          "Judicial benches, gallery seating, counsel tables, and millwork. Premium wood species with durable finishes appropriate for high-profile institutional environments.",
      },
      {
        title: "Military & Base Housing",
        description:
          "Barracks furniture, dining hall tables, and common area seating built to military durability standards. Metal and wood construction designed for heavy institutional use.",
      },
      {
        title: "Public Space & Civic",
        description:
          "Library furniture, community center seating, and civic building furnishings. ADA-compliant designs with commercial-grade construction for public-facing environments.",
      },
    ],
    products: [
      "Conference and meeting tables",
      "Administrative desks and credenzas",
      "Courtroom and judicial furniture",
      "Military dining and common area furniture",
      "Public library and civic furnishings",
      "Reception and lobby seating",
    ],
    whyGilmore: [
      {
        title: "100% American Made",
        description:
          "Every piece is manufactured in our Grand Rapids, MI facility. Single-source domestic production simplifies TAA compliance, Berry Amendment eligibility, and Buy American Act requirements.",
      },
      {
        title: "Procurement Ready",
        description:
          "We work within government procurement frameworks and can provide the documentation, certifications, and traceability records required for federal and state contracts.",
      },
      {
        title: "Vertically Integrated",
        description:
          "Wood, metal, and upholstery capabilities under one roof means fewer subcontractors, simplified supply chains, and a single point of accountability for quality and delivery.",
      },
    ],
    stats: [
      { value: "100%", label: "Domestic Manufacturing" },
      { value: "150K", label: "Sq Ft Facility" },
      { value: "40+", label: "Years Experience" },
      { value: "TAA", label: "Compliant" },
    ],
  },
  {
    slug: "corporate",
    title: "Corporate Office Furniture",
    headline: "Corporate",
    eyebrow: "Industry Solutions",
    description:
      "Executive and collaborative office furniture for Fortune 500 companies and commercial interiors. Conference tables, workstations, and custom millwork manufactured to specification.",
    heroImage: "/images/CylinderTables-350x450_73bb2661.jpg",
    heroAlt: "Custom cylinder table bases for corporate conference rooms",
    metaTitle: "Corporate Office Furniture Manufacturing",
    metaDescription:
      "Corporate office furniture manufacturing — conference tables, executive desks, workstations, and custom millwork for Fortune 500 companies. OEM partner since 1983.",
    intro:
      "Corporate environments demand furniture that communicates brand identity while performing flawlessly in daily use. From flagship headquarters to regional offices, we manufacture executive conference tables, collaborative workstations, and custom architectural millwork for the brands that define the contract furniture industry. Our OEM model means your designs, your specifications, your brand — built in our facility with the precision and consistency that Fortune 500 projects require.",
    capabilities: [
      {
        title: "Conference & Boardroom",
        description:
          "Large-format conference tables in premium veneers, solid wood, and metal. Complex base designs including cylinders, pedestals, and custom sculptural forms. Integrated power and data management.",
      },
      {
        title: "Executive Private Offices",
        description:
          "Desks, credenzas, and storage systems in book-matched veneers and premium finishes. Engineered for both aesthetics and functionality with integrated technology support.",
      },
      {
        title: "Collaborative Spaces",
        description:
          "Benches, occasional tables, and lounge seating for modern open-plan offices. Designed for flexibility with durable commercial-grade construction.",
      },
      {
        title: "Architectural Millwork",
        description:
          "Custom wall panels, reception desks, and integrated cabinetry. CNC-machined precision with hand-applied finishing for seamless installation.",
      },
    ],
    products: [
      "Conference and boardroom tables",
      "Executive desks and credenzas",
      "Collaborative benches and tables",
      "Lounge and reception seating",
      "Custom architectural millwork",
      "Workstation components and accessories",
    ],
    whyGilmore: [
      {
        title: "Fortune 500 Experience",
        description:
          "We've been manufacturing for the biggest names in contract furniture for over 40 years. We understand the quality standards, delivery expectations, and documentation requirements of large-scale corporate projects.",
      },
      {
        title: "Engineering Partnership",
        description:
          "Our team works directly with your designers from concept through production. We optimize for manufacturability without compromising design intent, often reducing cost while improving structural integrity.",
      },
      {
        title: "Scale & Consistency",
        description:
          "CNC-driven manufacturing ensures that unit 500 is identical to unit 1. Whether you need 10 tables or 10,000 components, our 150,000 sq ft facility delivers consistent quality at volume.",
      },
    ],
    stats: [
      { value: "40+", label: "Years OEM Experience" },
      { value: "5-Axis", label: "CNC Precision" },
      { value: "40+", label: "Wood Species" },
      { value: "100%", label: "American Made" },
    ],
  },
  {
    slug: "education",
    title: "Education Furniture",
    headline: "Education",
    eyebrow: "Industry Solutions",
    description:
      "Durable, functional furniture for universities, K-12 schools, and educational institutions. Classrooms, libraries, common areas, and administrative spaces built for heavy institutional use.",
    heroImage: "/images/Benches-350x450_27f88f82.jpg",
    heroAlt: "Solid wood bench seating for education common areas",
    metaTitle: "Education Furniture Manufacturing",
    metaDescription:
      "Education furniture manufacturing — classroom tables, library furnishings, and common area seating for universities and K-12 schools. Durable, American-made. Grand Rapids, MI.",
    intro:
      "Educational environments are among the toughest on furniture. Classrooms, libraries, dining halls, and student common areas see constant heavy use from thousands of students daily. Our contract furniture is engineered for this reality — reinforced construction, impact-resistant finishes, and materials selected for longevity in institutional settings. We manufacture for the leading education furniture brands, delivering the consistency and durability that schools and universities depend on.",
    capabilities: [
      {
        title: "Classroom & Lecture Hall",
        description:
          "Tables, desks, and seating components for classrooms and lecture halls. Durable laminate and solid wood construction with commercial-grade edge banding and impact-resistant finishes.",
      },
      {
        title: "Library & Study",
        description:
          "Reading tables, carrels, shelving components, and collaborative study furniture. Custom dimensions and finishes to match institutional design standards and ADA accessibility requirements.",
      },
      {
        title: "Dining & Commons",
        description:
          "Cafeteria tables, benches, and common area seating built for high-volume institutional dining. Metal frames with wood or laminate tops, designed for easy cleaning and long service life.",
      },
      {
        title: "Administrative Offices",
        description:
          "Desks, conference tables, and reception furniture for campus administrative buildings. Professional-grade construction with the same attention to detail as our corporate furniture lines.",
      },
    ],
    products: [
      "Classroom tables and desks",
      "Library reading tables and carrels",
      "Cafeteria tables and benches",
      "Student lounge and common area seating",
      "Administrative office furniture",
      "Auditorium and lecture hall components",
    ],
    whyGilmore: [
      {
        title: "Built for Institutions",
        description:
          "Educational furniture takes more abuse than almost any other category. Our construction methods — reinforced joinery, commercial-grade finishes, and heavy-duty hardware — are designed for decades of institutional use.",
      },
      {
        title: "Budget-Conscious Volume",
        description:
          "We understand education budgets. Our manufacturing efficiency and CNC-driven production allow us to deliver high-quality furniture at competitive price points, even on large campus-wide rollouts.",
      },
      {
        title: "Sustainability Credentials",
        description:
          "Domestically sourced hardwoods, low-VOC finishes, and efficient material usage. Our manufacturing approach supports LEED credits and institutional sustainability commitments.",
      },
    ],
    stats: [
      { value: "40+", label: "Years Experience" },
      { value: "150K", label: "Sq Ft Facility" },
      { value: "Low-VOC", label: "Finishes Available" },
      { value: "100%", label: "American Made" },
    ],
  },
];

export function getVerticalBySlug(slug: string): IndustryVertical | undefined {
  return verticals.find((v) => v.slug === slug);
}
