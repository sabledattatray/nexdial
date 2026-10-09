import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & Reporting Solutions for Operations & Logistics | NexDial",
  description: "Automate inventory reorder models, warehouse tracking sheets, supply chain MIS reports, and multi-source vendor reconciliations in Excel.",
  alternates: { canonical: "/use-cases/operations" },
  openGraph: {
    title: "Data & Reporting Solutions for Operations Teams | NexDial",
    description: "Automate inventory reorder models, warehouse tracking sheets, and supply chain MIS reports.",
    url: "https://nexdial.io/use-cases/operations",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
