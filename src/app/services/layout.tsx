import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Data, Excel & Reporting Automation Services | NexDial",
  description: "Specialist business services for Advanced Excel, automated MIS reporting, interactive dashboards, Power Query data cleaning, VBA macros, and Power BI models.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "B2B Data, Excel & Reporting Automation Services | NexDial",
    description: "Specialist business services for Advanced Excel, automated MIS reporting, interactive dashboards, data cleaning, VBA macros, and Power BI models.",
    url: "https://nexdial.io/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
