import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const primaryLinks = [
  {
    href: `mailto:${cvData.profile.email}`,
    label: "Email",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    href: cvData.profile.links.linkedin,
    label: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    href: cvData.profile.links.github,
    label: "GitHub",
    icon: <Github className="h-4 w-4" />,
  },
];

const currentRoles = cvData.experience.filter((role) => role.end === "Present");
const spotlightSkills = [
  cvData.skills.frontend[2], // Next.js
  cvData.skills.frontend[3], // TypeScript
  cvData.skills.microsoft_sharepoint[0], // SharePoint Online
].filter(Boolean);

export function HeroSection() {
  return (
    <section
      id="hero"
      data-section
      className="relative overflow-hidden pb-16 pt-12 sm:pt-20 md:pt-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute left-[10%] top-1/2 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="container relative grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <FadeIn className="space-y-8">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {cvData.profile.location}
          </Badge>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {cvData.profile.headline}
            </p>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl">
              {cvData.profile.name}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              {cvData.profile.profile_paragraph}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {primaryLinks.map((link) => (
              <Button key={link.label} asChild variant="default">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.icon}
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {spotlightSkills.map((skill) => (
              <Badge key={skill} variant="muted">
                {skill}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="grid gap-4 md:grid-cols-2">
          {currentRoles.map((role, index) => (
            <Card key={`${role.company}-${role.role}`} className="p-5">
              <CardHeader className="gap-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Current
                </p>
                <h3 className="font-display text-lg">{role.role}</h3>
                <p className="text-sm text-muted-foreground">{role.company}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">
                  {role.start} — {role.end}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{role.bullets[0]}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {role.tags.slice(0, 3).map((tag) => (
                    <Badge key={`${role.company}-${tag}-${index}`} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
