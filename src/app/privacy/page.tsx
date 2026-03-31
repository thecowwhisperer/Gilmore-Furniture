import { buildPageMetadata } from "@/lib/metadata";
import PrivacyContent from "./PrivacyContent";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Gilmore Furniture Inc. collects, uses, and protects your personal information. Read our full privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
