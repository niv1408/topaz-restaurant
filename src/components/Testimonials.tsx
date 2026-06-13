"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  stars: number;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Wedding Host",
    stars: 5,
    review: "The catering at Topaz was the absolute highlight of our wedding. Every guest praised the Dal Makhani and the Special Thalis. Their banquet management took care of everything seamlessly. Truly 5-star service!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Meera Shah",
    role: "Corporate Coordinator",
    stars: 5,
    review: "We hosted our annual dealer meet at their spacious banquet hall. The HD projector support, audio acoustics, and custom mocktails were outstanding. The feedback from our executives has been stellar.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Devang Joshi",
    role: "Regular Dining Guest",
    stars: 5,
    review: "Vegetarian dining at its absolute finest in Ahmedabad. The wild mushroom truffle risotto is sublime. Love the emerald green luxury decor and the professional service team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-stone-900 text-white overflow-hidden">
      {/* Background Ambience styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full border border-amber-400/30 flex items-center justify-center bg-stone-800 text-amber-400 mb-8"
        >
          <Quote size={20} className="fill-amber-400/20" />
        </motion.div>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-16 tracking-wide">
          Praise from Our Guests
        </h2>

        {/* Review Carousel Container */}
        <div className="relative w-full min-h-[300px] flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-6"
            >
              {/* Star rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-2xl font-light italic leading-relaxed text-stone-200 max-w-3xl">
                "{testimonials[current].review}"
              </blockquote>

              {/* Profile card */}
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-400/20">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-bold text-base text-amber-400">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-stone-500 text-xs tracking-wider uppercase font-light">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex gap-4 mt-12 z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400/50 bg-stone-800/40 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400/50 bg-stone-800/40 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-all duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
