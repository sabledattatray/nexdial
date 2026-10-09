import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources, Checklists & Excel Templates | NexDial",
  description: "Download free professional Excel templates, Power Query guides, MIS reporting frameworks, and data cleaning audit checklists.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources, Checklists & Excel Templates | NexDial",
    description: "Download free professional Excel templates, Power Query guides, MIS reporting frameworks, and data cleaning audit checklists.",
    url: "https://nexdial.io/resources",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
