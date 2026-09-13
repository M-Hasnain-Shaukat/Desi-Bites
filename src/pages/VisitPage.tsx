import React, { useState } from 'react';
import { Navigation, Info, Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const VisitPage: React.FC = () => {
  const { openReservation } = useCart();
  const [directionsNotice, setDirectionsNotice] = useState(false);

  const handleGetDirections = () => {
    setDirectionsNotice(true);
    setTimeout(() => {
      setDirectionsNotice(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-[#FAF6EE] text-[#24271D]">
      
      {/* 1. HERO SECTION (Panel 4 of Reference) */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Column: Heading, Supporting Text & Actions */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10 pr-0 lg:pr-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
                Warm Hospitality
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#24271D] leading-[1.04] tracking-tight">
                Come hungry.<br />
                Leave happy<span className="text-[#ED704D]">.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#303D24]/85 max-w-md leading-relaxed font-normal">
                A warm space, great food, and even better company. We can’t wait to welcome you at Desi Bites.
              </p>

              {/* Action Buttons: Book a Table & Get Directions */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={openReservation}
                  className="px-8 py-3.5 bg-[#303D24] hover:bg-[#24271D] text-white text-sm sm:text-base font-medium rounded-full shadow-md shadow-[#303D24]/25 transition-all transform hover:-translate-y-0.5"
                >
                  Book a Table →
                </button>

                <button
                  type="button"
                  onClick={handleGetDirections}
                  className="px-8 py-3.5 bg-[#FAF6EE] hover:bg-[#F3EBDD] text-[#303D24] border border-[#303D24]/40 hover:border-[#303D24] text-sm sm:text-base font-medium rounded-full transition-colors flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#ED704D]" />
                  <span>Get Directions →</span>
                </button>
              </div>

              {/* Notification banner for directions */}
              {directionsNotice && (
                <div className="p-4 bg-[#F3EBDD] border border-[#ED704D]/40 rounded-2xl flex items-start gap-3 shadow-md max-w-md animate-fade-in">
                  <Info className="w-5 h-5 text-[#ED704D] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#24271D]">
                    <p className="font-bold">Location details coming soon</p>
                    <p className="text-[#687158] mt-0.5">
                      Our official venue address in Gulberg III is currently in the final stages of confirmation. We will publish the live map pin shortly!
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Panel 4 Visit Room & Ceramic Vase Composition */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[620px]">
                <img
                  src="/images/visit_room_seamless.webp"
                  alt="Desi Bites warm dining room, lantern lighting, and handmade ceramic pottery"
                  className="w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none transition-transform duration-500 hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE SCULPTED CREAM PANELS (Panel 4 Bottom) */}
      <section className="py-12 bg-[#F3EBDD]/60 border-t border-[#D9CBB6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative w-full overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] border border-[#D9CBB6] shadow-lg bg-[#FAF6EE]">
            <img
              src="/images/visit_cards_hd.webp"
              alt="Opening Hours, Find Us, Reserve a Table"
              className="w-full h-auto object-cover select-none pointer-events-none"
            />
          </div>

          {/* Functional interactive actions below the visual panels */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openReservation}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ED704D] hover:bg-[#dc5f3c] text-white font-medium rounded-full shadow-md text-sm transition-transform hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table Online</span>
            </button>

            <button
              type="button"
              onClick={handleGetDirections}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF6EE] hover:bg-[#F3EBDD] text-[#303D24] border border-[#303D24]/30 font-medium rounded-full text-sm transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#ED704D]" />
              <span>Get Directions</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
