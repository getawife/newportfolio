import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifa Adnan - Fullstack Developer",
  description:
    "18-year-old self-taught programmer specializing in Fullstack development. Based in Karachi, Pakistan.",
  authors: [{ name: "Huzaifa Adnan", url: "https://github.com/getawife" }],
  openGraph: {
    title: "Huzaifa Adnan - Fullstack Developer",
    description:
      "18-year-old self-taught programmer specializing in Fullstack development. Based in Karachi, Pakistan.",
    siteName: "Huzaifa Adnan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
