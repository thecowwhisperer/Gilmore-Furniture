import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gilmore Furniture Inc. — Redefining OEM",
  description:
    "Premier American OEM manufacturer of contract furniture and components. Specializing in complete solutions, wood, and metal components since 1983. Grand Rapids, MI.",
  keywords: [
    "OEM furniture",
    "contract furniture",
    "furniture manufacturer",
    "Grand Rapids",
    "wood components",
    "metal components",
    "private label furniture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${cormorant.variable} antialiased`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
