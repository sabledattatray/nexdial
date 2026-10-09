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
    default: "NexDial | Data Organization & Automated Reporting in Excel",
    template: "%s | NexDial",
  },
  description:
    "Stop struggling with messy data. NexDial provides structured Excel reporting, automation, and data cleaning services for businesses.",
  keywords: [
    "Excel reporting",
    "MIS reporting",
    "data cleaning",
    "automated reports",
    "spreadsheet consolidation",
  ],
  authors: [{ name: "NexDial" }],
  creator: "NexDial",
  verification: {
    google: "MRwYS7MG0Xj3bK0kZa_uTyl6FTDhzIcs-braGl5EYjs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexdial.io",
    siteName: "NexDial",
    title: "NexDial | Data Organization & Automated Reporting in Excel",
    description:
      "Stop struggling with messy data. NexDial provides structured Excel reporting, automation, and data cleaning services for businesses.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexDial | Data Organization & Automated Reporting in Excel",
    description:
      "Stop struggling with messy data. NexDial provides structured Excel reporting, automation, and data cleaning services for businesses.",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#081120" },
    { media: "(prefers-color-scheme: light)", color: "#4F46E5" },
  ],
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
