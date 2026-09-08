import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NODUS | Consultoría portuaria estratégica",
  description: "NODUS acompaña a autoridades, operadores y terminales portuarias en decisiones que conectan estrategia, operación y territorio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
