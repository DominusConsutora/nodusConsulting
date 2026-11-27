import type { Metadata } from "next";
import { site, type Founder } from "@/data/site";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/** URL absoluta con barra final (el sitio usa trailingSlash: true). */
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") || /\.[a-z0-9]+$/i.test(clean) ? clean : `${clean}/`;
  return `${site.url}${withSlash === "/" ? "/" : withSlash}`;
}

type PageMetadataInput = {
  /** Título sin la marca: el layout agrega " | NODUS". */
  title?: string;
  /** Título completo, sin plantilla. */
  absoluteTitle?: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  noIndex?: boolean;
};

/**
 * Metadatos completos de una página: canonical, Open Graph (LinkedIn, Facebook,
 * WhatsApp) y Twitter. Open Graph no se hereda campo a campo del layout, por eso
 * cada página lo define completo.
 */
export function pageMetadata(input: PageMetadataInput): Metadata {
  const { description, path, type = "website" } = input;
  const url = absoluteUrl(path);
  const shareTitle = input.absoluteTitle ?? (input.title ? `${input.title} | ${site.name}` : `${site.name} | ${site.tagline}`);
  const images = [{ url: input.image ?? site.defaultOgImage, ...OG_IMAGE_SIZE, alt: input.imageAlt ?? `${site.name} · ${site.tagline}` }];

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? { type: "article", url, title: shareTitle, description, siteName: site.alternateName, locale: site.locale, images, publishedTime: input.publishedTime, modifiedTime: input.modifiedTime ?? input.publishedTime, authors: input.authors, section: input.section, tags: input.tags }
      : { type, url, title: shareTitle, description, siteName: site.alternateName, locale: site.locale, images };

  return {
    title: input.absoluteTitle ? { absolute: input.absoluteTitle } : input.title,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter: { card: "summary_large_image", title: shareTitle, description, images: images.map((image) => image.url) },
    ...(input.noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Fecha ISO con huso horario de Argentina, para datos estructurados y Open Graph. */
export function isoDate(date: string) {
  return `${date}T09:00:00-03:00`;
}

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;
export const personId = (founder: Founder) => `${absoluteUrl(`/nosotros/${founder.slug}`)}#person`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        legalName: site.legalName,
        alternateName: site.alternateName,
        url: absoluteUrl("/"),
        logo: { "@type": "ImageObject", url: absoluteUrl(site.logo), width: 4319, height: 1473 },
        image: absoluteUrl(site.defaultOgImage),
        description: site.description,
        email: site.email,
        address: { "@type": "PostalAddress", addressLocality: site.address.locality, addressCountry: site.address.country },
        areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
        knowsAbout: ["Consultoría portuaria", "Planificación portuaria", "Master plans portuarios", "Concesiones portuarias", "Asociaciones público-privadas", "Gobernanza portuaria", "Operación de terminales", "Port Community System", "Puertos sostenibles"],
        contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: site.email, availableLanguage: ["es", "en"] },
        ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl("/"),
        name: site.alternateName,
        description: site.description,
        inLanguage: site.language,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function personJsonLd(founder: Founder) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(`/nosotros/${founder.slug}`),
    inLanguage: site.language,
    mainEntity: {
      "@type": "Person",
      "@id": personId(founder),
      name: founder.name,
      jobTitle: founder.jobTitle,
      description: founder.description,
      image: absoluteUrl(founder.image),
      url: absoluteUrl(`/nosotros/${founder.slug}`),
      worksFor: { "@id": organizationId },
      knowsAbout: founder.knowsAbout,
      ...(founder.sameAs.length ? { sameAs: founder.sameAs } : {}),
    },
  };
}

/** Inserta datos estructurados schema.org (JSON-LD). */
export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}
