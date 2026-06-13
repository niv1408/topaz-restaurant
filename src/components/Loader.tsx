"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep loader for 2.2 seconds for luxury entry experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-950 text-white"
        >
          {/* Animated luxury background particles/waves */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative flex flex-col items-center">
            {/* Logo Gold Ring Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
              }}
              className="relative w-28 h-28 flex items-center justify-center"
            >
              {/* Outer spinning dash-ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                  fill="transparent"
                  strokeDasharray="280"
                  initial={{ strokeDashoffset: 280 }}
                  animate={{ 
                    strokeDashoffset: 0,
                    transition: { duration: 1.8, ease: "easeInOut" }
                  }}
                />
              </svg>

              {/* Inner pulsing solid gold gem ring */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 rounded-full border border-amber-400/40 flex items-center justify-center bg-emerald-950/40 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              >
                {/* Gold Gem/Topaz Icon representation */}
                <span className="font-serif text-3xl font-bold text-amber-400 tracking-widest text-shadow-gold">T</span>
              </motion.div>
            </motion.div>

            {/* Restaurant Name Text Animations */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }
              }}
              className="mt-6 text-center"
            >
              <h1 className="font-serif text-4xl font-extrabold tracking-[0.25em] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent uppercase">
                Topaz
              </h1>
              <p className="text-stone-400 text-xs tracking-[0.4em] uppercase mt-2 font-light">
                Restaurant & Banquets
              </p>
            </motion.div>

            {/* Gold Divider Line expanding */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: 80,
                transition: { delay: 0.8, duration: 0.8, ease: "easeInOut" }
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-4"
            />
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.6,
                transition: { delay: 1.1, duration: 0.6 }
              }}
              className="text-[10px] text-amber-100/60 font-light tracking-widest mt-3 italic"
            >
              Where Taste Meets Celebration
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
