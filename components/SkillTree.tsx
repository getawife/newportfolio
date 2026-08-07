"use client";

import { SkillCategory } from "@/config/skillTree";

interface SkillTreeProps {
  category: SkillCategory;
}

export function SkillTree({ category }: SkillTreeProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300">
      <h3 className="mb-4 text-sm font-semibold tracking-tight text-zinc-900">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-zinc-200/60 bg-zinc-50 px-2 py-1 text-[11px] text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
