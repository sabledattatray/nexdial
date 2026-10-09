import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NexDial | Discuss Your Data & Automation Project",
  description: "Get in touch with NexDial for custom Excel modeling, automated MIS reporting, dashboard development, or data cleaning projects. Free initial scoping consultation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NexDial | Discuss Your Data Project",
    description: "Get in touch with NexDial for custom Excel modeling, automated MIS reporting, or dashboard development.",
    url: "https://nexdial.io/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
