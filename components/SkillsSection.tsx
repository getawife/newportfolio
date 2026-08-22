"use client";

import { motion } from "motion/react";
import { SKILLS } from "@/config/skillTree";
import {
  fadeInUpVariant,
  staggerContainer,
  textRevealVariant,
} from "@/constants/animations";
//        className="px-6 md:px-12 mb-12 md:mb-20 font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[var(--fg-system)] opacity-80"
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-[var(--border-system)] bg-[var(--bg-system)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <header className="col-span-1 md:col-span-4 font-mono text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-[var(--fg-system)] opacity-80">
          [ 03 — SKILLS ]
        </header>
        <div className="col-span-1 md:col-span-8">
          <div className="flex flex-col gap-y-12">
            {SKILLS.map((category) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={staggerContainer}
                className="flex flex-col"
              >
                <motion.h3
                  variants={fadeInUpVariant}
                  className="text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)] mb-6 border-b border-[var(--border-system)] pb-4 font-mono"
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="overflow-hidden inline-block py-1"
                    >
                      <motion.span
                        variants={textRevealVariant}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase inline-block origin-bottom-left"
                      >
                        {skill}
                      </motion.span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
