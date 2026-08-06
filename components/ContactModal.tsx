"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const recipientEmail = "huzaifa.bodyfa@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Initiate Contact
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              Direct email:{" "}
              <a
                href={`mailto:${recipientEmail}`}
                className="font-mono text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-900"
              >
                {recipientEmail}
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, timeline, or inquiry..."
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-3 text-xs font-medium text-white transition hover:bg-zinc-800 disabled:opacity-50"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Send Message via Email</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
