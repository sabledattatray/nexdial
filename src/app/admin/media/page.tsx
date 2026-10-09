"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Upload,
  Image as ImageIcon,
  FileText,
  Video,
  MoreVertical,
  Download,
  Trash2,
  FolderOpen
} from "lucide-react";

const MOCK_MEDIA = [
  { id: "1", name: "hero-background.jpg", type: "image", size: "2.4 MB", date: "Oct 9, 2026", dimensions: "1920x1080" },
  { id: "2", name: "nexdial-logo-white.png", type: "image", size: "45 KB", date: "Oct 8, 2026", dimensions: "500x120" },
  { id: "3", name: "q3-marketing-report.pdf", type: "document", size: "4.1 MB", date: "Oct 5, 2026", dimensions: null },
  { id: "4", name: "product-demo-v2.mp4", type: "video", size: "45.2 MB", date: "Oct 1, 2026", dimensions: "1920x1080" },
  { id: "5", name: "team-photo-2026.jpg", type: "image", size: "5.7 MB", date: "Sep 28, 2026", dimensions: "4000x3000" },
  { id: "6", name: "pricing-tier-icons.svg", type: "image", size: "12 KB", date: "Sep 15, 2026", dimensions: "100x100" },
  { id: "7", name: "terms-of-service.pdf", type: "document", size: "1.2 MB", date: "Sep 10, 2026", dimensions: null },
  { id: "8", name: "blog-post-cover.jpg", type: "image", size: "1.1 MB", date: "Sep 5, 2026", dimensions: "1200x630" },
];

const MediaIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "image":
      return <ImageIcon className="w-10 h-10 text-[#00C2FF]" />;
    case "document":
      return <FileText className="w-10 h-10 text-purple-400" />;
    case "video":
      return <Video className="w-10 h-10 text-amber-400" />;
    default:
      return <FileText className="w-10 h-10 text-slate-400" />;
  }
};

export default function AdminMediaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Media Library</h1>
          <p className="text-slate-400 mt-1">Manage images, documents, and videos across your site.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-xl text-slate-300 text-sm font-medium transition-colors">
            <FolderOpen className="w-4 h-4" /> New Folder
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white text-sm font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
            <Upload className="w-4 h-4" /> Upload Files
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search media by name..." 
            className="w-full bg-[#050A14] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <button className="whitespace-nowrap flex items-center justify-center gap-2 px-4 py-2 bg-[#050A14] border border-[#00C2FF]/30 text-[#00C2FF] rounded-xl text-sm font-medium hover:border-[#00C2FF]/50 transition-colors">
            All Media
          </button>
          <button className="whitespace-nowrap flex items-center justify-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:border-white/20 transition-colors">
            Images
          </button>
          <button className="whitespace-nowrap flex items-center justify-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:border-white/20 transition-colors">
            Documents
          </button>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {MOCK_MEDIA.map((item) => (
          <div key={item.id} className="bg-[#0A1628] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#00C2FF]/30 transition-colors flex flex-col">
            <div className="aspect-square bg-[#050A14] flex items-center justify-center relative border-b border-white/5">
              {/* Preview Placeholder */}
              <MediaIcon type={item.type} />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
                <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors" title="Download">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white/10 hover:bg-red-500/80 text-white rounded-lg transition-colors" title="Delete">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-semibold text-slate-200 truncate" title={item.name}>
                  {item.name}
                </h3>
                <button className="text-slate-500 hover:text-white transition-colors shrink-0">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-slate-400 mt-auto flex items-center justify-between">
                <span>{item.size}</span>
                <span>{item.type.toUpperCase()}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Upload Dropzone */}
        <div className="bg-[#050A14] border-2 border-dashed border-white/10 rounded-2xl aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-[#00C2FF]/50 hover:bg-[#00C2FF]/5 transition-colors text-slate-400 hover:text-[#00C2FF]">
          <Upload className="w-8 h-8 mb-3" />
          <span className="font-medium text-sm">Drag & Drop</span>
          <span className="text-xs mt-1 opacity-70">or click to browse</span>
        </div>
      </div>
    </div>
  );
}
