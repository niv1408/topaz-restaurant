"use client";

import React from "react";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Twitter, MessageSquare, ArrowUp } from "lucide-react";

export default function Contact() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative bg-stone-950 text-white pt-24 pb-8 overflow-hidden">
      {/* Top golden border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-900">
          
          {/* Column 1: Contact Details & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center bg-emerald-950/40">
                <span className="font-serif text-lg font-bold text-amber-400">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-[0.15em] text-white">
                  TOPAZ
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-stone-400 font-light">
                  Restaurant & Banquets
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Ahmedabad's legendary culinary destination offering fine-dining pure vegetarian delicacies and magnificent banquet event spaces on CG Road.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 text-stone-300">
                <MapPin size={18} className="text-amber-400 mt-1 shrink-0" />
                <span className="text-xs sm:text-sm font-light leading-relaxed">
                  Near Gold Coins Crossing, CG Road, Navrangpura, Ahmedabad, Gujarat 380009
                </span>
              </div>

              <div className="flex items-center gap-3.5 text-stone-300">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href="tel:+917926402640" className="text-xs sm:text-sm font-light hover:text-amber-400 transition-colors">
                  +91 79 2640 2640
                </a>
              </div>

              <div className="flex items-center gap-3.5 text-stone-300">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a href="mailto:info@topazrestaurant.com" className="text-xs sm:text-sm font-light hover:text-amber-400 transition-colors">
                  info@topazrestaurant.com
                </a>
              </div>

              <div className="flex items-start gap-3.5 text-stone-300">
                <Clock size={16} className="text-amber-400 mt-1 shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm font-light">
                    Lunch: 11:00 AM – 3:30 PM
                  </p>
                  <p className="text-xs sm:text-sm font-light">
                    Dinner: 7:00 PM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[{ icon: Facebook, href: "#" }, { icon: Instagram, href: "#" }, { icon: Twitter, href: "#" }].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400/50 bg-stone-900/50 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-all duration-300"
                    aria-label="Social Link"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-base tracking-wider uppercase text-amber-400">
                Navigation
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm font-light text-stone-400">
                {["Home", "About", "Menu", "Banquets", "Gallery"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div className="space-y-6">
              <h3 className="font-serif font-bold text-base tracking-wider uppercase text-amber-400">
                Specialties
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm font-light text-stone-400">
                {["North Indian", "Chinese", "Italian", "Continental", "Special Thalis", "Desserts"].map((item) => (
                  <li key={item}>
                    <a
                      href="#menu"
                      onClick={(e) => handleLinkClick(e, "#menu")}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Styled Google Maps Integration (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif font-bold text-base tracking-wider uppercase text-amber-400">
              Our Location
            </h3>
            {/* Custom styled map container */}
            <div className="w-full h-60 rounded-2xl overflow-hidden border border-stone-800 shadow-lg relative">
              <iframe
                title="Topaz Restaurant Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6961129994627!2d72.55598687606775!3d23.024844316885315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f479e00001%3A0x633ea6476100cbcf!2sC%20G%20Road%20Ahmedabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Footer Base bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stone-500">
          <p>
            © {new Date().getFullYear()} Topaz Restaurant & Banquets. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed with 5-Star Luxury Aesthetics
          </p>
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full border border-stone-800 hover:border-amber-400 bg-stone-900/40 text-stone-400 hover:text-amber-400 flex items-center justify-center transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
