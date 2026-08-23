export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  previewUrl?: string;
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
        "Visualises audio beats in real-time on the fly. Designed for high frame rate canvas rendering.",
      tags: ["JavaScript", "Three.js", "Web Audio API"],
      githubUrl: "https://audiovisualizerr.vercel.app/",
      featured: true,
      previewUrl: "/previews/audiovisualizer.webp",
    },
    {
      id: "who-did-it",
      title: "Who Did It?",
      description:
        "Interactive murder mystery investigative game with dynamic branching logic and state-driven storytelling.",
      tags: ["TypeScript", "React"],
      githubUrl: "https://who-did-it-test.vercel.app",
      featured: true,
      previewUrl: "/previews/who-did-it.webp",
    },
    {
      id: "lexir",
      title: "Lexir",
      description:
        "Decentralised, privacy-first messaging platform using P2P WebSockets and end-to-end encrypted payloads.",
      tags: ["TypeScript", "Node.js", "WebSockets"],
      githubUrl: "https://github.com/getawife/lexir-privacy",
      featured: true,
      previewUrl: "/previews/lexir.webp",
    },
    {
      id: "hugabot",
      title: "HugABot",
      description:
        "A personal project AI therapy listener built with contextual conversation memory and async inference backends.",
      tags: ["JavaScript", "Python", "FastAPI", "AI API"],
      githubUrl: "https://github.com/getawife/hugabot",
      featured: true,
      previewUrl: "/previews/hugabot.webp",
    },
    {
      id: "lanshare",
      title: "Lanshare",
      description: "An alternative to AirDrop built to work on all major OS.",
      tags: ["Electron", "Go", "Typescript"],
      githubUrl: "https://github.com/getawife/lanshare",
      previewUrl: "/previews/lanshare.webp",
    },
    {
      id: "ice-discord",
      title: "Ice Discord Bot",
      description:
        "Multipurpose Discord bot with custom moderation tools, automated log routines, and much more!",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      githubUrl: "https://github.com/getawife/IceDiscord",
      previewUrl: "/previews/icediscord.webp",
    },
    {
      id: "floppy",
      title: "Floppy",
      description:
        "An 2D platformer browser game engine built using vanilla JavaScript canvas mechanics and custom collision physics.",
      tags: ["JavaScript", "HTML5 Canvas"],
      githubUrl: "https://floppy-three.vercel.app/",
      previewUrl: "/previews/floppy.webp",
    },
    {
      id: "sharksnot",
      title: "Sharksnot",
      description: "A server defense bot built for Discord.",
      tags: ["JavaScript", "Discord.js", "Node.js"],
      githubUrl: "https://sharksnot.xyz/",
      previewUrl: "/previews/sharksnot.webp",
    },
  ] as Project[],
};
