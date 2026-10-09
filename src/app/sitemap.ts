import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexdial.io";
  
  // Static routes
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/industries",
    "/industries/healthcare",
    "/industries/ecommerce",
    "/industries/real-estate",
    "/industries/financial",
    "/industries/manufacturing",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticSitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const blogSitemap = Object.entries(ARTICLES).map(([slug, article]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as "monthly",
    priority: 0.7,
  }));

  return [...staticSitemap, ...blogSitemap];
}
