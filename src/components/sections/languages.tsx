import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const languagePalette: Record<string, { bg: string; text: string; label: string }> = {
  English: { bg: "bg-[#1e3a8a]", text: "text-white", label: "EN" },
  German: { bg: "bg-[#e63946]", text: "text-white", label: "DE" },
  Arabic: { bg: "bg-[#047857]", text: "text-white", label: "AR" },
};

function LanguageMark({ name }: { name: string }) {
  const palette = languagePalette[name] ?? {
    bg: "bg-muted",
    text: "text-foreground",
    label: name.slice(0, 2).toUpperCase(),
  };
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${palette.bg} ${palette.text}`}
      aria-hidden
    >
      {palette.label}
    </span>
  );
}

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
                <CardHeader className="gap-3">
                  <div className="flex items-center gap-3">
                    <LanguageMark name={lang.name} />
                    <div>
                      <h3 className="font-display text-lg">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  </div>
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
