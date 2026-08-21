"use client";

import { motion } from "motion/react";
import { AnimatedWordByWord } from "@/components/AnimatedWordByWord";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { fadeInUpVariant, staggerContainer } from "@/constants/animations";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 px-6 md:px-12 py-24 md:py-32 border-t border-[var(--border-system)] bg-[var(--bg-system)]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
      >
        <header className="col-span-1 md:col-span-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          <motion.span variants={fadeInUpVariant} className="inline-block">
            [ 01 — ABOUT ]
          </motion.span>
        </header>
        <div className="col-span-1 md:col-span-8">
          <div className="max-w-4xl">
            <AnimatedWordByWord
              text="Hi, here's some stuff about me..."
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUpVariant}>
                <p className="font-mono text-xs leading-relaxed tracking-wide text-[var(--fg-muted)] uppercase">
                  I started coding out of curiosity and gradually became
                  obsessed with understanding what happens behind the surface.
                </p>
              </motion.div>

              <motion.div variants={fadeInUpVariant}>
                <p className="font-mono text-xs leading-relaxed tracking-wide text-[var(--fg-muted)] uppercase">
                  I have been programming since I was 11, started out with
                  Discord bots and then branched out from there!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
