"use client";

import { ArrowDown, ArrowUpRight, Code2, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/config/portfolioData";
import { SKILLS } from "@/config/skillTree";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const { profile, projects } = PORTFOLIO_DATA;
  const featuredProjects = projects.filter((project) =>
    ["sharksnot", "lanshare", "floppy", "lexir"].includes(project.id),
  );
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
      </video>{" "}
      <div className="portfolio-vignette" aria-hidden="true" />
      <div className="portfolio-noise" aria-hidden="true" />
      <div className="portfolio-screens">
        <section className="portfolio-screen hero-screen">
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
              {profile.bio.split("\n").map((line, index) => (
                <span key={line}>
                  {line}
                  {index < profile.bio.split("\n").length - 1 && <br />}
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

        {featuredProjects.map((project, index) => (
          <section className="portfolio-screen project-screen" key={project.id}>
            <motion.article
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
          </section>
        ))}

        <section className="portfolio-screen skills-screen">
          <motion.div
            className="glass-panel skills-panel "
            initial={{ opacity: 0, scale: 0.96, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            {" "}
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

        <section className="portfolio-screen contact-screen">
          <motion.div
            className="glass-panel contact-panel"
            initial={{ opacity: 0, scale: 0.95, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            <h2>Let&apos;s build something.</h2>

            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail size={20} />
              {profile.email}
              <ArrowUpRight size={18} />
            </a>

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
