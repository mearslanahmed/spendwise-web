'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden">
            <Image src="/icon.png" alt="SpendWise Logo" fill sizes="40px" className="object-cover" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400">
            SpendWise
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </div>

        <div>
          <Link href="/#download" className="bg-zinc-900 border border-zinc-800 text-white px-5 py-2 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-0.5">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.93 2.5C2.65 2.77 2.5 3.16 2.5 3.65V20.35C2.5 20.84 2.65 21.23 2.93 21.5L2.99 21.56L13.11 11.44L13.11 11.32L12.99 11.2L2.99 1.2L2.93 2.5Z" fill="#2196F3"/>
              <path d="M16.5 14.83L13.11 11.44V11.2L16.5 7.81L16.59 7.86L20.5 10.08C21.6 10.7 21.6 11.72 20.5 12.34L16.59 14.56L16.5 14.83Z" fill="#FFC107"/>
              <path d="M16.5 14.83L13.11 11.44L2.93 21.62C3.33 22.02 4 22.06 4.79 21.62L16.5 14.83Z" fill="#EA4335"/>
              <path d="M16.5 7.81L4.79 0.98C4 0.54 3.33 0.58 2.93 0.98L13.11 11.16L16.5 7.81Z" fill="#34A853"/>
            </svg>
            <span className="text-sm font-bold tracking-tight">Download App</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
