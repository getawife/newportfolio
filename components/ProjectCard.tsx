"use client";

import React, { useState } from "react";
import { Project } from "@/config/portfolioData";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./CustomIcons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-zinc-700/80 cursor-pointer"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 mb-1.5">
          {project.title}
        </h3>

        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-50 px-2 py-0.5 text-[11px] text-zinc-600 border border-zinc-200/60 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-800/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800/50">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100"
        >
          <span>View More</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              title="View source repository"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
