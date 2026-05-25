import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huzaifa's portfolio",
  description: "Huzaifa/getawife's CLI styled portfolio <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
