import React from 'react';
import { Plus, Flame, Leaf } from 'lucide-react';
import type { MenuItem } from '../../data/menuData';
import { useCart } from '../../context/CartContext';

interface MughalArchCardProps {
  dish: MenuItem;
  variantIndex?: number;
}

// 3 Exact organic asymmetrical pebble frame shapes matching the reference image
const ORGANIC_BORDER_RADII = [
  '45% 55% 48% 52% / 54% 46% 54% 46%',
  '52% 48% 54% 46% / 46% 54% 46% 54%',
  '48% 52% 44% 56% / 56% 44% 52% 48%',
];

export const MughalArchDefs: React.FC = () => null;

export const MughalArchCard: React.FC<MughalArchCardProps> = ({ dish, variantIndex = 0 }) => {
  const { addToCart, setSelectedDishForModal } = useCart();
  const borderRadius = ORGANIC_BORDER_RADII[variantIndex % 3];

  return (
    <div className="group relative bg-[#F5EDE0]/70 hover:bg-[#F3EBDD] rounded-[2.2rem] sm:rounded-[2.8rem] p-4 sm:p-5 border-2 border-[#D9CBB6]/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
      
      {/* 1. AUTHENTIC ORGANIC PEBBLE FRAME WITH THICK CREAM RIM */}
      <div 
        onClick={() => setSelectedDishForModal(dish)}
        style={{ borderRadius }}
        className="cursor-pointer relative w-full aspect-[4/3.2] overflow-hidden border-[8px] sm:border-[10px] border-[#F3EBDD] bg-[#EAE0D0] shadow-md group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-[1.02]"
      >
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle warm depth vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 pointer-events-none transition-opacity" />

        {/* Category & Dietary Badges */}
        <div className="absolute top-2.5 left-2.5 bg-[#FAF6EE]/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10.5px] font-bold text-[#303D24] shadow-sm border border-[#D9CBB6]/60">
          {dish.category}
        </div>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
          {dish.spicyLevel > 0 && (
            <span className="p-1.5 bg-[#FAF6EE]/95 rounded-full shadow-xs text-[#ED704D]" title={`Spiciness: Level ${dish.spicyLevel}`}>
              <Flame className="w-3.5 h-3.5" />
            </span>
          )}
          {dish.isVegetarian && (
            <span className="p-1.5 bg-[#FAF6EE]/95 rounded-full shadow-xs text-[#303D24]" title="Vegetarian">
              <Leaf className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>

      {/* 2. DISH TITLE & INGREDIENTS */}
      <div className="pt-4 flex flex-col justify-between flex-1">
        <div>
          <h3 
            onClick={() => setSelectedDishForModal(dish)}
            className="font-serif text-xl sm:text-2xl font-bold text-[#24271D] group-hover:text-[#ED704D] transition-colors cursor-pointer leading-snug"
          >
            {dish.name}
          </h3>
          
          <p className="text-xs text-[#687158] mt-1.5 line-clamp-2 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* 3. PRICE & CIRCULAR PLUS BUTTON */}
        <div className="pt-4 flex items-center justify-between mt-3 border-t border-[#D9CBB6]/60">
          <div>
            <span className="text-[10px] text-[#687158] uppercase font-bold tracking-wider block">Price</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#24271D]">
              Rs. {dish.price.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(dish, 1)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#303D24] hover:bg-[#ED704D] active:bg-[#24271D] text-white flex items-center justify-center shadow-md shadow-[#303D24]/20 transition-all transform hover:scale-110 active:scale-95"
            aria-label={`Add ${dish.name} to cart`}
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>

    </div>
  );
};
