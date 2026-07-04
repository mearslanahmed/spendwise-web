'use client';

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
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
  );
}
