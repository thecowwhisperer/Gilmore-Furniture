export interface CapabilityDetail {
  title: string;
  description: string;
}

export interface CapabilityPillar {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  stats: { value: string; label: string }[];
  processes: CapabilityDetail[];
  products: {
    heading: string;
    items: string[];
  };
  equipmentHighlights: string[];
}

export const capabilityPillars: CapabilityPillar[] = [
  {
    slug: "upholstery",
    title: "Upholstery",
    subtitle: "Cut & Sew · Foam Systems · Upholstery",
    tagline: "Precision Soft Goods Manufacturing",
    description:
      "Industrial-grade cut-and-sew operations with decades of experience in precision fabric work. From pattern development through finished upholstered product, we deliver contract-grade quality at production scale.",
    heroImage: "/images/WC18_Gilmore_19d41a5b-341a-41c7-ac83-687ce76eaf99.jpg.webp",
    cardImage: "/images/WC18_Gilmore_19d41a5b-341a-41c7-ac83-687ce76eaf99.jpg.webp",
    stats: [
      { value: "40+", label: "Years of Experience" },
      { value: "Cut & Sew", label: "In-House Operations" },
      { value: "Contract", label: "Grade Durability" },
      { value: "100%", label: "American Made" },
    ],
    processes: [
      {
        title: "Cut & Sew",
        description:
          "Full pattern development and production cutting capabilities. Multi-layer assembly for complex upholstered forms, precision seaming, and edge finishing to exacting contract furniture standards.",
      },
      {
        title: "Foam Application",
        description:
          "Foam lamination and shaping for comfort, durability, and energy absorption. We work with a range of densities and profiles to meet the performance specifications of every design.",
      },
      {
        title: "Upholstery",
        description:
          "Trained upholstery artisans working with leather, fabric, and specialty materials. From single prototypes to production volumes, our team delivers consistent quality across every piece.",
      },
      {
        title: "Quality & Traceability",
        description:
          "Rigorous inspection at every stage — from incoming material through finished product. Full lot traceability for contract and OEM programs.",
      },
    ],
    products: {
      heading: "What We Produce",
      items: [
        "Lounge seating — leather and fabric",
        "Bench seating with upholstered components",
        "Upholstered panels and inserts",
        "Cushions and seat pads",
        "Fully assembled upholstered furniture (FG)",
        "Upholstered components for your assembly line",
      ],
    },
    equipmentHighlights: [
      "Industrial cutting tables",
      "Production sewing stations",
      "Foam lamination systems",
      "Pattern development tools",
      "Quality inspection stations",
      "Leather and fabric inventory management",
    ],
  },
  {
    slug: "woodworking",
    title: "Woodworking",
    subtitle: "5-Axis CNC · Finishing · Assembly",
    tagline: "Advanced Wood Manufacturing",
    description:
      "State-of-the-art 5-axis CNC machining combined with 40 years of hands-on woodworking expertise. From complex compound curves to fully assembled furniture, we handle solid wood, veneer, and laminate with equal precision.",
    heroImage: "/images/Slide-1_b6fa6d94.jpg",
    cardImage: "/images/Slide-1_b6fa6d94.jpg",
    stats: [
      { value: "5-Axis", label: "CNC Precision" },
      { value: "150K", label: "Sq Ft Facility" },
      { value: "40+", label: "Wood Species" },
      { value: "100%", label: "American Made" },
    ],
    processes: [
      {
        title: "5-Axis CNC Machining",
        description:
          "Multi-axis CNC routing and milling centers capable of complex geometry, compound curves, and 3D profiles. High-volume production with sub-millimeter tolerances and rapid prototyping capability. Ideal for complex parts like Clover-style components and gun stock profiles.",
      },
      {
        title: "Component Manufacturing",
        description:
          "Table legs, rails, skirts, tops, bases, bench parts, and door frames — available in any domestic or exotic species. Delivered unfinished or completely finished to your specification.",
      },
      {
        title: "Table Bases & Complex Shapes",
        description:
          "Specialists in monoform table bases — cylinders, tapered cylinders, cubes, square, and rectangular forms — wrapped with veneer or laminate. Unfinished or finished, in any species or material.",
      },
      {
        title: "Private Label Finishing",
        description:
          "UV-cured and water-based finish systems. Custom stain matching and color development. Automated spray lines for volume consistency alongside hand-applied specialty finishes.",
      },
      {
        title: "Assembly & Packaging",
        description:
          "Complete assembly, hardware installation, and white-label packaging. Drop-ship ready fulfillment directly to your customers with your name on the label.",
      },
    ],
    products: {
      heading: "What We Produce",
      items: [
        "Cylinder and cube table bases (veneer, laminate, metal wrap)",
        "Occasional tables — end tables, coffee tables, side tables",
        "Benches — solid wood frames, custom dimensions",
        "Conference table bases in complex veneer-wrapped shapes",
        "Wood furniture components — legs, rails, skirts, tops, door frames",
        "Complex 5-axis parts — compound curves, 3D profiles",
        "Fully assembled, finished, and boxed furniture (FG)",
        "Unfinished components for your assembly line",
      ],
    },
    equipmentHighlights: [
      "5-axis CNC routing centers",
      "Multi-axis CNC milling",
      "Automated UV finishing lines",
      "Water-based spray systems",
      "Hand-applied finish stations",
      "Custom stain matching lab",
      "Assembly and packaging lines",
      "Rapid prototyping capability",
    ],
  },
  {
    slug: "metal-fabrication",
    title: "Metal Fabrication",
    subtitle: "Waterjet · Welding · CNC · Finishing",
    tagline: "Full-Service Metal Shop",
    description:
      "Full-service metal fabrication with 25+ years of experience. From waterjet cutting and welding through CNC machining, buffing, and powder coating — stainless steel and carbon steel, component parts or fully assembled product, all under one roof.",
    heroImage: "/images/WC18_Gilmore__15_039d9f10.jpg",
    cardImage: "/images/WC18_Gilmore__15_039d9f10.jpg",
    stats: [
      { value: "25+", label: "Years Metalworking" },
      { value: "Waterjet", label: "Cutting System" },
      { value: "Stainless", label: "& Carbon Steel" },
      { value: "100%", label: "American Made" },
    ],
    processes: [
      {
        title: "Waterjet Cutting",
        description:
          "Complex profiles in hardened steel, stainless, aluminum, and composites. Precision cutting without heat-affected zones, ideal for intricate shapes and tight tolerances.",
      },
      {
        title: "Welding",
        description:
          "MIG, TIG, and spot welding for structural and cosmetic joins. Experienced in both stainless steel and carbon steel fabrications, from furniture components to complex assemblies.",
      },
      {
        title: "CNC Machining",
        description:
          "Multi-axis milling and turning to tight tolerances. Precision-machined metal components from simple brackets to complex, high-specification parts.",
      },
      {
        title: "Buffing & Polishing",
        description:
          "Mirror-finish high polish, satin finish, or brushed textures. Our buffing and polishing operations bring metal surfaces to the exact specification your design demands.",
      },
      {
        title: "Powder Coat Finishing",
        description:
          "Durable powder coat paint finishes in any color. Consistent, high-quality coatings that stand up to the demands of contract furniture and commercial environments.",
      },
    ],
    products: {
      heading: "What We Produce",
      items: [
        "Conference and occasional table bases — stainless and carbon steel",
        "Metal furniture components — brackets, frames, legs",
        "Polished 316 stainless steel hardware",
        "Marine components — rub rail, fittings, tubing, hinges",
        "Custom metal fabrications for specialty applications",
        "Fully assembled metal products (FG)",
        "Component parts for your assembly line",
      ],
    },
    equipmentHighlights: [
      "Industrial waterjet cutting system",
      "MIG welding stations",
      "TIG welding stations",
      "Spot welding equipment",
      "Multi-axis CNC machining centers",
      "Buffing and polishing stations",
      "Automated powder coat line",
      "Quality inspection equipment",
    ],
  },
];
