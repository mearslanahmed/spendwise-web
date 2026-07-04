'use client';

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
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
  );
}
