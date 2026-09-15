import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import styles from "./page.module.css";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service ? `${service.title} | NODUS` : "Servicio | NODUS", description: service?.shortDescription ?? "Servicios de consultoría portuaria estratégica de NODUS." };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return <main className={styles.notFound}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> SERVICIOS</p><h1>Este servicio no está disponible.</h1><Link href="/servicios">Volver a servicios <span aria-hidden="true">↗</span></Link></main>;
  }

  return (
    <main>
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/">Inicio</Link><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link href="/blog">Blog</Link><Link className={styles.navContact} href="/#contacto">Contacto <span aria-hidden="true">↗</span></Link></nav></header>
      <section className={styles.pageHero} style={{ backgroundImage: "linear-gradient(90deg, rgba(41,40,87,.95), rgba(41,40,87,.52)), url('/images/puerto_3.webp')", backgroundPosition: "center 25%" }}><div><p className={styles.kicker}>NODUS CONSULTING <span>/</span> SERVICIO {service.number}</p><h1>{service.title}</h1><p>{service.intro}</p></div></section>
      <section className={styles.content}><Link className={styles.backLink} href="/servicios">← Todos los servicios</Link><div className={styles.contentGrid}><div><p className={styles.sectionLabel}>El enfoque</p><h2>Decisiones mejor informadas para avanzar con dirección.</h2></div><div><p className={styles.bodyCopy}>{service.approach}</p><div className={styles.deliverables}><p className={styles.sectionLabel}>Qué hacemos</p><ul>{service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul></div></div></div></section>
      <section className={styles.outcomes}><div className={styles.outcomesLabel}><p className={styles.sectionLabel}>El resultado</p><span>{service.number}</span></div><div className={styles.outcomesGrid}>{service.outcomes.map((outcome) => <article key={outcome.title}><h2>{outcome.title}</h2><p>{outcome.text}</p></article>)}</div></section>
      <section className={styles.finalCta}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> PRÓXIMO PASO</p><h2>Conversemos sobre cómo llevar este desafío a la práctica.</h2><Link href="/#contacto" className={styles.ctaLink}>Contactanos <span aria-hidden="true">↗</span></Link></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
