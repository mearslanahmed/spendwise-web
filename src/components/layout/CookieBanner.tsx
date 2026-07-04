'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('spendwise_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!mounted) return null;

  const acceptCookies = () => {
    localStorage.setItem('spendwise_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 shadow-2xl rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              We use strictly necessary cookies to make our site work. We'd also like to set optional cookies to help us improve it. We won't set optional cookies unless you enable them. Using this tool will set a cookie on your device to remember your preferences.
            </p>
            <div className="flex gap-4 shrink-0">
              <button 
                onClick={() => setIsVisible(false)} 
                className="px-6 py-2 rounded-xl text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Reject All
              </button>
              <button 
                onClick={acceptCookies} 
                className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-rose-600 transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)]"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
