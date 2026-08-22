"use client";

import { motion, AnimatePresence, MotionValue } from "motion/react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/config/portfolioData";

export function ProjectCursorPreview({
  hoveredProject,
  smoothX,
  smoothY,
}: {
  hoveredProject: (typeof PORTFOLIO_DATA.projects)[number] | null;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {hoveredProject?.previewUrl && (
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
            }}
            initial={{ opacity: 0, scale: 0.6, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 3 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[280px] shadow-2xl overflow-hidden rounded-lg"
          >
            <Image
              src={hoveredProject.previewUrl}
              alt={`${hoveredProject.title} Preview`}
              fill
              sizes="480px"
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
