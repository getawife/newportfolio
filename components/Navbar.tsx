"use client";

import React from "react";
import { Mail } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          <a href="#projects" className="transition-colors hover:text-zinc-900">
            Projects
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-zinc-900"
          >
            Experience
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
}
