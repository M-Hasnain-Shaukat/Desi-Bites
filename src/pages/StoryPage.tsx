import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Utensils, Users } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const StoryPage: React.FC = () => {
  const { openReservation } = useCart();

  // 4 Story Chapters using the authentic user pictures in big organic frames with text on left/right
  const storyChapters = [
    {
      id: '01',
      tag: 'Heritage & Roots',
      title: 'Recipes Born from Generational Secrets',
      description: 'At Desi Bites, our cooking is an act of preservation. We honour authentic Pakistani culinary traditions passed down through generations — slow-simmered in hand-hammered copper handis and seasoned cast iron over gentle fires to achieve depth, tenderness, and rich aromatics that evoke the warmth of home.',
      quote: 'Slow-simmered in copper handis with traditional desi ghee.',
      image: '/images/story-1.webp',
      alt: 'Authentic slow-cooked copper handi Pakistani feast',
      icon: Sparkles,
      // Left side text, Right side big frame
      imageOnRight: true,
      borderRadius: '46% 54% 50% 50% / 54% 48% 52% 46%',
    },
    {
      id: '02',
      tag: 'Pure Ingredients',
      title: 'Hand-Selected Spices, Ground Fresh Every Dawn',
      description: 'True desi flavour demands uncompromising purity. We hand-select whole coriander seeds, roasted cumin, sun-dried Kashmiri chillies, pure golden desi ghee, and wild mountain herbs. Every morning in our kitchen, whole spices are roasted and stone-ground in traditional mortars to release their essential oils and vibrant fragrance.',
      quote: 'Zero artificial additives. 100% stone-ground whole spices.',
      image: '/images/story-2.webp',
      alt: 'Traditional artisanal spices and fresh ingredients preparation',
      icon: Utensils,
      // Left side big frame, Right side text
      imageOnRight: false,
      borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%',
    },
    {
      id: '03',
      tag: 'The Kitchen Craft',
      title: 'Charcoal Embers & Glowing Clay Tandoors',
      description: 'Our open hearth is a masterclass in fire, patience, and smoke. Skewered seekh kebabs and succulent boti tikka are seared directly over glowing lump charcoal embers to lock in savoury juices, while pillowy tandoori roghani naans are hand-stretched and baked against the scorching terracotta walls of authentic clay tandoors.',
      quote: 'Live woodfire embers and authentic terracotta clay ovens.',
      image: '/images/story-3.webp',
      alt: 'Clay tandoor and live charcoal grilling in authentic kitchen',
      icon: Heart,
      // Left side text, Right side big frame
      imageOnRight: true,
      borderRadius: '48% 52% 44% 56% / 56% 44% 52% 48%',
    },
    {
      id: '04',
      tag: 'Warm Gathering',
      title: 'A Sanctuary Where Food Brings People Closer',
      description: 'More than a restaurant, Desi Bites is a sanctuary of warmth, comfort, and joy. Under the gentle amber glow of hand-carved lanterns, surrounded by warm travertine textures and the laughter of family, every meal becomes a memorable celebration of togetherness and shared heritage.',
      quote: 'Generous hospitality designed for family feasts and celebrations.',
      image: '/images/story-4.webp',
      alt: 'Family and friends gathering warmly around a Pakistani dinner feast',
      icon: Users,
      // Left side big frame, Right side text
      imageOnRight: false,
      borderRadius: '50% 50% 54% 46% / 48% 52% 48% 52%',
    },
  ];

  return (
    <div className="w-full bg-[#FAF6EE] text-[#24271D]">
      
      {/* 1. HERO HEADER WITH MASTER CHEF SERVING PHOTO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Authentic Story Copy */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10 pr-0 lg:pr-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
                Heritage & Heart
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-[#24271D] leading-[1.04] tracking-tight">
                Rooted in tradition.<br />
                Shared with love<span className="text-[#ED704D]">.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#303D24]/85 max-w-lg leading-relaxed font-normal">
                Desi Bites was born from a simple belief — that food has the power to bring people together. Our recipes are inspired by generations, our spaces are filled with warmth, and every dish is a celebration of home.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openReservation}
                  className="px-8 py-3.5 bg-[#303D24] hover:bg-[#24271D] text-white text-sm sm:text-base font-medium rounded-full shadow-md shadow-[#303D24]/25 transition-all transform hover:-translate-y-0.5"
                >
                  Join Our Table
                </button>
                <Link
                  to="/menu"
                  className="px-8 py-3.5 bg-[#FAF6EE] hover:bg-[#F3EBDD] text-[#303D24] border border-[#303D24]/40 text-sm sm:text-base font-medium rounded-full transition-colors"
                >
                  Explore Recipes
                </Link>
              </div>
            </div>

            {/* Right Column: Master Chef Serving Dining Guests Photo in Sculpted Frame */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
              <div 
                style={{ borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%' }}
                className="relative w-full max-w-[580px] aspect-[4/3] sm:aspect-[4/3.1] overflow-hidden border-[12px] sm:border-[16px] border-[#F3EBDD] bg-[#EAE0D0] shadow-2xl shadow-[#303D24]/15 group transition-all duration-500 hover:scale-[1.01]"
              >
                <img
                  src="/images/story_chef_serving.webp"
                  alt="Pakistani master chef serving fresh steaming karahi to dining guests"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 4 CHAPTERS IN BIG FRAMES WITH ALTERNATING TEXT ON LEFT OR RIGHT */}
      <section className="py-16 sm:py-20 bg-[#F3EBDD]/40 border-t border-[#D9CBB6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {storyChapters.map((chapter) => {
            const Icon = chapter.icon;

            return (
              <div
                key={chapter.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    chapter.imageOnRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#303D24] text-[#FAF6EE] flex items-center justify-center text-xs font-bold font-mono">
                      {chapter.id}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
                      {chapter.tag}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24271D] leading-tight">
                    {chapter.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#303D24]/85 leading-relaxed font-normal">
                    {chapter.description}
                  </p>

                  <div className="pt-2 flex items-start gap-3 p-4 rounded-2xl bg-[#FAF6EE] border border-[#D9CBB6]/70 shadow-xs">
                    <Icon className="w-5 h-5 text-[#ED704D] shrink-0 mt-0.5" />
                    <p className="font-serif italic text-sm sm:text-base text-[#303D24]">
                      “{chapter.quote}”
                    </p>
                  </div>
                </div>

                {/* Big Frame Image Column */}
                <div
                  className={`lg:col-span-6 relative flex justify-center ${
                    chapter.imageOnRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    style={{ borderRadius: chapter.borderRadius }}
                    className="cursor-pointer relative w-full max-w-xl aspect-[4/3] sm:aspect-[4/3.1] overflow-hidden border-[12px] sm:border-[16px] md:border-[18px] border-[#F3EBDD] bg-[#EAE0D0] shadow-2xl shadow-[#303D24]/12 transition-all duration-500 transform hover:scale-[1.01] hover:-translate-y-1 group"
                  >
                    <img
                      src={chapter.image}
                      alt={chapter.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SCULPTED STONE QUOTE & INVITATION SECTION */}
      <section className="py-20 bg-[#303D24] text-[#FAF6EE] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
            Join Our Story
          </span>
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6EE] font-bold leading-tight">
            “Food has the power to bring people together.”
          </p>
          <p className="text-sm sm:text-base text-[#D9CBB6] max-w-lg mx-auto leading-relaxed">
            Come share laughter, memories, and authentic generational flavours at Desi Bites.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openReservation}
              className="px-8 py-3.5 bg-[#ED704D] hover:bg-[#dc5f3c] text-white font-medium rounded-full shadow-lg transition-transform hover:scale-105 text-sm"
            >
              Book a Table
            </button>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF6EE] hover:bg-[#F3EBDD] text-[#303D24] font-medium rounded-full shadow-lg transition-transform hover:scale-105 text-sm"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
