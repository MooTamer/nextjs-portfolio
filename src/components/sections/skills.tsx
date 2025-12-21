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
  SiPython,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const techIcons: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs size={16} title="Next.js" />,
  React: <SiReact size={16} title="React" />,
  TypeScript: <SiTypescript size={16} title="TypeScript" />,
  JavaScript: <SiJavascript size={16} title="JavaScript" />,
  "Tailwind CSS": <SiTailwindcss size={16} title="Tailwind CSS" />,
  Angular: <SiAngular size={16} title="Angular" />,
  "Node.js": <SiNodedotjs size={16} title="Node.js" />,
  NestJS: <SiNestjs size={16} title="NestJS" />,
  Express: <SiExpress size={16} title="Express" />,
  ".NET": <SiDotnet size={16} title=".NET" />,
  Java: <SiOpenjdk size={16} title="Java" />,
  "C++": <SiCplusplus size={16} title="C++" />,
  Python: <SiPython size={16} title="Python" />,
  "SharePoint Online": <SiMicrosoftsharepoint size={16} title="SharePoint Online" />,
  SPFx: <SiMicrosoft size={16} title="SPFx" />,
  "Microsoft 365": <SiMicrosoft size={16} title="Microsoft 365" />,
  "Fluent UI": <SiMicrosoft size={16} title="Fluent UI" />,
  Swift: <SiSwift size={16} title="Swift" />,
  "Flutter (Dart)": <SiFlutter size={16} title="Flutter" />,
  Flutter: <SiFlutter size={16} title="Flutter" />,
  Docker: <SiDocker size={16} title="Docker" />,
  Kafka: <SiApachekafka size={16} title="Kafka" />,
  AWS: <SiAmazonaws size={16} title="AWS" />,
  Git: <SiGit size={16} title="Git" />,
  Figma: <SiFigma size={16} title="Figma" />,
};

function LogoMark({ name }: { name: string }) {
  const icon = techIcons[name];
  if (icon) {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
        {icon}
      </span>
    );
  }
  const label = name.split(" ")[0]?.slice(0, 3).toUpperCase();
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-foreground">
      {label}
    </span>
  );
}

const skillGroups = [
  { key: "backend_fullstack", title: "Backend & Full-Stack" },
  { key: "frontend", title: "Frontend" },
  { key: "microsoft_sharepoint", title: "Microsoft & SharePoint" },
  { key: "mobile", title: "Mobile" },
  { key: "concepts_tools", title: "Concepts & Tools" },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" data-section className="py-12">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical range"
          description="Tooling and concepts I use to ship reliable experiences—from UI polish to production-grade backends."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const items = cvData.skills[group.key];
            return (
              <FadeIn key={group.key} delay={index * 0.04}>
                <Card className="h-full p-6">
                  <CardHeader className="gap-1">
                    <h3 className="font-display text-lg">{group.title}</h3>
                  </CardHeader>
                  <CardContent className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="muted">
                        <span className="flex items-center gap-2">
                          <LogoMark name={item} />
                          {item}
                        </span>
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
