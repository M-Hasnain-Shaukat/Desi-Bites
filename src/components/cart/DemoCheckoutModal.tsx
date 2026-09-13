import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const DemoCheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, subtotal, items, clearCart } = useCart();

  const [orderType, setOrderType] = useState<'dine-in' | 'pickup' | 'delivery'>('pickup');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (orderType === 'delivery' && !formData.address.trim()) {
      errs.address = 'Delivery address is required for delivery orders';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      clearCart();
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ fullName: '', phone: '', address: '', notes: '' });
    setErrors({});
    closeCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#24271D]/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-lg bg-[#FAF6EE] rounded-3xl border border-[#D9CBB6] shadow-2xl p-6 sm:p-8 my-8 text-[#24271D] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#D9CBB6]/60">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#F3EBDD] rounded-full text-[#ED704D]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Simulated Checkout</h2>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="p-1.5 text-[#687158] hover:text-[#24271D] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#303D24]/10 text-[#303D24] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#303D24]" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#303D24]">
                Demo complete.
              </h3>
              <div className="bg-[#F3EBDD] border border-[#D9CBB6] p-4 rounded-2xl max-w-md mx-auto">
                <p className="text-base font-semibold text-[#24271D]">
                  Your order has not been placed.
                </p>
                <p className="text-xs text-[#687158] mt-1">
                  This is a frontend demonstration showcase for DESI BITES. No real order was transmitted, and no money was collected.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 bg-[#303D24] hover:bg-[#24271D] text-white font-medium rounded-full transition-colors text-sm"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-4 space-y-4">
              
              {/* Mandatory Demo Disclaimer Banner */}
              <div className="flex items-start gap-3 p-3.5 bg-[#ED704D]/10 border border-[#ED704D]/30 rounded-2xl text-xs text-[#24271D]">
                <AlertCircle className="w-4 h-4 text-[#ED704D] shrink-0 mt-0.5" />
                <p>
                  <strong>Demo checkout</strong> — no payment will be collected and no order will be sent.
                </p>
              </div>

              {/* Order Type Toggle */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-2">
                  Fulfillment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['pickup', 'dine-in', 'delivery'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl capitalize transition-all border ${
                        orderType === type
                          ? 'bg-[#303D24] text-white border-[#303D24] shadow-sm'
                          : 'bg-[#F3EBDD]/60 text-[#24271D] border-[#D9CBB6]/60 hover:bg-[#F3EBDD]'
                      }`}
                    >
                      {type === 'dine-in' ? 'Dine-In' : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="space-y-3">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300 1234567"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label htmlFor="address" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      id="address"
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address, house number, area"
                      className="w-full px-4 py-2 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                    />
                    {errors.address && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.address}</p>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Kitchen Preparation Notes (Optional)
                  </label>
                  <input
                    id="notes"
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Extra spicy, less oil, separate raita"
                    className="w-full px-4 py-2 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                  />
                </div>
              </div>

              {/* Order Summary Line */}
              <div className="p-3 bg-[#F3EBDD]/60 rounded-xl border border-[#D9CBB6]/50 flex justify-between items-center text-sm">
                <span className="text-[#687158]">{items.length} items in cart</span>
                <span className="font-serif font-bold text-lg text-[#303D24]">
                  Total: PKR {subtotal.toLocaleString()}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-1/3 py-3 px-4 border border-[#D9CBB6] text-[#687158] hover:text-[#24271D] hover:bg-white text-sm font-medium rounded-full transition-colors flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-2/3 py-3 px-4 bg-[#ED704D] hover:bg-[#dc5f3c] text-white text-sm font-medium rounded-full shadow-md shadow-[#ED704D]/25 transition-all"
                >
                  Place Demo Order
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
