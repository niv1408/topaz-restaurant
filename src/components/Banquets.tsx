"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, GlassWater, Clock, Sparkles } from "lucide-react";

interface EventType {
  id: string;
  name: string;
  capacity: string;
  amenities: string[];
  description: string;
  image: string;
}

const events: EventType[] = [
  {
    id: "wedding",
    name: "Wedding Functions",
    capacity: "150 to 500 Guests",
    description: "Exchange vows in a setting of grand luxury. Our team provides bespoke decorations, majestic stage designs, and customized buffet catering.",
    image: "/images/event_wedding.jpg",
    amenities: ["Bespoke Floral Decor", "Bridal Dressing Suite", "Customized Royal Buffet", "Grand Stage Lighting"],
  },
  {
    id: "engagement",
    name: "Engagement Ceremonies",
    capacity: "100 to 350 Guests",
    description: "Celebrate your ring ceremony with sophisticated elegance. Premium floral arches, cozy guest lounges, and gourmet starter platters.",
    image: "/images/event_engagement.jpg",
    amenities: ["Ring Display Stage", "Floral Backdrops", "Mocktail Counters", "Ambience Music Setup"],
  },
  {
    id: "birthday",
    name: "Birthday Celebrations",
    capacity: "50 to 200 Guests",
    description: "From milestone first birthdays to grand silver anniversaries, enjoy lively theme decorations, cake setups, and fun-filled buffet packages.",
    image: "/images/event_birthday.jpg",
    amenities: ["Theme Styling", "Gourmet Dessert Display", "Kid Activity Zone Option", "High-End Sound Setup"],
  },
  {
    id: "corporate",
    name: "Corporate Events",
    capacity: "50 to 300 Guests",
    description: "Impress your delegates with state-of-the-art corporate facilities. Perfect for seminars, dealer meets, product launches, and gala dinners.",
    image: "/images/event_corporate.jpg",
    amenities: ["HD Laser Projectors", "Hi-Speed Wi-Fi & Mics", "Executive High-Tea Buffet", "Valet Parking Services"],
  },
  {
    id: "family",
    name: "Family Gatherings",
    capacity: "40 to 150 Guests",
    description: "Celebrate retirement, baby showers, or get-togethers in a cozy space. Warm hospitality, comfort seating, and custom-tailored menus.",
    image: "/images/event_family.jpg",
    amenities: ["Flexible Dining Layouts", "Kids Special Buffet", "Personal Event Host", "Welcoming Drinks"],
  },
];

export default function Banquets() {
  const [activeEvent, setActiveEvent] = useState<string>("wedding");

  return (
    <section id="banquets" className="relative py-24 px-6 md:px-12 bg-stone-900 text-white overflow-hidden">
      {/* Background Ambience overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-amber-400" />
            <span className="text-amber-400 font-medium text-xs tracking-[0.3em] uppercase">
              Majestic Venues
            </span>
            <span className="w-6 h-[1px] bg-amber-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Banquets & Grand Events
          </h2>
          <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
            Host your momentous milestones in Ahmedabad's premier events destination. Fully air-conditioned, luxury interior acoustics, and legendary hospitality.
          </p>
        </div>

        {/* Dual Layout for Banquet Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Event Navigation List */}
          <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 relative flex items-center justify-between group ${
                  activeEvent === event.id
                    ? "bg-gradient-to-r from-emerald-950 to-emerald-900 border-amber-400/40 text-white shadow-xl shadow-black/30"
                    : "bg-stone-800/40 border-stone-800 text-stone-400 hover:bg-stone-800/80 hover:text-white"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold group-hover:text-amber-400 transition-colors">
                    {event.name}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-stone-500 mt-1">
                    {event.capacity}
                  </span>
                </div>
                {activeEvent === event.id && (
                  <motion.div
                    layoutId="banquetIndicator"
                    className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#d4af37]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Panel: Detailed Active Event View */}
          <div className="lg:col-span-8">
            <div className="h-full rounded-3xl overflow-hidden bg-stone-800/30 border border-stone-800 backdrop-blur-sm flex flex-col md:flex-row">
              
              {/* Event Image Frame */}
              <div className="relative md:w-1/2 h-72 md:h-auto overflow-hidden">
                <img
                  src={events.find(e => e.id === activeEvent)?.image}
                  alt={events.find(e => e.id === activeEvent)?.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/10 pointer-events-none" />
              </div>

              {/* Event Details Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-2">
                    <Sparkles size={16} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Premium Package</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                    {events.find(e => e.id === activeEvent)?.name}
                  </h3>
                  
                  <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {events.find(e => e.id === activeEvent)?.description}
                  </p>
                  
                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-stone-800 pt-6">
                    <div className="flex items-center gap-2.5">
                      <Users size={18} className="text-amber-400" />
                      <div>
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest font-light">Capacity</p>
                        <p className="text-xs font-semibold">{events.find(e => e.id === activeEvent)?.capacity.split("Guests")[0]}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <ShieldCheck size={18} className="text-amber-400" />
                      <div>
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest font-light">Service</p>
                        <p className="text-xs font-semibold">5-Star Luxury</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amenities list */}
                <div className="space-y-2">
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Included Amenities</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-300 text-[11px] font-light">
                    {events.find(e => e.id === activeEvent)?.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
