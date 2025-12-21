import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const techPalette: Record<
  string,
  { bg: string; text: string; label?: string }
> = {
  "Next.js": { bg: "bg-neutral-900", text: "text-white" },
  "TypeScript": { bg: "bg-[#3178c6]", text: "text-white", label: "TS" },
  "JavaScript": { bg: "bg-[#f7df1e]", text: "text-black", label: "JS" },
  React: { bg: "bg-[#00d8ff]", text: "text-black" },
  "Tailwind CSS": { bg: "bg-[#38bdf8]", text: "text-black", label: "TW" },
  ".NET": { bg: "bg-[#5c2d91]", text: "text-white" },
  Node.js: { bg: "bg-[#026e00]", text: "text-white", label: "Node" },
  NestJS: { bg: "bg-[#e0234e]", text: "text-white", label: "Nest" },
  Express: { bg: "bg-neutral-800", text: "text-white", label: "Ex" },
  Java: { bg: "bg-[#e76f00]", text: "text-white" },
  "C++": { bg: "bg-[#004482]", text: "text-white" },
  Python: { bg: "bg-[#3776ab]", text: "text-white", label: "Py" },
  Angular: { bg: "bg-[#c3002f]", text: "text-white" },
  "SharePoint Online": { bg: "bg-[#037362]", text: "text-white", label: "SP" },
  SPFx: { bg: "bg-[#185abd]", text: "text-white" },
  "Microsoft 365": { bg: "bg-[#0f7bff]", text: "text-white", label: "M365" },
  Swift: { bg: "bg-[#fa7343]", text: "text-white" },
  Flutter: { bg: "bg-[#02569b]", text: "text-white" },
  Docker: { bg: "bg-[#0db7ed]", text: "text-white" },
  Kafka: { bg: "bg-[#231f20]", text: "text-white" },
  AWS: { bg: "bg-[#ff9900]", text: "text-black" },
  Figma: { bg: "bg-[#f24e1e]", text: "text-white" },
};

function LogoMark({ name }: { name: string }) {
  const palette = techPalette[name] ?? {
    bg: "bg-muted",
    text: "text-foreground",
  };
  const label = palette.label ?? name.split(" ")[0]?.slice(0, 3).toUpperCase();
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${palette.bg} ${palette.text}`}
      aria-hidden
    >
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
                  <CardContent className="flex flex-wrap gap-2 mt-4">
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
