export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Huzaifa",
    fullName: "Huzaifa Adnan",
    title: "Full stack developer",
    location: "Karachi, Pakistan",
    locationShort: "KARACHI, PK",
    bio: "18-year-old self-taught programmer specializing in Fullstack development.\nBased in Karachi, Pakistan.",
    email: "huzaifa.bodyfa@gmail.com",
    github: "https://github.com/getawife",
    linkedin: "https://linkedin.com/in/huzaifaadnan",
  },

  projects: [
    {
      id: "audiovisualizer",
      title: "Audio Visualizer",
      description:
        "Visualises audio beats in real-time using Three.js and the Web Audio API. Designed for high frame rate canvas rendering.",
      tags: ["JavaScript", "Three.js", "Web Audio API"],
      githubUrl: "https://github.com/getawife/audiovisualizer",
      featured: true,
    },
    {
      id: "who-did-it",
      title: "Who Did It?",
      description:
        "Interactive murder mystery investigative game with dynamic branching logic and state-driven storytelling.",
      tags: ["TypeScript", "React"],
      githubUrl: "https://github.com/getawife/whodidit",
      featured: true,
    },
    {
      id: "lexir",
      title: "Lexir",
      description:
        "Decentralised, privacy-first messaging platform using P2P WebSockets and end-to-end encrypted payloads.",
      tags: ["TypeScript", "Node.js", "WebSockets"],
      githubUrl: "https://github.com/getawife/lexir-privacy",
      featured: true,
    },
    {
      id: "hugabot",
      title: "HugABot",
      description:
        "A personal project AI therapy listener built with contextual conversation memory and async inference backends.",
      tags: ["JavaScript", "Python", "FastAPI", "AI API"],
      githubUrl: "https://github.com/getawife/hugabot",
      featured: true,
    },
    {
      id: "popcorn-bot",
      title: "PoPcorn Bot",
      description:
        "A multiple purpose Discord bot for server automation, community interaction workflows, and high-concurrency event handling.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/PoPcorn-Bot",
    },
    {
      id: "ice-discord",
      title: "Ice Discord Bot",
      description:
        "Multipurpose Discord bot with custom moderation tools, automated log routines, and sub-second command response pipelines.",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/IceDiscord",
    },
    {
      id: "floppy",
      title: "Floppy Castle Game",
      description:
        "An escape-the-castle browser game engine built using vanilla JavaScript canvas mechanics and custom collision physics.",
      tags: ["JavaScript", "HTML5 Canvas"],
      githubUrl: "https://github.com/getawife/floppy",
    },
    {
      id: "cloaky",
      title: "Cloaky",
      description:
        "Image-generation dispatch bot integrated with Discord command structures and dynamic asset pipelines.",
      tags: ["JavaScript", "Discord.js", "Node.js"],
      githubUrl: "https://github.com/getawife/Cloaky",
    },
  ] as Project[],
};
