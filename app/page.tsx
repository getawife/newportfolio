"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SKILLS } from "@/config/skillTree";

function ProjectCard({
  project,
  idx,
}: {
  project: (typeof PORTFOLIO_DATA.projects)[number];
  idx: number;
}) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} project on GitHub (opens in a new tab)`}
      className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 px-6 md:px-12 border-b border-[var(--border-system)] hover:bg-[var(--fg-system)] hover:text-[var(--bg-system)] focus-visible:bg-[var(--fg-system)] focus-visible:text-[var(--bg-system)] focus-visible:outline-none transition-colors duration-300"
    >
      <div className="flex flex-col z-10">
        <span className="font-mono text-[10px] mb-4 opacity-60">
          0{idx + 1}
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-[0.15em] border border-current px-2 py-1 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-0 max-w-sm z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-300">
        <p className="text-xs sm:text-sm leading-relaxed text-inherit opacity-90">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase">
          <span>View Project</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

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
      "%c System initialized. Looking at the source code? Let's talk: huzaifa.bodyfa@gmail.com",
      "background: #18181b; color: #fafaf9; font-size: 11px; padding: 6px 12px; font-family: monospace;",
    );
  }, []);

  return (
    <main className="relative min-h-screen bg-[var(--bg-system)] text-[var(--fg-system)] overflow-x-hidden">
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col justify-between p-6 md:p-12 z-10 pt-16 pb-8"
      >
        <div className="w-full my-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <h1 className="text-[clamp(3.5rem,13vw,14rem)] leading-[0.8] tracking-tighter font-bold uppercase select-none flex-1">
            <span className="block overflow-hidden">
              <motion.span
                initial={prefersReducedMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                HI, I AM
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={prefersReducedMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {PORTFOLIO_DATA.profile.name}
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 w-full sm:w-72 md:w-80 lg:w-[320px] aspect-[4/5] overflow-hidden group"
          >
            <Image
              src="/me.jpg"
              alt={PORTFOLIO_DATA.profile.name}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 320px"
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-[var(--border-system)] pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)] gap-4">
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xs text-left normal-case font-sans text-xs md:text-sm text-[var(--fg-muted)] leading-relaxed"
          >
            {PORTFOLIO_DATA.profile.bio}
          </motion.p>
          <motion.span
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:mt-0"
          >
            SCROLL TO EXPLORE
          </motion.span>
        </div>
      </section>

      <section
        id="about"
        className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-[var(--border-system)] bg-[var(--bg-system)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <header className="col-span-1 md:col-span-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            [ 01 — ABOUT ]
          </header>
          <div className="col-span-1 md:col-span-8">
            <div className="max-w-4xl">
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter">
                I’m an 18-year-old self-taught developer from Karachi.
              </p>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="font-mono text-xs leading-relaxed tracking-wide text-[var(--fg-muted)] uppercase">
                  I started coding out of curiosity and gradually became
                  obsessed with understanding what happens behind the interface.
                </p>

                <p className="font-mono text-xs leading-relaxed tracking-wide text-[var(--fg-muted)] uppercase">
                  Most of my work lives around the backend, but I care about the
                  entire experience. I like taking an idea from a rough concept
                  to something people can actually use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative z-20 py-24 md:py-32 border-t border-[var(--border-system)]"
      >
        <header className="px-6 md:px-12 mb-12 md:mb-20 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          [ 02 — WORK ]
        </header>
        <div className="flex flex-col">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-[var(--border-system)] bg-[var(--bg-system)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <header className="col-span-1 md:col-span-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            [ 03 — SKILLS ]
          </header>
          <div className="col-span-1 md:col-span-8">
            <div className="flex flex-col gap-y-12">
              {SKILLS.map((category) => (
                <div key={category.title} className="flex flex-col">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)] mb-6 border-b border-[var(--border-system)] pb-4 font-mono">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-[var(--border-system)] bg-[var(--fg-system)] text-[var(--bg-system)]"
      >
        <div className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] mb-8 text-[var(--bg-system)]/70">
            [ 04 — CONTACT ]
          </span>

          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="text-[clamp(2.25rem,9.5vw,8.5rem)] font-bold uppercase tracking-tighter leading-[1.05] pb-2 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-system)] transition-opacity block w-full break-words"
            aria-label={`Send email to ${PORTFOLIO_DATA.profile.email}`}
          >
            Contact Me
          </a>

          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="flex items-center gap-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-system)] p-1"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="flex items-center gap-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-system)] p-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-20 border-t border-[var(--border-system)] px-6 md:px-12 py-8 bg-[var(--bg-system)]">
        <div className="flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)] gap-4">
          <span>{PORTFOLIO_DATA.profile.fullName}</span>
          <span>Is something supposed to be here?</span>
        </div>
      </footer>
    </main>
  );
}