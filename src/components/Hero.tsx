"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Utensils } from "lucide-react";

// Curated high-resolution hospitality/fine-dining photography
const slides = [
  {
    image: "/images/hero_dining.jpg",
    title: "Culinary Artistry",
    subtitle: "Premium Vegetarian Fine Dining",
  },
  {
    image: "/images/hero_banquet.jpg",
    title: "Grand Celebrations",
    subtitle: "Majestic Banquets & Event Spaces",
  },
  {
    image: "/images/hero_ambience.jpg",
    title: "Refined Ambience",
    subtitle: "A Five-Star Hospitality Experience",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-950">
      {/* Background Image Carousel with Ken Burns zoom effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 0.65, 
              scale: 1,
              transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } 
            }}
            exit={{ 
              opacity: 0, 
              transition: { duration: 1 } 
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        {/* Deep gradient overlays for typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/60 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-emerald-950/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Mini Gold Crest Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-8 h-[1px] bg-amber-400/60" />
          <span className="text-amber-400 font-light text-xs tracking-[0.35em] uppercase">
            Est. 2002 | Ahmedabad
          </span>
          <span className="w-8 h-[1px] bg-amber-400/60" />
        </motion.div>

        {/* Large Logo/Crest representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 rounded-full border border-amber-400/20 bg-stone-900/40 backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
        >
          <span className="font-serif text-3xl font-bold text-amber-400 tracking-wider">T</span>
        </motion.div>

        {/* Dynamic Slide Sub-Tag */}
        <div className="h-6 overflow-hidden mb-3">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-amber-300 font-light text-sm tracking-[0.25em] uppercase"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Main Tagline Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide mb-6 leading-tight animate-shimmer"
        >
          Where Taste Meets Celebration
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-stone-300 font-light text-sm sm:text-lg md:text-xl max-w-2xl mb-12 tracking-wide leading-relaxed"
        >
          Experience Fine Dining, Exceptional Hospitality & Grand Celebrations at Topaz.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={(e) => handleScrollTo(e, "#reservation")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-semibold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95"
          >
            <Calendar size={16} />
            Reserve a Table
          </button>
          
          <button
            onClick={(e) => handleScrollTo(e, "#menu")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-amber-400/40 hover:border-amber-400 bg-transparent text-amber-400 hover:text-stone-950 hover:bg-amber-400 font-semibold text-sm tracking-widest uppercase transition-all duration-300 active:scale-95"
          >
            <Utensils size={16} />
            Explore Menu
          </button>
        </motion.div>
      </div>

      {/* Floating slider indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentSlide === index ? "w-8 bg-amber-400" : "w-2 bg-stone-600 hover:bg-stone-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bounce Down Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-amber-400/60 hover:text-amber-400 cursor-pointer hidden md:block"
        onClick={() => {
          const target = document.querySelector("#about");
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
