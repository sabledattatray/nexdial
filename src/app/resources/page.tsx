"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { Download, FileText, ArrowRight, FileSpreadsheet, Sparkles } from "lucide-react";
import Link from "next/link";

const resources = [
  { 
    title: "Excel Automation & Power Query Architecture Guide", 
    desc: "A step-by-step technical guide to automating repetitive data extraction, transformation, and load pipelines in Microsoft Excel.",
    type: "PDF / Architecture Blueprint", 
    size: "3.4 MB" 
  },
  { 
    title: "Executive MIS Reporting & KPI Dashboard Template", 
    desc: "Ready-to-use structured workbook template featuring automated variance analysis, dynamic charts, and executive KPI cards.",
    type: "Excel / .xlsx Template", 
    size: "1.8 MB" 
  },
  { 
    title: "Data Cleaning & Standardization Checklist for Operations Teams", 
    desc: "Practical 25-point audit checklist to eliminate duplicate rows, standardize dates, fix trailing characters, and validate data integrity.",
    type: "PDF / Operations Checklist", 
    size: "1.2 MB" 
  },
  { 
    title: "Power BI Star Schema & DAX Performance Playbook", 
    desc: "Best practices for designing dimensional models, optimizing DAX measures, and reducing report refresh latencies.",
    type: "PDF / Modeling Guide", 
    size: "2.7 MB" 
  },
  { 
    title: "Top 10 VBA Macros for Finance & Operations Teams", 
    desc: "Production-ready, thoroughly commented VBA code snippets to automate workbook consolidation, formatting, and PDF exports.",
    type: "Code Pack / Script Guide", 
    size: "0.9 MB" 
  },
  { 
    title: "Multi-Source Spreadsheet Consolidation Framework", 
    desc: "Enterprise framework for unifying disparate CSV and Excel branch exports into a single audit-ready master dataset.",
    type: "PDF / Audit Framework", 
    size: "2.1 MB" 
  }
];

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-[#081120] pt-28 pb-20 overflow-hidden font-sans">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0057D9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00C2FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-[#00E5A0] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#00E5A0]/10 border border-[#00E5A0]/20 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Free Technical Guides & Templates
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-6 leading-tight">
            Data, Reporting & <span className="gradient-text">Automation Library</span>
          </h1>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Download practical workbooks, auditing checklists, and architectural blueprints designed to streamline your business reporting.
          </p>
        </AnimatedSection>

        {/* Resources list */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.06}>
          {resources.map((res) => (
            <StaggerItem key={res.title}>
              <div className="glass-card-strong p-6 h-full flex flex-col justify-between group hover:border-white/10 transition-all rounded-2xl">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0057D9]/10 border border-[#0057D9]/20 flex items-center justify-center text-[#00C2FF]">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#00C2FF] transition-colors">{res.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{res.desc}</p>
                  <p className="text-[10px] text-[#00E5A0] font-semibold uppercase tracking-wider">{res.type}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#CBD5E1] font-semibold">
                  <span className="text-slate-500 font-mono">Size: {res.size}</span>
                  <Link href="/contact" className="flex items-center gap-1.5 text-[#00C2FF] hover:underline font-bold">
                    Request File
                    <Download className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </div>
  );
}
