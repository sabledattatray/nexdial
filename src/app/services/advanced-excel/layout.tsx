import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Excel & Financial Modeling Services | NexDial",
  description: "Enterprise-grade Excel modeling, complex formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays), scenario analysis, and workbook optimization for finance & operations.",
  alternates: { canonical: "/services/advanced-excel" },
  openGraph: {
    title: "Advanced Excel & Financial Modeling Services | NexDial",
    description: "Enterprise-grade Excel modeling, complex formulas, scenario analysis, and workbook optimization for finance & operations.",
    url: "https://nexdial.io/services/advanced-excel",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
