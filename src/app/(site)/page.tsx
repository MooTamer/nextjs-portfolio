import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
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
  { id: "contact", label: "Contact" },
];

export default function Page() {
  return (
    <>
      <Navbar items={navItems} title={cvData.profile.name} email={cvData.profile.email} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="border-t border-black/[0.06] bg-background/80 py-6 dark:border-white/[0.05]">
        <div className="container flex flex-col gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>
            {cvData.profile.name} — {cvData.profile.location}
          </span>
          <span>Built with Next.js, Tailwind CSS v4, and curated CV data.</span>
        </div>
      </footer>
    </>
  );
}
