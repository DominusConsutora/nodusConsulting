import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, getReadingMinutes, getSortedPosts, getTitleParts } from "@/data/blogPosts";
import { services } from "@/data/services";
import styles from "./page.module.css";
import blogStyles from "./blogPreview.module.css";
import ContactForm from "./ContactForm";
import { contact } from "@/data/contact";

export default function Home() {
  const latestPosts = getSortedPosts().slice(0, 3);

  return (
    <main>
      <header className={styles.header}>
        <a href="#inicio" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></a>
        <nav className={styles.nav} aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#firma">Quiénes somos</a><a href="#servicios">Servicios</a><a href="#metodo">Método</a><Link href="/blog">Blog</Link><a className={styles.navContact} href="#contacto">Contacto <span aria-hidden="true">↗</span></a></nav>
      </header>

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroMain}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> PORT STRATEGY</p><h1>Consultoría portuaria para <strong>decisiones de largo plazo.</strong></h1><p className={styles.heroText}>Asesoramos a autoridades, operadores y terminales en el diseño y la gestión de infraestructura portuaria en Argentina y Latinoamérica.</p><div className={styles.heroActions}><a className={styles.button} href="#contacto">Conversemos <span aria-hidden="true">↗</span></a><a className={styles.inlineLink} href="#servicios">Ver servicios <span aria-hidden="true">↓</span></a></div></div>
        <aside className={styles.heroAside}><p className={styles.asideLabel}>Ámbitos de trabajo</p><p className={styles.asideTitle}>Consultoría<br />portuaria integral</p><div className={styles.asideRule} /><dl className={styles.heroFacts}>{services.map((service) => <div key={service.number}><dt>{service.number}</dt><dd>{service.title}</dd></div>)}</dl></aside>
      </section>

      <section id="firma" className={styles.firm}><div className={styles.sectionLabel}><span>01</span><span>La firma</span></div><div className={styles.firmContent}><h2>Una mirada integral para sistemas portuarios más competitivos.</h2><div className={styles.firmCopy}><p>NODUS acompaña procesos de decisión que impactan en el desarrollo económico y territorial. Integramos análisis estratégico, conocimiento operativo y comprensión del marco institucional.</p><p>Trabajamos con una lógica simple: entender el sistema, ordenar las prioridades y construir un camino viable para avanzar.</p></div><Link className={styles.firmButton} href="/nosotros">Sobre Nosotros <span aria-hidden="true">↗</span></Link></div></section>

      <section id="servicios" className={styles.services}><div className={styles.sectionLabel}><span>02</span><span>Servicios</span></div><div className={styles.servicesIntro}><h2>Capacidades para cada etapa del sistema portuario.</h2><p>Desde la definición de una estrategia hasta la mejora de una operación existente.</p></div><div className={styles.serviceList}>{services.map((service) => <Link className={styles.service} href={`/servicios/${service.slug}`} key={service.slug}><span className={styles.serviceNumber}>{service.number}</span><h3>{service.title}</h3><p>{service.shortDescription}</p><span className={styles.serviceArrow} aria-hidden="true">↗</span></Link>)}</div><div className={styles.firmContent}><Link className={styles.firmButton} href="/servicios">Ver más servicios <span aria-hidden="true">↗</span></Link></div></section>

      <section className={blogStyles.blogPreview}>
        <div className={blogStyles.sectionLabel}><span>03</span><span>Blog</span></div>
        <div className={blogStyles.previewIntro}>
          <div>
            <h2>Notas para pensar el presente y proyectar el próximo puerto.</h2>
            <p>Análisis y perspectivas sobre planificación, operación y sostenibilidad portuaria.</p>
          </div>
          <Link className={blogStyles.blogButton} href="/blog">Ver todas las notas <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={blogStyles.previewGrid}>
          {latestPosts.map((post) => {
            const titleParts = getTitleParts(post.title);

            return (
              <article className={blogStyles.previewCard} key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={blogStyles.previewImage}>
                    <Image src={post.heroImage} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                  </div>
                  <div className={blogStyles.previewMeta}>
                    <span>{post.category}</span>
                    <span>{formatBlogDate(post.date)}</span>
                    <span>{getReadingMinutes(post)} min de lectura</span>
                  </div>
                  <h3>
                    <strong className={blogStyles.titleLead}>{titleParts.lead}</strong>
                    {titleParts.remainder && <> {titleParts.remainder}</>}
                  </h3>
                  <p className={blogStyles.postAuthor}>{post.author}</p>
                  <p>{post.excerpt}</p>
                  <span className={blogStyles.readMore}>Leer nota <span aria-hidden="true">↗</span></span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section id="metodo" className={styles.method}><div className={styles.sectionLabel}><span>04</span><span>Método</span></div><div className={styles.methodContent}><h2>Claridad para decidir.<br /><em>Criterio para implementar.</em></h2><div className={styles.methodSteps}><div><span>01</span><strong>Entender</strong><p>Analizamos contexto, actores, restricciones y oportunidades.</p></div><div><span>02</span><strong>Diseñar</strong><p>Convertimos evidencia en escenarios y recomendaciones concretas.</p></div><div><span>03</span><strong>Activar</strong><p>Acompañamos la ejecución para que la estrategia produzca resultados.</p></div></div></div></section>

      <section id="contacto" className={styles.contact}><div className={styles.contactHeader}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p><h2>El próximo paso empieza con una buena conversación.</h2><p className={styles.contactIntro}>Contanos qué desafío tiene hoy tu organización. Podemos ayudarte a ordenar el problema, evaluar alternativas y construir un camino viable para avanzar.</p><div className={styles.contactDetails}><a href={`mailto:${contact.email}`}>{contact.email} <span aria-hidden="true">↗</span></a><span>Argentina / Latinoamérica</span><span>Consultoría portuaria estratégica</span></div></div><ContactForm /></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}