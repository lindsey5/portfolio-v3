import AboutSection from "@/components/ui/About";
import ContactSection from "@/components/ui/Contact";
import HeroSection from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import ProjectsSection from "@/components/ui/Projects";
import SkillsSection from "@/components/ui/Skills";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    </>
  );
}
