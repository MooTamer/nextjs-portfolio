import React from "react";
import {
  SiAmazonaws,
  SiAngular,
  SiApachekafka,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMicrosoft,
  SiMicrosoftsharepoint,
  SiDotnet,
  SiOpenjdk,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOdoo,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

import { cvData } from "@/content/cv";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs size={13} />,
  React: <SiReact size={13} />,
  TypeScript: <SiTypescript size={13} />,
  JavaScript: <SiJavascript size={13} />,
  "Tailwind CSS": <SiTailwindcss size={13} />,
  Angular: <SiAngular size={13} />,
  "Node.js": <SiNodedotjs size={13} />,
  NestJS: <SiNestjs size={13} />,
  Express: <SiExpress size={13} />,
  ".NET": <SiDotnet size={13} />,
  "C#/.NET": <SiDotnet size={13} />,
  Java: <SiOpenjdk size={13} />,
  "C++": <SiCplusplus size={13} />,
  Python: <SiPython size={13} />,
  PostgreSQL: <SiPostgresql size={13} />,
  Supabase: <SiSupabase size={13} />,
  Odoo: <SiOdoo size={13} />,
  "SharePoint Online": <SiMicrosoftsharepoint size={13} />,
  SPFx: <SiMicrosoft size={13} />,
  "Microsoft 365": <SiMicrosoft size={13} />,
  "Fluent UI": <SiMicrosoft size={13} />,
  Swift: <SiSwift size={13} />,
  "Flutter (Dart)": <SiFlutter size={13} />,
  Docker: <SiDocker size={13} />,
  Kafka: <SiApachekafka size={13} />,
  AWS: <SiAmazonaws size={13} />,
  Git: <SiGit size={13} />,
  Figma: <SiFigma size={13} />,
};

const languagePalette: Record<string, { bg: string; label: string }> = {
  English: { bg: "bg-[#1e3a8a]", label: "EN" },
  German: { bg: "bg-[#dc2626]", label: "DE" },
  Arabic: { bg: "bg-[#16a34a]", label: "AR" },
};

const skillGroups = [
  { key: "backend_fullstack" as const, title: "Backend & Full-Stack" },
  { key: "data_erp" as const, title: "Data & ERP" },
  { key: "frontend" as const, title: "Frontend" },
  { key: "microsoft_sharepoint" as const, title: "Microsoft & SharePoint" },
  { key: "mobile" as const, title: "Mobile" },
  { key: "concepts_tools" as const, title: "Concepts & Tools" },
];

export function SkillsSection() {
  return (
    <section id="skills" data-section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="Technical range"
          description="Tooling and concepts I use to ship reliable experiences—from UI polish to production-grade backends."
        />
        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {skillGroups.map((group) => {
            const items = cvData.skills[group.key];
            return (
              <StaggerItem key={group.key} className="flex">
                <Card className="flex w-full flex-col p-5 md:p-6">
                  <CardHeader className="mb-3 gap-0">
                    <h3 className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-foreground">
                      {group.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-row flex-wrap gap-1.5">
                    {items.map((item) => (
                      <Badge key={item} variant="chip" className="flex items-center gap-1.5">
                        {techIcons[item] && (
                          <span className="text-primary/60">{techIcons[item]}</span>
                        )}
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}

          {/* Languages card — merged from standalone Languages section */}
          <StaggerItem className="flex">
            <Card className="flex w-full flex-col p-5 md:p-6">
              <CardHeader className="mb-3 gap-0">
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-foreground">
                  Languages
                </h3>
              </CardHeader>
              <CardContent className="flex-row gap-5">
                {cvData.languages.map((lang) => {
                  const palette = languagePalette[lang.name] ?? {
                    bg: "bg-muted",
                    label: lang.name.slice(0, 2).toUpperCase(),
                  };
                  return (
                    <div key={lang.name} className="flex flex-col items-center gap-2">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black text-white ${palette.bg}`}
                        aria-hidden
                      >
                        {palette.label}
                      </span>
                      <div className="text-center">
                        <p className="text-xs font-semibold text-foreground">{lang.name}</p>
                        <p className="text-[10px] text-muted-foreground">{lang.level}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
