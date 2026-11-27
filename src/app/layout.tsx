import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import PrivacyControls from "./PrivacyControls";
import { site } from "@/data/site";
import { JsonLd, OG_IMAGE_SIZE, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-site",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono-site",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NODUS | Consultoría portuaria estratégica en Argentina y Latinoamérica",
    template: "%s | NODUS",
  },
  description: site.description,
  applicationName: site.alternateName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Consultoría portuaria",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: site.alternateName,
    locale: site.locale,
    images: [{ url: site.defaultOgImage, ...OG_IMAGE_SIZE, alt: `${site.name} · ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", images: [site.defaultOgImage] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${manrope.variable} ${dmMono.variable}`} lang="es">
      <body>
        <JsonLd data={organizationJsonLd()} />
        {children}
        <PrivacyControls />
      </body>
    </html>
  );
}
