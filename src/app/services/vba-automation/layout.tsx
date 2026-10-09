import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom VBA Macros & Excel Workflow Automation | NexDial",
  description: "Automate hours of repetitive manual work with single-click VBA macros. Multi-file consolidation, automated form generation, and Outlook email dispatch.",
  alternates: { canonical: "/services/vba-automation" },
  openGraph: {
    title: "Custom VBA Macros & Excel Workflow Automation | NexDial",
    description: "Automate hours of repetitive manual work with single-click VBA macros. Multi-file consolidation and automated reporting.",
    url: "https://nexdial.io/services/vba-automation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
