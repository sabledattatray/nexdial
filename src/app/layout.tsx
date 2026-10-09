import type { Metadata } from "next";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppProviders } from "@/components/providers/AppProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexdial.io"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "NexDial | Data Organization, MIS Reporting & Excel Automation",
    template: "%s | NexDial",
  },
  description:
    "NexDial helps businesses eliminate manual spreadsheet chaos, automate recurring MIS reports, build executive Excel & Power BI dashboards, and standardize messy data.",
  keywords: [
    "Excel automation services",
    "MIS reporting automation",
    "Excel dashboards",
    "Power BI consulting",
    "data cleaning services",
    "VBA macros business",
    "spreadsheet consolidation",
    "financial modeling Excel",
    "data management consultancy",
    "Power Query ETL",
  ],
  authors: [
    { name: "NexDial", url: "https://nexdial.io" },
    { name: "Datta Sable", url: "https://dattasable.com" },
  ],
  creator: "NexDial",
  publisher: "NexDial",
  verification: {
    google: "MRwYS7MG0Xj3bK0kZa_uTyl6FTDhzIcs-braGl5EYjs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexdial.io",
    siteName: "NexDial",
    title: "NexDial | Data Organization, MIS Reporting & Excel Automation",
    description:
      "Transform messy spreadsheets into automated MIS reporting, high-impact Excel dashboards, and audit-ready data models.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NexDial - Data Organization and Excel Automation Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexDial | Data Organization, MIS Reporting & Excel Automation",
    description:
      "Transform messy spreadsheets into automated MIS reporting, high-impact Excel dashboards, and audit-ready data models.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#081120" },
    { media: "(prefers-color-scheme: light)", color: "#4F46E5" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexdial.io/#organization",
      "name": "NexDial",
      "url": "https://nexdial.io",
      "logo": "https://nexdial.io/icon.png",
      "description": "Specialist B2B consultancy providing Excel automation, automated MIS reporting, Power BI dashboards, and data cleaning solutions.",
      "founder": {
        "@type": "Person",
        "name": "Datta Sable",
        "url": "https://dattasable.com"
      },
      "sameAs": [
        "https://dattasable.com"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nexdial.io/#service",
      "name": "NexDial Data & Business Automation",
      "url": "https://nexdial.io",
      "parentOrganization": { "@id": "https://nexdial.io/#organization" },
      "serviceType": [
        "Advanced Excel Modeling",
        "MIS Reporting Automation",
        "Interactive Excel & Power BI Dashboards",
        "Data Cleaning and Standardization",
        "VBA Macro Development",
        "Power BI Business Intelligence"
      ],
      "areaServed": "Worldwide"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                window.localStorage.getItem('test');
                window.sessionStorage.getItem('test');
              } catch (e) {
                // Mock storage to prevent iframe SecurityErrors
                const mockStorage = {
                  _data: {},
                  setItem: function(id, val) { return this._data[id] = String(val); },
                  getItem: function(id) { return this._data.hasOwnProperty(id) ? this._data[id] : null; },
                  removeItem: function(id) { return delete this._data[id]; },
                  clear: function() { return this._data = {}; }
                };
                Object.defineProperty(window, 'localStorage', { value: mockStorage });
                Object.defineProperty(window, 'sessionStorage', { value: mockStorage });
              }
            `
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
