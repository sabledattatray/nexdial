"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  Download,
  Plus
} from "lucide-react";

const MOCK_LEADS = [
  { id: "1", name: "John Smith", company: "Acme Corp", email: "john@acmecorp.com", phone: "+1 (555) 123-4567", status: "NEW", source: "Website", date: "2026-10-09", score: 85 },
  { id: "2", name: "Sarah Jenkins", company: "TechFlow", email: "sarah@techflow.io", phone: "+1 (555) 987-6543", status: "CONTACTED", source: "Referral", date: "2026-10-08", score: 92 },
  { id: "3", name: "Michael Chen", company: "Global Logistics", email: "m.chen@globallog.com", phone: "+1 (555) 456-7890", status: "IN_PROGRESS", source: "LinkedIn", date: "2026-10-07", score: 65 },
  { id: "4", name: "Emily Rodriguez", company: "Design Studio", email: "emily@designstudio.net", phone: "+1 (555) 234-5678", status: "CONVERTED", source: "Organic Search", date: "2026-10-05", score: 99 },
  { id: "5", name: "David Wilson", company: "Wilson Tech", email: "david@wilsontech.com", phone: "+1 (555) 345-6789", status: "LOST", source: "Direct", date: "2026-10-01", score: 30 },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    NEW: "bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]/20",
    CONTACTED: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    IN_PROGRESS: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    CONVERTED: "bg-[#00E5A0]/10 text-[#00E5A0] border-[#00E5A0]/20",
    LOST: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || "bg-slate-500/10 text-slate-400"}`}>
      {status.replace("_", " ")}
    </span>
  );
};

export default function AdminLeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Leads & Enquiries</h1>
          <p className="text-slate-400 mt-1">Manage and track your incoming business prospects.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0A1628] hover:bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white text-sm font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
            <Plus className="w-4 h-4" /> Add Lead
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search leads by name, company, or email..." 
            className="w-full bg-[#050A14] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:border-white/20 transition-colors">
            <Filter className="w-4 h-4" /> Status: All
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0A1628] border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Lead</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Source</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_LEADS.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0057D9]/20 to-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF] font-bold text-sm shrink-0 border border-[#00C2FF]/20">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">{lead.name}</div>
                        <div className="text-xs text-slate-500">{lead.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Mail className="w-3.5 h-3.5 text-slate-500" /> {lead.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Phone className="w-3.5 h-3.5 text-slate-500" /> {lead.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    {lead.source}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> {lead.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm text-slate-500">Showing 1 to 5 of 24 entries</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:bg-white/5 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#0057D9] text-white text-sm font-medium flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium flex items-center justify-center">
              2
            </button>
            <button className="w-8 h-8 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium flex items-center justify-center">
              3
            </button>
            <button className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
