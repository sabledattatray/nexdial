"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft,
  Image as ImageIcon,
  Save,
  Send,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Type,
  AlignLeft,
  Heading1,
  Heading2,
  ChevronDown
} from "lucide-react";
import { createArticle } from "../../actions";

export default function CreateArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSave = async (published: boolean) => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await createArticle({
        title,
        content,
        slug,
        published
      });
      alert(published ? "Article published!" : "Draft saved!");
      router.push("/admin/blog");
    } catch (err) {
      console.error(err);
      alert("Failed to save article");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/blog" 
            className="p-2 rounded-xl bg-[#0A1628] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              {title || "New Article"}
            </h1>
            <p className="text-slate-400 text-sm mt-1">Drafting a new blog post</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            disabled={isSubmitting}
            onClick={() => handleSave(false)}
            className="flex items-center gap-2 px-4 py-2 bg-[#0A1628] hover:bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button 
            disabled={isSubmitting}
            onClick={() => handleSave(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00E5A0]/80 to-[#00E5A0] hover:opacity-90 rounded-xl text-black text-sm font-bold transition-opacity shadow-lg shadow-[#00E5A0]/20 disabled:opacity-50"
          >
            <Send className="w-4 h-4" /> Publish Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Editor Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cover Image */}
          <div className="w-full h-64 bg-[#0A1628] border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-[#00C2FF]/30 hover:bg-[#00C2FF]/5 transition-colors group">
            <div className="w-16 h-16 bg-[#050A14] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ImageIcon className="w-8 h-8 text-slate-500 group-hover:text-[#00C2FF] transition-colors" />
            </div>
            <p className="text-white font-medium">Upload Cover Image</p>
            <p className="text-slate-500 text-sm mt-1">1200 x 630px recommended (JPG, PNG)</p>
          </div>

          {/* Title Input */}
          <div>
            <input 
              type="text" 
              placeholder="Article Title..." 
              className="w-full bg-transparent border-none text-4xl font-extrabold text-white placeholder:text-slate-600 focus:outline-none focus:ring-0 px-0"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* WYSIWYG Toolbar */}
          <div className="bg-[#0A1628] border border-white/5 rounded-xl p-2 flex flex-wrap gap-1 sticky top-4 z-10 shadow-xl shadow-black/50">
            <div className="flex items-center gap-1 border-r border-white/10 pr-2 mr-1">
              <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1">
                Normal <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Bold">
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Italic">
              <Italic className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Link">
              <LinkIcon className="w-4 h-4" />
            </button>
            <div className="w-px h-8 bg-white/10 mx-1 self-center" />
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Heading 1">
              <Heading1 className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Heading 2">
              <Heading2 className="w-4 h-4" />
            </button>
            <div className="w-px h-8 bg-white/10 mx-1 self-center" />
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Bullet List">
              <List className="w-4 h-4" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" title="Align Left">
              <AlignLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Editor Content Area */}
          <textarea 
            className="min-h-[500px] w-full text-lg text-slate-300 leading-relaxed bg-transparent border-none focus:outline-none focus:ring-0 resize-y"
            placeholder="Start writing your article here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          
          <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Publishing</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-2">Category</label>
                <select className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors appearance-none">
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="technology">Technology</option>
                  <option value="customer_success">Customer Success</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-2">Author</label>
                <select className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors appearance-none">
                  <option value="datta">Datta Sable</option>
                  <option value="marketing">Marketing Team</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-400 block mb-2">URL Slug</label>
                <input 
                  type="text" 
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="your-article-slug" 
                  className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
