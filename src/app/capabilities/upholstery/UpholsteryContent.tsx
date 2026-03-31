"use client";

import CapabilityPageLayout from "@/components/CapabilityPageLayout";
import { capabilityPillars } from "@/content/capabilities";

const pillar = capabilityPillars.find((p) => p.slug === "upholstery")!;

export default function UpholsteryContent() {
  return <CapabilityPageLayout pillar={pillar} />;
}
