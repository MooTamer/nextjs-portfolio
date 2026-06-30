import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const currentRoles = cvData.experience.filter((role) => role.end === "Present");

export function HeroSection() {
  return (
    <section
      id="hero"
      data-section
      className="relative overflow-hidden py-24 sm:py-28 md:py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute left-[5%] top-1/2 h-64 w-64 rounded-full bg-secondary/10 blur-[80px]" />
        <div className="absolute right-[10%] bottom-0 h-48 w-48 rounded-full bg-accent/10 blur-[60px]" />
      </div>

      <div className="container relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left — identity */}
        <FadeIn className="space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="pill" className="border-primary/20 bg-primary/10 text-primary">
              {cvData.profile.location}
            </Badge>
            <Badge variant="muted">{cvData.profile.relocation}</Badge>
          </div>

          <div className="space-y-4">
            <p className="text-base font-medium text-muted-foreground">Hi, I&apos;m</p>
            <h1 className="font-display text-5xl font-black leading-[1.0] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              {cvData.profile.name.split(" ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                </span>
              ))}
            </h1>
            <p className="text-xl font-bold text-primary sm:text-2xl">
              {cvData.profile.headline}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {cvData.profile.headline_sub}
            </p>
          </div>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            {cvData.profile.profile_paragraph}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={`mailto:${cvData.profile.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={cvData.profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={cvData.profile.links.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              cvData.skills.frontend[2],
              cvData.skills.frontend[3],
              cvData.skills.microsoft_sharepoint[0],
            ]
              .filter(Boolean)
              .map((skill) => (
                <Badge key={skill} variant="chip">
                  {skill}
                </Badge>
              ))}
          </div>
        </FadeIn>

        {/* Right — current roles */}
        <StaggerContainer className="space-y-4" delayChildren={0.25}>
          {currentRoles.map((role) => (
            <StaggerItem key={`${role.company}-${role.role}`}>
              <Card className="p-5">
                <CardContent className="gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-primary">
                      Active
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug">{role.role}</h3>
                    <p className="text-sm text-muted-foreground">{role.company}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground/70">
                      {role.start} — {role.end}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="chip">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
