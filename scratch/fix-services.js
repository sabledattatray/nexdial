const fs = require('fs');
let content = fs.readFileSync('src/components/home/ServicesShowcase.tsx', 'utf8');

content = content.replace(
  /const features = \[[\s\S]*?\];/,
  `const features = [
  {
    icon: FileSpreadsheet,
    title: "Advanced Excel",
    description: "Problem: Unstable workbooks. Deliverable: Optimized templates. Next Step: Get a quote.",
    color: "#0057D9",
    href: "/services/advanced-excel",
  },
  {
    icon: BarChart,
    title: "MIS Reporting",
    description: "Problem: Manual reporting. Deliverable: Automated MIS reports. Next Step: View samples.",
    color: "#00C2FF",
    href: "/services/mis-reporting",
  },
  {
    icon: PieChart,
    title: "Excel Dashboards",
    description: "Problem: Unclear KPIs. Deliverable: Interactive Excel dashboards. Next Step: Book a demo.",
    color: "#00E5A0",
    href: "/services/excel-dashboards",
  },
  {
    icon: Database,
    title: "Data Cleaning",
    description: "Problem: Messy data. Deliverable: Cleaned & standardized files. Next Step: Start project.",
    color: "#8B5CF6",
    href: "/services/data-cleaning",
  },
  {
    icon: Repeat,
    title: "VBA & Macros",
    description: "Problem: Repetitive tasks. Deliverable: Automated VBA scripts. Next Step: Discuss scope.",
    color: "#F59E0B",
    href: "/services/vba-automation",
  },
  {
    icon: BarChart,
    title: "Power BI",
    description: "Problem: Disconnected data. Deliverable: Deployed BI workspaces. Next Step: Check integration.",
    color: "#EC4899",
    href: "/services/power-bi",
  },
];`
);

content = content.replace(
  /className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"/,
  'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"'
);

fs.writeFileSync('src/components/home/ServicesShowcase.tsx', content);
