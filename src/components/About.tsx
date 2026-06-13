"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-stone-50 dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
      {/* Decorative side accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500" />
            <span className="text-amber-600 dark:text-amber-400 font-medium text-xs tracking-[0.3em] uppercase">
              Our Legacy
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-stone-900 dark:text-white">
            Crafting Unforgettable <br />
            <span className="text-emerald-800 dark:text-amber-400">Vegetarian Feasts</span> Since 2002
          </h2>

          <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed text-sm sm:text-base">
            For over two decades, **Topaz Restaurant & Banquets** has stood as a beacon of luxury vegetarian gastronomy on CG Road in Ahmedabad. We combine ancestral culinary recipes with progressive modern techniques to curate fine dining that appeals to all five senses.
          </p>

          <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed text-sm sm:text-base">
            Our mission is simple: to create a sanctuary where friends and families can celebrate lifetime milestones. From an intimate family dinner to a grand destination wedding, our majestic banquet hall and team of professional chefs ensure everything is executed with 5-star sophistication.
          </p>

          {/* Legacy grid markers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-amber-400 border border-emerald-500/10">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-800 dark:text-white text-base">
                  100% Pure Vegetarian
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs mt-1 font-light">
                  Strictly vegetarian cuisine using handpicked spices and ingredients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-amber-400 border border-emerald-500/10">
                <Award size={16} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-800 dark:text-white text-base">
                  Majestic Banquets
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs mt-1 font-light">
                  Spacious venue accommodating grand weddings, corporate meets, and parties.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 text-stone-900 dark:text-amber-400 font-bold text-xs tracking-widest uppercase hover:text-emerald-700 dark:hover:text-amber-300 transition-colors group"
            >
              Discover Our Culinary Philosophy
              <span className="w-12 h-[1px] bg-stone-900 dark:bg-amber-400 group-hover:w-20 transition-all duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Overlapping Images Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[450px] sm:h-[550px] w-full flex items-center justify-center"
        >
          {/* Main big background image (fine dining) */}
          <div className="absolute w-[80%] h-[75%] top-0 left-0 rounded-2xl overflow-hidden shadow-2xl border border-stone-200/10">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop"
              alt="Topaz Luxury Dining Ambience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Overlapping foreground image (plated food) */}
          <div className="absolute w-[60%] h-[55%] bottom-0 right-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-50 dark:border-stone-950">
            <img
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop"
              alt="Gourmet Vegetarian Food Platter"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Floating gold crest card */}
          <div className="absolute top-1/2 left-[30%] -translate-y-1/2 p-5 rounded-2xl glass-gold-dark text-center shadow-lg border border-amber-400/30 backdrop-blur-md hidden sm:block">
            <h3 className="font-serif text-3xl font-bold text-amber-400">20+</h3>
            <p className="text-[10px] text-amber-200/80 tracking-widest uppercase mt-1 font-light">
              Years of Culinary <br /> Excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
