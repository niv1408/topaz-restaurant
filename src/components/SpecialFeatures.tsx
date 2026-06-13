"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Sparkles, Building2, Car, CalendarCheck2 } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Pure Vegetarian",
    description: "Strict quality control ensuring completely vegetarian culinary prep using organic spices.",
    color: "group-hover:text-emerald-500",
    bg: "group-hover:bg-emerald-500/10",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "A warm, welcoming, high-end family environment crafted for perfect dining reunions.",
    color: "group-hover:text-amber-500",
    bg: "group-hover:bg-amber-500/10",
  },
  {
    icon: Sparkles,
    title: "Premium Ambience",
    description: "Aesthetically designed dark green and gold interiors with soft acoustics and lighting.",
    color: "group-hover:text-yellow-400",
    bg: "group-hover:bg-yellow-400/10",
  },
  {
    icon: Building2,
    title: "Spacious Banquet Hall",
    description: "Grand space hosting up to 500 guests for royal weddings, corporate events, and receptions.",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    icon: Car,
    title: "Ample Valet Parking",
    description: "Hassle-free parking with professional valet attendants directly at the destination.",
    color: "group-hover:text-purple-500",
    bg: "group-hover:bg-purple-500/10",
  },
  {
    icon: CalendarCheck2,
    title: "Instant Online Reservation",
    description: "Reserve tables and book customized banquets online with instant confirmation receipts.",
    color: "group-hover:text-rose-500",
    bg: "group-hover:bg-rose-500/10",
  },
];

export default function SpecialFeatures() {
  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500" />
            <span className="text-amber-600 dark:text-amber-400 font-medium text-xs tracking-[0.3em] uppercase">
              Why Choose Topaz
            </span>
            <span className="w-6 h-[1px] bg-amber-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight">
            Our Premium Standards
          </h2>
          <p className="text-stone-500 dark:text-stone-400 font-light text-sm sm:text-base leading-relaxed">
            Delivering luxurious hospitality, supreme vegetarian quality, and grand hosting experiences with unparalleled attention to detail.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={idx}
                className="group p-8 rounded-2xl bg-white dark:bg-zinc-900/40 border border-stone-200/50 dark:border-stone-800/50 hover:border-amber-400/40 hover:shadow-lg hover:shadow-black/5 dark:hover:bg-zinc-900/60 transition-all duration-500 flex flex-col items-center text-center space-y-4"
              >
                {/* Icon frame with smooth hover transition */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-amber-400 border border-stone-200/30 dark:border-stone-700/30 transition-all duration-500 ${feat.bg} ${feat.color}`}>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                  {feat.title}
                </h3>
                
                <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
