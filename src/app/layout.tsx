import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { siteConfig } from "@/config/site";
import "./globals.css";
import { Providers } from "./providers";
import { cvData } from "@/content/cv";
import { JsonLd } from "@/components/seo/json-ld";

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-custom",
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-custom",
  display: "swap",
});

const keywords = [
  cvData.profile.name,
  "Full-Stack Software Engineer",
  "Software Engineer",
  "Frontend Engineer",
  "Next.js",
  "React",
  "TypeScript",
  "SPFx",
  "SharePoint",
  "Odoo",
  "ERP",
  "MES",
  "Cairo",
  "Remote",
  "Full-stack Developer",
];

const ogImage = {
  url: `${siteConfig.url}/api/og`,
  width: 1200,
  height: 630,
  alt: siteConfig.title,
};

// Search-engine ownership verification — set via env so tokens never live in git.
// These render server-side into <head>, so they don't need a NEXT_PUBLIC_ prefix.
const verification: Metadata["verification"] = {
  google: process.env.GOOGLE_SITE_VERIFICATION,
  other: process.env.BING_SITE_VERIFICATION
    ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
    : undefined,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${cvData.profile.name}`,
  },
  description: siteConfig.description,
  keywords,
  applicationName: siteConfig.name,
  authors: [{ name: cvData.profile.name, url: siteConfig.url }],
  creator: cvData.profile.name,
  publisher: cvData.profile.name,
  category: "technology",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: [{ url: "/apple-icon", sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
      "en-US": "/",
      "en-GB": "/",
      "x-default": "/",
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "profile",
    firstName: "Mohamed",
    lastName: "Tamer",
    username: "MooTamer",
    locale: "en_US",
    alternateLocale: ["en_AU", "en_GB"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification,
  other: {
    // Geo hints point at where Mohamed is based.
    "geo.region": "EG-C",
    "geo.placename": "Cairo, Egypt",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(210, 30%, 99%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(222, 38%, 6%)" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} bg-background text-foreground`}
      >
        <JsonLd />
        <Providers>
          <div className="relative min-h-screen">
            <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px]" />
            </div>
            <div className="relative">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
