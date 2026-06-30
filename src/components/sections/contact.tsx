import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { cvData } from "@/content/cv";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    label: "Email",
    value: cvData.profile.email,
    href: `mailto:${cvData.profile.email}`,
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: cvData.profile.phone,
    href: `tel:${cvData.profile.phone}`,
    icon: <Phone className="h-5 w-5" />,
  },
  {
    label: "Location",
    value: cvData.profile.location,
    href: undefined,
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-tamer-020a5221a",
    href: cvData.profile.links.linkedin,
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: "github.com/MooTamer",
    href: cvData.profile.links.github,
    icon: <Github className="h-5 w-5" />,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" data-section className="py-20 pb-24">
      <div className="container space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's collaborate"
          description="Open to software engineering roles in Sydney, Australia — relocation and visa sponsorship welcome. Also open to remote/contract."
        />
        <FadeIn>
          <Card className="p-6 md:p-8">
            <CardContent className="gap-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-w-0 items-start gap-3 rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 dark:border-white/[0.06] dark:bg-white/[0.02]"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div className="min-w-0 space-y-0.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block break-all text-sm font-semibold text-foreground transition-colors hover:text-primary sm:truncate sm:break-normal"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js · React · SPFx</Badge>
                  <Badge variant="default">Open to Sydney relocation</Badge>
                  <Badge variant="muted">Remote-friendly</Badge>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <a href={`mailto:${cvData.profile.email}`}>
                    <Mail className="h-4 w-4" />
                    Start a conversation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
