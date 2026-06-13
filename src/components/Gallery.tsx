"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface GalleryItem {
  id: string;
  category: "Dishes" | "Ambience" | "Banquets";
  title: string;
  image: string;
  aspectRatio: string; // for masonry height simulation
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Dishes",
    title: "Gourmet Wood-Fired Sourdough",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-80",
  },
  {
    id: "g2",
    category: "Ambience",
    title: "Luxury Table Setups",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-96",
  },
  {
    id: "g3",
    category: "Banquets",
    title: "Floral Banquet Decors",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-64",
  },
  {
    id: "g4",
    category: "Dishes",
    title: "Artisanal Salad Platter",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-96",
  },
  {
    id: "g5",
    category: "Banquets",
    title: "Family Celebrations",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-80",
  },
  {
    id: "g6",
    category: "Banquets",
    title: "Ambient Celebration Lighting",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-64",
  },
  {
    id: "g7",
    category: "Dishes",
    title: "Delectable Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-96",
  },
  {
    id: "g8",
    category: "Ambience",
    title: "Topaz Lounge Setting",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop",
    aspectRatio: "h-80",
  },
];

const categories = ["All", "Dishes", "Ambience", "Banquets"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500" />
            <span className="text-amber-600 dark:text-amber-400 font-medium text-xs tracking-[0.3em] uppercase">
              Visual Journey
            </span>
            <span className="w-6 h-[1px] bg-amber-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight">
            Our Gallery
          </h2>
          <p className="text-stone-500 dark:text-stone-400 font-light text-sm sm:text-base leading-relaxed">
            Take a look inside Topaz. Browse photographs of our handcrafted gourmet selections, elegant dining halls, and celebratory banquets.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-amber-400 border-amber-400 text-stone-950 shadow-md shadow-amber-400/10"
                  : "bg-transparent border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:border-amber-400/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Columns */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer border border-stone-100 dark:border-stone-900 shadow-md"
                onClick={() => setLightboxImage(item.image)}
              >
                {/* Image item with height variation simulated */}
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Luxury Overlay on Hover */}
                  <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <span className="text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-sm font-bold mt-1">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 hover:bg-white/25 transition-all">
                        <Maximize2 size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Zoom Overlay */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={32} />
              </button>
              
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt="Expanded view"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
