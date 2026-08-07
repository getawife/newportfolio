"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/CustomIcons";
import { SkillTree } from "@/components/SkillTree";
import { SKILLS } from "@/config/skillTree";
import { Mail, MapPin, ArrowUpRight, Layers, Code2 } from "lucide-react";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 space-y-24">
        <section id="top" className="pt-4">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 max-w-3xl space-y-6">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl leading-[1.15]">
                Hi, I'm Huzaifa
              </h1>

              <p className="text-base text-zinc-600 leading-relaxed">
                {PORTFOLIO_DATA.profile.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {PORTFOLIO_DATA.profile.location}
                  </span>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-zinc-900 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    github.com/getawife
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-zinc-900 transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div
              className="relative aspect-square shrink-0 self-center md:self-start overflow-hidden rounded-2xl"
              style={{ width: "clamp(160px, 22vw, 260px)" }}
            >
              <Image
                src="/me.jpg"
                alt="Huzaifa"
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px) 160px, 22vw"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-200 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600" />
              <span>Featured Projects</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {PORTFOLIO_DATA.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="border-b border-zinc-200 pb-4">
            <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900">
              <Code2 className="h-5 w-5 text-blue-600" />
              <span>Skills</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((category) => (
              <SkillTree key={category.title} category={category} />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm text-center space-y-6">
          <div className="mx-auto max-w-md space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
              Have a project or opportunity?
            </h2>
            <p className="text-xs text-zinc-600">
              Open for software development roles, contract work, and technical
              collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-zinc-800"
            >
              <Mail className="h-4 w-4" />
              <span>Send Message</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-xs font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
