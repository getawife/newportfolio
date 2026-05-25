"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTerminal } from "../config/useTerminal";

export default function Home() {
  const {
    history,
    input,
    setInput,
    executeCommand,
    terminalEndRef,
    handleKeyDown,
  } = useTerminal();

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (trimmedInput) {
      executeCommand(trimmedInput);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-[#0d1117] dark:text-white font-mono p-4 md:p-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-zinc-300 bg-white shadow-2xl dark:border-[#30363d] dark:bg-[#161b22]">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-zinc-300 bg-zinc-100 px-4 py-3 dark:border-[#30363d] dark:bg-[#21262d]">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <span className="text-xs text-zinc-500 dark:text-[#8b949e]">
            guest@portfolio:~
          </span>

          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="rounded-md p-2 text-zinc-600 transition hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-[#30363d]"
          >
            {isDarkMode ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} />
            )}
          </button>
        </div>

        <div className="h-[65vh] overflow-y-auto p-4 md:p-6 space-y-4 text-sm md:text-base">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== "welcome" && (
                <div className="flex gap-2 text-blue-500 dark:text-[#58a6ff]">
                  <span>$</span>
                  <span>{item.command}</span>
                </div>
              )}

              <div className="whitespace-pre-wrap leading-relaxed text-zinc-800 dark:text-[#c9d1d9]">
                {item.output}
              </div>
            </div>
          ))}

          <div ref={terminalEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-zinc-300 bg-zinc-50 p-4 dark:border-[#30363d] dark:bg-[#0d1117]"
        >
          <label
            htmlFor="terminal-input"
            className="shrink-0 font-bold text-blue-500 dark:text-[#58a6ff]"
          >
            guest@portfolio:~$
          </label>

          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            placeholder="Type a command..."
            className="flex-1 min-w-0 bg-transparent outline-none border-none text-base md:text-sm text-zinc-900 dark:text-white caret-blue-500 dark:caret-white"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200 active:scale-95 dark:border-[#30363d] dark:bg-[#161b22] dark:text-[#c9d1d9] dark:hover:bg-[#21262d]"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
