import type { Metadata } from "next";
import DefenseContactContent from "./Content";

export const metadata: Metadata = {
  title: "Contact Gilmore Defense — Request for Quote",
  description:
    "Contact Gilmore Defense & Industrial for manufacturing inquiries. Metal fabrication, tactical textiles, CNC machining, and assembly services.",
  alternates: {
    canonical: "https://defense.gilmorefurnitureinc.com/contact",
  },
};

export default function DefenseContactPage() {
  return <DefenseContactContent />;
}
