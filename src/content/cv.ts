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
      expected_graduation: z.string(),
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
      repo: z.string().url(),
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
    phone: "+(20) 1144500700",
    email: "mohamedtamer200200@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/mohamed-tamer-020a5221a/",
      github: "https://github.com/MooTamer",
      portfolio: "https://www.mohamedtamer.me/",
    },
    headline: "Full-Stack Software Engineer",
    headline_sub: "Next.js · React · TypeScript · ERP & SharePoint Integrations",
    profile_paragraph:
      "I build full-stack web systems and internal enterprise tools — a full Odoo ERP and an in-house MES at IPS, and reusable SharePoint (SPFx) components for EVIM. Strong on clean architecture, performance, and Agile delivery.",
    about_paragraph:
      "I build software that ships. At IPS I work as a Digital Transformation Engineer: I built and configured the company's full Odoo ERP and I'm building an in-house Manufacturing Execution System (MES) in Next.js + TypeScript + Supabase for real-time production tracking and bottleneck detection. My focus is turning manual operations into reliable, maintainable digital systems. I also freelance for EVIM (Germany), building reusable SPFx SharePoint components in React + TypeScript, and earlier delivered features for a national payments platform (Al Ahly Momkn) used by 5M+ users. Main stack: Next.js, React, TypeScript, Node.js, PostgreSQL, plus Odoo and SharePoint/SPFx.",
    relocation: "Open to relocating to Sydney, Australia",
  },
  summary_bullets: [
    "Specialized in building full-stack applications with Next.js across freelance/contract work and production systems at IPS.",
    "Currently developing reusable Microsoft SharePoint (modern UI) components for EVIM (Germany) across web and mobile interfaces.",
    "Previously delivered enterprise-scale payment features at Al Ahly Momkn, with a focus on clean architecture, UI performance, and real-time integrations.",
    "Exposure to mobile development through contribution to an enterprise iOS application during internship and a Flutter-based academic project.",
  ],
  companies_links: {
    ips: "https://www.ipswirings.com",
    evim_app: "https://play.google.com/store/apps/details?id=de.appack.project.evim_mitarbeiter",
    alahlymomkn: "https://alahlymomkn.com",
  },
  education: [
    {
      school: "German International University (GIU)",
      degree: "Bachelor of Computer Science — Software Engineering Major",
      start: "Sep 2021",
      end: "Jun 2026",
      expected_graduation: "Jun 2026",
      relevant_courses: [
        "Data Structures",
        "Database Management",
        "Software Security",
        "OOP",
        "Software Methodology",
      ],
    },
  ],
  experience: [
    {
      company: "IPS (International Precision Systems)",
      role: "Digital Transformation Engineer",
      location: "Hybrid — Egypt",
      start: "Nov 2024",
      end: "Present",
      bullets: [
        "Built and configured IPS's full Odoo ERP end-to-end — Sales, Inventory, Manufacturing (BoM/MO), Purchase, and Accounting — with MTO/Buy procurement routes and custom role-based permissions.",
        "Designing and building an in-house Manufacturing Execution System (MES) in Next.js/Supabase: real-time production-line tracking and bottleneck detection across all stations, integrated with Odoo and built for ISO / IATF 16949 traceability.",
        "Shipped a factory-floor inventory-movement dashboard with full Odoo-synced CRUD, analytics, and data export — built for low-tech-literacy operators.",
        "Build internal full-stack systems and the company website end-to-end, focused on code quality, maintainability, and scalability.",
      ],
      tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Odoo", "MES"],
    },
    {
      company: "EVIM (Germany)",
      role: "Freelance Frontend Developer",
      location: "Berlin, Germany — Remote",
      start: "Oct 2025",
      end: "Present",
      bullets: [
        "Built 40+ reusable SharePoint Online (SPFx) components used across EVIM's internal web and mobile workflows, aligned with the modern UI experience.",
        "Stack: SPFx (SharePoint Framework), React, TypeScript, Fluent UI; integrating with existing APIs and design systems.",
      ],
      tags: ["SPFx", "React", "TypeScript", "Fluent UI", "SharePoint Online", "Microsoft 365"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: ".NET Full Stack Developer (Freelance)",
      location: "Remote — Egypt",
      start: "Oct 2025",
      end: "Present",
      bullets: [
        "Continue to deliver customer-facing features (Angular/TypeScript front end, .NET backend) for the same national payments platform.",
      ],
      tags: ["Angular", "TypeScript", "Payments", "APIs", "Agile", ".NET"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: ".NET Full Stack Developer",
      location: "Hybrid — Egypt",
      start: "Dec 2024",
      end: "Oct 2025",
      bullets: [
        "Built 30+ customer-facing features (Angular/TypeScript front end, .NET backend) for a national payments platform serving 5M+ users and ~750M transactions/year.",
        "Integrated third-party payment APIs and internal tools; delivered in two-week Agile sprints.",
      ],
      tags: ["Angular", "TypeScript", "Payments", "APIs", "Agile", ".NET"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: "iOS Developer Intern",
      location: "Egypt",
      start: "Sep 2024",
      end: "Dec 2024",
      bullets: [
        "Contributed to a Swift-based iOS app; integrated admin tools and internal UI workflows.",
      ],
      tags: ["Swift", "iOS"],
    },
  ],
  projects: [
    {
      name: "Pallet Pro",
      repo: "https://github.com/MooTamer/pallet-pro",
      start: "Mar 2024",
      end: "May 2024",
      stack: ["Next.js", "Tailwind CSS", "Kafka", "NestJS", "Docker"],
      bullets: [
        "Built a real-time e-commerce dashboard with dynamic product and order views.",
        "Integrated Kafka streams with a NestJS backend to enable live stock updates and order handling.",
      ],
    },
    {
      name: "Student Guide",
      repo: "https://github.com/MooTamer/Student-Guide",
      start: "Oct 2023",
      end: "Nov 2023",
      stack: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
      bullets: [
        "Developed a microservice-based university app with 98+ Lighthouse scores and responsive UI.",
        "Implemented profile cards and tutorial maps with dynamic data and action buttons.",
      ],
    },
    {
      name: "Help Desk System",
      repo: "https://github.com/MooTamer/Staff-Help-Desk-Backend",
      start: "Nov 2023",
      end: "Jan 2024",
      stack: ["MERN Stack"],
      bullets: [
        "Built a microservice help desk platform with custom theming, real-time chat, and AI integration.",
        "Deployed as a PWA with MFA, backup automation, and performance monitoring.",
      ],
    },
  ],
  skills: {
    backend_fullstack: ["Node.js", "NestJS", "Express", "Python", "C#/.NET", "Java", "C++"],
    data_erp: ["PostgreSQL", "Supabase", "Odoo"],
    frontend: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Fluent UI",
    ],
    microsoft_sharepoint: ["SharePoint Online", "SPFx", "Microsoft 365"],
    mobile: ["Flutter (Dart)", "Swift"],
    concepts_tools: [
      "Software Design",
      "OOP",
      "Data Structures",
      "DBMS",
      "Testing",
      "Git",
      "Agile",
      "CI/CD",
      "Docker",
      "Kafka",
      "Figma",
    ],
  },
  languages: [
    { name: "English", level: "Fluent (C1)" },
    { name: "German", level: "Good (A2)" },
    { name: "Arabic", level: "Native" },
  ],
} as const;

export type CvData = z.infer<typeof CvSchema>;
export type Experience = CvData["experience"][number];
export type Project = CvData["projects"][number];
export type Education = CvData["education"][number];

export const cvData = CvSchema.parse(rawCv);
