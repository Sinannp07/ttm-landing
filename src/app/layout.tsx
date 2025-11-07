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
  title: "TTM Fleet Management",
  description: "Fleet Tracking, Telematics & ELD Compliance Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          overflow-x-hidden       /* ✅ Prevents animations from causing screen overflow */
          bg-[#0A0F1E]            /* ✅ Ensures full background consistency */
          text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
