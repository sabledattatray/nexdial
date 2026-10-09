import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Target Trackers & Commission Calculation Models | NexDial",
  description: "Eliminate commission disputes and delayed sales reporting with automated Excel sales trackers, rep scorecards, and multi-tier incentive calculators.",
  alternates: { canonical: "/use-cases/sales" },
  openGraph: {
    title: "Sales Target Trackers & Commission Models | NexDial",
    description: "Automated Excel sales trackers, rep scorecards, and multi-tier incentive calculators.",
    url: "https://nexdial.io/use-cases/sales",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
