import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
                  <CardContent className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="muted">
                        {item}
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
