"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactModal } from "@/components/ContactModal";
import { ProjectModal } from "@/components/ProjectModal";
import { PORTFOLIO_DATA, Project } from "@/config/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/CustomIcons";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Briefcase,
  Layers,
} from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 space-y-24">
        {/* HERO SECTION */}
        <section id="top" className="pt-4 space-y-4 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl leading-[1.15]">
            Hi, I am Huzaifa
          </h1>

          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {PORTFOLIO_DATA.profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {PORTFOLIO_DATA.profile.location}
            </span>
            <span>•</span>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              github.com/{PORTFOLIO_DATA.profile.handle}
            </a>
            <span>•</span>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Featured Projects</span>
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Projects built and published on GitHub.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {PORTFOLIO_DATA.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveProjectModal(p)}
              />
            ))}
          </div>
        </section>

        {/* ENGINEERING JOURNEY SECTION */}
        <section id="experience" className="space-y-6 scroll-mt-24 max-w-3xl">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>Engineering Journey</span>
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Development timeline based on active GitHub repositories and open-source projects.
            </p>
          </div>

          <div className="space-y-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2 last:border-none"
              >
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-zinc-900 dark:border-zinc-900 dark:bg-zinc-100" />
                <span className="inline-block text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.role}{" "}
                  <span className="text-zinc-400 font-normal">
                    @ {exp.company}
                  </span>
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-1 pt-1">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-[12px] text-zinc-500 dark:text-zinc-400 flex items-start gap-1.5"
                    >
                      <span className="text-zinc-400 font-mono">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50 shadow-sm text-center space-y-6">
          <div className="mx-auto max-w-md space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Have a project or opportunity?
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Open for software development roles, contract work, and technical collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <Mail className="h-4 w-4" />
              <span>Send Message</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 md:flex-row md:px-8">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </div>
  );
}
