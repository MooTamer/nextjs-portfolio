import { cvData } from "@/content/cv";

export const siteConfig = {
  /** Brand / OG site name. */
  name: `${cvData.profile.name} | Portfolio`,
  /** Short brand name (PWA short_name, schema). */
  shortName: cvData.profile.name,
  /** Keyword-rich SEO title used as the default <title> and OG/Twitter title. */
  title: `${cvData.profile.name} — ${cvData.profile.headline}`,
  description:
    "Full-stack developer in Cairo working with React, Next.js, TypeScript and Supabase, plus SharePoint (SPFx) and Odoo. Open to remote work in any time zone.",
  url: "https://www.mohamedtamer.me",
  locale: "en-US",
  /** Where Mohamed is based today (truthful home location). */
  homeLocation: { locality: "Cairo", country: "EG" },
} as const;

export type SiteConfig = typeof siteConfig;
