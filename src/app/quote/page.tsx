import { buildPageMetadata } from "@/lib/metadata";
import QuoteContent from "./QuoteContent";

export const metadata = buildPageMetadata({
  title: "Request a Quote",
  description:
    "Get a detailed proposal for your furniture manufacturing project. Most quotes returned within two business days.",
  path: "/quote",
});

export default function QuotePage() {
  return <QuoteContent />;
}
