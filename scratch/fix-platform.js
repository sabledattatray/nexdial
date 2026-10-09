const fs = require('fs');
let content = fs.readFileSync('src/components/home/PlatformOverview.tsx', 'utf8');

content = content.replace(
  /const steps = \[[\s\S]*?\];/,
  `const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Free Initial Discussion",
    description: "Tell us what report you prepare, what data you have, and what you want the final output to show. We'll verify if we can help.",
    details: ["Share requirement", "Data Assessment", "No obligation"],
    color: "#0057D9",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    step: "02",
    icon: Search,
    title: "Review Scope & Quote",
    description: "We confirm the deliverables, required inputs, timeline, and fixed price. You only agree to paid project work when you are ready.",
    details: ["Confirm deliverables", "Confirm inputs", "Firm price & timeline"],
    color: "#00C2FF",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    step: "03",
    icon: TestTube2,
    title: "Build and Validate",
    description: "We build the reporting solution and check it against the agreed requirements using the sample data provided.",
    details: ["Development work", "Validation against sample"],
    color: "#8B5CF6",
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Handover and Support",
    description: "You receive the agreed files and usage notes. Any follow-up support will be exactly as defined in the project scope.",
    details: ["Delivery", "Usage Notes", "Defined Follow-up"],
    color: "#00E5A0",
    className: "md:col-span-1 lg:col-span-3",
  },
];`
);

fs.writeFileSync('src/components/home/PlatformOverview.tsx', content);
