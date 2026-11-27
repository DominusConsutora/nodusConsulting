import type { MetadataRoute } from "next";
import { getSortedPosts } from "@/data/blogPosts";
import { founders } from "@/data/site";
import { services } from "@/data/services";
import { absoluteUrl, isoDate } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPosts();
  const latestPost = posts[0] ? isoDate(posts[0].date) : undefined;

  return [
    { url: absoluteUrl("/"), lastModified: latestPost, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/servicios"), changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({ url: absoluteUrl(`/servicios/${service.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: absoluteUrl("/blog"), lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: isoDate(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [absoluteUrl(post.heroImage)],
    })),
    { url: absoluteUrl("/nosotros"), changeFrequency: "monthly", priority: 0.7 },
    ...founders.map((founder) => ({ url: absoluteUrl(`/nosotros/${founder.slug}`), changeFrequency: "monthly" as const, priority: 0.6, images: [absoluteUrl(founder.image)] })),
    { url: absoluteUrl("/privacidad"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/cookies"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
