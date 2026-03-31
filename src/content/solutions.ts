import { slugify } from "@/lib/slugify";

const raw = [
  // ── Seating ──────────────────────────────────────────────
  {
    category: "Seating",
    title: "Lounge",
    description:
      "Fine lounge products upholstered in either leather or fabric, crafted with an incredible attention to detail and outstanding durability for lobbies, waiting areas, and collaborative spaces.",
    image: "/images/solutions/seating/lounge/cumberland_WS_LN_elle_014.jpg",
    gallery: [
      "/images/solutions/seating/lounge/cumberland_WS_LN_elle_005.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_dock_002.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_tulip_001.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_venlo_001.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_revo_upholstbk_wtharms_002-1.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_revo_woodbk_armless_003.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_current_metal_001.jpg",
      "/images/solutions/seating/lounge/cumberland_WS_LN_current_wood_001.jpg",
    ],
    galleryAlts: [
      "Elle lounge chair",
      "Dock lounge seating",
      "Tulip lounge chair",
      "Venlo lounge chair",
      "Revo upholstered back lounge with arms",
      "Revo wood back armless lounge",
      "Current lounge with metal base",
      "Current lounge with wood base",
    ],
    features: [
      "Leather and fabric upholstery",
      "Trained upholstery artisans",
      "Contract-grade durability",
      "Custom frame and finish options",
    ],
  },
  {
    category: "Seating",
    title: "Sofas",
    description:
      "Contract-grade sofas built for hospitality, corporate, and healthcare environments. Engineered for durability and comfort with premium upholstery options.",
    image: "/images/solutions/seating/sofas/cumberland_WS_SF_elle_001.jpg",
    gallery: [
      "/images/solutions/seating/sofas/cumberland_WS_SF_elle_002.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_elle_003.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_venlo_002.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_addison_002.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_alia_metal_woodsurrnd_001-1.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_alia_metal_woodsurrnd_002.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_current_metal_002.jpg",
      "/images/solutions/seating/sofas/cumberland_WS_SF_current_wood_002.jpg",
    ],
    galleryAlts: [
      "Elle sofa alternate view",
      "Elle sofa third angle",
      "Venlo sofa",
      "Addison sofa",
      "Alia sofa with metal base and wood surround",
      "Alia sofa with metal base and wood surround alternate view",
      "Current sofa with metal base",
      "Current sofa with wood base",
    ],
    features: [
      "Two-seat, three-seat, and sectional configurations",
      "Leather and fabric upholstery",
      "Commercial-grade frame construction",
      "Custom dimensions and finishes",
    ],
  },
  {
    category: "Seating",
    title: "Modular",
    description:
      "Flexible modular seating systems that adapt to any environment. Configure, reconfigure, and expand to meet changing space requirements.",
    image: "/images/solutions/seating/modular/cumberland_WS_MD_elle_001.jpg",
    gallery: [
      "/images/solutions/seating/modular/cumberland_WS_MD_elle_002.jpg",
      "/images/solutions/seating/modular/cumberland_WS_MD_elle_010.jpg",
      "/images/solutions/seating/modular/cumberland_WS_MD_thickandthin_001.jpg",
      "/images/solutions/seating/modular/cumberland_WS_MD_thickandthin_lounge_001.jpg",
      "/images/solutions/seating/modular/cumberland_WS_OT_cavea_001.jpg",
    ],
    galleryAlts: [
      "Elle modular seating alternate view",
      "Elle modular configuration",
      "Thick & Thin modular seating",
      "Thick & Thin modular lounge configuration",
      "Cavea modular occasional table",
    ],
    features: [
      "Configurable units and connectors",
      "Inline, curved, and corner modules",
      "Integrated power and USB options",
      "Cohesive aesthetic across configurations",
    ],
  },
  {
    category: "Seating",
    title: "Guest Chair",
    description:
      "Purpose-built guest and side chairs for reception areas, conference rooms, and private offices. Designed for comfort during extended meetings and client interactions.",
    image: "/images/solutions/seating/guest-chair/cumberland_WS_GS_lloyd_002.jpg",
    gallery: [
      "/images/solutions/seating/guest-chair/cumberland_WS_GS_alia_002.jpg",
      "/images/solutions/seating/guest-chair/cumberland_WS_GS_clover_column_arms_tablet_001-1.jpg",
      "/images/solutions/seating/guest-chair/cumberland_WS_GS_clover_metal_armless_001-1.jpg",
      "/images/solutions/seating/guest-chair/cumberland_WS_GS_lloyd_002.jpg",
      "/images/solutions/seating/guest-chair/cumberland_WS_GS_revo_001.jpg",
      "/images/solutions/seating/guest-chair/cumberland_WS_GS_revo_wtharms_upholsteredbk_003.jpg",
    ],
    galleryAlts: [
      "Alia guest chair",
      "Clover guest chair with column base, arms, and tablet",
      "Clover guest chair with metal base, armless",
      "Lloyd guest chair",
      "Revo guest chair",
      "Revo guest chair with arms and upholstered back",
    ],
    features: [
      "Stacking and nesting options",
      "Wood, metal, and upholstered frames",
      "Lightweight yet durable construction",
      "Wide range of finish and fabric choices",
    ],
  },
  {
    category: "Seating",
    title: "Stools",
    description:
      "Bar-height and counter-height stools for collaborative spaces, cafés, and hospitality settings. Available in wood, metal, and upholstered variations.",
    image: "/images/solutions/seating/stools/cumberland_WS_ST_solitaire_005.jpg",
    gallery: [
      "/images/solutions/seating/stools/cumberland_WS_ST_clover_column_lowbk_002.jpg",
      "/images/solutions/seating/stools/cumberland_WS_ST_current_wood_002.jpg",
      "/images/solutions/seating/stools/cumberland_WS_ST_li_wthbk_004.jpg",
      "/images/solutions/seating/stools/cumberland_WS_ST_li_wthbk_006.jpg",
      "/images/solutions/seating/stools/cumberland_WS_ST_lloyd_001.jpg",
      "/images/solutions/seating/stools/cumberland_WS_ST_revo_upholsteredbk_woodstretch_001.jpg",
    ],
    galleryAlts: [
      "Clover column stool with low back",
      "Current stool with wood base",
      "Li stool with back",
      "Li stool with back alternate view",
      "Lloyd stool",
      "Revo stool with upholstered back and wood stretcher",
    ],
    features: [
      "Bar-height and counter-height options",
      "Swivel and stationary models",
      "Wood, metal, and upholstered seats",
      "Footrest and backrest configurations",
    ],
  },
  {
    category: "Seating",
    title: "Benches & Ottomans",
    description:
      "As one of the leading bench suppliers for the leaders in the industry, Gilmore delivers high-quality benches and ottomans according to a tailored delivery schedule.",
    image: "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_cambridge_002.jpg",
    gallery: [
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_cambridge_005.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_alia_metal_001.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_alia_wood_001.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_alton_001.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_current_metal_001.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_current_wood_001.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_drexel_004.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_livy_003.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_pax_002.jpg",
      "/images/solutions/seating/benches-ottomans/cumberland_WS_BN_pax_004.jpg",
    ],
    galleryAlts: [
      "Cambridge bench alternate view",
      "Alia bench with metal base",
      "Alia bench with wood base",
      "Alton bench",
      "Current bench with metal base",
      "Current bench with wood base",
      "Drexel bench",
      "Livy bench",
      "Pax bench front view",
      "Pax bench alternate angle",
    ],
    features: [
      "Lobby, reception, and collaborative seating",
      "Solid wood and upholstered options",
      "Custom dimensions and finishes",
      "Tailored delivery scheduling",
    ],
  },

  // ── Tables ───────────────────────────────────────────────
  {
    category: "Tables",
    title: "Occasional",
    description:
      "We produce many different types of occasional tables for our customers in the Contract Furniture industry — cylinder tables, cube tables, coffee tables, side tables, and end tables — complete and ready to finish or finished and boxed per order.",
    image: "/images/solutions/tables/occasional/cumberland_WS_OT_cuff_001.jpg",
    gallery: [
      "/images/solutions/tables/occasional/cumberland_WS_OT_novo_001.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_novo_coffee_rectangle_001-1.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_cuff_coffee_wood_001.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_clover_side_wood_round_001.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_current_wood_side_square_001-01.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_lloyd_003.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_circo_coffee_square_001.jpg",
      "/images/solutions/tables/occasional/cumberland_WS_OT_circo_side_round_001-1.jpg",
    ],
    galleryAlts: [
      "Novo occasional table",
      "Novo rectangle coffee table",
      "Cuff wood coffee table",
      "Clover round wood side table",
      "Current wood square side table",
      "Lloyd occasional table",
      "Circo square coffee table",
      "Circo round side table",
    ],
    features: [
      "Cylinders, cubes, coffee, side, and end tables",
      "Veneer, laminate, and metal wrap options",
      "Small-lot, made-to-order production",
      "Ready to finish or fully finished and boxed",
    ],
  },
  {
    category: "Tables",
    title: "Meeting",
    description:
      "Conference and meeting tables engineered for today's collaborative workspaces. From intimate huddle tables to large boardroom solutions, built with integrated technology options.",
    image: "/images/solutions/tables/meeting/cumberland_WS_MT_facade_conference_metalbase_001-2.jpg",
    gallery: [
      "/images/solutions/tables/meeting/cumberland_WS_MT_fortis_conference_boat_001-1.jpg",
      "/images/solutions/tables/meeting/cumberland_WS_MT_cuff_woodbase_conference_continuous_002.jpg",
      "/images/solutions/tables/meeting/cumberland_WS_MT_metros_conference_rectangle_001-1.jpg",
      "/images/solutions/tables/meeting/cumberland_WS_MT_metros_dining_square_001-1.jpg",
      "/images/solutions/tables/meeting/cumberland_WS_MT_clover_dining_round_001-2.jpg",
    ],
    galleryAlts: [
      "Fortis boat-shaped conference table",
      "Cuff conference table with wood base, continuous top",
      "Metros rectangular conference table",
      "Metros square dining table",
      "Clover round dining table",
    ],
    features: [
      "Conference, huddle, and training table formats",
      "Integrated power and data management",
      "Wide range of top shapes and sizes",
      "Wood, metal, and mixed-material bases",
    ],
  },
];

export type SolutionEntry = (typeof raw)[number] & { sectionId: string };

export const solutions: SolutionEntry[] = raw.map((item) => ({
  ...item,
  sectionId: slugify(item.title),
}));

export const solutionCategories = [...new Set(raw.map((item) => item.category))];
