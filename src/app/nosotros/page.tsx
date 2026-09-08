import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre Nosotros | NODUS",
  description: "Conocé NODUS, consultora portuaria estratégica para autoridades, operadores y terminales de Argentina y Latinoamérica.",
};

const method = [
  ["01", "Escuchar", "Partimos del contexto real de cada institución, sin aplicar soluciones prefabricadas."],
  ["02", "Integrar equipos", "Combinamos nuestra experiencia con el conocimiento de quienes conocen la operación desde adentro."],
  ["03", "Dialogar directo", "Trabajamos con autoridades, directorios y equipos técnicos en una misma conversación."],
  ["04", "Comparar con criterio", "Usamos referencias regionales e internacionales, siempre adaptadas a la realidad local."],
  ["05", "Sostener independencia", "Presentamos evidencia y criterio profesional, incluso cuando la recomendación exige revisar supuestos."],
  ["06", "Diseñar para implementar", "Cada recomendación se traduce en etapas, responsables, recursos e indicadores."],
  ["07", "Cuidar la información", "Tratamos la información institucional y operativa con la confidencialidad que requiere."],
];

const values = [
  ["01", "Independencia técnica", "Nuestro criterio se construye sobre evidencia, experiencia y ausencia de intereses cruzados."],
  ["02", "Compromiso público", "Entendemos el impacto económico y territorial de las decisiones que acompañamos."],
  ["03", "Rigor aplicado", "Cada recomendación debe poder explicarse, documentarse y sostenerse con datos."],
  ["04", "Confidencialidad", "Protegemos la información sensible de autoridades, operadores y terminales."],
  ["05", "Vocación de implementación", "El trabajo no termina en el diagnóstico: construimos el camino para llevarlo adelante."],
  ["06", "Relaciones duraderas", "Buscamos aportar valor más allá de una entrega puntual y construir confianza en el tiempo."],
];

const advantages = ["Oficio portuario y conocimiento del sector", "Experiencia comparada en Argentina y LATAM", "Mirada técnica, económica e institucional", "Metodología ajustada a cada organización", "Independencia y criterio profesional", "Foco en decisiones implementables", "Cuidado estricto de la información", "Transferencia de conocimiento a los equipos"];

export default function NosotrosPage() {
  return (
    <main>
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/#firma">La firma</Link><Link href="/#servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link className={styles.navContact} href="/#contacto">Contacto <span aria-hidden="true">↗</span></Link></nav></header>

      <section className={styles.pageHero}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> INSTITUCIONAL</p><h1>Una consultora portuaria con mirada <em>estratégica.</em></h1><p>Trabajamos con quienes planifican, regulan y operan infraestructura crítica en Argentina y Latinoamérica.</p></section>

      <section className={styles.intro}><div className={styles.sectionLabel}><span>01</span><span>Quiénes somos</span></div><div className={styles.introContent}><h2>Experiencia del sector para decisiones que deben sostenerse en el tiempo.</h2><div className={styles.twoColumns}><p>NODUS es una firma de consultoría especializada en desarrollo portuario. Nacemos para acompañar a instituciones que necesitan una mirada independiente, técnica y orientada a resultados para abordar decisiones de infraestructura, gestión y política pública.</p><p>Nuestro trabajo combina comprensión del sistema portuario, análisis estratégico y capacidad de implementación. Hablamos con autoridades, operadores y equipos técnicos desde una perspectiva común: entender la complejidad para convertirla en prioridades claras.</p></div></div></section>

      <section className={styles.profile}><div className={styles.sectionLabel}><span>02</span><span>Founder</span></div><div className={styles.profileContent}><div className={styles.profilePortrait}><Image src="/brand/diego-salom-recorte.png" alt="Diego Salom, fundador de NODUS" width={520} height={620} /></div><div className={styles.profileDetails}><div className={styles.profileIdentity}><p className={styles.kicker}>Founder / NODUS</p><h2><span>Diego</span> <em>Salom.</em></h2><p>Gestión portuaria y planificación estratégica</p></div><div className={styles.profileSummary}><p>Diego Salom es fundador de NODUS y consultor de UNCTAD en Argentina. Su recorrido combina planificación estratégica, gestión de infraestructura crítica, formación portuaria y cooperación institucional.</p><p>Una experiencia construida desde el sector para acompañar decisiones complejas con criterio y visión regional.</p><Link className={styles.profileButton} href="/nosotros/diego-salom">Ver perfil completo <span aria-hidden="true">↗</span></Link></div></div></div></section>

      <section className={styles.reach}><div className={styles.sectionLabel}><span>03</span><span>Alcance</span></div><div className={styles.reachContent}><h2>Argentina como punto de partida. Latinoamérica como horizonte.</h2><p>Conocemos las particularidades institucionales, económicas y operativas de la región. Construimos recomendaciones comparables, pero nunca despegadas del territorio.</p><div className={styles.regionGrid}><span>Argentina</span><span>Uruguay</span><span>Chile</span><span>Perú</span><span>Colombia</span><span>Panamá</span><span>México</span><span>Brasil</span><span>Paraguay</span></div></div></section>

      <section className={styles.method}><div className={styles.sectionLabel}><span>04</span><span>Cómo trabajamos</span></div><div className={styles.methodContent}><h2>Diálogo, rigor técnico y capacidad de implementación.</h2><div className={styles.methodGrid}>{method.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.values}><div className={styles.sectionLabel}><span>05</span><span>Valores</span></div><div className={styles.valuesContent}><h2>Los compromisos que guían nuestro trabajo.</h2><div className={styles.valueGrid}>{values.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={styles.advantages}><div className={styles.sectionLabel}><span>06</span><span>Qué nos distingue</span></div><div className={styles.advantagesContent}><h2>Una forma de trabajar pensada para el sistema portuario.</h2><ol>{advantages.map((advantage, index) => <li key={advantage}><span>{String(index + 1).padStart(2, "0")}</span>{advantage}</li>)}</ol></div></section>

      <section className={styles.finalCta}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p><h2>Conversemos sobre el próximo desafío de tu organización.</h2><Link href="/#contacto" className={styles.ctaLink}>Contactanos <span aria-hidden="true">↗</span></Link></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
