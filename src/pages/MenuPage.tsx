import React, { useState, useMemo } from 'react';
import { Search, UtensilsCrossed, ArrowDown } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, type MenuCategory } from '../data/menuData';
import { MughalArchCard, MughalArchDefs } from '../components/menu/MughalArchCard';

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Desi');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    let list = MENU_ITEMS;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.ingredients?.some(ing => ing.toLowerCase().includes(q))
      );
    } else {
      list = list.filter(item => item.category === selectedCategory);
    }
    return list;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full bg-[#FAF6EE] text-[#24271D]">
      <MughalArchDefs />
      
      {/* 1. SCULPTURAL HERO SHOWCASE (Panel 2 of Reference) */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left side: Heading & Authentic Copy */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8 z-10 pr-0 lg:pr-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-[#24271D] leading-[1.04] tracking-tight">
                Desi favourites,<br />
                made with love<span className="text-[#ED704D]">.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#303D24]/85 max-w-md leading-relaxed font-normal">
                Timeless recipes, authentic ingredients, and bold flavours that feel like home.
              </p>

              <div className="pt-1">
                <a
                  href="#menu-browser"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#303D24] hover:bg-[#24271D] text-white text-sm sm:text-base font-medium rounded-full shadow-md shadow-[#303D24]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Full Menu</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right side: Panel 2 Full Menu Showcase Composition */}
            <div className="lg:col-span-7 relative w-full flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[640px]">
                <img
                  src="/images/full-menu.webp"
                  alt="Desi Bites Full Menu Showcase"
                  className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl drop-shadow-2xl select-none transition-transform duration-500 hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. MENU BROWSER & 5 MAIN SECTIONS */}
      <section id="menu-browser" className="py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#D9CBB6]/60">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
                Culinary Catalogue
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24271D] mt-1">
                Explore Our Menu
              </h2>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#687158] absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search biryani, burger, pasta..."
                className="w-full pl-11 pr-4 py-2.5 bg-[#FAF6EE] rounded-full border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm text-[#24271D]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-2.5 text-xs text-[#687158] hover:text-[#24271D] p-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs (5 required: Desi, Fast Food, Italian, Chinese, Drinks) */}
          <div className="py-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat && !searchQuery.trim();
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSearchQuery('');
                    }}
                    className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#303D24] text-white border-[#303D24] shadow-md shadow-[#303D24]/20 scale-105'
                        : 'bg-[#F3EBDD]/70 text-[#303D24] border-[#D9CBB6]/70 hover:bg-[#F3EBDD] hover:border-[#303D24]/40'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {searchQuery.trim() && (
              <div className="mt-4 flex items-center justify-between text-xs text-[#687158]">
                <p>
                  Showing results for <span className="font-semibold text-[#24271D]">"{searchQuery}"</span> across all 5 sections ({filteredDishes.length} found)
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[#ED704D] underline font-medium"
                >
                  Reset to {selectedCategory}
                </button>
              </div>
            )}
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length === 0 ? (
            <div className="py-16 text-center bg-[#F3EBDD]/40 rounded-3xl border border-dashed border-[#D9CBB6] p-8">
              <UtensilsCrossed className="w-12 h-12 text-[#687158] mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-[#24271D]">No dishes found</h3>
              <p className="text-sm text-[#687158] mt-1 max-w-sm mx-auto">
                We couldn't find any dishes matching "{searchQuery}". Try searching for another item or choose a category.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-4 px-6 py-2.5 bg-[#303D24] text-white text-xs font-medium rounded-full"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredDishes.map((dish, idx) => (
                <MughalArchCard key={dish.id} dish={dish} variantIndex={idx} />
              ))}
            </div>
          )}

          {/* Discreet Menu Demo Note */}
          <div className="mt-12 text-center text-xs text-[#687158] italic border-t border-[#D9CBB6]/40 pt-6">
            * All menu prices, categories, and dishes are for frontend demonstration purposes only.
          </div>

        </div>
      </section>

    </div>
  );
};
