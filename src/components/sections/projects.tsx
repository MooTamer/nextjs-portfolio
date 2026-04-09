import { ArrowUpRight, Github } from "lucide-react";

import { cvData } from "@/content/cv";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" data-section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Products and systems that reflect how I design for clarity, performance, and maintainability."
        />
        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cvData.projects.map((project) => (
            <StaggerItem key={project.name} className="flex h-full">
              <Card className="flex h-full w-full flex-col p-6">
                <CardHeader className="gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {project.start} — {project.end}
                      </p>
                      <h3 className="font-display text-xl font-extrabold tracking-tight">
                        {project.name}
                      </h3>
                    </div>
                    <Button asChild size="icon" variant="ghost" className="shrink-0">
                      <a
                        href={project.repo}
                        target="_blank"
                        aria-label={`${project.name} repository`}
                        rel="noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={`${project.name}-${tech}`} variant="chip">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 gap-3">
                  <ul className="flex-1 space-y-2">
                    {project.bullets.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      View repository
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
