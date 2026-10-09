"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { industriesContent } from "@/lib/industries-content";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.industry;
  const content = industriesContent[slug];

  if (!content) {
    notFound();
  }

  const Icon = content.icon;

  return (
    <div className="relative min-h-screen bg-[#081120] pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-20" style={{ backgroundColor: content.color }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center border"
              style={{ backgroundColor: `${content.color}15`, borderColor: `${content.color}30` }}
            >
              <Icon className="w-8 h-8" style={{ color: content.color }} />
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6 inline-block" style={{ color: content.color, backgroundColor: `${content.color}10`, borderColor: `${content.color}20` }}>
            Industry Focus
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4 leading-tight tracking-tight">
            {content.title}
          </h1>
          <p className="text-[#94A3B8] text-lg sm:text-xl mt-6 leading-relaxed max-w-3xl mx-auto font-light">
            {content.description}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: content.color }}>
              Discuss Your Project
            </Link>
          </div>
        </AnimatedSection>

        {/* Challenges & Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Challenges */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Common Challenges</h2>
            <div className="space-y-6">
              {content.challenges.map((challenge: any, idx: number) => (
                <div key={idx} className="glass-card-strong p-6 rounded-2xl border-l-4" style={{ borderLeftColor: "#EF4444" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Solutions */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Our Solutions</h2>
            <div className="space-y-6">
              {content.solutions.map((solution: any, idx: number) => {
                const SolIcon = solution.icon;
                return (
                  <div key={idx} className="glass-card-strong p-6 rounded-2xl border-l-4 flex gap-4" style={{ borderLeftColor: content.color }}>
                    <div className="flex-shrink-0 mt-1">
                      <SolIcon className="w-6 h-6" style={{ color: content.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed">{solution.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Key Deliverables */}
        <AnimatedSection className="mb-32">
          <div className="glass-card-strong p-10 lg:p-16 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/[0.02] pointer-events-none" />
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-white">Typical Project Deliverables</h2>
              <p className="text-[#94A3B8] mt-4">Practical, ready-to-use reports and dashboards built for your workflow.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {content.deliverables.map((item: string, idx: number) => (
                <div key={idx} className="p-5 rounded-xl bg-[#081120]/50 border border-white/5 flex items-center gap-4 hover:border-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: content.color, boxShadow: `0 0 8px ${content.color}` }} />
                  <span className="text-[#CBD5E1] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to organize your data?</h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto mb-8">
            Let’s discuss your current reporting process and see how we can streamline it with a custom solution.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-transform hover:scale-105" style={{ backgroundColor: content.color }}>
            Request a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>

      </div>
    </div>
  );
}
