import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  ["01", "Master plans portuarios", "Diseño de visión, escenarios de demanda y hojas de ruta para infraestructura portuaria."],
  ["02", "Concesiones, PPP y licitaciones", "Estructuración de modelos de gestión, contratos y alternativas de inversión público-privada."],
  ["03", "Gobernanza y tarifas", "Diseño de reglas, esquemas tarifarios y responsabilidades para ordenar el sistema portuario."],
  ["04", "Optimización operativa de terminales", "Diagnóstico de productividad, capacidad y procesos para mejorar resultados medibles."],
  ["05", "Transformación digital y PCS", "Arquitecturas digitales y sistemas de comunidad portuaria para integrar actores y datos."],
  ["06", "Sostenibilidad y green ports", "Estrategias de eficiencia, transición energética y gestión ambiental adaptadas a cada puerto."],
  ["07", "Regulación y políticas públicas", "Análisis normativo y diseño de políticas que acompañen el desarrollo portuario regional."],
  ["08", "Capacitación y talento portuario", "Programas de formación y desarrollo de equipos para sostener nuevas capacidades."],
];

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <a href="#inicio" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></a>
        <nav className={styles.nav} aria-label="Navegación principal"><a href="#firma">La firma</a><a href="#servicios">Servicios</a><a href="#metodo">Método</a><a className={styles.navContact} href="#contacto">Contacto <span aria-hidden="true">↗</span></a></nav>
      </header>

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroMain}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> PORT STRATEGY</p><h1>Consultoría portuaria para <strong>decisiones de largo plazo.</strong></h1><p className={styles.heroText}>Asesoramos a autoridades, operadores y terminales en el diseño y la gestión de infraestructura portuaria en Argentina y Latinoamérica.</p><div className={styles.heroActions}><a className={styles.button} href="#contacto">Conversemos <span aria-hidden="true">↗</span></a><a className={styles.inlineLink} href="#servicios">Ver servicios <span aria-hidden="true">↓</span></a></div></div>
        <aside className={styles.heroAside}><p className={styles.asideLabel}>Ámbitos de trabajo</p><p className={styles.asideTitle}>Consultoría<br />portuaria integral</p><div className={styles.asideRule} /><dl className={styles.heroFacts}>{services.map(([number, title]) => <div key={number}><dt>{number}</dt><dd>{title}</dd></div>)}</dl></aside>
      </section>

      <section id="firma" className={styles.firm}><div className={styles.sectionLabel}><span>01</span><span>La firma</span></div><div className={styles.firmContent}><h2>Una mirada integral para sistemas portuarios más competitivos.</h2><div className={styles.firmCopy}><p>NODUS acompaña procesos de decisión que impactan en el desarrollo económico y territorial. Integramos análisis estratégico, conocimiento operativo y comprensión del marco institucional.</p><p>Trabajamos con una lógica simple: entender el sistema, ordenar las prioridades y construir un camino viable para avanzar.</p></div><Link className={styles.firmButton} href="/nosotros">Sobre Nosotros <span aria-hidden="true">↗</span></Link></div></section>

      <section id="servicios" className={styles.services}><div className={styles.sectionLabel}><span>02</span><span>Servicios</span></div><div className={styles.servicesIntro}><h2>Capacidades para cada etapa del sistema portuario.</h2><p>Desde la definición de una estrategia hasta la mejora de una operación existente.</p></div><div className={styles.serviceList}>{services.map(([number, title, text]) => <article className={styles.service} key={number}><span className={styles.serviceNumber}>{number}</span><h3>{title}</h3><p>{text}</p><span className={styles.serviceArrow} aria-hidden="true">↗</span></article>)}</div></section>

      <section id="metodo" className={styles.method}><div className={styles.sectionLabel}><span>03</span><span>Método</span></div><div className={styles.methodContent}><h2>Claridad para decidir.<br /><em>Criterio para implementar.</em></h2><div className={styles.methodSteps}><div><span>01</span><strong>Entender</strong><p>Analizamos contexto, actores, restricciones y oportunidades.</p></div><div><span>02</span><strong>Diseñar</strong><p>Convertimos evidencia en escenarios y recomendaciones concretas.</p></div><div><span>03</span><strong>Activar</strong><p>Acompañamos la ejecución para que la estrategia produzca resultados.</p></div></div></div></section>

      <section id="contacto" className={styles.contact}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p><h2>El próximo paso empieza con una buena conversación.</h2><a href="mailto:hola@nodus.com.ar" className={styles.contactLink}>hola@nodus.com.ar <span aria-hidden="true">↗</span></a></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}