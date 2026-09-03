import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { ClerkProvider, Show} from '@clerk/nextjs'
import {Bebas_Neue} from "next/font/google";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
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
  title: "SoxFindr",
  description: "App for finding and applying to societies at NSUT",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${bebasNeue.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-mist-950 font-sans">
        <ClerkProvider>

        <SmoothScroll/> 
        {children}
 
        </ClerkProvider>
      
        </body>
    </html>
  );
}
