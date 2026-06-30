'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
              <Sparkles size={16} />
              <span className="text-sm font-medium">AI-Powered Financial Advisor</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Take Control of Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Money.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Track expenses, scan receipts instantly, and let Artificial Intelligence guide your budget to financial freedom.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 group shadow-[0_0_40px_rgba(225,29,72,0.4)]">
                Download Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                Bank-level Security
              </p>
            </div>
          </motion.div>

          {/* Hero Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]"
          >
            {/* Phone Frame */}
            <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl border-[4px] border-zinc-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-zinc-800 rounded-b-3xl z-20" />
              
              {/* Screen Content */}
              <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-zinc-900">
                <Image 
                  src="/hero.jpg" 
                  alt="SpendWise Dashboard" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-32 bg-background/80 backdrop-blur-xl p-4 rounded-2xl border border-border/50 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Zap className="text-emerald-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Monthly Savings</p>
                <p className="text-sm font-bold text-emerald-500">+$450.00</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
