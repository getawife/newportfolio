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
    bio: "18-year-old self-taught programmer building software that changes the world.",
    email: "huzaifa.bodyfa@gmail.com",
    github: "https://github.com/getawife",
    linkedin: "https://linkedin.com/in/huzaifaadnan",
  },
  projects: [
    {
      id: "audiovisualizer",
      title: "Audio Visualizer",
      description:
        "Visualises audio beats in real-time using Three.js and the Web Audio API.",
      longDescription:
        "Real-time 3D audio beat spectrum visualizer built using Three.js and Web Audio API rendering dynamic 3D audio reactive scenes.",
      tags: ["JavaScript", "Three.js", "Web Audio API"],
      githubUrl: "https://github.com/getawife/audiovisualizer",
    },
    {
      id: "who-did-it",
      title: "Who Did It?",
      description:
        "Interactive murder mystery investigative game with dynamic branching logic.",
      longDescription:
        "Interactive murder mystery web game featuring dynamic decision state tracking, clue investigation mechanics, and story progression.",
      tags: ["TypeScript", "React"],
      githubUrl: "https://github.com/getawife/whodidit",
    },
    {
      id: "lexir",
      title: "Lexir",
      description:
        "Decentralised, privacy-first messaging platform using P2P WebSockets.",
      longDescription:
        "End-to-end encrypted privacy-focused chat platform using real-time WebSockets and client-side payload encryption.",
      tags: ["TypeScript", "Node.js", "WebSockets"],
      githubUrl: "https://github.com/getawife/lexir",
    },
    {
      id: "hugabot",
      title: "HugABot",
      description:
        "A personal project AI therapy listener built with contextual conversation memory.",
      longDescription:
        "AI therapy conversational assistant integrating LLM APIs with custom context retention logic for supportive interactions.",
      tags: ["JavaScript", "Python", "FastAPI", "AI API"],
      githubUrl: "https://github.com/getawife/hugabot",
    },
    {
      id: "popcorn-bot",
      title: "PoPcorn Bot",
      description:
        "A multiple purpose Discord bot for server automation and community interactions.",
      longDescription:
        "A custom Discord bot built to streamline guild interactions, server routines, and automated community features.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/PoPcorn-Bot",
    },
    {
      id: "ice-discord",
      title: "Ice Discord Bot",
      description:
        "Multipurpose Discord bot with custom moderation tools and server automation routines.",
      longDescription:
        "Multipurpose Discord bot infrastructure engineered for active server moderation, role assignments, and custom command pipelines.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/IceDiscord",
    },
    {
      id: "floppy",
      title: "Floppy Castle Game",
      description:
        "An escape-the-castle browser game engine built using vanilla JavaScript canvas mechanics.",
      longDescription:
        "Browser game built with custom 2D canvas collision detection, sprite physics, and interactive puzzle stages.",
      tags: ["JavaScript", "HTML5 Canvas"],
      githubUrl: "https://github.com/getawife/floppy",
    },
    {
      id: "cloaky",
      title: "Cloaky",
      description: "Privacy and link cloaking web utility project.",
      longDescription:
        "Web utility designed to sanitize and cloak outbound links for enhanced privacy control.",
      tags: ["JavaScript", "Web Security"],
      githubUrl: "https://github.com/getawife/Cloaky",
    },
  ] as Project[],
};
