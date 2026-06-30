import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b1020",
    theme_color: "#0b1020",
    lang: "en",
    dir: "ltr",
    categories: ["portfolio", "technology", "business"],
    icons: [
      { src: "/a.png", sizes: "241x241", type: "image/png", purpose: "any" },
      { src: "/favicon.png", sizes: "1038x930", type: "image/png" },
    ],
  };
}
