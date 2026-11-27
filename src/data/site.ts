// Datos institucionales usados por metadatos, sitemap, robots y datos estructurados.
// Si cambia el dominio definitivo (por ejemplo, con "www"), modificarlo solo acá.
export const site = {
  url: "https://nodusconsulting.com.ar",
  name: "NODUS",
  legalName: "NODUS SRL",
  alternateName: "NODUS Consulting",
  tagline: "Consultoría portuaria estratégica",
  description:
    "Consultora portuaria estratégica: master plans, concesiones y PPP, gobernanza, operación de terminales y transformación digital para autoridades, operadores y terminales de Argentina y Latinoamérica.",
  locale: "es_AR",
  language: "es-AR",
  email: "info@nodusconsulting.com.ar",
  logo: "/brand/logo-nodus.png",
  defaultOgImage: "/og/nodus.jpg",
  areaServed: ["Argentina", "Latinoamérica"],
  address: { locality: "Ciudad Autónoma de Buenos Aires", country: "AR" },
  // Perfiles oficiales (LinkedIn, etc.). Completar cuando estén confirmados:
  // se publican como "sameAs" en los datos estructurados de la organización.
  sameAs: [] as string[],
};

export type Founder = {
  slug: string;
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  knowsAbout: string[];
  sameAs: string[];
};

export const founders: Founder[] = [
  {
    slug: "diego-salom",
    name: "Diego Salom",
    jobTitle: "Cofundador de NODUS",
    description: "Especialista en planificación estratégica, gestión y desarrollo portuario. Consultor de UNCTAD en Argentina.",
    image: "/brand/diego-salom-recorte.png",
    knowsAbout: ["Planificación portuaria", "Master plans portuarios", "Concesiones portuarias", "Capacitación portuaria", "Logística y vías navegables"],
    // Completar con la URL de LinkedIn del perfil.
    sameAs: [],
  },
  {
    slug: "cristian-rigueiro",
    name: "Cristian Rigueiro",
    jobTitle: "Cofundador de NODUS",
    description: "Abogado especializado en gestión jurídica e institucional del sistema portuario y de vías navegables.",
    image: "/brand/cristian-rigueiro-recorte.png",
    knowsAbout: ["Derecho administrativo", "Contratación pública", "Regulación portuaria", "Puertos y vías navegables"],
    // Completar con la URL de LinkedIn del perfil.
    sameAs: [],
  },
];

export function getFounderByName(name: string) {
  return founders.find((founder) => name.startsWith(founder.name));
}
