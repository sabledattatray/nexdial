import type { Metadata } from "next";
import { CaseStudies } from "@/components/home/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies & Sample Projects — Excel & Data Automation | NexDial",
  description: "Explore real-world sample projects and case studies: Excel Sales KPI dashboards, automated monthly MIS reporting, and Power Query spreadsheet cleanup.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Sample Projects | NexDial",
    description: "Explore real-world sample projects and case studies: Excel Sales KPI dashboards, automated monthly MIS reporting, and spreadsheet cleanup.",
    url: "https://nexdial.io/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-[#081120] pt-12 pb-12 overflow-hidden">
      <CaseStudies />
    </div>
  );
}
