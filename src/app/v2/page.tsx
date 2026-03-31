import type { Metadata } from "next";
import V2Splash from "./V2Splash";

export const metadata: Metadata = {
  title: "Gilmore Furniture Inc. — V2",
  description:
    "Premier American OEM manufacturer of contract furniture and components. Modern variation.",
  robots: { index: false, follow: false },
};

export default function V2Page() {
  return (
    <main id="main-content">
      <V2Splash />
    </main>
  );
}
