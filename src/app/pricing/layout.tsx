import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Service Engagement Models | NexDial",
  description: "Transparent, value-driven pricing for Excel automation, custom dashboards, data cleaning, and monthly MIS retainers. No open-ended hourly billing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Engagement Models | NexDial",
    description: "Transparent, value-driven pricing for Excel automation, custom dashboards, and monthly MIS retainers.",
    url: "https://nexdial.io/pricing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
