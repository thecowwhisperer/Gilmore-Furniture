import { buildPageMetadata } from "@/lib/metadata";
import TermsContent from "./TermsContent";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Terms and conditions governing the use of the Gilmore Furniture Inc. website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsContent />;
}
