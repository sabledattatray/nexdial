"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Edit,
  Trash2,
  Eye,
  Plus,
  Briefcase,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const MOCK_PORTFOLIO = [
  { id: "1", title: "Global Telecom Restructure", client: "TechCorp Inc.", category: "Consulting", status: "PUBLISHED", date: "2026-10-01" },
  { id: "2", title: "Automated Dialing System Implementation", client: "SalesBoost LLC", category: "Software", status: "PUBLISHED", date: "2026-09-15" },
  { id: "3", title: "Customer Success Overhaul", client: "HealthPlus", category: "Strategy", status: "DRAFT", date: "2026-10-09" },
  { id: "4", title: "Enterprise PBX Integration", client: "FinanceGroup", category: "Infrastructure", status: "PUBLISHED", date: "2026-08-20" },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    PUBLISHED: "bg-[#00E5A0]/10 text-[#00E5A0] border-[#00E5A0]/20",
    DRAFT: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    ARCHIVED: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || "bg-slate-500/10 text-slate-400"}`}>
      {status}
    </span>
  );
};

export default function AdminPortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Portfolio & Case Studies</h1>
          <p className="text-slate-400 mt-1">Showcase your success stories and past projects.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white text-sm font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
            <Plus className="w-4 h-4" /> Add Case Study
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search projects by title or client..." 
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
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Project / Case Study</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_PORTFOLIO.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#050A14] flex items-center justify-center text-purple-400 shrink-0 border border-white/5">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col justify-center h-10">
                        <div className="font-semibold text-slate-200 line-clamp-1">{item.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">
                    {item.client}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    <span className="px-2.5 py-1 bg-[#050A14] rounded-lg border border-white/5">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 rounded-lg transition-colors" title="View Public Page">
                        <ExternalLink className="w-4 h-4" />
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
