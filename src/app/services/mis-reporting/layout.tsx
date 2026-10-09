import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated MIS Reporting & Workbook Consolidation | NexDial",
  description: "Eliminate manual report consolidation. Automated daily, weekly, and monthly Management Information System (MIS) reports and executive variance summaries.",
  alternates: { canonical: "/services/mis-reporting" },
  openGraph: {
    title: "Automated MIS Reporting & Consolidation | NexDial",
    description: "Eliminate manual report consolidation. Automated daily, weekly, and monthly MIS reports and executive variance summaries.",
    url: "https://nexdial.io/services/mis-reporting",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
