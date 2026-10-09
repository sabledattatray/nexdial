"use client";

import React, { useEffect, useState } from "react";
import { 
  Users, 
  ArrowUpRight, 
  ArrowDownRight, 
  Inbox, 
  FileText, 
  CheckCircle2,
  Clock,
  LineChart
} from "lucide-react";
import { getDashboardStats, getRecentActivity } from "./actions";

export default function AdminDashboardOverview() {
  const [statsData, setStatsData] = useState<any>(null);
  const [activityData, setActivityData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const [statsRes, activityRes] = await Promise.all([
          getDashboardStats(),
          getRecentActivity()
        ]);
        setStatsData(statsRes);
        setActivityData(activityRes);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      }
    }
    load();
  }, []);

  const stats = [
    { label: "New Leads / Contacts", value: statsData?.leadCount ?? "-", change: "+12%", up: true, icon: Users, color: "text-[#00C2FF]", bg: "bg-[#00C2FF]/10" },
    { label: "Published Articles", value: statsData?.publishedArticles ?? "-", change: "+5%", up: true, icon: FileText, color: "text-[#818CF8]", bg: "bg-[#818CF8]/10" },
    { label: "Conversion Rate", value: statsData?.conversionRate ?? "-", change: "+1.1%", up: true, icon: CheckCircle2, color: "text-[#F472B6]", bg: "bg-[#F472B6]/10" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Overview</h1>
        <p className="text-slate-400 mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#0A1628] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-[#00E5A0]' : 'text-red-400'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-slate-400 text-sm font-medium">{stat.label}</h3>
              <p className="text-3xl font-extrabold text-white mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activity and Charts layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-[#0A1628] border border-white/5 rounded-2xl p-6 min-h-[400px] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0057D9]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div>
              <h2 className="text-lg font-bold text-white">Traffic Overview</h2>
              <p className="text-xs text-slate-400">Website visitors</p>
            </div>
            <select className="bg-[#060D1A] border border-white/10 text-xs text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#00C2FF]">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/[0.02] relative z-10">
            <LineChart className="w-8 h-8 text-slate-600 mb-2" />
            <p className="text-sm text-slate-400 font-medium">No sufficient data for chart</p>
            <p className="text-xs text-slate-500 max-w-xs text-center mt-1">Analytics tracking is currently collecting data.</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#0A1628] border border-white/5 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-6">Recent Activity</h2>
          
          <div className="space-y-6">
            {activityData.length === 0 ? (
              <p className="text-sm text-slate-500">No recent activity.</p>
            ) : (
              activityData.map((activity, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== activityData.length - 1 && <div className="absolute left-4 top-10 bottom-[-24px] w-px bg-white/5" />}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10 ${
                    activity.type === 'inbox' ? 'bg-[#00C2FF]/20 text-[#00C2FF]' :
                    'bg-[#818CF8]/20 text-[#818CF8]'
                  }`}>
                    {activity.type === 'inbox' ? <Inbox className="w-4 h-4" /> :
                     <FileText className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{activity.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {new Date(activity.time).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
