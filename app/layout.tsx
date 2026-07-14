import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// SF Pro Display isn't licensed for web embedding. Inter is the closest
// cross-platform match and is loaded here as the fallback; the font stack in
// globals.css prefers the real SF Pro on Apple devices.
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
