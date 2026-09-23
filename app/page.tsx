"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SKILLS } from "@/config/skillTree";

const ease = [0.16, 1, 0.3, 1] as const;

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const { profile, projects } = PORTFOLIO_DATA;
  const featuredProjects = projects.filter((project) =>
    ["sharksnot", "lanshare", "floppy", "lexir"].includes(project.id),
  );

  const contactRef = useRef<HTMLElement | null>(null);
  const screensRef = useRef<HTMLDivElement | null>(null);
  const [dockHidden, setDockHidden] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const node = contactRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDockHidden(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = screensRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!navOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navOpen]);

  const handleNavClick = (id: string) => {
    const container = screensRef.current;
    if (!container) return;
    const target = container.querySelector(`#${id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setNavOpen(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const bioLines = profile.bio.split("\n");

  return (
    <main className="portfolio">
      <video
        className="portfolio-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="portfolio-vignette" aria-hidden="true" />
      <div className="portfolio-noise" aria-hidden="true" />

      <motion.div
        className="social-dock"
        initial={{ opacity: 0, y: -14 }}
        animate={{
          opacity: dockHidden ? 0 : 1,
          y: dockHidden ? -14 : 0,
        }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        style={{ pointerEvents: dockHidden ? "none" : "auto" }}
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      <motion.div
        className="side-nav"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
      >
        <button
          type="button"
          className="side-nav-toggle"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {navOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2, ease }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.2, ease }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {navOpen && (
            <motion.nav
              className="side-nav-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease }}
            >
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={
                        activeSection === item.id ? "is-active" : undefined
                      }
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="portfolio-screens" ref={screensRef}>
        <section id="hero" className="portfolio-screen hero-screen">
          <motion.div
            className="glass-panel hero-panel"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <div className="hero-profile-image">
              <Image
                src="/me.jpg"
                alt="Huzaifa Adnan"
                width={150}
                height={150}
                priority
              />
            </div>

            <h1>{profile.fullName}</h1>
            <p className="hero-title">{profile.title}</p>

            <p className="hero-bio">
              {bioLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < bioLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="hero-meta">
              <span>
                <MapPin size={15} />
                {profile.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </motion.div>
        </section>

        <section id="work" className="portfolio-screen project-screen">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="glass-panel project-panel"
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="project-preview">
                <img
                  src={project.previewUrl}
                  alt={`${project.title} project preview`}
                />
              </div>

              <div className="project-information">
                <div className="project-heading">
                  <h2>{project.title}</h2>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View project
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </section>

        <section id="skills" className="portfolio-screen skills-screen">
          <motion.div
            className="glass-panel skills-panel"
            initial={{ opacity: 0, scale: 0.96, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="section-heading">
              <h2>What I work with</h2>
            </div>
            <div className="skills-grid">
              {SKILLS.map((category) => (
                <div className="skill-group" key={category.title}>
                  <h3>{category.title}</h3>

                  <div className="skill-list">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section
          id="contact"
          className="portfolio-screen contact-screen"
          ref={contactRef}
        >
          <motion.div
            className="glass-panel contact-panel"
            initial={{ opacity: 0, scale: 0.95, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <h2>Let&apos;s build something.</h2>

            <div className="contact-email-wrap">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <Mail size={20} />
                {profile.email}
                <ArrowUpRight size={18} />
              </a>

              <button
                type="button"
                className="contact-copy"
                onClick={handleCopyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2, ease }}
                    >
                      <Check size={16} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2, ease }}
                    >
                      <Copy size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
                <ArrowUpRight size={17} />
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
