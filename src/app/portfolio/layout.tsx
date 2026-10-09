import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Data Solutions Gallery | NexDial",
  description: "Browse NexDial's portfolio of custom financial models, interactive sales trackers, inventory management spreadsheets, and automated MIS dashboards.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio & Data Solutions Gallery | NexDial",
    description: "Browse NexDial's portfolio of custom financial models, interactive sales trackers, and automated MIS dashboards.",
    url: "https://nexdial.io/portfolio",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
