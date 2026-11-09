import React from "react";
import Snowfall from "./components/Snowfall.jsx";
import SiteNav from "./components/SiteNav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ToolkitSection from "./components/ToolkitSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ResumeSection from "./components/ResumeSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

export default function Launcher() {
  return (
    <div className="min-h-screen bg-page paper-grid">
      <Snowfall />
      <SiteNav />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolkitSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </div>
  );
}
