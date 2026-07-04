'use client';

import { motion } from "framer-motion";

export default function CTA() {
  return (
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
          Don&apos;t let another month slip by feeling stressed about your finances. Start finding peace of mind with SpendWise today. It&apos;s completely free.
        </p>
        <div className="flex justify-center mt-10">
          <a 
            href="https://play.google.com/store/apps/details?id=com.spendwise.app&utm_source=website&utm_medium=landing_page"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download SpendWise on Google Play"
            className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center gap-4 shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:-translate-y-1 group"
          >
            <svg aria-hidden="true" className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.93 2.5C2.65 2.77 2.5 3.16 2.5 3.65V20.35C2.5 20.84 2.65 21.23 2.93 21.5L2.99 21.56L13.11 11.44L13.11 11.32L12.99 11.2L2.99 1.2L2.93 2.5Z" fill="#2196F3"/>
              <path d="M16.5 14.83L13.11 11.44V11.2L16.5 7.81L16.59 7.86L20.5 10.08C21.6 10.7 21.6 11.72 20.5 12.34L16.59 14.56L16.5 14.83Z" fill="#FFC107"/>
              <path d="M16.5 14.83L13.11 11.44L2.93 21.62C3.33 22.02 4 22.06 4.79 21.62L16.5 14.83Z" fill="#EA4335"/>
              <path d="M16.5 7.81L4.79 0.98C4 0.54 3.33 0.58 2.93 0.98L13.11 11.16L16.5 7.81Z" fill="#34A853"/>
            </svg>
            <div className="flex flex-col items-start text-left">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium leading-none mb-1.5">Download free on</span>
              <span className="text-2xl font-bold leading-none tracking-tight">Google Play</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
