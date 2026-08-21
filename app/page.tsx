"use client";

import { useEffect, useState, useCallback } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectCursorPreview } from "@/components/ProjectCursorPreview";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<
    (typeof PORTFOLIO_DATA.projects)[number] | null
  >(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 190, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    console.clear();
    console.log(
      `%c
   __  __                  _  __          
  / / / /_  ___________ _ (_)/ /___ _     
 / /_/ / / / /_  / __ \`/ / / / __ \`/     
/ __  / /_/ / / /_/_/ / / / / /_/ /      
/_/ /_/\__,_/ /___/\__,_/_/_/_/\__,_/      
                                          
`,
      "color: #2563eb; font-weight: bold;",
    );
    console.log(
      "%c Looking at the source code? Let's talk: huzaifa.bodyfa@gmail.com",
      "background: #18181b; color: #fafaf9; font-size: 11px; padding: 6px 12px; font-family: monospace;",
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-[var(--bg-system)] text-[var(--fg-system)] overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WorkSection
        onHoverStart={(p) => setHoveredProject(p)}
        onHoverEnd={() => setHoveredProject(null)}
      />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ProjectCursorPreview
        hoveredProject={hoveredProject}
        smoothX={smoothX}
        smoothY={smoothY}
      />
    </main>
  );
}
