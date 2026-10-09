const fs = require('fs');
let content = fs.readFileSync('src/components/home/CaseStudies.tsx', 'utf8');

content = content.replace(
  /const cases = \[[\s\S]*?\];/,
  `const cases = [
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
];`
);

content = content.replace(
  /<p className="text-\[7px\] sm:text-\[8px\] font-semibold text-slate-500 opacity-60 mt-0\.5 uppercase tracking-wider">Impact Measured<\/p>/g,
  `<p className="text-[7px] sm:text-[8px] font-semibold text-slate-500 opacity-60 mt-0.5 uppercase tracking-wider">{metric.subLabel}</p>`
);

fs.writeFileSync('src/components/home/CaseStudies.tsx', content);
