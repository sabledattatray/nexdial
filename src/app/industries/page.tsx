"use client";

import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { Shield, LayoutDashboard, Building2, Briefcase, Kanban, ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Shield,
    title: "Healthcare",
    slug: "healthcare",
    desc: "Secure, structured Excel reporting and data management to track patient outcomes and billing.",
    color: "#00E5A0"
  },
  {
    icon: LayoutDashboard,
    title: "E-commerce",
    slug: "ecommerce",
    desc: "Automate the consolidation of sales reports to track stock, margins, and customer behavior.",
    color: "#00C2FF"
  },
  {
    icon: Building2,
    title: "Real Estate",
    slug: "real-estate",
    desc: "Consolidate lead data and track property sales performance without manual entry.",
    color: "#8B5CF6"
  },
  {
    icon: Briefcase,
    title: "Financial Services",
    slug: "financial",
    desc: "Eliminate manual reconciliation and ensure accuracy with automated MIS reports and P&L.",
    color: "#EF4444"
  },
  {
    icon: Kanban,
    title: "Manufacturing",
    slug: "manufacturing",
    desc: "Turn raw production data into dynamic dashboards to track efficiency and supply chain logistics.",
    color: "#F59E0B"
  }
];

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-[#081120] pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#00E5A0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-[#00C2FF] uppercase tracking-widest px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20">
            Tailored Reporting Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-6 leading-tight">
            Data Organization for <span className="gradient-text">Every Industry</span>
          </h1>
          <p className="text-[#94A3B8] text-lg mt-4">
            NexDial provides specialized Excel and MIS reporting solutions designed for the unique challenges of your sector.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="block h-full">
                  <div className="glass-card-strong p-8 h-full relative overflow-hidden group hover:border-white/[0.1] transition-all duration-500 rounded-[2rem]">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundColor: ind.color }} />
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border"
                      style={{ backgroundColor: `${ind.color}15`, borderColor: `${ind.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ind.color }} />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3">{ind.title}</h2>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{ind.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: ind.color }}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </div>
  );
}
