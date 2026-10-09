"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Edit,
  Trash2,
  Eye,
  Plus,
  FileText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { getArticles } from "../actions";

type Article = {
  id: string;
  title: string;
  author: string;
  category: string;
  status: string;
  views: number;
  date: string;
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
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadArticles();
  }, []);

  const filteredArticles = articles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Blog & Articles</h1>
          <p className="text-slate-400 mt-1">Manage your content marketing, publications, and SEO.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/blog/create" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white text-sm font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
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
          <button className="whitespace-nowrap flex items-center justify-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:border-white/20 transition-colors">
            <Filter className="w-4 h-4" /> Status: All
          </button>
          <button className="whitespace-nowrap flex items-center justify-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:border-white/20 transition-colors">
            <Filter className="w-4 h-4" /> Category: All
          </button>
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
                    No articles found matching your search.
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
                        <button className="p-2 text-slate-400 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 rounded-lg transition-colors" title="Preview">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors" title="Delete">
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
        
        {/* Pagination */}
        {!isLoading && filteredArticles.length > 0 && (
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-sm text-slate-500">Showing 1 to {filteredArticles.length} of {filteredArticles.length} entries</span>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:bg-white/5 disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-[#0057D9] text-white text-sm font-medium flex items-center justify-center">
                1
              </button>
              <button className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-50" disabled>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
