const fs = require('fs');
let content = fs.readFileSync('src/components/home/TrustIndicators.tsx', 'utf8');

content = content.replace(
  /const clientTypes = \[[\s\S]*?\];/,
  `const clientTypes = [
  { name: "Finance", desc: "Monthly MIS and reconciliation", icon: GraduationCap, color: "#8B5CF6" },
  { name: "Sales", desc: "Sales performance & commissions", icon: Stethoscope, color: "#EF4444" },
  { name: "Operations", desc: "Inventory & performance trackers", icon: Megaphone, color: "#00C2FF" },
  { name: "HR", desc: "Attendance & workforce reporting", icon: Shield, color: "#3B82F6" },
];`
);

content = content.replace(
  /const trustBadges = \[[\s\S]*?\];/,
  `const trustBadges = [
  { name: "Requirement-First", desc: "Agreed deliverables", icon: Activity, color: "#00E5A0" },
  { name: "Practical Solutions", desc: "Validation against sample data", icon: Star, color: "#F59E0B" },
  { name: "Clear Handover", desc: "A documented handover", icon: TrendingUp, color: "#00C2FF" },
  { name: "Defined Scope", desc: "Clearly defined scope & price", icon: ShieldCheck, color: "#8B5CF6" },
];`
);

content = content.replace(
  /{\/\* Industry Carousel \*\/}[\s\S]*?(?={\/\* Trust Badges)/,
  `{/* Industry Grid */}
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
        
        `
);

fs.writeFileSync('src/components/home/TrustIndicators.tsx', content);
