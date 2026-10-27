import { z } from "zod";

export const CvSchema = z.object({
  profile: z.object({
    name: z.string(),
    location: z.string(),
    phone: z.string(),
    email: z.string().email(),
    links: z.object({
      linkedin: z.string().url(),
      github: z.string().url(),
      portfolio: z.string().url().nullable(),
    }),
    headline: z.string(),
    headline_sub: z.string(),
    profile_paragraph: z.string(),
    about_paragraph: z.string(),
    relocation: z.string(),
  }),
  summary_bullets: z.array(z.string()),
  companies_links: z.object({
    ips: z.string().url(),
    evim_app: z.string().url(),
    alahlymomkn: z.string().url(),
  }),
  education: z.array(
    z.object({
      school: z.string(),
      degree: z.string(),
      start: z.string(),
      end: z.string(),
      relevant_courses: z.array(z.string()),
    })
  ),
  experience: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      location: z.string(),
      start: z.string(),
      end: z.string(),
      bullets: z.array(z.string()),
      tags: z.array(z.string()),
    })
  ),
  projects: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
      link_label: z.string(),
      start: z.string(),
      end: z.string(),
      stack: z.array(z.string()),
      bullets: z.array(z.string()),
    })
  ),
  skills: z.object({
    backend_fullstack: z.array(z.string()),
    data_erp: z.array(z.string()),
    frontend: z.array(z.string()),
    microsoft_sharepoint: z.array(z.string()),
    mobile: z.array(z.string()),
    concepts_tools: z.array(z.string()),
  }),
  languages: z.array(
    z.object({
      name: z.string(),
      level: z.string(),
    })
  ),
});

