import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    openCheckout
  } = useCart();

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#24271D]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6EE] border-l border-[#D9CBB6] shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 border-b border-[#D9CBB6]/50 bg-[#F3EBDD]/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FAF6EE] rounded-full border border-[#D9CBB6]/60 text-[#303D24]">
                <ShoppingBag className="w-5 h-5 text-[#ED704D]" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#24271D]">Your Selection</h2>
                <p className="text-xs text-[#687158]">Freshly cooked to order</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="p-2 text-[#687158] hover:text-[#24271D] hover:bg-[#FAF6EE] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#F3EBDD] flex items-center justify-center border-2 border-dashed border-[#D9CBB6]">
                  <ShoppingBag className="w-9 h-9 text-[#687158]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#24271D]">Your cart is empty</h3>
                <p className="text-sm text-[#687158] max-w-xs">
                  Discover our rich biryanis, sizzling copper karahis, and gourmet delights.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 px-6 py-2.5 bg-[#303D24] hover:bg-[#24271D] text-white text-sm font-medium rounded-full transition-colors"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(({ dish, quantity }) => (
                  <div
                    key={dish.id}
                    className="flex gap-4 p-3.5 bg-white/80 rounded-2xl border border-[#D9CBB6]/60 shadow-sm hover:border-[#ED704D]/40 transition-all"
                  >
                    {/* Dish thumbnail with soft organic rim */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#F3EBDD] border border-[#D9CBB6]/40">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h4 className="font-serif text-lg font-bold text-[#24271D] leading-snug">
                            {dish.name}
                          </h4>
                          <span className="inline-block text-xs font-semibold px-2 py-0.5 bg-[#F3EBDD] text-[#687158] rounded-full mt-0.5">
                            {dish.category}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(dish.id)}
                          aria-label={`Remove ${dish.name} from cart`}
                          className="text-[#687158] hover:text-[#ED704D] p-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#D9CBB6]/20">
                        <span className="font-serif font-bold text-[#303D24] text-base">
                          PKR {(dish.price * quantity).toLocaleString()}
                        </span>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 bg-[#FAF6EE] rounded-full border border-[#D9CBB6]/60 px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, quantity - 1)}
                            aria-label="Decrease quantity"
                            className="p-1 text-[#687158] hover:text-[#303D24] rounded-full"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#24271D]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(dish.id, quantity + 1)}
                            aria-label="Increase quantity"
                            className="p-1 text-[#687158] hover:text-[#303D24] rounded-full"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-[#687158] hover:text-[#ED704D] underline transition-colors"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#D9CBB6] bg-[#F3EBDD]/80 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#687158]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#24271D]">PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#687158]">
                  <span>Estimated Tax</span>
                  <span className="italic">Included</span>
                </div>
                <div className="flex justify-between text-lg font-serif font-bold text-[#24271D] pt-2 border-t border-[#D9CBB6]/50">
                  <span>Total (Demo)</span>
                  <span className="text-[#303D24] text-xl">PKR {subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={openCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#ED704D] hover:bg-[#dc5f3c] text-white font-medium rounded-full shadow-md shadow-[#ED704D]/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Proceed to Demo Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#687158] italic">
                  Frontend simulation • No real payment will be charged
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
