import { cvData } from "@/content/cv";
import { siteConfig } from "@/config/site";

/**
 * Site-wide structured data (schema.org JSON-LD) rendered into the document.
 *
 * Models Mohamed as a real-world entity for search engines and the Knowledge
 * Graph: a Person on a ProfilePage that is part of the WebSite. Everything is
 * derived from `cvData` so it can never drift from the visible content.
 *
 * Geo intent is honest: `homeLocation`/`address` = Cairo (current), while
 * `seeks` + `hasOccupation.occupationLocation` = Sydney (relocation target).
 */

const COMPANY_URLS: Record<string, string> = {
  "IPS (International Precision Systems)": cvData.companies_links.ips,
  "EVIM (Germany)": cvData.companies_links.evim_app,
  "Al Ahly Momkn for E-payments": cvData.companies_links.alahlymomkn,
};

// Extra topical/entity terms that boost relevance for recruiter/search queries.
const DOMAIN_TOPICS = [
  "Full-Stack Web Development",
  "Odoo ERP",
  "ERP Implementation",
  "Manufacturing Execution Systems (MES)",
  "SharePoint Framework (SPFx)",
  "Microsoft 365",
  "Enterprise Software",
  "Web Performance",
  "Agile Software Development",
];

function buildGraph() {
  const { profile, skills, languages, education, experience } = cvData;
  const url = siteConfig.url;
  const personId = `${url}/#person`;
  const websiteId = `${url}/#website`;
  const ogImage = `${url}/api/og`;

  const knowsAbout = Array.from(
    new Set([
      ...skills.backend_fullstack,
      ...skills.data_erp,
      ...skills.frontend,
      ...skills.microsoft_sharepoint,
      ...skills.mobile,
      ...skills.concepts_tools,
      ...DOMAIN_TOPICS,
    ])
  );

  const currentEmployers = experience
    .filter((role) => role.end === "Present" && COMPANY_URLS[role.company])
    .map((role) => role.company);

  const worksFor = Array.from(new Set(currentEmployers)).map((company) => ({
    "@type": "Organization",
    name: company,
    url: COMPANY_URLS[company],
  }));

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    jobTitle: profile.headline,
    description: profile.about_paragraph,
    url,
    image: ogImage,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.homeLocation.locality,
      addressCountry: siteConfig.homeLocation.country,
    },
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    knowsLanguage: languages.map((lang) => ({
      "@type": "Language",
      name: lang.name,
    })),
    knowsAbout,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education[0]?.school,
    },
    worksFor,
    sameAs: [profile.links.linkedin, profile.links.github],
    hasOccupation: {
      "@type": "Occupation",
      name: profile.headline,
      occupationLocation: [
        {
          "@type": "City",
          name: `${siteConfig.targetLocation.locality}, Australia`,
        },
      ],
      skills: knowsAbout.join(", "),
    },
    seeks: {
      "@type": "Demand",
      name: "Software engineering roles in Sydney, Australia — open to relocation and visa sponsorship",
      availableAtOrFrom: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.targetLocation.locality,
          addressRegion: siteConfig.targetLocation.region,
          addressCountry: siteConfig.targetLocation.country,
        },
      },
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en",
    author: { "@id": personId },
    publisher: { "@id": personId },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${url}/#profilepage`,
    url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
    about: { "@id": personId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, person, profilePage],
  };
}

export function JsonLd() {
  const json = JSON.stringify(buildGraph()).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // Static, trusted, build-time data derived from cvData.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
