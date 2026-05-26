import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PBH Creations — Web Design & Digital Marketing",
  description:
    "Affordable web design and digital marketing for local small businesses in Lexington, SC. No long-term contracts. Results you can see.",
  openGraph: {
    title: "PBH Creations — Web Design & Digital Marketing",
    description:
      "Affordable web design and digital marketing for local small businesses in Lexington, SC.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
