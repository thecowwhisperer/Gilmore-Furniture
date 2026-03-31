import { buildPageMetadata } from "@/lib/metadata";
import CustomersContent from "./CustomersContent";

export const metadata = buildPageMetadata({
  title: "Our Customers",
  description:
    "Trusted by Steelcase, Haworth, Kimball, HBF, and other industry leaders. See why top furniture brands choose Gilmore as their OEM partner.",
  path: "/customers",
  image: "/images/Customers_6c052355-og.jpg",
});

export default function CustomersPage() {
  return <CustomersContent />;
}
