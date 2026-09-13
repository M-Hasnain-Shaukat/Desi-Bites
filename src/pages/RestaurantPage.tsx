import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Maximize2, Sparkles, Users } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface DiningSpace {
  id: string;
  title: string;
  tagline: string;
  image: string;
  category: string;
  capacity: string;
  atmosphere: string;
  desc: string;
  highlights: string[];
}

export const RestaurantPage: React.FC = () => {
  const { openReservation } = useCart();
  const [activeModalSpace, setActiveModalSpace] = useState<DiningSpace | null>(null);

  const spaces: DiningSpace[] = [
    {
      id: 'facade',
      title: 'The Grand Mughal Facade & Entrance',
      tagline: 'Hand-carved solid teak portals & dusk lantern luminescence.',
      image: '/images/restaurant-4.webp',
      category: 'Arrival Experience',
      capacity: 'Grand Arrival & Foyer',
      atmosphere: 'Regal, welcoming, dusk lantern illumination',
      desc: 'Your sensory journey starts before stepping inside. Ancient terracotta urns, scalloped sandstone archways, and warm ambient brass lanterns welcome you into Lahore’s most enchanting dining retreat.',
      highlights: ['Intricately hand-carved teak double doors', 'Authentic Mughal scalloped sandstone arch', 'Warm ambient Moroccan brass lanterns']
    },
    {
      id: 'courtyard',
      title: 'The Grand Dining Courtyard & Hall',
      tagline: 'Towering illuminated arches draped in lush cascading ivy.',
      image: '/images/restaurant-1.webp',
      category: 'Main Dining Hall',
      capacity: 'Up to 90 guests',
      atmosphere: 'Lively, warm lantern glow, celebratory',
      desc: 'Our central dining sanctuary set beneath soaring heritage arches. Enjoy the soft amber glow of filigree chandeliers, Persian kilim runners, carved teak tables, and the vibrant hum of family banquets.',
      highlights: ['Soaring arched colonnades with trailing greenery', 'Filigree brass lanterns casting geometric shadows', 'Handcrafted teak tables with cane back seating']
    },
    {
      id: 'kitchen',
      title: 'The Live Heritage Tandoor & Open Kitchen',
      tagline: 'Generational masters baking fresh rogheni naan over live clay embers.',
      image: '/images/restaurant-2.webp',
      category: 'Artisan Kitchen',
      capacity: "Chef's Counter & Viewing Gallery",
      atmosphere: 'Sizzling, aromatic, culinary craft',
      desc: 'Witness the culinary theatrics of authentic clay tandoors and copper karahis. Fresh dough slapped to the fiery clay oven walls and generational spice blends roasted over crackling open flames.',
      highlights: ['Traditional sunken clay tandoor pit', 'Hammered copper handis and seasoned karahis', 'Daily freshly roasted spice blends and rogheni naans']
    },
    {
      id: 'fountain',
      title: 'The Royal Haveli Fountain Courtyard',
      tagline: 'Open-air twilight dining serenaded by carved marble water fountains.',
      image: '/images/restaurant-3.webp',
      category: 'Al Fresco Courtyard',
      capacity: 'Up to 60 guests',
      atmosphere: 'Serene, romantic, open twilight sky',
      desc: 'An enchanting open-air courtyard framed by vibrant bougainvillea flowers, terracotta mosaic paving, and plush olive velvet diwans for unforgettable evenings under the Lahore stars.',
      highlights: ['Eight-pointed carved marble water fountain', 'Cascading magenta bougainvillea on sandstone walls', 'Plush olive velvet diwan seating with brass tables']
    }
  ];

  return (
    <div className="w-full bg-[#FAF6EE] text-[#24271D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-14 bg-gradient-to-b from-[#F3EBDD]/90 to-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#303D24]/10 text-xs font-bold uppercase tracking-widest text-[#303D24]">
            <Sparkles className="w-3.5 h-3.5 text-[#ED704D]" />
            Ambiance & Architecture
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#24271D] leading-[1.05] tracking-tight">
            The Restaurant<span className="text-[#ED704D]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#303D24]/85 leading-relaxed max-w-2xl mx-auto">
            A sanctuary where four centuries of Mughal architectural splendour meet genuine Pakistani warmth. Discover our 4 distinct dining realms.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openReservation}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#303D24] hover:bg-[#24271D] active:bg-[#1a1c14] text-white font-medium rounded-full shadow-lg shadow-[#303D24]/20 text-sm transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-[#ED704D]" />
              <span>Reserve a Table</span>
            </button>
            <a
              href="#spaces-showcase"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FAF6EE] hover:bg-[#F3EBDD] text-[#303D24] border border-[#303D24]/30 font-medium rounded-full text-sm transition-colors"
            >
              <span>Explore 4 Spaces ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SPACES SHOWCASE (All 4 Images) */}
      <section id="spaces-showcase" className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {spaces.map((space, idx) => (
            <div
              key={space.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame with Zoom Overlay */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div 
                  onClick={() => setActiveModalSpace(space)}
                  className="group relative cursor-pointer rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-[10px] sm:border-[14px] border-[#F3EBDD] shadow-2xl bg-[#F3EBDD] aspect-[16/11] transition-transform duration-500 hover:scale-[1.01]"
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient & Hover Indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Badges on Image */}
                  <div className="absolute top-5 left-5 bg-[#FAF6EE]/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-[#303D24] shadow-md border border-[#D9CBB6] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ED704D]" />
                    <span>{space.category}</span>
                  </div>

                  <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm group-hover:bg-[#ED704D] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#FAF6EE]/90">
                      <Users className="w-3.5 h-3.5 text-[#ED704D]" />
                      <span>{space.capacity}</span>
                    </div>
                    <span className="text-xs text-white/80 underline underline-offset-4 group-hover:text-[#FAF6EE]">
                      Click to expand photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Text & Narrative Content */}
              <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ED704D]">
                    Space 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#687158]">•</span>
                  <span className="text-xs text-[#687158] font-medium">{space.atmosphere}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24271D] leading-tight">
                  {space.title}
                </h2>

                <p className="font-serif text-lg text-[#303D24] italic font-medium">
                  “{space.tagline}”
                </p>

                <p className="text-sm sm:text-base text-[#687158] leading-relaxed">
                  {space.desc}
                </p>

                {/* Architectural Highlights */}
                <div className="pt-2 space-y-2">
                  {space.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#303D24]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ED704D] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={openReservation}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#303D24] hover:bg-[#24271D] text-white text-xs sm:text-sm font-medium rounded-full shadow-md transition-all hover:translate-x-0.5"
                  >
                    <span>Reserve in this Space</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ED704D]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalSpace(space)}
                    className="text-xs sm:text-sm font-semibold text-[#687158] hover:text-[#303D24] transition-colors"
                  >
                    View High-Res
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 4-IMAGE MINI GALLERY GRID */}
      <section className="py-16 bg-[#F3EBDD]/60 border-t border-[#D9CBB6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
              Photographic Tour
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#24271D]">
              A Glimpse Into Desi Bites
            </h3>
            <p className="text-sm text-[#687158]">
              Every corner of our sanctuary has been crafted with heritage sandstone, handcrafted teak, and intimate lighting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaces.map((space) => (
              <div
                key={space.id}
                onClick={() => setActiveModalSpace(space)}
                className="group cursor-pointer bg-[#FAF6EE] rounded-[2rem] p-3.5 border border-[#D9CBB6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[#F3EBDD]">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="pt-3 pb-1 px-1">
                  <p className="text-xs font-bold text-[#ED704D] uppercase tracking-wider">{space.category}</p>
                  <h4 className="font-serif font-bold text-base text-[#24271D] group-hover:text-[#ED704D] transition-colors line-clamp-1 mt-0.5">
                    {space.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Reservation Callout */}
          <div className="mt-14 p-8 sm:p-10 rounded-[2.5rem] bg-[#303D24] text-[#FAF6EE] text-center space-y-4 shadow-xl">
            <h4 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to Experience Desi Bites?
            </h4>
            <p className="text-sm text-[#D9CBB6] max-w-xl mx-auto">
              Tables fill quickly for evening dinner services and weekend family banquets. Reserve your preferred dining space online.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={openReservation}
                className="px-8 py-3.5 bg-[#ED704D] hover:bg-[#dc5f3c] text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105 text-sm"
              >
                Book Your Table Online →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FULLSCREEN PHOTO LIGHTBOX MODAL */}
      {activeModalSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-5xl w-full bg-[#FAF6EE] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#D9CBB6] animate-scale-up">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalSpace(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalSpace.image}
                alt={activeModalSpace.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF6EE]">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ED704D]">
                  {activeModalSpace.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24271D]">
                  {activeModalSpace.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#687158]">
                  {activeModalSpace.capacity} • {activeModalSpace.atmosphere}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalSpace(null);
                    openReservation();
                  }}
                  className="px-6 py-3 bg-[#303D24] hover:bg-[#24271D] text-white font-medium rounded-full text-xs sm:text-sm shadow-md transition-all"
                >
                  Reserve This Space
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
