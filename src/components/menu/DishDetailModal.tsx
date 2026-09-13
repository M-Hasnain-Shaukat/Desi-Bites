import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Clock, Leaf, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const DishDetailModal: React.FC = () => {
  const { selectedDishForModal, setSelectedDishForModal, addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!selectedDishForModal) return null;

  const dish = selectedDishForModal;

  const handleAddToCart = () => {
    addToCart(dish, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      setSelectedDishForModal(null);
      openCart();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#24271D]/60 backdrop-blur-sm transition-opacity"
        onClick={() => setSelectedDishForModal(null)}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl bg-[#FAF6EE] rounded-3xl border border-[#D9CBB6] shadow-2xl overflow-hidden my-6">
          
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedDishForModal(null)}
            aria-label="Close dish preview"
            className="absolute top-4 right-4 z-10 p-2 bg-[#FAF6EE]/90 hover:bg-[#FAF6EE] text-[#303D24] rounded-full shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            
            {/* Dish Image with organic framing */}
            <div className="relative h-64 sm:h-auto bg-[#F3EBDD] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
              
              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#FAF6EE]/95 text-[#303D24] font-semibold text-xs rounded-full shadow-sm border border-[#D9CBB6]">
                  {dish.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                
                {/* Heading & Urdu title */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24271D] leading-tight">
                    {dish.name}
                  </h3>
                  {dish.urduName && (
                    <p className="font-serif text-lg text-[#687158] mt-0.5">
                      {dish.urduName}
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#303D24]">
                  PKR {dish.price.toLocaleString()}
                  <span className="text-xs font-sans text-[#687158] font-normal ml-2">demo price</span>
                </div>

                {/* Badges / Meta */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#687158]">
                  {dish.prepTime && (
                    <span className="flex items-center gap-1 bg-[#F3EBDD] px-2.5 py-1 rounded-full border border-[#D9CBB6]/60">
                      <Clock className="w-3.5 h-3.5 text-[#ED704D]" />
                      <span>{dish.prepTime}</span>
                    </span>
                  )}
                  {dish.spicyLevel > 0 && (
                    <span className="flex items-center gap-1 bg-[#F3EBDD] px-2.5 py-1 rounded-full border border-[#D9CBB6]/60">
                      <Flame className="w-3.5 h-3.5 text-[#ED704D]" />
                      <span>{dish.spicyLevel === 3 ? 'Extra Spicy' : dish.spicyLevel === 2 ? 'Medium Spiced' : 'Mild Spice'}</span>
                    </span>
                  )}
                  {dish.isVegetarian && (
                    <span className="flex items-center gap-1 bg-[#303D24]/10 text-[#303D24] px-2.5 py-1 rounded-full border border-[#303D24]/20">
                      <Leaf className="w-3.5 h-3.5" />
                      <span>Vegetarian</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#24271D]/80 leading-relaxed pt-1">
                  {dish.description}
                </p>

                {/* Ingredients */}
                {dish.ingredients && dish.ingredients.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1.5">
                      Key Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-[11px] bg-white text-[#687158] px-2 py-0.5 rounded-md border border-[#D9CBB6]/60"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions: Quantity + Add to Cart */}
              <div className="pt-4 border-t border-[#D9CBB6]/50 flex items-center gap-4">
                
                {/* Quantity selector */}
                <div className="flex items-center gap-3 bg-white rounded-full border border-[#D9CBB6] px-3 py-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="text-[#687158] hover:text-[#303D24] p-1"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-sm w-4 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="text-[#687158] hover:text-[#303D24] p-1"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={addedNotice}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium text-sm text-white shadow-md transition-all ${
                    addedNotice
                      ? 'bg-[#303D24]'
                      : 'bg-[#ED704D] hover:bg-[#dc5f3c]'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Selection</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart • PKR {(dish.price * quantity).toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
