"use client";

import CapabilityPageLayout from "@/components/CapabilityPageLayout";
import { capabilityPillars } from "@/content/capabilities";

const pillar = capabilityPillars.find((p) => p.slug === "metal-fabrication")!;

export default function MetalFabricationContent() {
  return <CapabilityPageLayout pillar={pillar} />;
}
