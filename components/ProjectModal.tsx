"use client";

import React, { useState } from "react";
import { Project } from "@/config/portfolioData";
import { X, ExternalLink, Tag } from "lucide-react";
import { GithubIcon } from "./CustomIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isOpening, setIsOpening] = useState(false);

  if (!project) return null;

  const handleAction = (url?: string) => {
    if (!url) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsOpening(false);
      window.open(url, "_blank");
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          {project.title}
        </h2>


        <div className="prose prose-zinc dark:prose-invert max-w-none text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 space-y-3">
          <p>{project.longDescription}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-mono text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          {project.githubUrl && (
            <button
              onClick={() => handleAction(project.githubUrl)}
              disabled={isOpening}
              className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Source Repository</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
