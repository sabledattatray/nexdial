import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Data & Excel Automation Solutions | NexDial",
  description: "Specialized spreadsheet automation, compliance reporting, and business intelligence models for Healthcare, E-Commerce, Real Estate, Financial Services, and Manufacturing.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industry Data & Excel Automation Solutions | NexDial",
    description: "Specialized spreadsheet automation and reporting for Healthcare, E-Commerce, Real Estate, and Manufacturing.",
    url: "https://nexdial.io/industries",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
