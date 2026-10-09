"use client";

import React from "react";
import { 
  BarChart, 
  LineChart, 
  PieChart, 
  Users, 
  Eye, 
  MousePointerClick, 
  TrendingUp,
  Download,
  Calendar as CalendarIcon,
  MoreVertical
} from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Analytics & Reports</h1>
          <p className="text-slate-400 mt-1">Monitor your website traffic, lead conversions, and content performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#050A14] border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-xl text-slate-300 text-sm font-medium transition-colors">
            <CalendarIcon className="w-4 h-4" /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white text-sm font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Visitors", value: "45.2K", change: "+12.5%", isUp: true, icon: Eye, color: "text-[#00C2FF]", bg: "bg-[#00C2FF]/10" },
          { title: "Unique Sessions", value: "32.1K", change: "+8.2%", isUp: true, icon: Users, color: "text-purple-400", bg: "bg-purple-500/10" },
          { title: "Avg. Engagement Time", value: "2m 45s", change: "-1.5%", isUp: false, icon: MousePointerClick, color: "text-amber-400", bg: "bg-amber-500/10" },
          { title: "Conversion Rate", value: "4.8%", change: "+2.1%", isUp: true, icon: TrendingUp, color: "text-[#00E5A0]", bg: "bg-[#00E5A0]/10" },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400 mb-1">{kpi.title}</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">{kpi.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-full ${kpi.bg} flex items-center justify-center shrink-0`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-sm font-medium ${kpi.isUp ? 'text-[#00E5A0]' : 'text-red-400'}`}>
                {kpi.change}
              </span>
              <span className="text-sm text-slate-500">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0A1628] border border-white/5 rounded-2xl p-6 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Traffic Overview</h3>
            <button className="text-slate-400 hover:text-white transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 border border-dashed border-white/10 rounded-xl bg-[#050A14]/50 relative overflow-hidden">
            <LineChart className="w-12 h-12 mb-3 opacity-20" />
            <p className="font-medium text-slate-400">Chart Visualization Pending</p>
            <p className="text-sm text-slate-500 max-w-sm text-center mt-2">Connect Google Analytics 4 in Settings to populate live traffic charts.</p>
          </div>
        </div>

        <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Traffic Sources</h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 border border-dashed border-white/10 rounded-xl bg-[#050A14]/50">
            <PieChart className="w-12 h-12 mb-3 opacity-20" />
            <p className="font-medium text-slate-400">Donut Chart Pending</p>
          </div>
        </div>
      </div>

      {/* Secondary Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0A1628] border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-lg font-bold text-white">Top Performing Content</h3>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Page</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { name: "/", views: "12,450" },
                { name: "/services", views: "4,200" },
                { name: "/pricing", views: "3,150" },
                { name: "/blog/lead-gen", views: "2,840" },
                { name: "/contact", views: "1,920" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-3 text-sm text-slate-300 font-medium">{row.name}</td>
                  <td className="px-6 py-3 text-sm text-slate-400 text-right">{row.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 min-h-[300px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Lead Conversion Funnel</h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 border border-dashed border-white/10 rounded-xl bg-[#050A14]/50">
            <BarChart className="w-12 h-12 mb-3 opacity-20" />
            <p className="font-medium text-slate-400">Funnel Chart Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
