export interface Project {
  id: string;
  title: string;
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
    location: "Karachi, Pakistan",
    bio: "18-year-old self-taught programmer specializing in Backend development.",
    email: "huzaifa.bodyfa@gmail.com",
    github: "https://github.com/getawife",
    linkedin: "https://linkedin.com/in/huzaifaadnan",
  },
  projects: [
    {
      id: "audiovisualizer",
      title: "Audio Visualizer",
      description:
        "Visualises audio beats in real-time using Three.js and the Web Audio API. (Similar to NCS)",
      tags: ["JavaScript", "Three.js", "Web Audio API"],
      githubUrl: "https://github.com/getawife/audiovisualizer",
    },
    {
      id: "who-did-it",
      title: "Who Did It?",
      description:
        "Interactive murder mystery investigative game with dynamic branching logic.",
      tags: ["TypeScript", "React"],
      githubUrl: "https://github.com/getawife/whodidit",
    },
    {
      id: "lexir",
      title: "Lexir",
      description:
        "Decentralised, privacy-first messaging platform using P2P WebSockets.",
      tags: ["TypeScript", "Node.js", "WebSockets"],
      githubUrl: "https://github.com/getawife/lexir-privacy",
    },
    {
      id: "hugabot",
      title: "HugABot",
      description:
        "A personal project AI therapy listener built with contextual conversation memory.",
      tags: ["JavaScript", "Python", "FastAPI", "AI API"],
      githubUrl: "https://github.com/getawife/hugabot",
    },
    {
      id: "popcorn-bot",
      title: "PoPcorn Bot",
      description:
        "A multiple purpose Discord bot for server automation and community interactions.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/PoPcorn-Bot",
    },
    {
      id: "ice-discord",
      title: "Ice Discord Bot",
      description:
        "Multipurpose Discord bot with custom moderation tools and server automation routines.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/IceDiscord",
    },
    {
      id: "floppy",
      title: "Floppy Castle Game",
      description:
        "An escape-the-castle browser game engine built using vanilla JavaScript canvas mechanics.",
      tags: ["JavaScript", "HTML5 Canvas"],
      githubUrl: "https://github.com/getawife/floppy",
    },
    {
      id: "cloaky",
      title: "Cloaky",
      description: "Image-gen bot for Discord.",
      tags: ["JavaScript", "Discord.js", "Node.js"],
      githubUrl: "https://github.com/getawife/Cloaky",
    },
  ] as Project[],
};
