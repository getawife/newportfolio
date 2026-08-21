"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

export function AnimatedWordByWord({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p
      ref={ref}
      className={`${className} flex flex-wrap gap-x-[0.3em] gap-y-1 overflow-hidden`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden pb-1">
          <motion.span
            custom={idx}
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: idx * 0.02,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}
