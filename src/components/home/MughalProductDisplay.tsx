import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { MENU_ITEMS, type MenuItem } from '../../data/menuData';

export const MughalProductDisplay: React.FC = () => {
  const { addToCart, setSelectedDishForModal } = useCart();

  // 1 flagship item from each of the 5 categories
  const desiDish = MENU_ITEMS.find(d => d.id === 'desi-1') || ({
    id: 'desi-1',
    name: 'Special Chicken Karahi',
    category: 'Desi',
    description: 'Signature karahi with tender chicken, fresh tomatoes and aromatic spices.',
    price: 1850,
    image: '/images/desi-1.webp',
  } as MenuItem);

  const fastDish = MENU_ITEMS.find(d => d.id === 'fast-1') || ({
    id: 'fast-1',
    name: 'Desi Crunch Zinger',
    category: 'Fast Food',
    description: 'Crispy golden fried chicken breast, spicy coleslaw and house sauce.',
    price: 690,
    image: '/images/fast-1.webp',
  } as MenuItem);

  const italianDish = MENU_ITEMS.find(d => d.id === 'italian-1') || ({
    id: 'italian-1',
    name: 'Woodfired Margherita',
    category: 'Italian',
    description: 'Stonebaked crust with San Marzano tomatoes, fresh mozzarella and basil.',
    price: 1250,
    image: '/images/italian-1.webp',
  } as MenuItem);

  const chineseDish = MENU_ITEMS.find(d => d.id === 'chinese-1') || ({
    id: 'chinese-1',
    name: 'Chicken Manchurian',
    category: 'Chinese',
    description: 'Succulent chicken tossed in a zesty sweet & spicy ginger garlic gravy.',
    price: 890,
    image: '/images/chinese-1.webp',
  } as MenuItem);

  const drinksDish = MENU_ITEMS.find(d => d.id === 'drinks-1') || ({
    id: 'drinks-1',
    name: 'Royal Mango Lassi',
    category: 'Drinks',
    description: 'Thick churned yoghurt blended with sweet ripe mangoes and saffron.',
    price: 350,
    image: '/images/drinks-1.webp',
  } as MenuItem);

  // 5 items with distinct organic asymmetrical pebble frame shapes
  const showcaseDishes = [
    {
      dish: desiDish,
      categoryLabel: 'Desi',
      borderRadius: '45% 55% 48% 52% / 54% 46% 54% 46%',
    },
    {
      dish: fastDish,
      categoryLabel: 'Fast Food',
      borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%',
    },
    {
      dish: italianDish,
      categoryLabel: 'Italian',
      borderRadius: '48% 52% 44% 56% / 56% 44% 52% 48%',
    },
    {
      dish: chineseDish,
      categoryLabel: 'Chinese',
      borderRadius: '50% 50% 54% 46% / 48% 52% 48% 52%',
    },
    {
      dish: drinksDish,
      categoryLabel: 'Drinks',
      borderRadius: '46% 54% 48% 52% / 52% 48% 54% 46%',
    },
  ];

  return (
    <div className="w-full relative py-6">
      {/* 5-Column Display with 1 item from each category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6 items-start">
        {showcaseDishes.map(({ dish, categoryLabel, borderRadius }) => (
          <div
            key={dish.id}
            className="group flex flex-col items-center text-center transition-all duration-300"
          >
            {/* Category Pill Tag */}
            <span className="text-[10.5px] uppercase tracking-widest font-bold text-[#ED704D] bg-[#FAF6EE] border border-[#D9CBB6]/80 px-3.5 py-1 rounded-full mb-3 shadow-xs">
              {categoryLabel}
            </span>

            {/* The Authentic Organic Pebble Frame with Thick Cream Plaster Rim */}
            <div
              onClick={() => setSelectedDishForModal(dish)}
              style={{ borderRadius }}
              className="cursor-pointer relative w-full aspect-[4/3.2] overflow-hidden border-[8px] sm:border-[10px] lg:border-[11px] border-[#F3EBDD] bg-[#EAE0D0] shadow-lg hover:shadow-2xl shadow-[#303D24]/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>

            {/* Dish Details Below Frame */}
            <div className="mt-4 flex flex-col items-center w-full px-1">
              <h3
                onClick={() => setSelectedDishForModal(dish)}
                className="font-serif text-lg sm:text-xl font-bold text-[#24271D] group-hover:text-[#ED704D] transition-colors cursor-pointer leading-tight tracking-tight min-h-[2.8rem] flex items-center justify-center"
              >
                {dish.name}
              </h3>
              
              <p className="text-xs text-[#687158] mt-1 line-clamp-2 max-w-xs leading-relaxed min-h-[2rem]">
                {dish.description}
              </p>

              <div className="mt-3 pt-3 border-t border-[#D9CBB6]/60 flex items-center justify-between w-full px-2">
                <span className="font-serif font-bold text-base sm:text-lg text-[#303D24]">
                  Rs. {dish.price.toLocaleString()}
                </span>

                <button
                  type="button"
                  onClick={() => addToCart(dish, 1)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#303D24] hover:bg-[#ED704D] active:bg-[#24271D] text-white flex items-center justify-center shadow-md shadow-[#303D24]/20 transition-all transform hover:scale-110 active:scale-95"
                  aria-label={`Add ${dish.name} to cart`}
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
