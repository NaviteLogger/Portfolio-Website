import type { Metadata } from "next";
import { ClarityAnalytics } from "@/components/ClarityAnalytics";
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
  title: "Marek Kacprzak — Engineering Leader",
  description:
    "Engineering leader building secure, scalable products across AI, data platforms, distributed systems, and cloud infrastructure.",
  openGraph: {
    title: "Marek Kacprzak — Engineering Leader",
    description:
      "Engineering leadership across AI products, data platforms, distributed systems, and secure cloud delivery.",
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
        <ClarityAnalytics />
      </body>
    </html>
  );
}
