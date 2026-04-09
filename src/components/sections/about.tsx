import { Sparkles } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" data-section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="About"
          title="What drives my work"
          description="A quick snapshot of how I approach building modern products and the problems I enjoy solving."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <Card className="h-full p-7 md:p-8">
              <CardContent className="gap-4">
                <p className="text-lg font-bold leading-snug text-foreground sm:text-xl">
                  {cvData.profile.headline}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {cvData.profile.profile_paragraph}
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full p-7 md:p-8">
              <CardContent className="gap-0 divide-y divide-border/50">
                {cvData.summary_bullets.map((item, i) => (
                  <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
