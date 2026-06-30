'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-start">
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6 lg:mt-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Smart Expense Tracker & AI Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Take Control of Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Money.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Track expenses effortlessly, snap receipts instantly, and let smart automation optimize your budget for total financial freedom.
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]"
          >
            {/* Phone Frame */}
            <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl border-[4px] border-zinc-800">
              <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-zinc-900">
                <img 
                  src="/hero.jpg" 
                  alt="SpendWise Dashboard" 
                  className="absolute inset-0 w-full h-full object-cover"
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
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial Intelligence <br /> Built In.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">SpendWise doesn't just track your money—it actively helps you manage it using state-of-the-art AI technology.</p>
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
                  <img src="/ai.jpg" alt="AI Advisor Feature" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Meet your personal AI wealth manager.</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Stop guessing where your money went. Our built-in AI analyzes your spending habits in real-time, finds hidden savings, and answers any financial questions you have instantly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-primary" size={18} /> Ask natural language questions</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-primary" size={18} /> Automated budget optimization</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><ChevronRight className="text-primary" size={18} /> Direct action execution</li>
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
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                  <Zap className="text-blue-500" size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Instant receipt scanning.</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Never manually enter an expense again. Just snap a picture of your receipt and our Vision AI instantly extracts the total, category, and vendor for you.
                </p>
                <ul className="space-y-3">
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
                  <img src="/scan.jpg" alt="Receipt Scanner" className="absolute inset-0 w-full h-full object-cover" />
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
                  <img src="/stats.jpg" alt="Statistics" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/30">
                  <ShieldCheck className="text-emerald-500" size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Deep insights at a glance.</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Understand your money with gorgeous, easy-to-read charts. Track your net worth, see exactly which categories drain your budget, and set realistic saving goals.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial freedom in 3 simple steps.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">No complicated spreadsheets or linking bank accounts required. Start managing your money safely in seconds.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">1</div>
              <h3 className="text-xl font-bold mb-3">Add Your Wallets</h3>
              <p className="text-muted-foreground">Create offline wallets for your cash, credit cards, and checking accounts. No bank credentials needed.</p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-blue-500">2</div>
              <h3 className="text-xl font-bold mb-3">Track Expenses</h3>
              <p className="text-muted-foreground">Log transactions manually, or just snap a picture of your receipt and let our AI do the typing.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-emerald-500">3</div>
              <h3 className="text-xl font-bold mb-3">Ask the AI</h3>
              <p className="text-muted-foreground">Chat with your AI advisor to find out where you can save money and hit your financial goals faster.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="download" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/20 blur-[150px] -z-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to transform your finances?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of smart spenders who have already taken control of their financial future with SpendWise.
          </p>
          <button className="bg-foreground text-background px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto shadow-2xl">
            Get SpendWise Free
            <ChevronRight size={24} />
          </button>
        </motion.div>
      </section>

    </div>
  );
}
