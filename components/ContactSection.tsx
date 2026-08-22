"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import {
  fadeInUpVariant,
  staggerContainer,
  textRevealVariant,
} from "@/constants/animations";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-[var(--border-system)] bg-[var(--fg-system)] text-[var(--bg-system)]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
      >
        <motion.span
          variants={fadeInUpVariant}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] mb-8 text-[var(--bg-system)]/70"
        >
          [ 04 — CONTACT ]
        </motion.span>

        <div className="overflow-hidden w-full">
          <motion.a
            variants={textRevealVariant}
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="text-[clamp(2.25rem,9.5vw,8.5rem)] font-bold uppercase tracking-tighter leading-[1.05] pb-2 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-system)] transition-opacity block w-full break-words origin-bottom-left"
            aria-label={`Send email to ${PORTFOLIO_DATA.profile.email}`}
          >
            Contact Me
          </motion.a>
        </div>

        <motion.div
          variants={fadeInUpVariant}
          className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em]"
        >
          <motion.a
            whileHover={{ y: -2 }}
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="flex items-center gap-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-system)] p-1"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={12} aria-hidden="true" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="flex items-center gap-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-system)] p-1"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight size={12} aria-hidden="true" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
