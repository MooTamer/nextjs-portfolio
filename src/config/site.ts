import { cvData } from "@/content/cv";

export const siteConfig = {
  /** Brand / OG site name. */
  name: `${cvData.profile.name} | Portfolio`,
  /** Short brand name (PWA short_name, schema). */
  shortName: cvData.profile.name,
  /** Keyword-rich SEO title used as the default <title> and OG/Twitter title. */
  title: `${cvData.profile.name} — ${cvData.profile.headline}`,
  description:
    "Full-stack software engineer (Next.js, React, TypeScript) building ERP and SharePoint/M365 systems. Open to relocating to Sydney, Australia.",
  url: "https://mohamedtamer.me",
  locale: "en-US",
  /** Where Mohamed is based today (truthful home location). */
  homeLocation: { locality: "Cairo", country: "EG" },
  /** Primary job-search target market (relocation intent — not current residence). */
  targetLocation: { locality: "Sydney", region: "NSW", country: "AU" },
} as const;

export type SiteConfig = typeof siteConfig;
