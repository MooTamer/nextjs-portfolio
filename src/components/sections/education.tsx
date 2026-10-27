import { GraduationCap } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" data-section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Education"
          title="Academics"
          description="Grounded in computer science fundamentals with applied software projects."
        />
        <div className="space-y-4">
          {cvData.education.map((edu) => (
            <FadeIn key={edu.school}>
              <Card className="p-6 md:p-8">
                <CardHeader className="mb-4 gap-3">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        {edu.start} — {edu.end}
                      </p>
                      <h3 className="font-display text-xl font-extrabold">{edu.school}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </CardHeader>
                <CardContent className="flex-row flex-wrap gap-2">
                  {edu.relevant_courses.map((course) => (
                    <Badge key={course} variant="outline">
                      {course}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
