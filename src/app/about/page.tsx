"use client";

import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { Shield, Inbox, Brain, Zap, Server, Mail, Phone, MessageSquare, ArrowRight, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Inbox,
    title: "Requirement-First Design",
    desc: "Understand the task and business context before proposing a solution, ensuring the report actually answers the right questions.",
    color: "#00C2FF"
  },
  {
    icon: Brain,
    title: "Maintainable Logic",
    desc: "Keep calculations and assumptions straightforward so your team can understand and maintain the work after handover.",
    color: "#8B5CF6"
  },
  {
    icon: Shield,
    title: "Practical Validation",
    desc: "Validate outputs against agreed requirements and provide a clear, organized deliverable without unnecessary complexity.",
    color: "#00E5A0"
  }
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#081120] pt-28 pb-20 overflow-hidden font-sans text-slate-300">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00C2FF]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#00E5A0]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Page Header */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-32">
          <span className="text-xs font-bold text-[#00C2FF] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20">
            The NexDial Approach
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mt-8 leading-tight tracking-tight">
            Practical Data Support, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#00E5A0]">Built Around Your Reporting Needs</span>
          </h1>
          <p className="text-[#94A3B8] text-lg sm:text-xl mt-6 leading-relaxed max-w-2xl mx-auto font-light">
            NexDial provides remote support for Excel reporting, MIS preparation, data organization, and reporting automation. The focus is on understanding the business requirement, choosing a suitable approach, and delivering a clear, maintainable result.
          </p>
        </AnimatedSection>

        {/* Founder Story Section */}
        <AnimatedSection className="mb-32">
          <div className="glass-card-strong p-8 lg:p-16 rounded-[2.5rem] border border-white/[0.06] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00C2FF]/10 blur-[120px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center relative z-10">
              
              {/* Image Column */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2FF]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/5] w-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-transparent z-10" />
                  <Image
                    src="/datta.png"
                    alt="Datta Sable, Founder & CEO"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: "center 20%" }}
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Datta Sable</h3>
                    <p className="text-[#00C2FF] font-semibold text-sm tracking-wide mt-1">Founder & CEO</p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  "Most businesses are drowning in their own disconnected data."
                </h2>
                
                <div className="space-y-6 text-[#94A3B8] text-base leading-relaxed">
                  <p>
                    As a Business Intelligence Expert and Data Strategy Consultant, I spent years building reporting solutions for major financial institutions (like HDFC Bank) and scaling startups. Through that experience, I watched countless organizations struggle because their core data was disorganized.
                  </p>
                  <p>
                    Finance teams were spending hours manually reconciling spreadsheets. Operations managers were constantly context-switching between disjointed systems.
                  </p>
                  <p>
                    <strong className="text-white font-semibold">I built NexDial to solve these reporting challenges through structured organization and automation.</strong>
                  </p>
                  <p>
                    Our mission is to provide small and mid-sized enterprises with clean, reliable data workflows. By centralizing data into automated dashboards, we allow your team to stop doing manual entry and start making decisions with clarity.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/[0.05]">
                  <a 
                    href="https://dattasable.com/blog" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/10 transition-colors"
                  >
                    Read My Technical Blog
                    <Zap className="w-4 h-4 text-[#00C2FF]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Operational Pillars Section */}
        <AnimatedSection className="mb-32">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Our Core Architecture
            </h2>
            <p className="text-[#64748B] mt-4">
              The fundamental principles that govern our product engineering.
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {pillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <StaggerItem key={pil.title}>
                  <div className="glass-card-strong p-10 h-full relative overflow-hidden group hover:border-white/[0.1] transition-all duration-500 rounded-[2rem]">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" style={{ backgroundColor: pil.color }} />
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border"
                      style={{ backgroundColor: `${pil.color}10`, borderColor: `${pil.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: pil.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{pil.title}</h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{pil.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection className="mb-32">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-[#64748B] mt-4">
              We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {/* 1. Email Support */}
            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-5 overflow-hidden group hover:border-[#00C2FF]/30 hover:bg-[#00C2FF]/5 hover:shadow-[0_4px_25px_rgba(0,194,255,0.06)] transition-all duration-300 min-h-[112px] h-full">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#00C2FF]" />
              <div className="flex items-center gap-5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF] flex-shrink-0 transition-transform group-hover:scale-110">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Email Support</p>
                  <a href="mailto:info@nexdial.io" className="text-base font-extrabold text-white hover:text-[#00C2FF] transition-colors mt-1 block truncate">
                    info@nexdial.io
                  </a>
                </div>
              </div>
            </div>

            {/* 2. WhatsApp Support */}
            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-5 overflow-hidden group hover:border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/5 hover:shadow-[0_4px_25px_rgba(139,92,246,0.06)] transition-all duration-300 min-h-[112px] h-full">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#8B5CF6]" />
              <div className="flex items-center gap-5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 transition-transform group-hover:scale-110">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
                    WhatsApp Support
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
                    </span>
                  </p>
                  <a href="https://wa.me/918010803756" target="_blank" rel="noopener noreferrer" className="text-base font-extrabold text-[#00E5A0] hover:underline mt-1 block truncate">
                    Chat with Sales Support
                  </a>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#8B5CF6] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
            </div>

            {/* 3. Phone Support */}
            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-5 overflow-hidden group hover:border-[#00E5A0]/30 hover:bg-[#00E5A0]/5 hover:shadow-[0_4px_25px_rgba(0,229,160,0.06)] transition-all duration-300 min-h-[112px] h-full">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#00E5A0]" />
              <div className="flex items-center gap-5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#00E5A0]/10 border border-[#00E5A0]/20 flex items-center justify-center text-[#00E5A0] flex-shrink-0 transition-transform group-hover:scale-110">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Phone Support</p>
                  <a href="tel:+918010803756" className="text-base font-extrabold text-white hover:text-[#00C2FF] transition-colors mt-1 block truncate">
                    +91 8010803756
                  </a>
                </div>
              </div>
            </div>

            {/* 4. NexDial HQ */}
            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-5 overflow-hidden group hover:border-[#00C2FF]/30 hover:bg-[#00C2FF]/5 hover:shadow-[0_4px_25px_rgba(0,194,255,0.06)] transition-all duration-300 min-h-[112px] h-full">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#00E5A0] to-[#00C2FF]" />
              <div className="flex items-center gap-5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#00E5A0]/10 border border-[#00E5A0]/20 flex items-center justify-center text-[#00E5A0] flex-shrink-0 transition-transform group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-[#00E5A0]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">NexDial HQ</p>
                  <p className="text-sm font-semibold text-slate-200 mt-1 leading-snug">
                    Badlapur East, Dist- Thane, Maharashtra, India- 421503
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Enterprise Trust Markers */}
        <AnimatedSection className="glass-card-strong p-10 lg:p-16 text-center rounded-[2.5rem] relative overflow-hidden border-t border-[#00C2FF]/20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00C2FF]/5 to-transparent pointer-events-none" />
          <Server className="w-12 h-12 text-[#00C2FF] mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Reliable Data Solutions</h3>
          <p className="text-[#94A3B8] text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            We handle your business data with care, ensuring accuracy and security in every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {["Strict Confidentiality", "Accurate Calculations", "Secure Data Handling", "Reliable Delivery"].map((cert) => (
              <div key={cert} className="px-5 py-2.5 rounded-full bg-[#081120] border border-white/[0.08] text-xs sm:text-sm font-semibold text-[#CBD5E1] flex items-center gap-3 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#00E5A0] shadow-[0_0_8px_#00E5A0]" />
                {cert}
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

