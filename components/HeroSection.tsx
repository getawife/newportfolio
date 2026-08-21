"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { AnimatedWordByWord } from "@/components/AnimatedWordByWord";
import { textRevealVariant, transitionBase } from "@/constants/animations";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between p-6 md:p-12 z-10 pt-16 pb-8"
    >
      <div className="w-full my-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
        <h1 className="text-[clamp(3.5rem,13vw,14rem)] leading-[0.8] tracking-tighter font-bold uppercase select-none flex-1">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={prefersReducedMotion ? { y: 0 } : "hidden"}
              animate="visible"
              variants={textRevealVariant}
              className="block origin-bottom-left"
            >
              HI, I AM
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={prefersReducedMotion ? { y: 0 } : "hidden"}
              animate="visible"
              variants={textRevealVariant}
              transition={{ ...transitionBase, delay: 0.08 }}
              className="block origin-bottom-left"
            >
              {PORTFOLIO_DATA.profile.name}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.9, y: 20 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...transitionBase, delay: 0.2 }}
          className="relative shrink-0 w-full max-h-[40vh] sm:max-h-none sm:w-72 md:w-80 lg:w-[320px] aspect-[4/5] overflow-hidden group"
        >
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
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
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-[var(--border-system)] pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)] gap-4">
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AnimatedWordByWord
            text={PORTFOLIO_DATA.profile.bio}
            className="max-w-xs text-left normal-case font-sans text-xs md:text-sm text-[var(--fg-muted)] leading-relaxed"
          />
        </motion.div>
        <motion.span
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 md:mt-0 flex items-center gap-2"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          SCROLL TO EXPLORE
        </motion.span>
      </div>
    </section>
  );
}
