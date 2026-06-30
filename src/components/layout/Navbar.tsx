'use client';

import Link from 'next/link';
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
          <img src="/icon.png" alt="SpendWise Logo" width={40} height={40} className="rounded-xl object-cover" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-rose-400">
            SpendWise
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </div>

        <div>
          <a href="#download" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            Download App
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
