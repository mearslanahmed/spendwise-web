'use client';

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function FAQ() {
  return (
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
  );
}
