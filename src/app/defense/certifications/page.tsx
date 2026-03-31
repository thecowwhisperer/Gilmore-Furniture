import type { Metadata } from "next";
import DefenseCertificationsContent from "./Content";

export const metadata: Metadata = {
  title: "Certifications & Compliance — SAM, CAGE, ITAR, ISO",
  description:
    "SAM registered, CAGE coded, ITAR compliant. Pursuing ISO 9001, CMMC, and AS9100 certifications. Full regulatory compliance for defense manufacturing.",
  alternates: {
    canonical: "https://defense.gilmorefurnitureinc.com/certifications",
  },
};

export default function DefenseCertificationsPage() {
  return <DefenseCertificationsContent />;
}
