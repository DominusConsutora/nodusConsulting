import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Diego Salom | Cofundador de NODUS",
  description: "Trayectoria y especialización de Diego Salom, cofundador de NODUS y especialista en estrategia, gestión y desarrollo portuario.",
};

const career = [
  ["2026 - actualidad", "Consultor de UNCTAD", "Gestión portuaria, logística, vías navegables y fortalecimiento institucional."],
  ["2022 - 2026", "Director de Planificación Estratégica", "Administración General de Puertos. Planificación, concesiones, infraestructura y transformación del Puerto Buenos Aires."],
  ["2016 - 2022", "Director del Centro Nacional de Capacitación Portuaria", "Desarrollo de programas de formación y cooperación regional para profesionales del sector."],
  ["2011 - 2016", "Jefe de Relaciones Internacionales", "Administración General de Puertos. Cooperación institucional y articulación con organismos internacionales."],
];

const projects = [
  ["Vía Navegable Troncal", "2021 - 2026", `Participó en la puesta en marcha y consolidación de la administración estatal de una infraestructura estratégica de aproximadamente 1.400 km, que canaliza cerca del 80% del comercio exterior argentino. Su trabajo acompañó una transición de alta complejidad institucional y operativa, preservando la continuidad de la navegación comercial.

Intervino en la gestión de dragado y redragado, señalización, balizamiento, controles hidrométricos, cobro de peajes, mantenimiento y obras estratégicas. También contribuyó a la elaboración técnica y estratégica de los pliegos para una nueva concesión privada de 25 años, con modernización y profundización previstas hasta 40 pies.`],
  ["Transformación del Puerto Buenos Aires", "2023 - 2026", `Tuvo un papel protagónico en la renegociación de concesiones que transformó la operación portuaria de tres a dos operadores, articulando una transición con empresas internacionales y autoridades públicas. En 2026 participó además en una propuesta de mercado para evolucionar hacia una terminal unificada de contenedores.

Integró la planificación del Master Plan, los proyectos Puerto-Ciudad, una terminal de cruceros independiente y la relocalización de las áreas de apoyo operativo y logístico. También planificó inversiones en escolleras, infraestructura portuaria y obras viales, con un presupuesto anual aproximado de USD 150 millones.`],
  ["Capacitación y cooperación regional", "UNCTAD TRAINFORTRADE", `Lideró programas de profesionalización portuaria con más de 6.000 participantes, 10.000 horas de formación y presencia en 13 países de América. Esta agenda combinó desarrollo de capacidades, formación técnica y redes de cooperación entre autoridades, universidades y organizaciones del sector.

Extendió TRAINFORTRADE a más de 650 profesionales, impulsó el subprograma Puertos del Corredor Atlántico Sur y articuló cooperación con los puertos de Valencia y Gijón. Su participación incluyó congresos y encuentros portuarios internacionales en Ginebra y distintas ciudades de España.`],
];

export default function FounderPage() {
  return (
    <main>
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/">Inicio</Link><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link href="/blog">Blog</Link><Link href="/#contacto" className={styles.navContact}>Contacto <span aria-hidden="true">↗</span></Link></nav></header>

      <section className={styles.profileHero}><Link href="/nosotros" className={styles.backLink}>← Volver a Sobre Nosotros</Link><div className={styles.profileHeroGrid}><div><p className={styles.kicker}>NODUS CONSULTING <span>/</span> COFUNDADOR</p><h1>Diego <em>Salom.</em></h1><p className={styles.role}>Cofundador de NODUS / Consultor de UNCTAD en Argentina</p></div><Image src="/brand/diego-salom-recorte.png" alt="Diego Salom, cofundador de NODUS" width={460} height={550} priority /></div></section>

      <section className={styles.bio}><div className={styles.sectionLabel}><span>01</span><span>Perfil</span></div><div className={styles.bioContent}><h2>Experiencia pública, gestión portuaria y cooperación regional.</h2><div><p>Diego Salom desarrolla su carrera en la intersección entre la gestión portuaria, la planificación estratégica y el fortalecimiento institucional. Su experiencia combina responsabilidad ejecutiva, conocimiento de la operación y trabajo con organismos internacionales.</p><p>Como fundador de NODUS, pone esa perspectiva al servicio de autoridades, operadores y terminales que necesitan ordenar decisiones complejas y convertirlas en proyectos viables.</p></div></div></section>

      <section className={styles.career}><div className={styles.sectionLabel}><span>02</span><span>Trayectoria</span></div><div className={styles.careerList}>{career.map(([period, title, text]) => <article key={period}><span>{period}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className={styles.education}><div className={styles.sectionLabel}><span>03</span><span>Formación</span></div><div className={styles.educationList}><p>Máster en Logística y Gestión Portuaria <span>Fundación Valenciaport, España</span></p><p>Gestión Moderna de Puertos <span>UNCTAD TRAINFORTRADE, Valencia y Gijón</span></p><p>Licenciatura en Relaciones Públicas e Institucionales <span>UADE, Argentina</span></p></div></section>

      <section className={styles.projects}><div className={styles.sectionLabel}><span>04</span><span>Proyectos destacados</span></div><div className={styles.projectList}>{projects.map(([title, period, text]) => { const paragraphs = text.split("\n\n"); return <article key={title}><div><span>{period}</span><h3>{title}</h3></div><p>{paragraphs[0]}</p><p>{paragraphs[1]}</p></article>; })}</div></section>

      <section className={styles.expertise}><div className={styles.sectionLabel}><span>05</span><span>Especialización</span></div><div className={styles.expertiseGrid}><span>Gestión y planificación portuaria</span><span>Vías navegables y gobernanza</span><span>Formación de capacidades</span><span>Cooperación internacional</span><span>Programas regionales</span><span>Fortalecimiento institucional</span></div></section>

      <section className={styles.finalCta}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p><h2>Conozcamos el desafío de tu organización.</h2><Link href="/#contacto" className={styles.ctaLink}>Contactanos <span aria-hidden="true">↗</span></Link></section><footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
