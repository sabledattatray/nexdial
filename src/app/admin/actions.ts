"use server";

import { prisma } from "@/lib/prisma";
import { getAuthenticatedSession } from "@/lib/auth";
import { ARTICLES } from "@/lib/blog-content";

export async function getDashboardStats() {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  try {
    const leadCount = await prisma.contactMessage.count();
    const publishedArticles = await prisma.post.count({ where: { published: true } });
    return { leadCount, publishedArticles, conversionRate: "3.2%", visitors: 0 };
  } catch {
    // DB unavailable locally — return safe defaults
    return { leadCount: 0, publishedArticles: 0, conversionRate: "—", visitors: 0 };
  }
}

export async function getRecentActivity() {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 3
    });

    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      take: 3
    });

    const activity = [
      ...messages.map(m => ({ title: `New Lead/Message: ${m.name}`, time: m.createdAt.toISOString(), type: 'inbox' })),
      ...posts.map(p => ({ title: `Article: ${p.title}`, time: p.createdAt.toISOString(), type: 'blog' }))
    ];

    activity.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    return activity.slice(0, 5);
  } catch {
    return [];
  }
}

export async function createArticle(data: { title: string, content: string, published: boolean, slug?: string, seoTitle?: string, seoDesc?: string }) {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        published: data.published,
        slug: slug,
        excerpt: data.seoDesc || data.title,
      }
    });
    return post;
  } catch (e: any) {
    throw new Error(`Failed to create article: ${e.message}`);
  }
}

export async function getArticles() {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' }
    });

    if (posts && posts.length > 0) {
      return posts.map(p => ({
        id: p.id,
        title: p.title,
        author: "Datta Sable",
        category: p.category || "Sales Strategy",
        status: p.published ? "PUBLISHED" : "DRAFT",
        views: 0,
        date: p.date || p.createdAt.toISOString().split("T")[0],
        slug: p.slug,
      }));
    }

    // Fallback if DB table has not been populated
    return Object.entries(ARTICLES).map(([slug, post], index) => ({
      id: `fallback-${index + 1}`,
      title: post.title,
      author: post.author || "Datta Sable",
      category: post.category || "Sales Strategy",
      status: "PUBLISHED",
      views: 0,
      date: post.date || new Date().toISOString().split("T")[0],
      slug: slug,
    }));
  } catch (err) {
    console.error("Error in getArticles:", err);
    return Object.entries(ARTICLES).map(([slug, post], index) => ({
      id: `fallback-${index + 1}`,
      title: post.title,
      author: post.author || "Datta Sable",
      category: post.category || "Sales Strategy",
      status: "PUBLISHED",
      views: 0,
      date: post.date || new Date().toISOString().split("T")[0],
      slug: slug,
    }));
  }
}

export async function deleteArticle(id: string) {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  try {
    await prisma.post.delete({
      where: { id }
    });
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete article:", error);
    throw new Error(`Failed to delete article: ${error.message}`);
  }
}

