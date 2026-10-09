import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Cleaning, Scrubbing & Standardization Services | NexDial",
  description: "Turn chaotic spreadsheets into clean, audit-ready databases. Professional deduplication, date and address normalization, Power Query ETL, and error logging.",
  alternates: { canonical: "/services/data-cleaning" },
  openGraph: {
    title: "Data Cleaning, Scrubbing & Standardization Services | NexDial",
    description: "Turn chaotic spreadsheets into clean, audit-ready databases. Professional deduplication, date and address normalization, and Power Query ETL.",
    url: "https://nexdial.io/services/data-cleaning",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
