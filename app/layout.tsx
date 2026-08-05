import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huzaifa Adnan (@getawife) — Software Engineer & Systems Builder",
  description:
    "Personal engineering portfolio of Huzaifa Adnan, an 18-year-old self-taught programmer based in Karachi, Pakistan specializing in TypeScript, Next.js, systems, and web tools.",
  keywords: [
    "Huzaifa Adnan",
    "getawife",
    "Software Engineer",
    "Portfolio",
    "TypeScript",
    "Next.js",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Huzaifa Adnan", url: "https://github.com/getawife" }],
  openGraph: {
    title: "Huzaifa Adnan — Software Engineer Portfolio",
    description:
      "Self-taught developer crafting focused web applications, interactive software, and developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}

