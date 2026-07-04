'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Sparkles, Zap, Apple, Play, Star, CheckCircle2, Lock, EyeOff, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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

      {/* Features Showcase */}
      <section id="features" className="pt-12 pb-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial Intelligence <br /> Built In.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">SpendWise doesn't just track your money. It actively helps you manage it using state-of-the-art AI technology.</p>
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
                  Life is too short for data entry. Just snap a quick photo of your receipt, and our Vision AI instantly digitizes every detail with 99% accuracy in under 2 seconds. It's almost like magic.
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
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                  <ShieldCheck className="text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] relative z-10" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">See your money in a whole new light.</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Gorgeous, easy-to-understand charts that show you exactly what's happening with your finances. No confusing jargon, just clear insights to help you grow.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 bg-background">
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
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-md">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-rose-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Keep your bank details private</h3>
              <p className="text-muted-foreground font-light leading-relaxed">We believe your data is yours. Create secure, offline wallets in seconds without ever having to link your actual bank account.</p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-md">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-indigo-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Log it and forget it</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Snap a receipt or tap in a purchase in two seconds flat. Our AI handles the categorizing so you can get back to your day.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-md">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-teal-500">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Watch your savings pile up</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Ask the AI where you can comfortably save an extra $100 this month. Small, effortless changes that add up to $1,000+ in annual financial freedom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">What early testers are saying.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">Don't just take our word for it. Here is what our beta community has to say about SpendWise.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 backdrop-blur-sm relative shadow-lg flex flex-col h-full"
            >
              <div className="flex gap-1 mb-3 text-emerald-500">
                <Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" />
              </div>
              <p className="text-base text-zinc-300 font-light leading-relaxed mb-6 flex-grow">"The receipt scanner is pure magic. I used to spend hours logging my expenses, now I literally just take a picture and the AI does the rest. Life changing."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-rose-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] shrink-0" />
                <div>
                  <p className="font-bold text-sm tracking-wide leading-tight">Sarah Jenkins</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Small Business Owner</p>
                </div>
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 backdrop-blur-sm relative shadow-lg flex flex-col h-full"
            >
              <div className="flex gap-1 mb-3 text-emerald-500">
                <Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" />
              </div>
              <p className="text-base text-zinc-300 font-light leading-relaxed mb-6 flex-grow">"Finally, a budgeting app that doesn't force me to hand over my bank credentials. Offline wallets are exactly what I've been looking for. The UI is incredibly premium."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] shrink-0" />
                <div>
                  <p className="font-bold text-sm tracking-wide leading-tight">Michael Chen</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Software Engineer</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 backdrop-blur-sm relative shadow-lg flex flex-col h-full"
            >
              <div className="flex gap-1 mb-3 text-emerald-500">
                <Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" /><Star size={14} className="fill-current" />
              </div>
              <p className="text-base text-zinc-300 font-light leading-relaxed mb-6 flex-grow">"The AI Wealth Manager actually pointed out a huge leak in my subscription spending that I totally missed. I'm saving over $200 a month thanks to this app."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] shrink-0" />
                <div>
                  <p className="font-bold text-sm tracking-wide leading-tight">Elena Rodriguez</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Freelance Designer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Frequently asked questions.</h2>
            <p className="text-muted-foreground text-lg font-light">Everything you need to know about the product and how it works.</p>
          </motion.div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3"><CheckCircle2 className="text-primary" size={20} /> Is SpendWise secure? Do I need to link my bank?</h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-8">SpendWise is 100% private and secure. Unlike other budgeting apps, we never ask for your bank credentials. You create offline wallets and log transactions manually or via our secure AI receipt scanner.</p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3"><CheckCircle2 className="text-blue-500" size={20} /> How does the AI Expense Tracker work?</h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-8">Our cutting-edge AI Wealth Manager analyzes your spending patterns directly on your device. You can take a picture of any receipt, and the Vision AI instantly extracts the total amount, vendor, and category without you typing a single number.</p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={20} /> Is the app free to use?</h3>
              <p className="text-muted-foreground font-light leading-relaxed pl-8">Yes! You can download SpendWise on the Google Play Store completely free. We believe everyone deserves access to high-quality financial tools.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/20 blur-[150px] -z-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Ready to feel good about your money again?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Don't let another month slip by feeling stressed about your finances. Start finding peace of mind with SpendWise today. It's completely free.
          </p>
          <div className="flex justify-center mt-10">
            <button className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center gap-4 shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:-translate-y-1 group">
              <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.93 2.5C2.65 2.77 2.5 3.16 2.5 3.65V20.35C2.5 20.84 2.65 21.23 2.93 21.5L2.99 21.56L13.11 11.44L13.11 11.32L12.99 11.2L2.99 1.2L2.93 2.5Z" fill="#2196F3"/>
                <path d="M16.5 14.83L13.11 11.44V11.2L16.5 7.81L16.59 7.86L20.5 10.08C21.6 10.7 21.6 11.72 20.5 12.34L16.59 14.56L16.5 14.83Z" fill="#FFC107"/>
                <path d="M16.5 14.83L13.11 11.44L2.93 21.62C3.33 22.02 4 22.06 4.79 21.62L16.5 14.83Z" fill="#EA4335"/>
                <path d="M16.5 7.81L4.79 0.98C4 0.54 3.33 0.58 2.93 0.98L13.11 11.16L16.5 7.81Z" fill="#34A853"/>
              </svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium leading-none mb-1.5">Download free on</span>
                <span className="text-2xl font-bold leading-none tracking-tight">Google Play</span>
              </div>
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
