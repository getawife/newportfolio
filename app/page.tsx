"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Command } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SKILLS } from "@/config/skillTree";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [introStep, setIntroStep] = useState<"splash" | "ready">("splash");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35 });

  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 1000], [0, 300]);
  const blobScale = useTransform(scrollY, [0, 800], [1, 1.25]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroStep("ready");
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 7);
      cursorY.set(event.clientY - 7);
    };
    const key = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
      if (event.key === "Escape") setCommandOpen(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("keydown", key);
    };
  }, [cursorX, cursorY]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setCommandOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[var(--bg-system)] text-[var(--fg-system)] overflow-x-hidden selection:bg-[var(--accent-signal)] selection:text-white">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3.5 w-3.5 rounded-full bg-[var(--accent-signal)]"
        style={{ x: springX, y: springY }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-85">
        <motion.div
          style={{ y: blobY, scale: blobScale }}
          className="absolute -top-[10%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-[var(--accent-signal)]/10 blur-[110px]"
        />
        <motion.div
          style={{ y: blobY }}
          className="absolute top-[20%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-[var(--fg-system)]/5 blur-[130px]"
        />
        <motion.div
          style={{ y: blobY }}
          className="absolute top-[60%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-[var(--accent-signal)]/5 blur-[120px]"
        />
      </div>

      <section
        id="top"
        className="relative h-[100svh] w-full flex flex-col justify-center items-center text-center px-4 z-10 overflow-hidden"
      >
        <div className="absolute top-6 right-6 md:right-8 z-20">
          <button
            onClick={() => setCommandOpen(true)}
            className="group flex items-center gap-2 font-mono text-[10px] tracking-[.2em] text-[var(--fg-system)]/60 transition hover:text-[var(--fg-system)]"
          >
            <Command size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">COMMAND</span>
            <span className="rounded border border-[var(--fg-system)]/15 px-1.5 py-0.5">
              K
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center max-w-[1400px] mx-auto w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: introStep === "ready" ? 1 : 0,
              y: introStep === "ready" ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
            className="font-mono text-[10px] tracking-[.25em] text-[var(--accent-signal)] mb-4 uppercase"
          >
            ◉ {PORTFOLIO_DATA.profile.location}
          </motion.div>

          <motion.h1
            initial={{ scale: 1.25 }}
            animate={{
              scale: introStep === "splash" ? 1.25 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center text-[11vw] sm:text-[10vw] lg:text-[8.5vw] font-bold tracking-tight leading-[0.95] whitespace-nowrap overflow-visible"
          >
            Hi, I am {PORTFOLIO_DATA.profile.name}.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: introStep === "ready" ? 1 : 0,
              y: introStep === "ready" ? 0 : 15,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base sm:text-xl text-[var(--fg-system)]/70 font-normal leading-relaxed"
          >
            {PORTFOLIO_DATA.profile.bio}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introStep === "ready" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 font-mono text-[9px] tracking-[.3em] text-[var(--fg-system)]/40"
        >
          SCROLL TO EXPLORE STORY
        </motion.div>
      </section>

      <section
        id="story"
        className="relative z-10 mx-auto max-w-[1500px] border-t border-[var(--fg-system)]/10 px-4 sm:px-6 py-20 sm:py-28 md:px-8 md:py-40"
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-3 items-center">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[.25em] text-[var(--accent-signal)] mb-6 lg:mb-0">
              ABOUT ME
            </div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden border border-[var(--fg-system)]/15 bg-[var(--bg-system)]/80">
              <Image
                src="/me.png"
                alt={PORTFOLIO_DATA.profile.name}
                fill
                className="object-cover grayscale contrast-125 transition hover:grayscale-0"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5 space-y-8 text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-[var(--fg-system)]/85">
            <p>
              I&apos;ve been making things with computers since I was 10. What started as curiosity turned into an unhealthy habit of asking, &quot;could I build that?&quot;
            </p>
            <p className="text-[var(--fg-system)]/50 text-base sm:text-lg lg:text-xl">
              These days, I build full-stack software, spend an unreasonable amount of time thinking about how systems work, and occasionally rebuild things just because I know I can do them better.
            </p>
          </div>
        </div>
      </section>

      <section
        id="works"
        className="relative z-10 mx-auto max-w-[1500px] border-t border-[var(--fg-system)]/10 px-4 sm:px-6 py-20 sm:py-28 md:px-8 md:py-40"
      >
        <div className="font-mono text-[10px] tracking-[.25em] text-[var(--accent-signal)] mb-12">
          MY WORK
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((item) => (
            <a
              key={item.id}
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--fg-system)]/15 bg-[var(--bg-system)]/80 backdrop-blur-md p-6 flex flex-col justify-between min-h-[400px] transition hover:border-[var(--accent-signal)]/50"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--fg-system)]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--fg-system)]/10 mt-6">
                {item.tags.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] tracking-[.15em] text-[var(--fg-system)]/50 bg-[var(--bg-system)] px-2 py-1 border border-[var(--fg-system)]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="system"
        className="relative z-10 overflow-hidden border-y border-[var(--fg-system)]/10 py-20 sm:py-28 md:py-40"
      >
        <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-12 gap-6 lg:gap-3">
            <div className="col-span-12 lg:col-span-4">
              <div className="font-mono text-[10px] tracking-[.25em] text-[var(--accent-signal)]">
                STACK & TOOLS
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="max-w-3xl text-2xl sm:text-3xl font-normal leading-tight tracking-tight text-[var(--fg-system)]/85 md:text-4xl">
                Primary technologies used across development environments.
              </p>
              <div className="mt-10 sm:mt-14 border-t border-[var(--fg-system)]/15">
                {SKILLS.map((category, index) => (
                  <div
                    key={category.title}
                    className="group grid grid-cols-12 items-center gap-2 sm:gap-4 border-b border-[var(--fg-system)]/15 py-4 sm:py-5"
                  >
                    <span className="col-span-2 sm:col-span-3 font-mono text-[10px] tracking-[.18em] text-[var(--fg-system)]/35">
                      0{index + 1}
                    </span>
                    <span className="col-span-4 sm:col-span-4 text-base sm:text-lg md:text-xl font-medium">
                      {category.title}
                    </span>
                    <span className="col-span-6 sm:col-span-5 text-xs sm:text-sm leading-5 sm:leading-6 text-[var(--fg-system)]/50 transition group-hover:text-[var(--fg-system)]/85">
                      {category.skills.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-[var(--fg-system)]/10 px-4 sm:px-6 py-20 sm:py-28 md:px-8 md:py-40"
      >
        <div className="relative mx-auto max-w-[1500px]">
          <div className="font-mono text-[10px] tracking-[.25em] text-[var(--accent-signal)]">
            CONTACT
          </div>
          <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-6 lg:gap-3">
            <div className="col-span-12 lg:col-span-10">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="block text-[15vw] sm:text-[16vw] lg:text-[11vw] font-bold tracking-tight leading-[.76] transition hover:text-[var(--accent-signal)]"
              >
                GET IN
                <br />
                <span className="italic">TOUCH.</span>
              </a>
            </div>
            <div className="col-span-12 flex flex-row lg:flex-col items-start lg:items-end justify-between lg:justify-end gap-4 lg:gap-3 lg:col-span-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-2 text-sm text-[var(--fg-system)]/70 transition hover:text-[var(--fg-system)]"
              >
                email
              </a>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--fg-system)]/70 transition hover:text-[var(--fg-system)]"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[var(--fg-system)]/10 px-4 sm:px-6 py-6 md:px-8">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between font-mono text-[9px] tracking-[.22em] text-[var(--fg-system)]/40">
          <span>Built by {PORTFOLIO_DATA.profile.name} with love.</span>
        </div>
      </footer>

      {commandOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-start justify-center bg-black/30 px-4 pt-20 sm:pt-24 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setCommandOpen(false)}
        >
          <motion.div
            className="w-full max-w-xl border border-[var(--fg-system)]/15 bg-[var(--bg-system)] shadow-2xl"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[var(--fg-system)]/15 px-4 py-4">
              <Command size={15} className="text-[var(--accent-signal)]" />
              <input
                autoFocus
                placeholder="type a destination..."
                className="w-full bg-transparent text-sm text-[var(--fg-system)] outline-none placeholder:text-[var(--fg-system)]/30"
              />
              <button
                onClick={() => setCommandOpen(false)}
                className="font-mono text-[9px] tracking-[.2em] text-[var(--fg-system)]/40"
              >
                ESC
              </button>
            </div>
            <div className="p-2">
              {[
                ["STORY", "story"],
                ["WORK", "works"],
                ["SYSTEM", "system"],
                ["CONTACT", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => jump(id)}
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-sm text-[var(--fg-system)]/70 transition hover:bg-[var(--fg-system)]/5 hover:text-[var(--fg-system)]"
                >
                  {label}
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--fg-system)]/30"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}