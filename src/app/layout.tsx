import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Adam Wellness — Personlig träning i Göteborg",
  description:
    "Personlig träning, kostplan och onlineprogram med Adam Wellness. Boka träningspass i Göteborg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${bebas.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-neutral-950">{children}</body>
    </html>
  );
}
