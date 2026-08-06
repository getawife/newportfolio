import React from "react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 md:flex-row md:px-8">
        <div>
          © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights
          reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
