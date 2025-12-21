import { ArrowUpRight } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const companyLinks: Record<string, string> = {
  "EVIM (Germany)": cvData.companies_links.evim_app,
  "IPS (International Precision Systems)": cvData.companies_links.ips,
  "Al Ahly Momkn for E-payments": cvData.companies_links.alahlymomkn,
};

export function ExperienceSection() {
  return (
    <section id="experience" data-section className="py-12">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow="Experience"
          title="Roles & impact"
          description="Every role is backed by shipped features, cross-functional collaboration, and thoughtful UI/UX decisions."
        />
        <div className="section-grid ">
          {cvData.experience.map((item, index) => {
            const link = companyLinks[item.company];
            return (
              <FadeIn key={`${item.company}-${item.role}`} delay={index * 0.04}>
                <Card className="p-6 md:p-7">
                  <CardHeader className="gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-3 ">
                      <h3 className="font-display text-xl">{item.role}</h3>
                      <Badge variant="outline">{item.location}</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-semibold text-base text-foreground">
                        {item.company}
                      </span>
                      <span>&bull;</span>
                      <span>
                        {item.start} — {item.end}
                      </span>
                      {link ? (
                        <a
                          href={link}
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="relative pl-4">
                          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag) => (
                        <Badge key={`${item.company}-${tag}`} variant="muted">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
