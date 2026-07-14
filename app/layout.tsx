import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter is the primary typeface (loaded here) so every visitor sees the same
// font regardless of platform. The font stack in globals.css falls back to the
// system font only if Inter fails to load.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wince Larcen Rivano — AI Engineer",
  description:
    "I turn great ideas into things people actually use. Portfolio of Wince Larcen M. Rivano, AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
