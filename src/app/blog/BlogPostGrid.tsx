"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogTopics, formatBlogDate, getReadingMinutes, getTitleParts, type BlogPost } from "@/data/blogPosts";
import styles from "./content.module.css";
import filterStyles from "./filter.module.css";

interface BlogPostGridProps {
  posts: BlogPost[];
}

export default function BlogPostGrid({ posts }: BlogPostGridProps) {
  const [selectedTopic, setSelectedTopic] = useState("Todos");
  const filteredPosts = selectedTopic === "Todos" ? posts : posts.filter((post) => post.category === selectedTopic);

  return (
    <div className={filterStyles.blogBrowser}>
      <aside className={filterStyles.topicFilter} aria-label="Filtrar notas por eje temático">
        <p className={filterStyles.filterLabel}>Ejes temáticos</p>
        <div className={filterStyles.topicList} role="group" aria-label="Ejes temáticos del Blog">
          {blogTopics.map((topic) => <button className={selectedTopic === topic ? filterStyles.topicActive : filterStyles.topic} key={topic} onClick={() => setSelectedTopic(topic)} type="button" aria-pressed={selectedTopic === topic}>{topic}</button>)}
        </div>
      </aside>
      <div className={`${styles.postGrid} ${filterStyles.postGrid}`} aria-live="polite">
        {filteredPosts.length > 0 ? filteredPosts.map((post) => { const titleParts = getTitleParts(post.title); return <article className={styles.post} key={post.slug}><Link href={`/blog/${post.slug}`}><div className={styles.postImage}><Image src={post.heroImage} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className={styles.postMeta}><span>{post.category}</span><span>{formatBlogDate(post.date)}</span><span className={styles.postTime}>{getReadingMinutes(post)} min de lectura</span></div><h2><strong className={styles.titleLead}>{titleParts.lead}</strong>{titleParts.remainder && <> {titleParts.remainder}</>}</h2><p className={styles.postAuthor}>{post.author}</p><p>{post.excerpt}</p><span className={styles.readLink}>Leer artículo <span aria-hidden="true">↗</span></span></Link></article>; }) : <p className={filterStyles.emptyState}>Todavía no publicamos notas sobre este eje. Estamos preparando nuevos contenidos.</p>}
      </div>
    </div>
  );
}
