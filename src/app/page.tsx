import React from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Banquets from "@/components/Banquets";
import SpecialFeatures from "@/components/SpecialFeatures";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import FloatingReserve from "@/components/FloatingReserve";

export default function Home() {
  return (
    <>
      {/* 5-Star Entrance Page Loader */}
      <Loader />

      {/* Glassmorphism Header Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Full-Screen Ken Burns Banner Slider */}
        <Hero />

        {/* Heritage Storytelling */}
        <About />

        {/* Dynamic Category Filtering Dishes */}
        <Menu />

        {/* Event Venues Details */}
        <Banquets />

        {/* Value Indicators */}
        <SpecialFeatures />

        {/* Pinterest-style Masonry Showcase */}
        <Gallery />

        {/* Guest Feedback Slides */}
        <Testimonials />

        {/* LocalStorage Reservation Portal */}
        <Reservation />
      </main>

      {/* Contact Timings & Map Footer */}
      <Contact />

      {/* Context-aware Floating Booking Shortcut */}
      <FloatingReserve />
    </>
  );
}
