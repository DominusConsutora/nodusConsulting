import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceSlugs } from "@/data/services";
import { site } from "@/data/site";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, organizationId, pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title}: consultoría portuaria`,
    description: `${service.shortDescription} Consultoría portuaria de NODUS para Argentina y Latinoamérica.`,
    path: `/servicios/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/servicios/${service.slug}`)}#service`,
    name: service.title,
    serviceType: "Consultoría portuaria",
    description: `${service.intro} ${service.approach}`,
    url: absoluteUrl(`/servicios/${service.slug}`),
    provider: { "@id": organizationId },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: { "@type": "OfferCatalog", name: `Entregables: ${service.title}`, itemListElement: service.deliverables.map((deliverable) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: deliverable } })) },
  };

  return (
    <main>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Servicios", path: "/servicios" }, { name: service.title, path: `/servicios/${service.slug}` }])]} />
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/">Inicio</Link><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link href="/blog">Blog</Link><Link className={styles.navContact} href="/#contacto">Contacto <span aria-hidden="true">↗</span></Link></nav></header>
      <section className={styles.pageHero} style={{ backgroundImage: "linear-gradient(90deg, rgba(41,40,87,.95), rgba(41,40,87,.52)), url('/images/puerto_3.webp')", backgroundPosition: "center 25%" }}><div><p className={styles.kicker}>NODUS CONSULTING <span>/</span> SERVICIO {service.number}</p><h1>{service.title}</h1><p>{service.intro}</p></div></section>
      <section className={styles.content}><Link className={styles.backLink} href="/servicios">← Todos los servicios</Link><div className={styles.contentGrid}><div><p className={styles.sectionLabel}>El enfoque</p><h2>Decisiones mejor informadas para avanzar con dirección.</h2></div><div><p className={styles.bodyCopy}>{service.approach}</p><div className={styles.deliverables}><p className={styles.sectionLabel}>Qué hacemos</p><ul>{service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul></div></div></div></section>
      <section className={styles.outcomes}><div className={styles.outcomesLabel}><p className={styles.sectionLabel}>El resultado</p><span>{service.number}</span></div><div className={styles.outcomesGrid}>{service.outcomes.map((outcome) => <article key={outcome.title}><h2>{outcome.title}</h2><p>{outcome.text}</p></article>)}</div></section>
      <section className={styles.finalCta}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> PRÓXIMO PASO</p><h2>Conversemos sobre cómo llevar este desafío a la práctica.</h2><Link href="/#contacto" className={styles.ctaLink}>Contactanos <span aria-hidden="true">↗</span></Link></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
