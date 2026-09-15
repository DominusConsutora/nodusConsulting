import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSortedPosts } from "@/data/blogPosts";
import BlogPostGrid from "./BlogPostGrid";
import styles from "./page.module.css";
import contentStyles from "./content.module.css";

export const metadata: Metadata = {
  title: "Blog | NODUS",
  description: "Ideas, análisis y actualidad sobre desarrollo portuario, infraestructura y gestión en Argentina y Latinoamérica.",
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <main>
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/">Inicio</Link><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link href="/blog">Blog</Link><Link className={styles.navContact} href="/#contacto">Contacto <span aria-hidden="true">↗</span></Link></nav></header>
      <section className={styles.pageHero}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> BLOG</p><h1>Ideas para entender el presente y proyectar el próximo puerto.</h1><p>Análisis, experiencias y conversaciones sobre infraestructura, operación y políticas portuarias en la región.</p></section>
      <section className={contentStyles.blogContent}><div className={contentStyles.blogIntro}><p className={contentStyles.sectionLabel}>Notas de NODUS</p><h2>Perspectivas para sistemas portuarios que necesitan avanzar.</h2><p>Una selección de análisis sobre planificación, gobernanza, operación y sostenibilidad en la región.</p></div><BlogPostGrid posts={posts} /></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
