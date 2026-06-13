"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu as MenuIcon, X, Calendar, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Banquets", href: "#banquets" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic styling classes depending on scroll status and theme mode
  const navBgClass = scrolled
    ? theme === "light"
      ? "py-3 px-6 md:px-12 bg-white/95 border-b border-amber-500/20 shadow-md shadow-black/5 backdrop-blur-md"
      : "py-3 px-6 md:px-12 bg-emerald-950/95 border-b border-amber-500/10 shadow-lg shadow-black/35 backdrop-blur-md"
    : "py-6 px-6 md:px-12 bg-transparent border-b border-transparent";

  const logoTextClass = scrolled
    ? theme === "light"
      ? "font-serif text-xl font-bold tracking-[0.15em] text-emerald-950 transition-colors duration-300"
      : "font-serif text-xl font-bold tracking-[0.15em] text-white transition-colors duration-300"
    : "font-serif text-xl font-bold tracking-[0.15em] text-white transition-colors duration-300";

  const logoSubtitleClass = scrolled
    ? theme === "light"
      ? "text-[8px] tracking-[0.3em] uppercase text-stone-600 font-medium group-hover:text-amber-600 transition-colors"
      : "text-[8px] tracking-[0.3em] uppercase text-stone-400 font-light group-hover:text-amber-400 transition-colors"
    : "text-[8px] tracking-[0.3em] uppercase text-stone-400 font-light group-hover:text-amber-400 transition-colors";

  const navLinkTextClass = scrolled
    ? theme === "light"
      ? "text-stone-800 hover:text-amber-600 text-sm tracking-widest uppercase transition-all duration-300 font-semibold relative py-1 group"
      : "text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-all duration-300 font-light relative py-1 group"
    : "text-stone-300 hover:text-amber-400 text-sm tracking-widest uppercase transition-all duration-300 font-light relative py-1 group";

  const phoneTextClass = scrolled
    ? theme === "light"
      ? "hidden sm:flex items-center gap-2 text-stone-800 hover:text-amber-600 text-xs font-semibold tracking-wider transition-colors"
      : "hidden sm:flex items-center gap-2 text-stone-300 hover:text-amber-400 text-xs font-light tracking-wider transition-colors"
    : "hidden sm:flex items-center gap-2 text-stone-300 hover:text-amber-400 text-xs font-light tracking-wider transition-colors";

  const hamburgerClass = scrolled
    ? theme === "light"
      ? "lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-stone-300 hover:border-amber-500 text-stone-800 hover:text-amber-600 transition-colors"
      : "lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-stone-700/50 hover:border-amber-400/50 text-stone-300 hover:text-amber-400 transition-colors"
    : "lg:hidden w-9 h-9 rounded-full flex items-center justify-center border border-stone-700/50 hover:border-amber-400/50 text-stone-300 hover:text-amber-400 transition-colors";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-amber-400/30 flex items-center justify-center bg-emerald-950/40 shadow-inner group-hover:border-amber-400/60 transition-colors">
              <span className="font-serif text-lg font-bold text-amber-400">T</span>
            </div>
            <div className="flex flex-col">
              <span className={logoTextClass}>
                TOPAZ
              </span>
              <span className={logoSubtitleClass}>
                Restaurant & Banquets
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={navLinkTextClass}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Tools (Theme, Reservation Button, Mobile Hamburger) */}
          <div className="flex items-center gap-4">
            {/* Quick Contact Info */}
            <a
              href="tel:+917926402640"
              className={phoneTextClass}
            >
              <PhoneCall size={14} className="text-amber-400 animate-pulse" />
              <span className="hidden md:inline">+91 79 2640 2640</span>
            </a>

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-amber-400/20 bg-stone-900/50 hover:bg-amber-400/10 text-amber-400 hover:border-amber-400/50 transition-all duration-300"
              aria-label="Toggle Theme Mode"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Table Booking Call to Action */}
            <a
              href="#reservation"
              onClick={(e) => handleLinkClick(e, "#reservation")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-medium text-xs tracking-widest uppercase shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all duration-300"
            >
              <Calendar size={14} />
              Book Table
            </a>

            {/* Mobile Nav Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={hamburgerClass}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center bg-stone-950/95 backdrop-blur-lg px-8 pt-24 pb-8"
          >
            <div className="absolute top-28 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
            
            <div className="flex flex-col items-center gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-stone-300 hover:text-amber-400 text-xl tracking-widest uppercase font-serif py-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-auto items-center">
              <a
                href="tel:+917926402640"
                className="flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm font-light tracking-widest uppercase transition-colors"
              >
                <PhoneCall size={16} className="text-amber-400" />
                +91 79 2640 2640
              </a>
              <a
                href="#reservation"
                onClick={(e) => handleLinkClick(e, "#reservation")}
                className="w-full text-center py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold tracking-widest uppercase shadow-lg shadow-amber-500/10 active:scale-95 transition-all"
              >
                Reserve a Table
              </a>
              <p className="text-[10px] text-stone-500 tracking-[0.2em] uppercase font-light">
                Ahmedabad's Premier Dining Experience
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
