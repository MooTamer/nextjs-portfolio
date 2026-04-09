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
    profile_paragraph: z.string(),
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
    headline:
      "Software developer with experience in full-stack development and production systems.",
    profile_paragraph:
      "Proven ability to design and implement maintainable applications using modern frameworks. Comfortable working in Agile teams and delivering production-grade solutions.",
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
      school: "German International University (GIUAS)",
      degree: "Bachelor of Computer Science — Software Engineering Major",
      start: "Sep 2021",
      end: "Present",
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
      role: "Digital Transformation Lead",
      location: "Hybrid — Egypt",
      start: "Dec 2024",
      end: "Present",
      bullets: [
        "Leading digital transformation initiatives, including design and development of internal management systems and the company website.",
        "Designing and implementing full-stack solutions with a strong focus on code quality, maintainability, and scalability.",
        "Coordinating and reviewing work of freelance developers; collaborating closely with the CEO and product designer.",
      ],
      tags: [
        "Digital Transformation",
        "Next.js",
        "React",
        "TypeScript",
        "Leadership",
        "Scalability",
      ],
    },
    {
      company: "EVIM (Germany)",
      role: "Freelance Frontend Developer",
      location: "Berlin, Germany — Remote",
      start: "Oct 2024",
      end: "Present",
      bullets: [
        "Designed and developed company-specific reusable SharePoint Online components aligned with EVIM's internal workflows and the modern UI experience.",
        "Stack: SPFx (SharePoint Framework), React, TypeScript, Fluent UI; integrating with existing APIs and design systems.",
      ],
      tags: ["SPFx", "React", "TypeScript", "Fluent UI", "SharePoint Online", "Microsoft 365"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: ".NET Full Stack Developer",
      location: "Hybrid — Egypt",
      start: "Jan 2024",
      end: "Nov 2024",
      bullets: [
        "Delivered full-stack features for an enterprise payments platform (.NET, Angular).",
        "Integrated third-party APIs and internal tools; worked within Agile sprints.",
      ],
      tags: [".NET", "Angular", "Payments", "APIs", "Agile"],
    },
    {
      company: "Al Ahly Momkn for E-payments",
      role: "iOS Developer Intern",
      location: "Egypt",
      start: "Aug 2024",
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
    backend_fullstack: [".NET", "Node.js", "NestJS", "Express", "Java", "C++", "Python"],
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
      "CI/CD (basic)",
      "Docker (basic)",
      "Kafka (exposure)",
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
