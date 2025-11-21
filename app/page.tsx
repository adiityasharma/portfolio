import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Divider from "@/components/divider";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center min h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
