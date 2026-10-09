"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { 
  Home, Megaphone, GraduationCap, Stethoscope, Shield, Scale, Compass, Calendar, 
  Car, Dumbbell, Wrench, Briefcase, Laptop, ShoppingBag, Users, 
  Star, Activity, ShieldCheck, TrendingUp, Sparkles 
} from "lucide-react";

const clientTypes = [
  { name: "Finance", desc: "Monthly MIS and reconciliation", icon: GraduationCap, color: "#8B5CF6" },
  { name: "Sales", desc: "Sales performance & commissions", icon: Stethoscope, color: "#EF4444" },
  { name: "Operations", desc: "Inventory & performance trackers", icon: Megaphone, color: "#00C2FF" },
  { name: "HR", desc: "Attendance & workforce reporting", icon: Shield, color: "#3B82F6" },
];

const trustBadges = [
  { name: "Requirement-First", desc: "Agreed deliverables", icon: Activity, color: "#00E5A0" },
  { name: "Practical Solutions", desc: "Validation against sample data", icon: Star, color: "#F59E0B" },
  { name: "Clear Handover", desc: "A documented handover", icon: TrendingUp, color: "#00C2FF" },
  { name: "Defined Scope", desc: "Clearly defined scope & price", icon: ShieldCheck, color: "#8B5CF6" },
];

export function TrustIndicators() {
  return (
    <section className="relative py-20 border-y border-white/[0.04] overflow-hidden">
      {/* Premium ambient backdrop */}
      <div className="absolute inset-0 bg-[#081120]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#00E5A0]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span className="text-[10px] font-semibold text-[#CBD5E1] uppercase tracking-wider">Industries & Teams</span>
          </div>
          <p className="text-sm font-semibold text-[#64748B] uppercase tracking-widest">
            Focused on Useful, Maintainable Reporting
          </p>
        </AnimatedSection>

        {/* Industry Grid */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
            {clientTypes.map((client) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={client.name}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 group shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.06] group-hover:scale-110 duration-300"
                      style={{ color: client.color }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-base font-bold text-white group-hover:text-white transition-colors tracking-wide">
                      {client.name}
                    </span>
                  </div>
                  <p className="text-sm text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors">{client.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
        
        {/* Trust Badges - Grid based premium layout */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {trustBadges.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={badge.name}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 cursor-default group shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.02] border border-white/[0.06] group-hover:scale-110 duration-300"
                    style={{ color: badge.color }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-bold text-white block tracking-wide">{badge.name}</span>
                    <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mt-0.5">{badge.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
