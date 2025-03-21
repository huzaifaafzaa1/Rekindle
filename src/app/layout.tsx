import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Josefin_Sans, Anton, Inter } from 'next/font/google';
import "./globals.css";

// Configure the fonts
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton only has one weight
  variable: '--font-anton',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} ${anton.variable} ${inter.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
