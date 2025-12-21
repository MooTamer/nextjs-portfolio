import { ArrowUpRight, Github } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" data-section className="py-12">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Products and systems that reflect how I design for clarity, performance, and maintainability."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {cvData.projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.05} className="h-full">
              <Card className="flex h-full flex-col p-6">
                <CardHeader className="gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {project.start} — {project.end}
                      </p>
                      <h3 className="font-display text-xl">{project.name}</h3>
                    </div>
                    <Button asChild size="icon" variant="ghost" className="self-start">
                      <a href={project.repo} target="_blank" aria-label={`${project.name} repo`} rel="noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <Badge key={`${project.name}-${tech}`} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {project.bullets.map((point) => (
                    <p key={point} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary/60" />
                      <span>{point}</span>
                    </p>
                  ))}
                  <Button asChild variant="outline" className="mt-2 w-fit">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      View repository
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
