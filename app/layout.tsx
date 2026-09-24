import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getawife.is-a.dev"),
  title: {
    default: "Huzaifa Adnan — Full-Stack Developer",
    template: "%s — Huzaifa Adnan",
  },
  description:
    "18-year-old self-taught programmer specializing in full-stack development. Based in Karachi, Pakistan.",
  authors: [{ name: "Huzaifa Adnan", url: "https://github.com/getawife" }],
  creator: "Huzaifa Adnan",
  keywords: [
    "Huzaifa Adnan",
    "Full-Stack Developer",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Karachi",
    "Pakistan",
    "Portfolio",
  ],
  openGraph: {
    title: "Huzaifa Adnan — Full-Stack Developer",
    description:
      "18-year-old self-taught programmer specializing in full-stack development. Based in Karachi, Pakistan.",
    siteName: "Huzaifa Adnan",
    type: "website",
    locale: "en_US",
    url: "https://getawife.is-a.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Adnan — Full-Stack Developer",
    description:
      "18-year-old self-taught programmer specializing in full-stack development. Based in Karachi, Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0c0d14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
