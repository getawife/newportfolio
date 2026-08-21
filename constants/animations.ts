import { Variants } from "motion/react";

export const transitionBase = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const textRevealVariant: Variants = {
  hidden: { y: "110%", rotate: 2 },
  visible: { y: "0%", rotate: 0, transition: transitionBase },
};

export const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
