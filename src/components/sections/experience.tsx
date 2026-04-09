import { ArrowUpRight } from "lucide-react";

import { cvData } from "@/content/cv";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
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
    <section id="experience" data-section className="py-20">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Roles & impact"
          description="Every role is backed by shipped features, cross-functional collaboration, and thoughtful UI/UX decisions."
        />
        <StaggerContainer className="space-y-4">
          {cvData.experience.map((item) => {
            const link = companyLinks[item.company];
            const isActive = item.end === "Present";
            return (
              <StaggerItem key={`${item.company}-${item.role}`}>
                <Card className="p-6 md:p-7">
                  <CardHeader className="mb-4 gap-0">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0 space-y-1">
                        <h3 className="font-display text-lg font-bold sm:text-xl">{item.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="font-semibold text-primary">{item.company}</span>
                          {link && (
                            <a
                              href={link}
                              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Visit <ArrowUpRight className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {item.location} · {item.start} — {item.end}
                        </p>
                      </div>
                      {isActive && (
                        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.1em] text-primary">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                          Active
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="gap-4">
                    <ul className="space-y-2.5">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge key={`${item.company}-${tag}`} variant="chip">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
