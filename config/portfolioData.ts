export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Systems / AI" | "Web Apps" | "Tools";
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; experience: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Huzaifa Adnan",
    handle: "getawife",
    title: "Software Engineer & Systems Builder",
    location: "Karachi, Pakistan",
    bio: "18-year-old self-taught programmer crafting focused web applications, audio tools, interactive games, and Discord software.",
    email: "huzaifa.bodyfa@gmail.com",
    github: "https://github.com/getawife",
    linkedin: "https://linkedin.com/in/huzaifaadnan",
  },
  projects: [
    {
      id: "audiovisualizer",
      title: "Audio Visualizer",
      category: "Tools",
      description: "Visualises audio beats in real-time using Three.js and the Web Audio API.",
      longDescription: "Real-time 3D audio beat spectrum visualizer built using Three.js and Web Audio API rendering dynamic 3D audio reactive scenes.",
      tags: ["JavaScript", "Three.js", "Web Audio API"],
      githubUrl: "https://github.com/getawife/audiovisualizer",
    },
    {
      id: "who-did-it",
      title: "Who Did It?",
      category: "Web Apps",
      description: "Interactive murder mystery investigative game with dynamic branching logic.",
      longDescription: "Interactive murder mystery web game featuring dynamic decision state tracking, clue investigation mechanics, and story progression.",
      tags: ["TypeScript", "React", "State Machines"],
      githubUrl: "https://github.com/getawife/whodidit",
    },
    {
      id: "lexir",
      title: "Lexir",
      category: "Full Stack",
      description: "Decentralised, privacy-first messaging platform using P2P WebSockets.",
      longDescription: "End-to-end encrypted privacy-focused chat platform using real-time WebSockets and client-side payload encryption.",
      tags: ["TypeScript", "Node.js", "WebSockets"],
      githubUrl: "https://github.com/getawife/lexir",
    },
    {
      id: "hugabot",
      title: "HugABot",
      category: "Systems / AI",
      description: "A personal project AI therapy listener built with contextual conversation memory.",
      longDescription: "AI therapy conversational assistant integrating LLM APIs with custom context retention logic for supportive interactions.",
      tags: ["JavaScript", "Python", "FastAPI", "AI API"],
      githubUrl: "https://github.com/getawife/hugabot",
    },
    {
      id: "popcorn-bot",
      title: "PoPcorn Bot",
      category: "Systems / AI",
      description: "A specialized Discord bot for server automation and community interactions.",
      longDescription: "A custom Discord bot built to streamline guild interactions, server routines, and automated community features.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/PoPcorn-Bot",
    },
    {
      id: "ice-discord",
      title: "Ice Discord Bot",
      category: "Systems / AI",
      description: "Multipurpose Discord bot with custom moderation tools and server automation routines.",
      longDescription: "Multipurpose Discord bot infrastructure engineered for active server moderation, role assignments, and custom command pipelines.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/IceDiscord",
    },
    {
      id: "floppy",
      title: "Floppy Castle Game",
      category: "Web Apps",
      description: "An escape-the-castle browser game engine built using vanilla JavaScript canvas mechanics.",
      longDescription: "Browser game built with custom 2D canvas collision detection, sprite physics, and interactive puzzle stages.",
      tags: ["JavaScript", "HTML5 Canvas"],
      githubUrl: "https://github.com/getawife/floppy",
    },
    {
      id: "cloaky",
      title: "Cloaky",
      category: "Tools",
      description: "Privacy and link cloaking web utility project.",
      longDescription: "Web utility designed to sanitize and cloak outbound links for enhanced privacy control.",
      tags: ["JavaScript", "Web Security"],
      githubUrl: "https://github.com/getawife/Cloaky",
    },
  ] as Project[],


  skills: [
    {
      title: "Languages & Core",
      skills: [
        { name: "TypeScript", experience: "Primary language for frontend & backend applications" },
        { name: "JavaScript (ESNext)", experience: "Event loops, DOM manipulation & async Web APIs" },
        { name: "Python", experience: "Automation scripts, backend services & AI tools" },
        { name: "SQL", experience: "Relational database queries and schema design" },
        { name: "Java", experience: "Object-oriented programming fundamentals" },
      ],
    },
    {
      title: "Frontend & Web Graphics",
      skills: [
        { name: "Next.js", experience: "App Router, SSR, dynamic routing, and layout design" },
        { name: "React", experience: "Hooks, state management, and modern component architecture" },
        { name: "Three.js", experience: "3D scene creation, WebGL rendering, and audio visualization" },
        { name: "Tailwind CSS", experience: "Utility-first design systems and custom theme extensions" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js & Express", experience: "REST API design, WebSockets, and service deployment" },
        { name: "Docker", experience: "Containerization and isolated server environments" },
        { name: "Linux Server Administration", experience: "Fedora/Ubuntu server maintenance, SSH, and Nginx" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      period: "2026 — Present",
      role: "3D Graphics & AI Exploration",
      company: "GitHub / Open Source",
      description: "Building 3D WebGL audio visualizers using Three.js and developing AI therapy conversational tools like HugABot.",
      highlights: [
        "Created audio-reactive 3D graphics visualizer with Three.js (getawife/audiovisualizer).",
        "Developed HugABot AI listener using Python and conversational APIs.",
      ],
    },
    {
      period: "2023 — 2024",
      role: "Web Game Engine & Privacy Utilities",
      company: "Self-Directed Projects",
      description: "Engineering browser game engines and security utilities.",
      highlights: [
        "Built Floppy castle escape game in vanilla JavaScript canvas.",
        "Created Cloaky privacy link utility and Gradientss CSS tool.",
      ],
    },
    {
      period: "2021 — 2022",
      role: "Discord Bot & Server Infrastructure",
      company: "Community Projects",
      description: "Developed multi-guild Discord bots and custom server management infrastructure.",
      highlights: [
        "Architected and deployed IceDiscord bot for moderation and server automation.",
        "Maintained custom Linux server dotfiles and environment scripts.",
      ],
    },
  ] as ExperienceItem[],
};
