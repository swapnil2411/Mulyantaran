import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: [
    {
      path: "./../public/fonts/Outfit-Black.ttf", // relative to this file

      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mulyantaran - Advanced Arbitrage Trading Platform",
  description:
    "Revolutionizing arbitrage trading with advanced AI technology and user-friendly tools for traders of all experience levels.",
  generator: "Mulyantaran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="font-outfit">{children}</body>
    </html>
  );
}
