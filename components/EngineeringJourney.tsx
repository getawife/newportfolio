import React from "react";
import { Briefcase } from "lucide-react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";

export function EngineeringJourney() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-24 max-w-3xl">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <span>My Journey</span>
        </h2>
      </div>

      <div className="space-y-6 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        {PORTFOLIO_DATA.experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2 last:border-none"
          >
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-zinc-900 dark:border-zinc-900 dark:bg-zinc-100" />
            <span className="inline-block text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
              {exp.period}
            </span>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {exp.role}{" "}
              <span className="text-zinc-400 font-normal">@ {exp.company}</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {exp.description}
            </p>
            <ul className="space-y-1 pt-1">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-[12px] text-zinc-500 dark:text-zinc-400 flex items-start gap-1.5"
                >
                  <span className="text-zinc-400 font-mono">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
