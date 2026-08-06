"use client";

import { Mail } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3 md:px-8">
        <button
          onClick={onOpenContact}
          className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Contact</span>
        </button>
      </div>
    </header>
  );
}
