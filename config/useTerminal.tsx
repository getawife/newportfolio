import { useState, useRef, useEffect } from "react";
import { COMMANDS } from "@/config/terminal";

export interface HistoryItem {
  command: string;
  output: string;
}

export function useTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState("");

  // Command history navigation
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    const savedHistory = localStorage.getItem("terminal-history");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    } else {
      setHistory([
        {
          command: "welcome",
          output: 'Type "help" to see available commands.',
        },
      ]);
    }
  }, []);

  // Smooth auto-scroll
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();

    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      localStorage.removeItem("terminal-history");
      return;
    }

    const result = COMMANDS[cmd]
      ? COMMANDS[cmd].output
      : `command not found: ${cmd}\nType "help" to see available commands.`;

    setTimeout(() => {
      setHistory((prev) => [
        ...prev,
        {
          command: rawCmd,
          output: result,
        },
      ]);
    }, 150);

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (e.key === "Tab") {
      e.preventDefault();

      const commands = Object.keys(COMMANDS);

      const matched = commands.find((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );

      if (matched) {
        setInput(matched);
      }
    }
  };

  return {
    history,
    input,
    setInput,
    executeCommand,
    terminalEndRef,
    handleKeyDown,
  };
}
