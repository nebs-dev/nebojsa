import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import { SITE, SITE_URL } from "@/content/site";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});

const sans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-instrument-sans",
});

// Production origin: SITE_URL in content/site.ts; NEXT_PUBLIC_SITE_URL overrides it (e.g. previews).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }),
  title: SITE.title,
  description: SITE.description,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en",
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
