"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { fadeInUpVariant } from "@/constants/animations";

export function ProjectCard({
  project,
  idx,
  onHoverStart,
  onHoverEnd,
}: {
  project: (typeof PORTFOLIO_DATA.projects)[number];
  idx: number;
  onHoverStart: (project: (typeof PORTFOLIO_DATA.projects)[number]) => void;
  onHoverEnd: () => void;
}) {
  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} project on GitHub (opens in a new tab)`}
      onMouseEnter={() => onHoverStart(project)}
      onMouseLeave={onHoverEnd}
      onFocus={() => onHoverStart(project)}
      onBlur={onHoverEnd}
      variants={fadeInUpVariant}
      className="group relative grid grid-cols-1 md:grid-cols-12 items-start md:items-center py-10 md:py-12 px-6 md:px-12 border-b border-[var(--border-system)] hover:bg-[var(--fg-system)] hover:text-[var(--bg-system)] focus-visible:bg-[var(--fg-system)] focus-visible:text-[var(--bg-system)] focus-visible:outline-none transition-colors duration-500 ease-out"
    >
      <div className="flex flex-col z-10 md:col-span-7">
        <span className="font-mono text-[10px] mb-4 opacity-60">
          0{idx + 1}
        </span>
        <div className="overflow-hidden">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
            {project.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-[0.15em] border border-current px-2 py-1 uppercase group-hover:border-[var(--bg-system)] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-0 z-10 md:col-span-5 md:col-start-8">
        <p className="text-xs sm:text-sm leading-relaxed text-inherit opacity-90">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase">
          <span>View Project</span>
          <div>
            <ArrowUpRight size={14} aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
