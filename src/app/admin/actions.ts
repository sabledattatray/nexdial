"use server";

import { prisma } from "@/lib/prisma";
import { getAuthenticatedSession } from "@/lib/auth";

export async function getDashboardStats() {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  // Count leads/messages
  const leadCount = await prisma.contactMessage.count();
  const publishedArticles = await prisma.post.count({ where: { published: true } });
  
  // Just some mock changes for now since we don't have historical data easily calculated yet
  return {
    leadCount,
    publishedArticles,
    conversionRate: "3.2%",
    visitors: 0
  };
}

export async function getRecentActivity() {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

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
}

export async function createArticle(data: { title: string, content: string, published: boolean, slug?: string, seoTitle?: string, seoDesc?: string }) {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      published: data.published,
      slug: slug,
      authorId: (session.user as any).id,
    }
  });

  return post;
}

export async function getArticles() {
  const session = await getAuthenticatedSession();
  if (!session || (session.user as any)?.role !== 'ADMIN') {
    throw new Error('Unauthorized');
  }

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: true }
  });

  return posts.map(p => ({
    id: p.id,
    title: p.title,
    author: p.author.name || p.author.email || "Unknown",
    category: "Uncategorized",
    status: p.published ? "PUBLISHED" : "DRAFT",
    views: p.viewCount,
    date: p.createdAt.toISOString().split("T")[0],
  }));
}
