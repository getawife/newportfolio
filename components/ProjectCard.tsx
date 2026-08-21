"use client";

import { motion, useReducedMotion } from "motion/react";
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
  const prefersReducedMotion = useReducedMotion();

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
      className="group relative flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 px-6 md:px-12 border-b border-[var(--border-system)] hover:bg-[var(--fg-system)] hover:text-[var(--bg-system)] focus-visible:bg-[var(--fg-system)] focus-visible:text-[var(--bg-system)] focus-visible:outline-none transition-colors duration-500 ease-out"
    >
      <div className="flex flex-col z-10">
        <span className="font-mono text-[10px] mb-4 opacity-60">
          0{idx + 1}
        </span>
        <div className="overflow-hidden">
          <motion.h2
            whileHover={prefersReducedMotion ? {} : { x: 12 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 transition-transform"
          >
            {project.title}
          </motion.h2>
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
      <div className="mt-6 md:mt-0 max-w-sm z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-300">
        <p className="text-xs sm:text-sm leading-relaxed text-inherit opacity-90">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase">
          <span>View Project</span>
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowUpRight size={14} aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
