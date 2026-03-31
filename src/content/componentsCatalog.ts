import { slugify } from "@/lib/slugify";

export interface ComponentPageData {
  metaTitle: string;
  metaDescription: string;
  heroAlt: string;
  longDescription: string;
  specifications: string[];
  processes: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

const raw = [
  {
    title: "Conference Table Bases",
    slug: "conference-table-bases",
    description:
      "Grade A select and balanced veneer faces laminated over a smooth and concentric core, fully enclosed ends with moisture resistant bottoms. Available in a wide range of species and finishes.",
    image: "/images/components/conference-table-bases/cumberland_WS_MT_metros_conference_boat_001.jpg",
    gallery: [
      "/images/components/conference-table-bases/cumberland_WS_MT_metros_conference_boat_002.jpg",
      "/images/components/conference-table-bases/cumberland_WS_MT_metros_001.jpg",
    ],
    galleryAlts: [
      "Metros boat-shaped conference table base alternate view",
      "Metros conference table base",
    ],
    features: [
      "Grade A select veneer faces",
      "Smooth, concentric core construction",
      "Moisture resistant bottoms",
      "Multiple species and finish options",
    ],
    page: {
      metaTitle: "Conference Table Bases — Veneer & Laminate",
      metaDescription:
        "Custom conference table bases in veneer, laminate, and metal wrap. Cylinders, pedestals, and complex shapes. Grade A select veneers from Grand Rapids, MI.",
      heroAlt: "Veneer conference table base manufacturing at Gilmore Furniture",
      longDescription:
        "Conference table bases are one of our core specialties. We manufacture cylinder, tapered cylinder, pedestal, and custom sculptural bases in veneer, laminate, or metal wrap — from simple round columns to complex multi-faceted forms. Every base starts with Grade A select and balanced veneer faces laminated over a smooth, concentric core with fully enclosed ends and moisture-resistant bottoms. We produce these in virtually any domestic or exotic wood species, with UV-cured or water-based finishing to your exact color specification. Whether you need 10 for a showroom or 1,000 for a national rollout, our CNC-driven process delivers part-to-part consistency that hand methods cannot match.",
      specifications: [
        "Grade A select veneer faces, balanced construction",
        "Smooth, concentric core with fully enclosed ends",
        "Moisture-resistant bottoms standard on all bases",
        "Veneer, laminate, or metal wrap options",
        "40+ domestic and exotic wood species available",
        "UV-cured and water-based finish systems",
        "Custom stain matching and color development",
        "Unfinished or fully finished to specification",
      ],
      processes: [
        {
          title: "Core Construction",
          description:
            "Precision-built cores using balanced substrate materials ensure long-term dimensional stability. Fully enclosed ends and moisture-resistant bottoms prevent environmental degradation in commercial settings.",
        },
        {
          title: "Veneer Application",
          description:
            "Grade A select veneers are carefully matched and applied using production lamination equipment. Grain direction, figure matching, and seam placement are controlled for consistent visual quality across every unit.",
        },
        {
          title: "CNC Shaping",
          description:
            "5-axis CNC routing enables complex profiles — tapered cylinders, compound curves, faceted shapes — with sub-millimeter tolerances. Rapid prototyping capability for new designs.",
        },
        {
          title: "Finishing",
          description:
            "Automated spray lines for UV-cured and water-based finishes deliver consistent, durable coatings. Custom stain matching ensures your color spec is hit precisely, batch after batch.",
        },
      ],
      faq: [
        {
          question: "What shapes of conference table bases can you manufacture?",
          answer:
            "We produce cylinders, tapered cylinders, pedestals, cubes, rectangular columns, faceted forms, and fully custom sculptural shapes. If it can be drawn in CAD, we can likely manufacture it.",
        },
        {
          question: "What wood species are available for conference table bases?",
          answer:
            "We work with over 40 domestic and exotic species including walnut, white oak, maple, cherry, ash, and many others. Bases can also be wrapped in laminate or metal.",
        },
        {
          question: "Can you match an existing finish or stain color?",
          answer:
            "Yes. Our finishing department includes a custom stain matching lab. We develop and approve color samples before production begins to ensure exact specification compliance.",
        },
        {
          question: "What is the minimum order quantity for conference table bases?",
          answer:
            "We support everything from single prototypes to production runs of thousands. Our facility is designed for flexibility across lot sizes.",
        },
      ],
    } satisfies ComponentPageData,
  },
  {
    title: "Wood Furniture Components",
    slug: "wood-furniture-components",
    description:
      "Table legs & rails, table skirts, table tops, table bases, bench parts, and door frames — available in any species, unfinished or completely finished to your specification.",
    image: "/images/components/wood-furniture-components/wood%20components.jpg",
    gallery: [
      "/images/components/wood-furniture-components/WC18_Gilmore__47-631x421_f6c8082c.jpg",
    ],
    galleryAlts: [
      "Wood furniture components",
    ],
    features: [
      "Table legs, rails, skirts, and tops",
      "Bench parts and door frames",
      "Any domestic or exotic species",
      "Unfinished or completely finished",
    ],
    page: {
      metaTitle: "Wood Furniture Components — OEM Supply",
      metaDescription:
        "Custom wood furniture components — table legs, rails, skirts, tops, bench parts, and door frames in any species. CNC-machined, unfinished or finished. Grand Rapids, MI.",
      heroAlt: "CNC-machined wood furniture components at Gilmore Furniture",
      longDescription:
        "We manufacture the individual wood components that furniture brands assemble into their finished products. Table legs, rails, skirts, tops, bench parts, door frames, and specialty turnings — available in any domestic or exotic species, delivered unfinished for your own finishing line or completely finished to your color and sheen specification. Our 5-axis CNC machining centers handle everything from simple turned legs to complex compound-curve profiles, with the consistency and tolerance control that production assembly lines demand. We work with your engineering team from the design phase to optimize each component for manufacturability, often reducing cost while improving structural performance.",
      specifications: [
        "Table legs — turned, tapered, shaped, or square",
        "Table rails, skirts, and aprons",
        "Table tops — solid wood, veneer, or laminate",
        "Bench parts and stretchers",
        "Door frames and panel components",
        "40+ domestic and exotic species",
        "5-axis CNC machining for complex profiles",
        "Unfinished, sanded, or fully finished",
      ],
      processes: [
        {
          title: "CNC Machining",
          description:
            "Multi-axis CNC routing and milling centers produce components with sub-millimeter tolerances. Complex profiles, compound angles, and 3D shapes are executed in a single setup for maximum accuracy.",
        },
        {
          title: "Species Selection",
          description:
            "We source from certified domestic mills and maintain inventory of popular species. Exotic species are sourced to order. All lumber is kiln-dried to 6-8% moisture content before machining.",
        },
        {
          title: "Sanding & Preparation",
          description:
            "Production sanding through progressive grits prepares components for finishing or direct integration into your assembly process. Edges, profiles, and surfaces meet contract-grade smoothness standards.",
        },
        {
          title: "Finishing & Packaging",
          description:
            "Optional UV-cured or water-based finishing to your specification. Components are individually wrapped or bulk-packed per your requirements for clean integration into your production line.",
        },
      ],
      faq: [
        {
          question: "Can you produce components to our CAD specifications?",
          answer:
            "Yes. We accept files in all standard CAD formats and our programming team translates your designs into optimized CNC toolpaths. We can also reverse-engineer from samples.",
        },
        {
          question: "What tolerances do you hold on wood components?",
          answer:
            "Our CNC equipment maintains tolerances of +/- 0.005 inches on critical dimensions. For assembly-critical interfaces, we work with your team to define and verify fit specifications.",
        },
        {
          question: "Do you offer engineering support for new component designs?",
          answer:
            "Absolutely. Our engineering team works with your designers to optimize components for manufacturability — often reducing material waste and machining time while improving structural integrity.",
        },
        {
          question: "What is your typical lead time for wood components?",
          answer:
            "Standard lead times range from 4-8 weeks depending on species availability, quantity, and finishing requirements. Rush production is available for time-sensitive projects.",
        },
      ],
    } satisfies ComponentPageData,
  },
  {
    title: "Metal Furniture Components",
    slug: "metal-furniture-components",
    description:
      "Quality stainless steel, carbon steel, and aluminum fabrications. From simple components to complex parts, backed by 25 years of metalworking experience.",
    image: "/images/components/metal-furniture-components/metal%20components.jpg",
    gallery: [
      "/images/components/metal-furniture-components/metal%20components.jpg",
      "/images/components/metal-furniture-components/metal%20frame.jpg",
      "/images/components/metal-furniture-components/raw%20tubing.jpg",
    ],
    galleryAlts: [
      "Metal furniture components",
      "Metal frame fabrication",
      "Raw tubing components",
    ],
    features: [
      "Stainless steel, carbon steel, aluminum",
      "Simple to complex fabrications",
      "Precision CNC machining",
      "25+ years of metalworking expertise",
    ],
    page: {
      metaTitle: "Metal Furniture Components — Steel & Aluminum",
      metaDescription:
        "Custom metal furniture components — stainless steel, carbon steel, and aluminum fabrications. Waterjet cutting, CNC machining, welding, and powder coating. Grand Rapids, MI.",
      heroAlt: "Metal furniture component fabrication at Gilmore Furniture",
      longDescription:
        "Our metal shop manufactures the structural and decorative metal components that contract furniture brands integrate into their products. From simple brackets and leg assemblies to complex welded frames and polished stainless steel accents, we work in stainless steel, carbon steel, and aluminum with 25+ years of metalworking expertise. Our full-service capabilities — waterjet cutting, CNC machining, MIG/TIG welding, buffing, polishing, and powder coating — mean your components arrive ready to install, with the surface finish and dimensional accuracy your assembly process demands.",
      specifications: [
        "Stainless steel (304, 316), carbon steel, aluminum",
        "Waterjet cutting for complex profiles",
        "CNC machining to tight tolerances",
        "MIG, TIG, and spot welding",
        "Mirror polish, satin, or brushed finishes",
        "Powder coat in any RAL or custom color",
        "Table legs, frames, brackets, and bases",
        "Simple components to complex welded assemblies",
      ],
      processes: [
        {
          title: "Waterjet Cutting",
          description:
            "Precision cutting of complex profiles without heat-affected zones. Ideal for intricate shapes in hardened steel, stainless, and aluminum where thermal distortion must be avoided.",
        },
        {
          title: "Welding & Fabrication",
          description:
            "MIG, TIG, and spot welding for structural and cosmetic joins. Our experienced welders produce clean, consistent welds on both stainless and carbon steel for furniture-grade finish quality.",
        },
        {
          title: "CNC Machining",
          description:
            "Multi-axis milling and turning for precision-machined components. From simple brackets to complex high-spec parts requiring tight tolerances and repeatable accuracy.",
        },
        {
          title: "Finishing",
          description:
            "In-house buffing and polishing to mirror, satin, or brushed specifications. Automated powder coat line for durable paint finishes in any color. All finishing done under one roof.",
        },
      ],
      faq: [
        {
          question: "What metals do you work with for furniture components?",
          answer:
            "We fabricate in stainless steel (304 and 316 grades), carbon steel, and aluminum. Material selection depends on the application — stainless for corrosion resistance, carbon steel for cost-effective structural components, aluminum for weight-sensitive designs.",
        },
        {
          question: "Can you produce polished stainless steel components?",
          answer:
            "Yes. Our buffing and polishing department produces mirror-finish high polish, satin finish, and brushed textures. We also work with 316 stainless for marine and high-corrosion environments.",
        },
        {
          question: "What powder coat colors are available?",
          answer:
            "We can powder coat in any RAL color or custom-matched color. Our automated powder coat line produces consistent, durable finishes suitable for commercial furniture applications.",
        },
        {
          question: "Do you handle both simple and complex metal fabrications?",
          answer:
            "Yes. We produce everything from simple stamped brackets and CNC-machined spacers to fully welded multi-component frames and polished stainless steel assemblies.",
        },
      ],
    } satisfies ComponentPageData,
  },
  {
    title: "Marine & Specialty Components",
    slug: "marine-specialty-components",
    description:
      "Marine components for boat builders, 5-axis CNC gun stock profiles, and custom specialty parts. Polished 316 stainless steel hardware, precision wood components for firearms, and OEM solutions for applications beyond furniture.",
    image: "/images/components/other-components/Generated%20Image%20March%2031%2C%202026%20-%201_36PM.jpg",
    gallery: [
      "/images/components/other-components/Generated%20Image%20March%2031%2C%202026%20-%201_36PM-2.jpg",
      "/images/components/other-components/Generated%20Image%20March%2031%2C%202026%20-%201_37PM.jpg",
      "/images/components/other-components/Generated%20Image%20March%2031%2C%202026%20-%201_38PM.jpg",
      "/images/components/other-components/Generated%20Image%20March%2031%2C%202026%20-%202_17PM.jpg",
    ],
    galleryAlts: [
      "Marine component hardware in polished 316 stainless",
      "Stainless steel marine rub rail fitting",
      "Custom specialty OEM component",
      "5-axis CNC machined wood gun stock profile",
    ],
    features: [
      "Marine-grade 316 stainless steel hardware",
      "5-axis CNC gun stock and firearms components",
      "Rub rail, fittings, tubing, and hinges",
      "Custom specialty OEM applications",
    ],
    page: {
      metaTitle: "Marine, Gun Stock & Specialty Components",
      metaDescription:
        "Marine-grade 316 stainless steel hardware, 5-axis CNC gun stock profiles, and custom specialty OEM components. Precision manufacturing for boat builders, firearms, and beyond. Grand Rapids, MI.",
      heroAlt: "Specialty components — marine hardware and 5-axis CNC gun stock profiles",
      longDescription:
        "Our manufacturing capabilities extend well beyond furniture. We serve boat builders with marine-grade 316 stainless steel hardware, firearms manufacturers with precision 5-axis CNC gun stock profiles, and a range of specialty OEM applications that demand the same quality and consistency we bring to every project. Our gun stock work showcases the full potential of our 5-axis CNC woodworking — complex compound curves, ergonomic contours, and organic 3D surfaces machined from hardwood blanks with sub-millimeter accuracy. These are the same machines and the same craftspeople that produce our most demanding furniture components, applied to applications where precision and repeatability are absolutely critical. On the metal side, we manufacture marine-grade components in polished 316 stainless steel — rub rail, fittings, tubing, hinges, and custom hardware — with the corrosion resistance and surface finish quality that saltwater environments demand.",
      specifications: [
        "5-axis CNC gun stock and firearms component machining",
        "Complex compound curves and ergonomic 3D profiles in hardwood",
        "316 stainless steel for marine corrosion resistance",
        "Rub rail, fittings, tubing, and hinges",
        "Polished hardware to mirror finish",
        "Waterjet-cut complex metal profiles",
        "Custom components for specialty OEM applications",
        "Small-lot to production volume capability",
      ],
      processes: [
        {
          title: "5-Axis CNC Wood Profiling",
          description:
            "Our multi-axis CNC centers machine complex 3D surfaces from solid hardwood blanks — gun stocks, grips, and specialty wood components with compound curves and organic contours that would be impossible to produce consistently by hand. Sub-millimeter tolerances ensure part-to-part repeatability across production runs.",
        },
        {
          title: "Marine Metal Fabrication",
          description:
            "316 stainless steel is standard for all marine components — offering superior corrosion resistance in saltwater environments. Waterjet cutting and CNC machining produce complex profiles and tight-tolerance parts without heat-affected zones.",
        },
        {
          title: "Finishing & Polishing",
          description:
            "Wood components receive hand-sanding and precision finishing to the exact specification required. Metal components are polished to mirror, satin, or brushed texture. Every surface meets the demands of the end application.",
        },
        {
          title: "Quality & Inspection",
          description:
            "Every component — wood or metal — is inspected for dimensional accuracy, surface quality, and material integrity. Full lot traceability from raw material through finished component.",
        },
      ],
      faq: [
        {
          question: "Can you manufacture gun stocks and firearms components on your 5-axis CNC?",
          answer:
            "Yes. Our 5-axis CNC woodworking centers machine gun stock profiles, grips, and other firearms components from solid hardwood blanks. Complex compound curves, ergonomic contours, and 3D surfaces are produced with sub-millimeter accuracy and full part-to-part repeatability.",
        },
        {
          question: "What wood species do you use for gun stock components?",
          answer:
            "We work with walnut, maple, birch, and other hardwood species commonly used in firearms manufacturing. Species selection depends on the application — walnut for traditional stocks, maple or birch for laminated blanks. All lumber is kiln-dried and acclimated before machining.",
        },
        {
          question: "Why do you use 316 stainless steel for marine components?",
          answer:
            "316 stainless contains molybdenum which provides significantly better corrosion resistance in saltwater and chloride environments compared to 304 grade. It's the industry standard for marine hardware exposed to the elements.",
        },
        {
          question: "Do you serve industries beyond marine, firearms, and furniture?",
          answer:
            "Yes. Our CNC woodworking and metal fabrication capabilities serve any OEM application requiring precision components — including architectural, medical, sporting goods, and industrial applications. If it requires tight tolerances and consistent quality, we can likely manufacture it.",
        },
        {
          question: "Can you produce custom marine hardware profiles?",
          answer:
            "Yes. Our waterjet cutting and CNC machining capabilities produce custom profiles for rub rail, fittings, and hardware to your exact specifications. We work from CAD files or can reverse-engineer from samples.",
        },
      ],
    } satisfies ComponentPageData,
  },
] as const;

export type ComponentEntry = (typeof raw)[number] & { sectionId: string };

export const componentsCatalog: ComponentEntry[] = raw.map((item) => ({
  ...item,
  sectionId: slugify(item.title),
}));

export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return componentsCatalog.find((c) => c.slug === slug);
}
