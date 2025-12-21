import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { LanguagesSection } from "@/components/sections/languages";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Navbar } from "@/components/shared/navbar";
import { cvData } from "@/content/cv";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
  return (
    <>
      <Navbar items={navItems} title={cvData.profile.name} email={cvData.profile.email} />
      <main className="space-y-2 sm:space-y-6">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/5 bg-background/70 py-6 text-center text-xs text-muted-foreground">
        <div className="container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {cvData.profile.name} — {cvData.profile.location}
          </span>
          <span className="text-muted-foreground">
            Built with Next.js, Tailwind CSS, and data directly from the curated CV.
          </span>
        </div>
      </footer>
    </>
  );
}
