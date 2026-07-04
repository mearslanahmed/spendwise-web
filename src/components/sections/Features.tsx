'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="pt-12 pb-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial Intelligence <br /> Built In.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">SpendWise doesn&apos;t just track your money. It actively helps you manage it using state-of-the-art AI technology.</p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {/* Feature 1: AI Advisor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative aspect-[9/19.5] w-full max-w-[280px] lg:max-w-[320px] mx-auto bg-black rounded-[2.5rem] p-2 shadow-2xl border-[3px] border-zinc-800"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900">
                <Image src="/ai.jpg" alt="AI Advisor Feature" fill className="object-cover" sizes="(max-width: 768px) 280px, 320px" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_30px_rgba(225,29,72,0.15)] relative overflow-hidden">
                <Sparkles className="text-primary drop-shadow-[0_0_12px_rgba(225,29,72,0.8)] relative z-10" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Your personal, judgment-free money assistant.</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                No more feeling guilty about your spending. Our AI gently analyzes your unique habits and points out simple, stress-free ways to save money every month.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-primary" size={18} /> Smart transaction categorization</li>
                <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-primary" size={18} /> Clear breakdown of daily habits</li>
              </ul>
            </motion.div>
          </div>

          {/* Feature 2: Smart Scanner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <Zap className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] relative z-10" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Say goodbye to tedious manual tracking.</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Life is too short for data entry. Just snap a quick photo of your receipt, and our Vision AI instantly digitizes every detail with 99% accuracy in under 2 seconds. It&apos;s almost like magic.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-blue-500" size={18} /> Lightning fast Vision AI</li>
                <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-blue-500" size={18} /> Automatic categorization</li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[9/19.5] w-full max-w-[280px] lg:max-w-[320px] mx-auto bg-black rounded-[2.5rem] p-2 shadow-2xl border-[3px] border-zinc-800"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900">
                <Image src="/scan.jpg" alt="Receipt Scanner" fill className="object-cover" sizes="(max-width: 768px) 280px, 320px" />
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Beautiful Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative aspect-[9/19.5] w-full max-w-[280px] lg:max-w-[320px] mx-auto bg-black rounded-[2.5rem] p-2 shadow-2xl border-[3px] border-zinc-800"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900">
                <Image src="/stats.jpg" alt="Statistics" fill className="object-cover" sizes="(max-width: 768px) 280px, 320px" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                <ShieldCheck className="text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] relative z-10" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">See your money in a whole new light.</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Gorgeous, easy-to-understand charts that show you exactly what&apos;s happening with your finances. No confusing jargon, just clear insights to help you grow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
