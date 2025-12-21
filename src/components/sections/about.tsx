import { Sparkles } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" data-section className="py-12">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow="About"
          title="What drives my work"
          description="A quick snapshot of how I approach building modern products and the problems I enjoy solving."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <FadeIn>
            <Card className="p-6 md:p-7">
              <CardContent className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground text-xl font-semibold">{cvData.profile.headline}</p>
                <p>{cvData.profile.profile_paragraph}</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Card className="p-6 md:p-7">
              <CardContent className="space-y-4">
                {cvData.summary_bullets.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Sparkles className="h-4 w-4" />
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
