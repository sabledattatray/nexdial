"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ArrowUpRight, TrendingUp, Users, Clock, Percent, ShieldCheck } from "lucide-react";

const cases = [
  {
    id: "sales-kpi",
    category: "Sample Project",
    title: "Excel Sales & KPI Dashboard — Sample Project",
    description: "Problem: Raw sales records can be difficult to summarize consistently. Solution: Create a structured workbook that organizes source data and presents key summaries through PivotTables and charts.",
    metrics: [
      { label: "Deliverable", value: "Summary Dashboard", subLabel: "Output", icon: TrendingUp, color: "#0057D9" },
      { label: "Tools Used", value: "Excel, PivotTables", subLabel: "Tech Stack", icon: ShieldCheck, color: "#00C2FF" },
      { label: "Feature", value: "KPI Calculations", subLabel: "Highlights", icon: Clock, color: "#00E5A0" },
    ],
    bgGradient: "from-[#0057D9]/10 via-[#00C2FF]/5 to-transparent",
    borderGlow: "rgba(0, 194, 255, 0.2)",
    accentColor: "#00C2FF",
  },
  {
    id: "monthly-mis",
    category: "Sample Project",
    title: "Monthly MIS Reporting — Sample Project",
    description: "Problem: Recurring reports require repeated formatting. Solution: Build a consistent workbook structure and reporting template using agreed metrics and source data.",
    metrics: [
      { label: "Deliverable", value: "Reporting Template", subLabel: "Output", icon: Users, color: "#8B5CF6" },
      { label: "Tools Used", value: "Excel, Formulas", subLabel: "Tech Stack", icon: ArrowUpRight, color: "#EC4899" },
      { label: "Benefit", value: "Consistent Structure", subLabel: "Highlights", icon: TrendingUp, color: "#00E5A0" },
    ],
    bgGradient: "from-[#8B5CF6]/10 via-[#EC4899]/5 to-transparent",
    borderGlow: "rgba(139, 92, 246, 0.2)",
    accentColor: "#8B5CF6",
  },
  {
    id: "data-cleanup",
    category: "Sample Project",
    title: "Spreadsheet Cleanup & Consolidation — Sample Project",
    description: "Problem: Multiple spreadsheets contain inconsistent formats and repeated records. Solution: Apply documented cleanup rules, standardize fields, and prepare a structured output dataset.",
    metrics: [
      { label: "Deliverable", value: "Cleaned Dataset", subLabel: "Output", icon: ShieldCheck, color: "#00E5A0" },
      { label: "Tools Used", value: "Power Query", subLabel: "Tech Stack", icon: TrendingUp, color: "#0057D9" },
      { label: "Output", value: "Exception List", subLabel: "Highlights", icon: ShieldCheck, color: "#00C2FF" },
    ],
    bgGradient: "from-[#00E5A0]/10 via-[#0057D9]/5 to-transparent",
    borderGlow: "rgba(0, 229, 160, 0.2)",
    accentColor: "#00E5A0",
  }
];

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(cases[0].id);
  const activeCase = cases.find((c) => c.id === activeTab) || cases[0];

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[#081120]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0057D9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5A0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <AnimatedSection className="max-w-2xl">
            <p className="text-sm font-semibold text-[#00C2FF] uppercase tracking-widest mb-4">
              Featured Work
            </p>
            <h2 className="section-title text-white mb-4">
              See the Work, <span className="gradient-text">Not Just the Claims</span>
            </h2>
            <p className="text-[#64748B] text-lg">
              Explore sample reporting solutions that demonstrate how NexDial approaches spreadsheet organization, reporting clarity, and recurring data tasks.
            </p>
          </AnimatedSection>
        </div>

        {/* Highlighted Case Card */}
        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="glass-card-strong p-4 sm:p-6 lg:p-9 overflow-hidden relative"
              style={{
                boxShadow: `0 20px 80px -20px ${activeCase.borderGlow}`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-40 pointer-events-none" style={{ backgroundImage: `linear-gradient(135deg, ${activeCase.accentColor}10, transparent)` }} />
              
              <div className="grid lg:grid-cols-[1.25fr,1fr] gap-5 sm:gap-8 lg:gap-10 relative z-10 min-w-0 w-full">
                {/* Content Left */}
                <div className="flex flex-col justify-between space-y-4 sm:space-y-6 min-w-0 w-full">
                  <div className="space-y-3 sm:space-y-4.5">
                    {/* Apple System Segmented Tab Control */}
                    <div className="flex flex-wrap gap-2 w-full">
                      {cases.map((c) => {
                        const isActive = activeTab === c.id;
                        return (
                          <button
                            key={c.id}
                            onClick={() => setActiveTab(c.id)}
                            className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full text-[9.5px] sm:text-[11.5px] font-bold tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-1 sm:gap-1.5 border flex-shrink-0 ${
                              isActive
                                ? "shadow-md"
                                : "bg-white/[0.02] border-white/[0.06] text-[#8E8E93] hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12]"
                            }`}
                            style={
                              isActive
                                ? {
                                    color: activeCase.accentColor,
                                    backgroundColor: `${activeCase.accentColor}12`,
                                    borderColor: `${activeCase.accentColor}25`,
                                  }
                                : {}
                            }
                          >
                            <span>{c.category}</span>
                            {c.id === "sales-mis" && (
                              <span
                                className="text-[6.5px] sm:text-[8px] px-1 py-0.5 rounded-full font-extrabold uppercase tracking-wider scale-95"
                                style={{
                                  backgroundColor: isActive ? `${c.accentColor}20` : "rgba(255, 255, 255, 0.04)",
                                  color: isActive ? c.accentColor : "#8E8E93",
                                  border: `1px solid ${isActive ? `${c.accentColor}30` : "rgba(255, 255, 255, 0.08)"}`
                                }}
                              >
                                Popular
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
 
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                      {activeCase.title}
                    </h3>
                    <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
                      {activeCase.description}
                    </p>
                  </div>
 
                  <div>
                    <a
                      href="/portfolio"
                      className="inline-flex items-center justify-center gap-1.5 font-semibold rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      style={{
                        backgroundColor: activeCase.accentColor,
                        color: activeCase.id === 'monthly-mis' ? '#081120' : '#ffffff'
                      }}
                    >
                      <span>View Full Portfolio</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
 
                {/* Metrics Right */}
                <div className="flex flex-col justify-center gap-3 sm:gap-5 lg:border-l lg:border-white/[0.08] lg:pl-10 min-w-0 w-full">
                  <h4 className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#64748B]">
                    Project Highlights
                  </h4>
                  <div className="space-y-2 sm:space-y-2.5">
                    {activeCase.metrics.map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="p-2.5 sm:p-4 rounded-xl sm:rounded-[16px] bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.03] transition-all flex items-center justify-between min-w-0"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <div
                            className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${metric.color}15` }}
                          >
                            <metric.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: metric.color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] sm:text-[11px] text-[#64748B] font-medium leading-tight break-words">{metric.label}</p>
                            <p className="text-[7px] sm:text-[8px] font-semibold text-slate-500 opacity-60 mt-0.5 uppercase tracking-wider">{metric.subLabel}</p>
                          </div>
                        </div>
                        <span
                          className="text-sm sm:text-base lg:text-lg font-bold tracking-tight metric-number flex-shrink-0 ml-2"
                          style={{ color: metric.color }}
                        >
                          {metric.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
