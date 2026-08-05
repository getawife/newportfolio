"use client";

import React from "react";
import { Sun, Moon, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenContact: () => void;
}

export function Navbar({
  isDarkMode,
  setIsDarkMode,
  onOpenContact,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white transition-transform group-hover:scale-105 dark:bg-zinc-100 dark:text-zinc-900">
            H
          </span>
          <div className="flex flex-col">
            <span className="leading-none">{PORTFOLIO_DATA.profile.name}</span>
            <span className="text-[11px] font-normal text-zinc-500 dark:text-zinc-400">
              @{PORTFOLIO_DATA.profile.handle}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
          <a
            href="#projects"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Experience
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle visual theme"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-zinc-700" />
            )}
          </button>

          <button
            onClick={onOpenContact}
            className="hidden items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:flex"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
}
