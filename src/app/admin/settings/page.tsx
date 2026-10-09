"use client";

import React, { useState } from "react";
import { 
  Settings, 
  User, 
  Globe, 
  Bell, 
  Shield, 
  Database,
  Save,
  CheckCircle2
} from "lucide-react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const TABS = [
    { id: "general", label: "General", icon: Settings },
    { id: "profile", label: "Profile", icon: User },
    { id: "site", label: "Site Config", icon: Globe },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "integrations", label: "Integrations", icon: Database },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Settings</h1>
          <p className="text-slate-400 mt-1">Manage your platform preferences and configurations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#0057D9] to-[#00C2FF] hover:opacity-90 rounded-xl text-white font-bold transition-opacity shadow-lg shadow-[#0057D9]/20">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-[#00C2FF]' : 'text-slate-500'}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#0A1628] border border-white/5 rounded-2xl p-6 md:p-8">
          
          {activeTab === "general" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">General Settings</h2>
                
                <div className="space-y-6 max-w-2xl">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Platform Name</label>
                    <input 
                      type="text" 
                      defaultValue="Nexdial Admin" 
                      className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Support Email</label>
                    <input 
                      type="email" 
                      defaultValue="support@nexdial.io" 
                      className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Timezone</label>
                    <select className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors appearance-none">
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Admin Profile</h2>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-3xl border-2 border-blue-500/20">
                    DS
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-medium transition-colors mb-2">
                      Upload Avatar
                    </button>
                    <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 2MB.</p>
                  </div>
                </div>

                <div className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">First Name</label>
                      <input type="text" defaultValue="Datta" className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Last Name</label>
                      <input type="text" defaultValue="Sable" className="w-full bg-[#050A14] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#00C2FF] transition-colors" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input type="email" defaultValue="admin@nexdial.io" disabled className="w-full bg-[#050A14]/50 border border-white/5 rounded-xl px-4 py-2.5 text-slate-400 cursor-not-allowed" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "general" && activeTab !== "profile" && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Settings className="w-16 h-16 text-slate-700 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Settings Module Coming Soon</h2>
              <p className="text-slate-400 max-w-md">This specific settings section is slated for development in Phase 2.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
