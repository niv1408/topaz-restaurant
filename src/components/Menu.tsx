"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Star, Coffee, Leaf } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  tags: string[];
}

const menuItems: MenuItem[] = [
  // North Indian
  {
    id: "ni1",
    name: "Paneer Tikka Masala",
    category: "North Indian",
    price: "₹420",
    description: "Clay oven roasted cottage cheese cubes cooked in a rich, buttery, spiced tomato gravy.",
    image: "/images/paneer_tikka.jpg",
    tags: ["Spicy", "Chef Special"],
  },
  {
    id: "ni2",
    name: "Dal Makhani (Topaz Signature)",
    category: "North Indian",
    price: "₹380",
    description: "Slow-cooked black lentils simmered overnight with fresh cream, butter, and authentic Indian spices.",
    image: "/images/dal_makhani.jpg",
    tags: ["Best Seller", "Signature"],
  },
  // Chinese
  {
    id: "ch1",
    name: "Veg Manchurian Gravy",
    category: "Chinese",
    price: "₹360",
    description: "Golden fried vegetable dumplings tossed in a tangy soy-garlic gravy with fresh spring onions.",
    image: "/images/manchurian.jpg",
    tags: ["Spicy"],
  },
  {
    id: "ch2",
    name: "Chili Paneer Dry",
    category: "Chinese",
    price: "₹390",
    description: "Wok-tossed cottage cheese cubes, bell peppers, onions, and green chilies in a spicy soy sauce.",
    image: "/images/chili_paneer.jpg",
    tags: ["Spicy", "Best Seller"],
  },
  // Italian
  {
    id: "it1",
    name: "Wild Mushroom Truffle Risotto",
    category: "Italian",
    price: "₹490",
    description: "Arborio rice slow-cooked with fresh porcini mushrooms, finished with premium black truffle oil and parmesan.",
    image: "/images/risotto.jpg",
    tags: ["Signature", "Gourmet"],
  },
  {
    id: "it2",
    name: "Wood-Fired Margherita Pizza",
    category: "Italian",
    price: "₹450",
    description: "Classic sourdough pizza base topped with rich tomato sauce, fresh mozzarella, and sweet basil leaves.",
    image: "/images/pizza.jpg",
    tags: ["Classic"],
  },
  // Continental
  {
    id: "co1",
    name: "Baked Lasagna Al Forno",
    category: "Continental",
    price: "₹480",
    description: "Layered pasta sheet with exotic seasonal vegetables, rich tomato marinara, and gooey bechamel bake.",
    image: "/images/lasagna.jpg",
    tags: ["Cheese-Lovers"],
  },
  {
    id: "co2",
    name: "Grilled Cottage Cheese Steak",
    category: "Continental",
    price: "₹470",
    description: "Herb-marinated paneer steak served with garlic mashed potatoes, buttered veggies, and a rich pepper sauce.",
    image: "/images/paneer_steak.jpg",
    tags: ["Healthy"],
  },
  // Special Thalis
  {
    id: "th1",
    name: "Shahi Topaz Thali",
    category: "Special Thalis",
    price: "₹550",
    description: "A grand royal feast featuring 3 gourmet curries, dal makhani, raita, saffron pulao, choice of Indian bread, dessert, and buttermilk.",
    image: "/images/royal_thali.jpg",
    tags: ["Royal Feast", "Signature"],
  },
  {
    id: "th2",
    name: "Gujarati Heritage Thali",
    category: "Special Thalis",
    price: "₹520",
    description: "Authentic Gujarati experience showcasing sweet-sour kadhi, traditional subzis, khichdi, rotlas, farsaans, and sweet basundi.",
    image: "/images/gujarati_thali.jpg",
    tags: ["Authentic"],
  },
  // Desserts
  {
    id: "de1",
    name: "Saffron Pistachio Kulfi",
    category: "Desserts",
    price: "₹250",
    description: "Traditional Indian slow-churned condensed milk ice cream enriched with pure Kashmiri saffron and pistachios.",
    image: "/images/kulfi.jpg",
    tags: ["Sweet", "Classic"],
  },
  {
    id: "de2",
    name: "Warm Chocolate Lava Cake",
    category: "Desserts",
    price: "₹290",
    description: "Decadent dark chocolate cake with a molten lava center, served with gourmet vanilla bean gelato.",
    image: "/images/lava_cake.jpg",
    tags: ["Best Seller"],
  },
  // Beverages
  {
    id: "be1",
    name: "Mint Cucumber Cooler",
    category: "Beverages",
    price: "₹210",
    description: "Refreshing blend of fresh mint, garden cucumbers, lime juice, and sparkling club soda.",
    image: "/images/cucumber_cooler.jpg",
    tags: ["Cooling"],
  },
  {
    id: "be2",
    name: "Royal Mango Lassi",
    category: "Beverages",
    price: "₹230",
    description: "Thick creamy yogurt drink infused with sweet Alphonso mango pulp and topped with almond slivers.",
    image: "/images/mango_lassi.jpg",
    tags: ["Sweet", "Classic"],
  },
];

const categories = [
  "All",
  "North Indian",
  "Chinese",
  "Italian",
  "Continental",
  "Special Thalis",
  "Desserts",
  "Beverages",
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const getTagIcon = (tag: string) => {
    if (tag.includes("Spicy")) return <Flame size={12} className="text-amber-500 mr-1" />;
    if (tag.includes("Signature") || tag.includes("Best")) return <Star size={12} className="text-amber-400 mr-1 fill-amber-400" />;
    if (tag.includes("Cooling")) return <Coffee size={12} className="text-blue-400 mr-1" />;
    return <Leaf size={12} className="text-emerald-500 mr-1" />;
  };

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500" />
            <span className="text-amber-600 dark:text-amber-400 font-medium text-xs tracking-[0.3em] uppercase">
              Gastronomic Art
            </span>
            <span className="w-6 h-[1px] bg-amber-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight">
            Our Signature Menu
          </h2>
          <p className="text-stone-500 dark:text-stone-400 font-light text-sm sm:text-base leading-relaxed">
            Every creation is prepared using authentic, seasonal ingredients by our executive culinary masters. Experience gourmet recipes tailored to perfection.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="w-full overflow-x-auto pb-4 flex justify-start md:justify-center mb-12 scrollbar-none">
          <div className="flex space-x-2 p-1.5 rounded-full bg-stone-100 dark:bg-stone-900/60 border border-stone-200/50 dark:border-stone-800/40 backdrop-blur-md shrink-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative shrink-0 ${
                  selectedCategory === category
                    ? "text-stone-950"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white"
                }`}
              >
                {selectedCategory === category && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-md z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Dishes */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
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
                className="group relative rounded-2xl overflow-hidden glass-card border border-stone-200/50 dark:border-stone-800/50 hover:border-amber-400/40 dark:hover:border-amber-400/40 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full"
              >
                {/* Food Image Container with Hover zoom */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-gold-dark text-white text-[10px] tracking-widest uppercase border border-amber-400/20">
                    {item.category}
                  </div>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-stone-900 dark:text-white text-xl group-hover:text-amber-500 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-amber-600 dark:text-amber-400 ml-2">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm font-light leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-stone-900">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-amber-400/5 text-[10px] font-medium text-emerald-800 dark:text-amber-300"
                      >
                        {getTagIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