const rawCv = {
  profile: {
    name: "Mohamed Tamer",
    location: "Cairo, Egypt",
    phone: "+20 114 450 0700",
    email: "mohamedtamer200200@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/mohamed-tamer-020a5221a/",
      github: "https://github.com/MooTamer",
      portfolio: "https://www.mohamedtamer.me/",
    },
    headline: "Full-Stack Developer",
    headline_sub: "React · Next.js · TypeScript · Supabase · SharePoint (SPFx)",
    profile_paragraph:
      "I build web products end to end, from the rules in the database to the screens people use every day.",
    about_paragraph:
      "For the past two years I have worked remotely in a small team on a German organisation's SharePoint intranet, run the ERP and digitisation work at an Egyptian manufacturer, and built customer features for a national payments platform used by over 5 million people. Outside those roles I build and run client products, such as an online store with Paymob payments and Bosta shipping. I work mainly with React, Next.js, TypeScript and Supabase, alongside Python, PostgreSQL and SharePoint.",
    relocation: "Open to remote work in any time zone",
  },
  summary_bullets: [
    "Part of a small remote team building EVIM's SharePoint Online intranet library in SPFx, React and TypeScript, where I own the shared design tokens.",
    "At IPS, I implemented Odoo across sales, inventory, manufacturing, purchasing and accounting, and built the Python service that brings factory attendance into it.",
    "At Al Ahly Momkn, I built customer-facing features for a payments platform with over 5 million users.",
    "I write a rollback plan before every change to a live system, and I prefer simple designs that the next developer can maintain.",
  ],
  companies_links: {
    ips: "https://www.ipswirings.com",
    evim_app: "https://www.evim.de",
    alahlymomkn: "https://alahlymomkn.com",
  },
  education: [
    {
      school: "German International University (GIU)",
      degree: "B.Sc. Computer Science, Software Engineering major",
      start: "Sep 2021",
      end: "Jun 2026",
      relevant_courses: [
        "Software Design & Architecture",
        "Software Testing",
        "Ethical Hacking",
        "Data Structures",
        "Database Management",
      ],
    },
  ],
  experience: [
    {
      company: "EVIM (Germany)",
      role: "Frontend Developer",
      location: "Remote, part-time contractor",
      start: "Oct 2024",
      end: "Present",
      bullets: [
        "Co-developing EVIM's SharePoint Online intranet library with a small remote team: 39 SPFx web parts and extensions in React, TypeScript and Fluent UI, covering news, staff directory, calendars and navigation.",
        "Own the shared design tokens that keep every web part's colours, spacing and type consistent.",
        "Now co-building React apps for EVIM's internal workflows, working with SharePoint and Microsoft Graph data.",
      ],
      tags: ["SPFx", "React", "TypeScript", "Fluent UI", "SharePoint Online", "Microsoft 365"],
    },
    {
      company: "IPS (International Precision Systems)",
      role: "Digital Transformation Engineer",
      location: "Hybrid, Egypt",
      start: "Nov 2024",
      end: "Present",
      bullets: [
        "Implemented Odoo 19 across sales, inventory, manufacturing, purchasing and accounting, with a written rollback plan for every change made to the live system.",
        "Built a Python service that brings attendance from the factory's ZKTeco fingerprint terminal into Odoo, with a USB fallback. New employee links wait for human confirmation, so hours never go to the wrong worker.",
        "Designing and prototyping the factory's shop-floor system in Next.js and Supabase, including a bilingual Arabic/English quality-test module that keeps working offline. Not yet in production.",
        "Introduced AI tools into daily work and ran awareness sessions for managers and staff.",
      ],
      tags: ["Odoo", "Python", "Next.js", "Supabase", "PostgreSQL"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: ".NET Full Stack Developer",
      location: "Hybrid, Egypt",
      start: "Dec 2024",
      end: "Jul 2026",
      bullets: [
        "Built customer-facing features in JavaScript and Angular on a C# / .NET back end for a national payments platform with over 5 million users.",
        "Integrated third-party payment providers and worked in two-week sprints, with releases through Jenkins and ArgoCD.",
        "Full-time until October 2025, then freelance.",
      ],
      tags: ["JavaScript", "Angular", ".NET", "Payments", "Agile"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: "iOS Developer Intern",
      location: "Hybrid, Egypt",
      start: "Sep 2024",
      end: "Dec 2024",
      bullets: ["Contributed to the company's Swift iOS app, including admin tools and internal screens."],
      tags: ["Swift", "iOS"],
    },
  ],
  projects: [
    {
      name: "Renée",
      url: "https://renee-eg.com",
      link_label: "Visit the store",
      start: "Apr 2026",
      end: "Present",
      stack: ["Next.js", "Supabase", "PostgreSQL", "Paymob", "Bosta"],
      bullets: [
        "Online store and admin panel for a streetwear brand, with Paymob payments, Bosta shipping and order tracking.",
        "Stock is checked inside the database at checkout, so a sold-out size can't be ordered.",
      ],
    },
    {
      name: "Coditu",
      url: "https://coditu-phi.vercel.app",
      link_label: "Visit the site",
      start: "Feb 2026",
      end: "Present",
      stack: ["Next.js", "Supabase", "Playwright"],
      bullets: [
        "Web app for running an agency's client work: clients, projects, sprints and earnings.",
        "Tested end to end with Playwright, including accessibility checks.",
      ],
    },
  ],
  skills: {
    backend_fullstack: ["Node.js", "Python", "REST APIs"],
    data_erp: ["PostgreSQL", "Supabase", "Odoo"],
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"],
    microsoft_sharepoint: ["SharePoint Online", "SPFx", "Fluent UI", "Microsoft 365"],
    mobile: ["Swift (iOS internship)"],
    concepts_tools: [
      "Git",
      "GitHub Actions",
      "Playwright",
      "Vitest",
      "Vercel",
      "Agile",
      "Jenkins and ArgoCD (basic)",
    ],
  },
  languages: [
    { name: "English", level: "Advanced (C1)" },
    { name: "German", level: "Elementary (A2)" },
    { name: "Arabic", level: "Native" },
  ],
} as const;

export type CvData = z.infer<typeof CvSchema>;
export type Experience = CvData["experience"][number];
export type Project = CvData["projects"][number];
export type Education = CvData["education"][number];

export const cvData = CvSchema.parse(rawCv);
