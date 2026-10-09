import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Excel Dashboards & KPI Development | NexDial",
  description: "C-suite Excel dashboards with dynamic slicers, timeline filters, and clean visual hierarchies. Transform dense worksheets into executive decision tools.",
  alternates: { canonical: "/services/excel-dashboards" },
  openGraph: {
    title: "Interactive Excel Dashboards & KPI Development | NexDial",
    description: "C-suite Excel dashboards with dynamic slicers, timeline filters, and clean visual hierarchies.",
    url: "https://nexdial.io/services/excel-dashboards",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
