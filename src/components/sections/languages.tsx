import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function LanguagesSection() {
  return (
    <section id="languages" data-section className="py-12">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow="Languages"
          title="Communication"
          description="Comfortable collaborating across English, German, and Arabic speaking teams."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cvData.languages.map((lang, index) => (
            <FadeIn key={lang.name} delay={index * 0.05}>
              <Card className="p-5">
                <CardHeader className="gap-1">
                  <h3 className="font-display text-lg">{lang.name}</h3>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </CardHeader>
                <CardContent />
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
