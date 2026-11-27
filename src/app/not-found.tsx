import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog/[slug]/page.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <p className={styles.kicker}>NODUS CONSULTING <span>/</span> 404</p>
      <h1>No encontramos esta página.</h1>
      <p>Puede que la dirección haya cambiado o que el contenido ya no esté disponible.</p>
      <p style={{ display: "flex", gap: 32, marginTop: 32 }}>
        <Link href="/">Ir al inicio <span aria-hidden="true">↗</span></Link>
        <Link href="/servicios">Ver servicios <span aria-hidden="true">↗</span></Link>
        <Link href="/blog">Leer el blog <span aria-hidden="true">↗</span></Link>
      </p>
    </main>
  );
}
