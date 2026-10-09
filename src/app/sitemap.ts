import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/blog-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexdial.io";
  
  // High-priority core pages
  const coreRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" as const },
    { route: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/advanced-excel", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/mis-reporting", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/excel-dashboards", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/data-cleaning", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/vba-automation", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/power-bi", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/portfolio", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/pricing", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/case-studies", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.85, changeFrequency: "daily" as const },
    { route: "/about", priority: 0.75, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Use case & Industry pages
  const departmentRoutes = [
    { route: "/use-cases/finance", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/use-cases/operations", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/use-cases/sales", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/industries", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/industries/healthcare", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/industries/ecommerce", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/industries/real-estate", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/industries/financial", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/industries/manufacturing", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticSitemap = [...coreRoutes, ...departmentRoutes].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Dynamic blog routes for all 10 articles
  const blogSitemap = Object.entries(ARTICLES).map(([slug, article]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticSitemap, ...blogSitemap];
}
