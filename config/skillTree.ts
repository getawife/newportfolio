export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "GO"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js", "HTML5 Canvas"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Discord.js",
      "Python",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQLite"],
  },
];
