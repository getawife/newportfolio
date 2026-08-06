"use client";

import React from "react";
import { Project } from "@/config/portfolioData";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./CustomIcons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-md">
      <div>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>

        <p className="mb-3 text-xs leading-relaxed text-zinc-600">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-zinc-200/60 bg-zinc-50 px-2 py-0.5 text-[11px] text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-zinc-100 pt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
            title="View source repository"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900"
            title="Visit live project"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
