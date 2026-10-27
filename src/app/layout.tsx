import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import PrivacyControls from "./PrivacyControls";
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
  title: "NODUS | Consultoría portuaria estratégica",
  description: "NODUS acompaña a autoridades, operadores y terminales portuarias en decisiones que conectan estrategia, operación y territorio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${manrope.variable} ${dmMono.variable}`} lang="es">
      <body>
        {children}
        <PrivacyControls />
      </body>
    </html>
  );
}
