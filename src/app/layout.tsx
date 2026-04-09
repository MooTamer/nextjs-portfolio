import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { siteConfig } from "@/config/site";
import "./globals.css";
import { Providers } from "./providers";
import { cvData } from "@/content/cv";

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
  "Next.js",
  "React",
  "TypeScript",
  "SPFx",
  "SharePoint",
  "Frontend Engineer",
  "Software Engineer",
  "Cairo",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${cvData.profile.name}`,
  },
  description: siteConfig.description,
  keywords,
  authors: [{ name: cvData.profile.name, url: siteConfig.url }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/api/og`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
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
