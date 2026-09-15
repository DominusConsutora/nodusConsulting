import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Servicios | NODUS",
  description: "Servicios de consultoría portuaria estratégica para autoridades, operadores y terminales de Argentina y Latinoamérica.",
};

export default function ServiciosPage() {
  return (
    <main>
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/">Inicio</Link><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link href="/blog">Blog</Link><Link className={styles.navContact} href="/#contacto">Contacto <span aria-hidden="true">↗</span></Link></nav></header>
      <section className={styles.pageHero} style={{ backgroundImage: "linear-gradient(90deg, rgba(41,40,87,.94), rgba(41,40,87,.56)), url('/images/puerto_3.webp')", backgroundPosition: "center 25%" }}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> SERVICIOS</p><h1>Capacidades para decisiones que mueven al puerto.</h1><p>Integramos estrategia, operación, regulación y conocimiento del territorio para acompañar cada etapa del sistema portuario.</p></section>
      <section className={styles.serviceSection}><div className={styles.sectionLabel}><span>01</span><span>Ámbitos de trabajo</span></div><div className={styles.serviceIntro}><h2>Una mirada completa para desafíos concretos.</h2><p>Seleccionamos el enfoque y la combinación de capacidades que cada organización necesita para avanzar.</p></div><div className={styles.serviceList}>{services.map((service) => <Link className={styles.service} href={`/servicios/${service.slug}`} key={service.slug}><span className={styles.serviceNumber}>{service.number}</span><div><h2>{service.title}</h2><p>{service.shortDescription}</p></div><span className={styles.serviceArrow} aria-hidden="true">↗</span></Link>)}</div></section>
      <section className={styles.finalCta}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p><h2>Hablemos del desafío que tiene hoy tu organización.</h2><Link href="/#contacto" className={styles.ctaLink}>Conversemos <span aria-hidden="true">↗</span></Link></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
