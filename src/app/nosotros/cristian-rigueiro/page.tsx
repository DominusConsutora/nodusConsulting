import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profileStyles from "../diego-salom/page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cristian Rigueiro | Cofundador de NODUS",
  description:
    "Trayectoria de Cristian Rigueiro, cofundador de NODUS, abogado y especialista en gestión jurídica e institucional del sistema portuario.",
};

const career = [
  [
    "2024",
    "Jefatura de Gabinete de Asesores",
    "Comisión de Servicios en la Subsecretaría de Puertos y Vías Navegables de la Secretaría de Transporte, Ministerio de Economía.",
  ],
  [
    "2022 - 2024",
    "Administración General de Puertos y gestión nacional",
    "Se desempeñó como subgerente general de la Administración General de Puertos, secretario general y jefe de asesores en áreas nacionales vinculadas a puertos, vías navegables y marina mercante.",
  ],
  [
    "2018 - 2022",
    "Gerencia de Asuntos Jurídicos",
    "Gerente del servicio jurídico de la Administración General de Puertos, con responsabilidad jerárquica sobre el área y asesoramiento legal a la entidad.",
  ],
  [
    "2015 - 2018",
    "Asesoría Jurídica",
    "Desarrolló funciones en el Departamento de Dictámenes y en la Subgerencia de Asesoría Jurídica de la Administración General de Puertos.",
  ],
];

const education = [
  ["Abogacía", "Universidad Nacional de Lomas de Zamora"],
  ["Especialización en contratos administrativos", "Escuela del Cuerpo de Abogados del Estado"],
  ["Diplomatura Federal en Contrato Administrativo de Obra Pública", "Fundación para la Educación, la Ciencia y la Cultura"],
  ["Actualización jurídica en derecho administrativo", "Administración General de Puertos"],
];

const expertise = [
  "Asuntos jurídicos portuarios",
  "Derecho y contratación administrativa",
  "Gestión institucional",
  "Administración pública",
  "Puertos y vías navegables",
  "Asesoramiento a organismos públicos",
];

export default function CristianRigueiroPage() {
  return (
    <main>
      <header className={profileStyles.header}>
        <Link href="/" className={profileStyles.brand} aria-label="NODUS, inicio">
          <Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority />
        </Link>
        <nav className={profileStyles.nav} aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Quiénes somos</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/#metodo">Método</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#contacto" className={profileStyles.navContact}>Contacto <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      <section className={profileStyles.profileHero}>
        <Link href="/nosotros" className={profileStyles.backLink}>← Volver a Sobre Nosotros</Link>
        <div className={profileStyles.profileHeroGrid}>
          <div>
            <p className={profileStyles.kicker}>NODUS CONSULTING <span>/</span> COFUNDADOR</p>
            <h1>Cristian <em>Rigueiro.</em></h1>
            <p className={profileStyles.role}>Cofundador de NODUS / Abogado y especialista en gestión jurídica portuaria</p>
          </div>
          <Image
            className={styles.avatar}
            src="/brand/cristian-rigueiro-recorte.png"
            alt="Cristian Rigueiro, cofundador de NODUS"
            width={800}
            height={1000}
            priority
          />
        </div>
      </section>

      <section className={profileStyles.bio}>
        <div className={profileStyles.sectionLabel}><span>01</span><span>Perfil</span></div>
        <div className={profileStyles.bioContent}>
          <h2>Experiencia jurídica e institucional al servicio del sistema portuario.</h2>
          <div>
            <p>Cristian Rigueiro es abogado y cofundador de NODUS. Su recorrido profesional se desarrolló en la Administración General de Puertos y en áreas nacionales de puertos y vías navegables, donde asumió responsabilidades jurídicas, de asesoramiento y de gestión institucional.</p>
            <p>Su experiencia reúne conocimiento de la administración pública, contratación y derecho administrativo con una mirada directa sobre los desafíos de gobernanza del sector portuario.</p>
          </div>
        </div>
      </section>

      <section className={profileStyles.career}>
        <div className={profileStyles.sectionLabel}><span>02</span><span>Trayectoria</span></div>
        <div className={profileStyles.careerList}>
          {career.map(([period, title, text]) => (
            <article key={period}>
              <span>{period}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={profileStyles.education}>
        <div className={profileStyles.sectionLabel}><span>03</span><span>Formación</span></div>
        <div className={profileStyles.educationList}>
          {education.map(([title, institution]) => (
            <p key={title}>{title}<span>{institution}</span></p>
          ))}
        </div>
      </section>

      <section className={profileStyles.expertise}>
        <div className={profileStyles.sectionLabel}><span>04</span><span>Especialización</span></div>
        <div className={profileStyles.expertiseGrid}>
          {expertise.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>

      <section className={profileStyles.finalCta}>
        <p className={profileStyles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p>
        <h2>Conozcamos el desafío de tu organización.</h2>
        <Link href="/#contacto" className={profileStyles.ctaLink}>Contactanos <span aria-hidden="true">↗</span></Link>
      </section>
      <footer className={profileStyles.footer}>
        <Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} />
        <span>Consultoría portuaria estratégica</span>
        <span>© 2025 NODUS</span>
      </footer>
    </main>
  );
}
