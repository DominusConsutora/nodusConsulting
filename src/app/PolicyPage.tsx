import Link from "next/link";
import styles from "./policy.module.css";

interface PolicySection {
  title: string;
  paragraphs: string[];
}

interface PolicyPageProps {
  title: string;
  intro: string;
  updatedAt: string;
  sections: PolicySection[];
}

export default function PolicyPage({ title, intro, updatedAt, sections }: PolicyPageProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>NODUS <span>/ Consultoría portuaria</span></Link>
        <nav aria-label="Políticas">
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/">Volver al sitio</Link>
        </nav>
      </header>
      <article className={styles.content}>
        <p className={styles.kicker}>NODUS CONSULTING / INFORMACIÓN LEGAL</p>
        <h1>{title}</h1>
        <p className={styles.updated}>Vigente desde el {updatedAt}</p>
        <p className={styles.intro}>{intro}</p>
        {sections.map((section) => (
          <section className={styles.section} key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <div className={styles.related}>
          <Link href="/privacidad">Política de privacidad</Link>
          <Link href="/cookies">Política de cookies</Link>
          <Link href="/cookies#preferencias">Configurar privacidad</Link>
          <a href="https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto" rel="noreferrer" target="_blank">Ley 25.326</a>
          <a href="https://www.argentina.gob.ar/aaip/datospersonales" rel="noreferrer" target="_blank">AAIP</a>
          <a href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">Privacidad de Google</a>
          <a href="https://policies.google.com/technologies/cookies" rel="noreferrer" target="_blank">Cookies de Google</a>
        </div>
      </article>
      <footer className={styles.footer}>
        <span>NODUS SRL · Ciudad Autónoma de Buenos Aires, Argentina</span>
        <a href="mailto:info@nodusconsulting.com.ar">info@nodusconsulting.com.ar</a>
      </footer>
    </main>
  );
}
