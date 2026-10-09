"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Edit,
  Trash2,
  Eye,
  Plus,
  FileText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { getArticles, deleteArticle } from "../actions";

type Article = {
  id: string;
  title: string;
  author: string;
  category: string;
  status: string;
  views: number;
  date: string;
  slug?: string;
};

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    PUBLISHED: "bg-[#00E5A0]/10 text-[#00E5A0] border-[#00E5A0]/20",
    DRAFT: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    SCHEDULED: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    ARCHIVED: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || "bg-slate-500/10 text-slate-400"}`}>
      {status}
    </span>
  );
};

export default function AdminBlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        console.error("Failed to load articles:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadArticles();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }
    try {
      await deleteArticle(id);
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } catch (err: any) {
      alert("Failed to delete article: " + (err.message || "Unknown error"));
    }
  };

  const categories = Array.from(new Set(articles.map((a) => a.category))).filter(Boolean);

  const filteredArticles = articles.filter((a) => {
    const matchesSearch = 
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || a.status === statusFilter;
    const matchesCategory = categoryFilter === "ALL" || a.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Blog & Articles</h1>
          <p className="text-slate-400 mt-1">Manage your content marketing, publications, and SEO.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin/blog/create" 
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white text-sm font-bold transition-opacity shadow-lg shadow-[#0057D9]/20"
          >
            <Plus className="w-4 h-4" /> Create Article
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search articles by title or author..." 
            className="w-full bg-[#050A14] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <div className="flex items-center gap-2 bg-[#050A14] border border-white/10 rounded-xl px-3 py-1.5 text-slate-300 text-sm">
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent text-slate-300 text-sm focus:outline-none cursor-pointer"
            >
              <option value="ALL" className="bg-[#0A1628] text-white">Status: All</option>
              <option value="PUBLISHED" className="bg-[#0A1628] text-white">Status: Published</option>
              <option value="DRAFT" className="bg-[#0A1628] text-white">Status: Draft</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-[#050A14] border border-white/10 rounded-xl px-3 py-1.5 text-slate-300 text-sm">
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent text-slate-300 text-sm focus:outline-none cursor-pointer"
            >
              <option value="ALL" className="bg-[#0A1628] text-white">Category: All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-[#0A1628] text-white">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0A1628] border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Article Title</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Views</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 opacity-50" />
                    Loading articles...
                  </td>
                </tr>
              ) : filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No articles found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#050A14] flex items-center justify-center text-[#00C2FF] shrink-0 border border-white/5">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-200 line-clamp-1">{article.title}</div>
                          <div className="text-xs text-slate-500 mt-1">by {article.author}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      <span className="px-2.5 py-1 bg-[#050A14] rounded-lg border border-white/5">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={article.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300 text-right font-medium">
                      {article.views > 0 ? article.views.toLocaleString() : "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" /> {article.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {article.slug ? (
                          <Link 
                            href={`/blog/${article.slug}`} 
                            target="_blank"
                            className="p-2 text-slate-400 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 rounded-lg transition-colors" 
                            title="Preview Article on Site"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        ) : (
                          <button className="p-2 text-slate-400 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 rounded-lg transition-colors" title="Preview">
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <Link 
                          href={`/admin/blog/create?slug=${article.slug || ''}`}
                          className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button 
                          onClick={() => handleDelete(article.id, article.title)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors" 
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination / Summary */}
        {!isLoading && filteredArticles.length > 0 && (
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm text-slate-500">Showing {filteredArticles.length} of {articles.length} articles</span>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:bg-white/5 disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-[#0057D9] text-white text-sm font-medium flex items-center justify-center">
                1
              </button>
              <button className="p-1.5 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:bg-white/5 disabled:opacity-50" disabled>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
