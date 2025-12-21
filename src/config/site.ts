import { cvData } from "@/content/cv";

export const siteConfig = {
  name: `${cvData.profile.name} | Portfolio`,
  description: cvData.profile.headline,
  url: "https://mohamedtamer.live",
  locale: "en-US",
};

export type SiteConfig = typeof siteConfig;
