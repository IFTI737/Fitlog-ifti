import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Your ultimate workout library and fitness companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#101216] text-white">
        <div className="flex min-h-screen flex-col">
          <FitLogProvider>
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />

            
          </FitLogProvider>

          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
