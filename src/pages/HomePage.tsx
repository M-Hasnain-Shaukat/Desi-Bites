import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { HeroDishSteam } from '../components/home/HeroDishSteam';
import { MughalProductDisplay } from '../components/home/MughalProductDisplay';
import { MughalArchDefs } from '../components/menu/MughalArchCard';

export const HomePage: React.FC = () => {
  const { openReservation } = useCart();

  return (
    <div className="w-full bg-[#FAF6EE] text-[#24271D]">
      <MughalArchDefs />
      
      {/* 1. HERO SECTION (Full screen first view with responsive desktop and mobile backgrounds) */}
      <section className="relative overflow-hidden w-full h-screen max-h-screen flex flex-col justify-between">
        {/* Desktop Master Background */}
        <div 
          className="hero-desktop-bg absolute inset-0 bg-no-repeat bg-cover bg-right"
          style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
          aria-hidden="true"
        />

        {/* Mobile & Tablet Master Portrait Background */}
        <div 
          className="hero-mobile-bg absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-mobile.webp')" }}
          aria-hidden="true"
        />

        {/* Live Realistic Culinary Steam Effect rising from freshly cooked chicken karahi */}
        <HeroDishSteam />

        {/* Content Container filling full screen height */}
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6">
          
          {/* Middle Body: Headline & Description */}
          <div className="max-w-xl lg:max-w-lg space-y-3.5 sm:space-y-4.5 mt-4 sm:mt-6 lg:mt-7 mb-auto">
            
            {/* Grand Serif Headline with Coral Full Stop */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5.2rem] font-bold text-[#24271D] leading-[1.04] tracking-tight">
              A little spice.<br />
              A lot of soul<span className="text-[#ED704D]">.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#303D24]/90 max-w-md leading-relaxed font-normal">
              Authentic Pakistani flavours, warm hospitality, and a place where good food brings people closer.
            </p>

            {/* Desktop Action Buttons */}
            <div className="hero-desktop-buttons flex-wrap items-center gap-3 sm:gap-4 pt-2.5 sm:pt-3.5 w-full sm:w-auto">
              {/* Explore Menu: Deep Olive Filled Pill */}
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 bg-[#303D24] hover:bg-[#24271D] active:bg-[#1a1c14] text-white text-sm sm:text-base font-medium rounded-full shadow-md shadow-[#303D24]/25 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D]"
              >
                <span>Explore Menu</span>
                <span aria-hidden="true" className="text-lg leading-none">→</span>
              </Link>

              {/* Book a Table: Outlined Pill */}
              <button
                type="button"
                onClick={openReservation}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 bg-[#FAF6EE]/90 hover:bg-[#F3EBDD] text-[#303D24] text-sm sm:text-base font-medium rounded-full border border-[#303D24]/40 hover:border-[#303D24] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D]"
              >
                <span>Book a Table</span>
                <span aria-hidden="true" className="text-lg leading-none">→</span>
              </button>
            </div>

          </div>

          {/* Desktop Bottom Left Tagline: "Good food. Brighter days." */}
          <div className="hero-desktop-tagline items-start gap-3.5 pb-2 sm:pb-3">
            <div className="w-8 h-[2px] bg-[#ED704D] mt-2.5 shrink-0" />
            <div>
              <p className="font-serif text-lg sm:text-xl font-bold text-[#FAF6EE] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-tight">
                Good food.
              </p>
              <p className="font-serif text-lg sm:text-xl text-[#F3EBDD] italic drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-tight">
                Brighter days.
              </p>
            </div>
          </div>

          {/* Mobile & Tablet Bottom Horizontal Action Buttons */}
          <div className="hero-mobile-buttons items-center justify-center gap-3 w-full max-w-md mx-auto pb-3 px-1">
            <Link
              to="/menu"
              className="hero-mobile-action-btn flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-bold rounded-full text-center whitespace-nowrap"
            >
              <span>Explore Menu</span>
              <span aria-hidden="true">→</span>
            </Link>

            <button
              type="button"
              onClick={openReservation}
              className="hero-mobile-action-btn flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-bold rounded-full text-center whitespace-nowrap"
            >
              <span>Book a Table</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>

        </div>
      </section>



      {/* 2. SIGNATURE DISHES PREVIEW */}
      <section className="py-16 bg-[#F3EBDD]/60 border-t border-[#D9CBB6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
                Culinary Highlights
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24271D] mt-1.5">
                Picks from Every Category
              </h2>
              <p className="text-[#687158] text-sm sm:text-base mt-2 max-w-lg">
                Taste handpicked favorites from Desi, Fast Food, Italian, Chinese, and Drinks.
              </p>
            </div>

            <Link
              to="/menu"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#303D24] hover:text-[#ED704D] font-serif font-bold text-lg group"
            >
              <span>Explore 5-Section Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Exact Architectural Mughal Cusped Arch Product Display */}
          <MughalProductDisplay />

        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="py-20 bg-[#FAF6EE] border-t border-[#D9CBB6]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 4-Photo Story Mosaic */}
            <div className="lg:col-span-6 relative pb-6 sm:pb-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-3xl border-4 border-[#F3EBDD] shadow-lg group">
                    <img
                      src="/images/story-1.webp"
                      alt="Desi Bites generational culinary traditions"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border-4 border-[#F3EBDD] shadow-lg group">
                    <img
                      src="/images/story-2.webp"
                      alt="Desi Bites artisanal spices and fresh ingredients"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="overflow-hidden rounded-3xl border-4 border-[#F3EBDD] shadow-lg group">
                    <img
                      src="/images/story-3.webp"
                      alt="Desi Bites warm dining ambience and lantern lighting"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border-4 border-[#F3EBDD] shadow-lg group">
                    <img
                      src="/images/story-4.webp"
                      alt="Desi Bites family feasts and hospitality"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#303D24] text-[#FAF6EE] px-5 py-2 rounded-full shadow-xl text-xs font-medium tracking-wide flex items-center gap-2 border border-[#D9CBB6]/30 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#ED704D]" />
                <span>Generational Recipes & Warm Hospitality</span>
              </div>
            </div>

            {/* Right Column: Story Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24271D] leading-tight">
                Rooted in tradition.<br />
                Shared with love<span className="text-[#ED704D]">.</span>
              </h2>
              <p className="text-[#303D24]/85 text-base sm:text-lg leading-relaxed">
                Desi Bites was born from a simple belief — that food has the power to bring people together. Our recipes are inspired by generations, our spaces are filled with warmth, and every dish is a celebration of home.
              </p>
              <div className="pt-2">
                <Link
                  to="/our-story"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#303D24] hover:bg-[#24271D] text-white text-sm font-medium rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INVITATION & RESERVATION CALLOUT */}
      <section className="py-16 bg-[#303D24] text-[#FAF6EE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
            Join Us for Dinner
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAF6EE] max-w-2xl mx-auto leading-tight">
            Come hungry. Leave happy<span className="text-[#ED704D]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D9CBB6] max-w-xl mx-auto leading-relaxed">
            Reserve your table in advance for intimate evenings, family dinners, or special gatherings with authentic Pakistani hospitality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={openReservation}
              className="px-8 py-3.5 bg-[#ED704D] hover:bg-[#dc5f3c] text-white font-medium rounded-full shadow-lg transition-transform hover:scale-105 text-sm"
            >
              Book a Table Now
            </button>
            <Link
              to="/visit"
              className="px-8 py-3.5 bg-transparent hover:bg-white/10 text-[#FAF6EE] border border-[#FAF6EE]/40 font-medium rounded-full transition-colors text-sm"
            >
              Location & Hours
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
