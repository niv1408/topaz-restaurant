"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock, MessageSquare, ClipboardCheck, Sparkles, Check, X, Printer } from "lucide-react";
import confetti from "canvas-confetti";

interface ReservationData {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    requests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ReservationData | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim().replace(/[-+\s]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.date) newErrors.date = "Please select a booking date";
    if (!formData.time) newErrors.time = "Please select a booking time";
    if (formData.guests < 1) newErrors.guests = "Must be at least 1 guest";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) || 1 : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API delay of 1.2s for luxury dining booking process
    setTimeout(() => {
      const bookingId = "TPZ-" + Math.floor(100000 + Math.random() * 900000);
      const newBooking: ReservationData = {
        id: bookingId,
        ...formData,
      };

      // Store in localStorage
      const existing = JSON.parse(localStorage.getItem("topaz-bookings") || "[]");
      existing.push(newBooking);
      localStorage.setItem("topaz-bookings", JSON.stringify(existing));

      setIsSubmitting(false);
      setConfirmedBooking(newBooking);
      
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#023c2a", "#ffffff"],
      });
    }, 1200);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      guests: 2,
      requests: "",
    });
  };

  return (
    <section id="reservation" className="relative py-24 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-amber-500" />
            <span className="text-amber-600 dark:text-amber-400 font-medium text-xs tracking-[0.3em] uppercase">
              Table Reservation
            </span>
            <span className="w-6 h-[1px] bg-amber-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight">
            Reserve Your Table
          </h2>
          <p className="text-stone-500 dark:text-stone-400 font-light text-sm sm:text-base leading-relaxed">
            Secure your table for a memorable dining experience. For banquets and parties over 15 guests, please contact us directly.
          </p>
        </div>

        {/* Main Reservation Form */}
        <div className="relative rounded-3xl p-8 sm:p-12 glass-gold shadow-xl border border-amber-400/20 backdrop-blur-md">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rohan Patel"
                  className={`w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border ${
                    errors.name ? "border-red-500" : "border-stone-200 dark:border-stone-800"
                  } focus:border-amber-400 outline-none transition-colors text-sm text-stone-900 dark:text-white`}
                />
                {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border ${
                    errors.phone ? "border-red-500" : "border-stone-200 dark:border-stone-800"
                  } focus:border-amber-400 outline-none transition-colors text-sm text-stone-900 dark:text-white`}
                />
                {errors.phone && <span className="text-[10px] text-red-500">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. rohan@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border ${
                    errors.email ? "border-red-500" : "border-stone-200 dark:border-stone-800"
                  } focus:border-amber-400 outline-none transition-colors text-sm text-stone-900 dark:text-white`}
                />
                {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
              </div>

              {/* Number of Guests */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Number of Guests</label>
                <div className="relative">
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 focus:border-amber-400 outline-none appearance-none transition-colors text-sm text-stone-900 dark:text-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                      <option key={num} value={num} className="bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-white">
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                  <Users size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Booking Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border ${
                      errors.date ? "border-red-500" : "border-stone-200 dark:border-stone-800"
                    } focus:border-amber-400 outline-none transition-colors text-sm text-stone-900 dark:text-white`}
                  />
                </div>
                {errors.date && <span className="text-[10px] text-red-500">{errors.date}</span>}
              </div>

              {/* Time */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Preferred Time</label>
                <div className="relative">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border ${
                      errors.time ? "border-red-500" : "border-stone-200 dark:border-stone-800"
                    } focus:border-amber-400 outline-none appearance-none transition-colors text-sm text-stone-900 dark:text-white`}
                  >
                    <option value="" className="bg-stone-100 dark:bg-stone-950">Select Time</option>
                    {["11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"].map((t) => (
                      <option key={t} value={t} className="bg-stone-100 dark:bg-stone-950">
                        {t}
                      </option>
                    ))}
                  </select>
                  <Clock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                </div>
                {errors.time && <span className="text-[10px] text-red-500">{errors.time}</span>}
              </div>

            </div>

            {/* Special Requests */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-stone-700 dark:text-stone-300">Special Request / Celebration Occasion</label>
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleInputChange}
                rows={3}
                placeholder="e.g. Birthday celebration setting, window table, high-chair for baby, etc."
                className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 focus:border-amber-400 outline-none transition-colors text-sm text-stone-900 dark:text-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-amber-500/15 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-stone-950" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Booking...
                  </>
                ) : (
                  <>
                    <ClipboardCheck size={16} />
                    Confirm Reservation
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* Confirmation Modal Receipt */}
      <AnimatePresence>
        {confirmedBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-stone-950/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-zinc-900 border border-amber-400/30 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative"
            >
              
              {/* Receipt Header styling */}
              <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 p-8 text-center text-white border-b border-amber-400/20 relative">
                <button
                  onClick={handleReset}
                  className="absolute top-4 right-4 text-white/60 hover:text-amber-400 transition-colors"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <Check size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold tracking-wide">Reservation Confirmed</h3>
                <p className="text-amber-400/80 text-[10px] tracking-[0.2em] uppercase mt-2 font-light">Topaz Gastronomy Voucher</p>
              </div>

              {/* Receipt Details Body */}
              <div className="p-8 space-y-6 text-stone-800 dark:text-stone-200">
                <div className="flex justify-between items-center pb-4 border-b border-stone-100 dark:border-stone-800">
                  <span className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">Voucher ID</span>
                  <span className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400">{confirmedBooking.id}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div>
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-0.5">Guest Name</span>
                    <span className="font-semibold">{confirmedBooking.name}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-0.5">Contact</span>
                    <span className="font-semibold">{confirmedBooking.phone}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-0.5">Date</span>
                    <span className="font-semibold">{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-0.5">Time Slot</span>
                    <span className="font-semibold">{confirmedBooking.time}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-0.5">Guests</span>
                    <span className="font-semibold">{confirmedBooking.guests} People</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-0.5">Status</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <Sparkles size={12} className="animate-pulse" /> Active
                    </span>
                  </div>
                </div>

                {confirmedBooking.requests && (
                  <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800/50 text-xs italic">
                    <span className="block text-[10px] text-stone-500 dark:text-stone-400 uppercase not-italic tracking-wider font-bold mb-1">Notes:</span>
                    "{confirmedBooking.requests}"
                  </div>
                )}

                <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-3 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white transition-all text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Printer size={14} /> Print Ticket
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-950 transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
