'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, EyeOff, Wallet } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-start mb-16 md:mb-24">
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6 lg:mt-8"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
            Stop wondering where your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-rose-400 to-blue-500 drop-shadow-sm">paycheck went.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
            The average person wastes over $340 a year on forgotten subscriptions. SpendWise uses smart AI to gently catch them for you, so you can finally start saving without the stress. Take the first step toward true financial freedom today.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            {/* Google Play Badge */}
            <button className="bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.93 2.5C2.65 2.77 2.5 3.16 2.5 3.65V20.35C2.5 20.84 2.65 21.23 2.93 21.5L2.99 21.56L13.11 11.44L13.11 11.32L12.99 11.2L2.99 1.2L2.93 2.5Z" fill="#2196F3"/>
                <path d="M16.5 14.83L13.11 11.44V11.2L16.5 7.81L16.59 7.86L20.5 10.08C21.6 10.7 21.6 11.72 20.5 12.34L16.59 14.56L16.5 14.83Z" fill="#FFC107"/>
                <path d="M16.5 14.83L13.11 11.44L2.93 21.62C3.33 22.02 4 22.06 4.79 21.62L16.5 14.83Z" fill="#EA4335"/>
                <path d="M16.5 7.81L4.79 0.98C4 0.54 3.33 0.58 2.93 0.98L13.11 11.16L16.5 7.81Z" fill="#34A853"/>
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium leading-none mb-1">Get it on</span>
                <span className="text-lg font-bold leading-none tracking-tight">Google Play</span>
              </div>
            </button>

            <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              100% Private & Secure
            </p>
          </div>
        </motion.div>

        {/* Hero Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]"
        >
          {/* Phone Frame */}
          <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl border-[4px] border-zinc-800">
            <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-zinc-900">
              <Image 
                src="/hero.jpg" 
                alt="SpendWise Dashboard"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 320px, 380px"
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-32 bg-background/80 backdrop-blur-xl p-4 rounded-2xl border border-border/50 shadow-xl flex items-center gap-3 hidden sm:flex"
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

      {/* Security Strip */}
      <div className="border-y border-white/5 bg-white/[0.01] py-8 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-muted-foreground mb-8 uppercase tracking-[0.2em]">Engineered for complete privacy and control</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 text-zinc-300">
            <div className="flex items-center gap-3 text-lg font-semibold tracking-tight"><ShieldCheck size={24} className="text-emerald-500" /> Bank-Level Encryption</div>
            <div className="flex items-center gap-3 text-lg font-semibold tracking-tight"><Lock size={24} className="text-rose-500" /> Zero Credential Sharing</div>
            <div className="flex items-center gap-3 text-lg font-semibold tracking-tight"><EyeOff size={24} className="text-blue-500" /> 100% Data Privacy</div>
            <div className="flex items-center gap-3 text-lg font-semibold tracking-tight"><Wallet size={24} className="text-cyan-400" /> No Hidden Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
}
