"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<
    (typeof PORTFOLIO_DATA.projects)[number] | null
  >(null);

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
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-white ">
      <div className="flex flex-col items-center justify-center w-full min-h-screen font-serif text-black text-center">
        Hello, I am currently in the process of re-making the website since it's
        been a while! Check back soon? (or not, I don't mind either way) <br />
      </div>
    </main>
  );
}
