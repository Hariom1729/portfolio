import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { CodingStatsSection } from "@/sections/coding-stats";
import { ProjectsSection } from "@/sections/projects";
import { ContactSection } from "@/sections/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
      <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CodingStatsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
