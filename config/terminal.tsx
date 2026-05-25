export type CommandResult = {
  output: string;
};

export const COMMANDS: Record<string, CommandResult> = {
  help: {
    output: `Available commands:
    about    - Summary of who I am
    skills   - Technical stack breakdown
    projects - List of selected works
    contact  - Find me online
    clear    - Clear the terminal screen`,
  },
  about: {
    output:
      "A self-taught 17-year-old programmer based in Karachi, Pakistan. Focused on building interactive web applications, high-performance interfaces, and automation tools.",
  },
  skills: {
    output: `
  [Languages]    TypeScript, JavaScript, Python, Java, SQL
  [Frontend]     React, Next.js, Tailwind CSS, Electron, Vue
  [Backend]      Node.js, Express, Docker, Linux Server Admin, Cloud Architecture`,
  },
  projects: {
    output: `
  • Who did it?      - An interactive murder mystery game built on the web.
  • Audio Visualizer - An audio visualizer built for commercial use.
  • HugABot          - A conversational companion.
  • Ice              - A multipurpose all-in-one Discord bot.
  • Lexir            - A decentralised chat platform for maximum privacy.
  For a complete list, please visit my Github.`,
  },
  contact: {
    output: `
  Email: huzaifa.bodyfa@gmail.com
  GitHub:   github.com/getawife
  LinkedIn: linkedin.com/in/huzaifaadnan`,
  },
};
