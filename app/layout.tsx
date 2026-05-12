import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marek Kacprzak — Backend Engineer",
  description:
    "Backend-leaning full-stack engineer building secure, observable systems. Node.js, TypeScript, Go, and Python in production — with a security-first instinct.",
  metadataBase: new URL("https://marekkacprzak.dev"),
  openGraph: {
    title: "Marek Kacprzak — Backend Engineer",
    description:
      "Backend-leaning full-stack engineer building secure, observable systems.",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
