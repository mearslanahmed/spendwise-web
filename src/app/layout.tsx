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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SpendWise | AI Expense Tracker & Budget Planner",
  description: "The ultimate AI-powered personal finance manager. Automate your budget, scan receipts instantly with Vision AI, and achieve financial freedom without linking your bank.",
  keywords: ["AI budget planner", "automated expense tracker", "receipt scanner app", "personal finance manager", "offline wallet tracker", "budgeting app without bank link", "AI wealth manager"],
  metadataBase: new URL('https://spendwiseapp.tech'),
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'SpendWise | AI Expense Tracker & Budget Planner',
    description: 'Automate your budget, scan receipts instantly with Vision AI, and achieve financial freedom without linking your bank.',
    url: 'https://spendwiseapp.tech',
    siteName: 'SpendWise',
    images: [
      {
        url: '/icon.png', // Ideally this would be an og-image.png, but icon.png works for now
        width: 512,
        height: 512,
        alt: 'SpendWise Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpendWise | Smart Expense Tracker',
    description: 'Track your expenses effortlessly, snap receipts instantly, and unlock your path to financial freedom with smart automation.',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
