import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatBlogDate, getBlogPost, getBlogSlugs, getReadingMinutes, getTitleParts } from "@/data/blogPosts";
import { getFounderByName, site } from "@/data/site";
import { JsonLd, absoluteUrl, breadcrumbJsonLd, isoDate, organizationId, pageMetadata, personId } from "@/lib/seo";
import styles from "./page.module.css";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

const getOgImage = (slug: string) => `/og/blog/${slug}.jpg`;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const authorName = post.author.split(" · ")[0];
  const founder = getFounderByName(authorName);
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: getOgImage(post.slug),
    imageAlt: post.title,
    type: "article",
    publishedTime: isoDate(post.date),
    authors: [founder ? absoluteUrl(`/nosotros/${founder.slug}`) : authorName],
    section: post.category,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const authorName = post.author.split(" · ")[0];
  const founder = getFounderByName(authorName);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(getOgImage(post.slug)), absoluteUrl(post.heroImage)],
    datePublished: isoDate(post.date),
    dateModified: isoDate(post.date),
    inLanguage: site.language,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: [post.excerpt, ...(post.sections?.flatMap((section) => [section.heading, ...section.paragraphs]) ?? post.body)].join(" ").split(/\s+/).filter(Boolean).length,
    author: founder
      ? { "@type": "Person", "@id": personId(founder), name: founder.name, jobTitle: founder.jobTitle, url: absoluteUrl(`/nosotros/${founder.slug}`) }
      : { "@type": "Person", name: authorName },
    publisher: { "@id": organizationId },
    isPartOf: { "@type": "Blog", name: "Blog de NODUS", url: absoluteUrl("/blog") },
  };

  return (
    <main>
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])]} />
      <header className={styles.header}><Link href="/" className={styles.brand} aria-label="NODUS, inicio"><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={170} height={60} priority /></Link><nav className={styles.nav} aria-label="Navegación principal"><Link href="/">Inicio</Link><Link href="/nosotros">Quiénes somos</Link><Link href="/servicios">Servicios</Link><Link href="/#metodo">Método</Link><Link href="/blog">Blog</Link><Link className={styles.navContact} href="/#contacto">Contacto <span aria-hidden="true">↗</span></Link></nav></header>
      <section className={styles.articleHero}><div className={styles.articleHeroImage}><Image src={post.heroImage} alt="" fill priority sizes="100vw" /></div><div className={styles.articleHeroOverlay}><Link className={styles.backLink} href="/blog">← Volver al Blog</Link><div className={styles.articleHeading}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> {post.category}</p><h1>{(() => { const titleParts = getTitleParts(post.title); return <><strong className={styles.titleLead}>{titleParts.lead}</strong>{titleParts.remainder && <> {titleParts.remainder}</>}</>; })()}</h1><div className={styles.meta}><span>{post.author}</span><span>{formatBlogDate(post.date)}</span><span>{getReadingMinutes(post)} min de lectura</span></div></div></div></section>
      <article className={styles.articleBody}><p className={styles.articleLead}>{post.excerpt}</p>{post.sections ? post.sections.map((section) => <section className={styles.articleSection} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>) : post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className={styles.tags}>{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>
      <section className={styles.finalCta}><p className={styles.kicker}>NODUS CONSULTING <span>/</span> CONTACTO</p><h2>¿Querés conversar sobre un desafío portuario?</h2><Link href="/#contacto" className={styles.ctaLink}>Conversemos <span aria-hidden="true">↗</span></Link></section>
      <footer className={styles.footer}><Image src="/brand/logo-nodus.png" alt="NODUS Consulting" width={135} height={48} /><span>Consultoría portuaria estratégica</span><span>© 2025 NODUS</span></footer>
    </main>
  );
}
