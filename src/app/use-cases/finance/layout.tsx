import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel & Reporting Solutions for Finance Teams | NexDial",
  description: "Automated transaction reconciliations, P&L models, budget vs. actuals variance tracking, and cash flow forecasting models in Microsoft Excel.",
  alternates: { canonical: "/use-cases/finance" },
  openGraph: {
    title: "Excel & Reporting Solutions for Finance Teams | NexDial",
    description: "Automated transaction reconciliations, P&L models, and budget vs actual variance tracking in Excel.",
    url: "https://nexdial.io/use-cases/finance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
