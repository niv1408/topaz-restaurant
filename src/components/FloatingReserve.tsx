"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export default function FloatingReserve() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      const scrolled = window.scrollY > 300;
      
      // Hide button when near the reservation section to avoid double CTAs
      const reservationSection = document.querySelector("#reservation");
      if (reservationSection) {
        const rect = reservationSection.getBoundingClientRect();
        const isNearReservation = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(scrolled && !isNearReservation);
      } else {
        setIsVisible(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#reservation");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={handleScrollToBooking}
          className="fixed bottom-6 right-6 z-40 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs tracking-widest uppercase shadow-xl shadow-amber-500/20 active:scale-95 transition-all duration-300 flex items-center gap-2 border border-amber-400/20"
          aria-label="Book a table"
        >
          <Calendar size={14} className="animate-pulse" />
          Book Table
        </motion.button>
      )}
    </AnimatePresence>
  );
}
