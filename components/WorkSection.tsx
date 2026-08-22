"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { fadeInUpVariant, staggerContainer } from "@/constants/animations";

export function WorkSection({
  onHoverStart,
  onHoverEnd,
}: {
  onHoverStart: (project: (typeof PORTFOLIO_DATA.projects)[number]) => void;
  onHoverEnd: () => void;
}) {
  return (
    <section
      id="work"
      className="relative z-20 py-24 md:py-32 border-t border-[var(--border-system)]"
    >
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // col-span-1 md:col-span-4 font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[var(--fg-system)] opacity-80
        variants={fadeInUpVariant}
        className="px-6 md:px-12 mb-12 md:mb-20 font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[var(--fg-system)] opacity-80"
      >
        [ 02 — WORK ]
      </motion.header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-5%" }}
        variants={staggerContainer}
        className="flex flex-col"
      >
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            idx={idx}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
          />
        ))}
      </motion.div>
    </section>
  );
}
