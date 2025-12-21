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
];

export function ContactSection() {
  return (
    <section id="contact" data-section className="pb-16 pt-12">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s collaborate"
          description="Open to freelance and product engineering roles focused on performant interfaces and dependable systems."
        />
        <FadeIn>
          <Card className="p-6 md:p-8">
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-muted/20 p-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-foreground hover:text-primary"
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
              <div className="md:col-span-2 lg:col-span-3 flex flex-wrap gap-3 pt-2">
                <Badge variant="outline">Available for: Next.js, React, SPFx</Badge>
                <Badge variant="muted">Prefers remote-friendly teams</Badge>
                <Button asChild variant="secondary" className="ml-auto">
                  <a href={`mailto:${cvData.profile.email}`}>Start a conversation</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
