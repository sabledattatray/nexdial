import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power BI Visualizations & Business Intelligence Consulting | NexDial",
  description: "Enterprise Power BI dashboard development, Star Schema data modeling, DAX measure creation, and automated cloud syncs for executive decision-makers.",
  alternates: { canonical: "/services/power-bi" },
  openGraph: {
    title: "Power BI Visualizations & Business Intelligence | NexDial",
    description: "Enterprise Power BI dashboard development, Star Schema data modeling, and DAX measure creation for executive decision-makers.",
    url: "https://nexdial.io/services/power-bi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
