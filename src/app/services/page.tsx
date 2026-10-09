"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { 
  FileSpreadsheet, 
  BarChart3, 
  LayoutDashboard, 
  ShieldCheck, 
  Zap, 
  PieChart, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const detailedServices = [
  {
    icon: FileSpreadsheet,
    title: "Advanced Excel & Financial Modeling",
    href: "/services/advanced-excel",
    desc: "Transform static workbooks into dynamic financial models with complex formulas, XLOOKUP, INDEX/MATCH, dynamic arrays, scenario managers, and error-proof validation.",
    bullets: [
      "Multi-Entity Financial Modeling", 
      "Dynamic Array & Advanced Formulas", 
      "Scenario & Sensitivity Analysis", 
      "Workbook Architecture Auditing"
    ],
    color: "#0057D9"
  },
  {
    icon: BarChart3,
    title: "Automated MIS Reporting & Consolidation",
    href: "/services/mis-reporting",
    desc: "Eliminate repetitive monthly, weekly, and daily reporting routines. Automatically consolidate data from multiple branch exports, ERP dumps, and spreadsheets into consistent executive summaries.",
    bullets: [
      "Daily & Weekly MIS Automation", 
      "Multi-Branch Data Consolidation", 
      "Variance & Budget vs Actual Reports", 
      "Automated PDF Summary Exports"
    ],
    color: "#00C2FF"
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Excel Dashboards & KPIs",
    href: "/services/excel-dashboards",
    desc: "Build high-impact, C-suite dashboards in Excel with interactive slicers, drill-down capabilities, and clean visual hierarchies that communicate business health instantly.",
    bullets: [
      "Executive KPI Tracking Dashboards", 
      "Dynamic Slicers & Timeline Filters", 
      "Cash Flow & Sales Performance Views", 
      "Lightweight, No-Addon Architecture"
    ],
    color: "#8B5CF6"
  },
  {
    icon: ShieldCheck,
    title: "Data Cleaning, Scrubbing & Standardization",
    href: "/services/data-cleaning",
    desc: "Turn messy, inconsistent spreadsheet chaos into audit-ready datasets. We eliminate duplicates, normalize date and address formats, and restructure fragmented columns.",
    bullets: [
      "Deduplication & Anomaly Detection", 
      "Power Query ETL Pipelines", 
      "Field Normalization & Restructuring", 
      "Exception Logging & Audit Trails"
    ],
    color: "#00E5A0"
  },
  {
    icon: Zap,
    title: "VBA Macros & Workflow Automation",
    href: "/services/vba-automation",
    desc: "Automate hours of repetitive manual tasks with single-click VBA macros. Batch process hundreds of files, auto-populate templates, and auto-dispatch reports via Outlook.",
    bullets: [
      "One-Click Macro Batch Processing", 
      "Outlook Email & Attachment Dispatch", 
      "Automated Invoice & Form Generation", 
      "Multi-Workbook Data Scraping"
    ],
    color: "#F59E0B"
  },
  {
    icon: PieChart,
    title: "Power BI Visualizations & Business Intelligence",
    href: "/services/power-bi",
    desc: "Scale beyond spreadsheet limitations with enterprise-grade Power BI models. Connect multiple live data sources, build robust Star Schemas, and deploy cloud-synchronized dashboards.",
    bullets: [
      "DAX Measure Calculations", 
      "Star Schema & Data Modeling", 
      "Multi-Source Cloud Syncing", 
      "Role-Based Executive Reports"
    ],
    color: "#EF4444"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#081120] pt-28 pb-20 overflow-hidden font-sans">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#00E5A0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Page Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-[#00E5A0] uppercase tracking-widest px-3 py-1 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/20 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Specialist Capabilities & Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-6 leading-tight">
            Data, Reporting & Automation <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-[#94A3B8] text-lg mt-4 leading-relaxed">
            Replace manual spreadsheet routines, delayed MIS updates, and fragmented reporting with structured, automated, and decision-ready data solutions.
          </p>
        </AnimatedSection>

        {/* Services Layout */}
        <div className="space-y-12">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.05} className="w-full">
                <div className="glass-card-strong p-8 lg:p-12 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-[0.04] pointer-events-none" style={{ backgroundColor: service.color }} />
                  
                  <div className="grid lg:grid-cols-[1.1fr,1.3fr] gap-12 items-center">
                    
                    {/* Content Left */}
                    <div className="space-y-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-extrabold text-white">
                        {service.title}
                      </h2>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 pt-2">
                        <Link href={service.href} className="btn-primary text-xs !py-3 !px-5 flex items-center gap-2">
                          Explore Service
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="btn-secondary text-xs !py-3 !px-5">
                          Discuss Your Project
                        </Link>
                      </div>
                    </div>

                    {/* Features Right */}
                    <div className="space-y-4 lg:border-l lg:border-white/[0.06] lg:pl-12">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Deliverables & Capabilities
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3.5">
                        {service.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.03] transition-all"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#00E5A0] flex-shrink-0" />
                            <span className="text-xs text-[#CBD5E1] font-semibold">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </div>
  );
}
