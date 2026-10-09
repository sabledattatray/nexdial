import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NexDial | B2B Data & Business Automation Specialists",
  description: "Learn about NexDial's mission: helping businesses replace manual reporting, fragmented spreadsheets, and repetitive data entry with structured, automated solutions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About NexDial | B2B Data & Business Automation Specialists",
    description: "Learn about NexDial's mission: helping businesses replace manual reporting and fragmented spreadsheets with automated solutions.",
    url: "https://nexdial.io/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
