"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/ui/LogoIcon";
import {
  LayoutDashboard,
  Users,
  Inbox,
  FileText,
  Image as ImageIcon,
  Settings,
  Menu,
  X,
  LogOut,
  LineChart,
  Briefcase
} from "lucide-react";

const SIDEBAR_LINKS = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads & Enquiries", icon: Users },
  { href: "/admin/inbox", label: "Contact Submissions", icon: Inbox },
  { href: "/admin/blog", label: "Blog & Articles", icon: FileText },
  { href: "/admin/media", label: "Media Library", icon: ImageIcon },
  { href: "/admin/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/admin/analytics", label: "Analytics", icon: LineChart },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#081120] border-r border-white/5">
      {/* Brand */}
      <div className="h-20 flex items-center px-6 border-b border-white/5 justify-between">
        <Link href="/admin" className="flex items-center gap-3">
          <LogoIcon className="w-8 h-8" />
          {!collapsed && (
            <span className="text-white font-bold text-xl tracking-tighter" style={{ fontFamily: "var(--font-outfit)" }}>
              Nexdial <span className="text-[#00C2FF] font-medium text-sm ml-1">Admin</span>
            </span>
          )}
        </Link>
        <button className="hidden lg:block text-slate-400 hover:text-white" onClick={() => setCollapsed(!collapsed)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
        {SIDEBAR_LINKS.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? "bg-gradient-to-r from-[#0057D9]/20 to-transparent text-[#00C2FF] font-medium border-l-2 border-[#00C2FF]" 
                  : "text-slate-400 hover:text-white hover:bg-white/[0.03] border-l-2 border-transparent"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-[#00C2FF]" : "text-slate-500 group-hover:text-slate-300"}`} />
              {!collapsed && <span className="truncate">{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* User Area */}
      <div className="p-4 border-t border-white/5">
        <div className={`flex items-center gap-3 px-3 py-3 rounded-xl bg-white/[0.02] ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0057D9] to-[#00C2FF] flex items-center justify-center text-white font-bold text-xs shrink-0">
            DS
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Datta Sable</p>
              <p className="text-[10px] text-slate-400 truncate">Admin</p>
            </div>
          )}
          {!collapsed && (
            <button className="text-slate-500 hover:text-red-400 transition-colors ml-auto">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#081120] border-b border-white/5 z-50 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <LogoIcon className="w-6 h-6" />
          <span className="text-white font-bold tracking-tighter" style={{ fontFamily: "var(--font-outfit)" }}>Admin</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-slate-400">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block fixed top-0 left-0 bottom-0 z-40 transition-all duration-300 ${collapsed ? 'w-[88px]' : 'w-72'}`}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 bottom-0 w-72 bg-[#081120]">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
