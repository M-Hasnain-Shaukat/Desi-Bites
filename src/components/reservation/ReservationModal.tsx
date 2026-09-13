import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ReservationModal: React.FC = () => {
  const { isReservationOpen, closeReservation } = useCart();

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    time: '19:30',
    guests: '2',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isReservationOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) {
      errs.date = 'Please select a date';
    } else if (formData.date < todayStr) {
      errs.date = 'Reservation date cannot be in the past';
    }
    if (!formData.time) errs.time = 'Please select a preferred time';
    if (!formData.guests) errs.guests = 'Please select the number of guests';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: todayStr,
      time: '19:30',
      guests: '2',
      notes: '',
    });
    setErrors({});
    closeReservation();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Reserve a Table">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#24271D]/65 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-lg bg-[#FAF6EE] rounded-3xl border border-[#D9CBB6] shadow-2xl p-6 sm:p-8 my-6 text-[#24271D] overflow-hidden">
          
          {/* Top sculpted accent */}
          <div className="flex items-center justify-between pb-4 border-b border-[#D9CBB6]/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#F3EBDD] rounded-full text-[#ED704D] border border-[#D9CBB6]/50">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold">Reserve a Table</h2>
                <p className="text-xs text-[#687158]">Experience warm Pakistani hospitality</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="p-2 text-[#687158] hover:text-[#24271D] rounded-full transition-colors focus:outline-none"
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
              <div className="bg-[#F3EBDD] border border-[#D9CBB6] p-4 rounded-2xl max-w-md mx-auto space-y-1">
                <p className="text-base font-semibold text-[#24271D]">
                  Your table has not been booked.
                </p>
                <p className="text-xs text-[#687158]">
                  This is an interactive frontend demonstration. In the live restaurant launch, your reservation request for {formData.guests} guests on {formData.date} at {formData.time} would be sent directly to the maître d'.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 bg-[#303D24] hover:bg-[#24271D] text-white font-medium rounded-full transition-colors text-sm"
                >
                  Close Demo
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-4 space-y-4">
              {/* Mandatory Demo Notice */}
              <div className="flex items-start gap-2.5 p-3 bg-[#ED704D]/10 border border-[#ED704D]/30 rounded-2xl text-xs text-[#24271D]">
                <AlertCircle className="w-4 h-4 text-[#ED704D] shrink-0 mt-0.5" />
                <p>
                  <strong>Demo reservation form</strong> — no booking will be sent.
                </p>
              </div>

              <div className="space-y-3">
                {/* Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Full Name *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ayesha Malik"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0321 9876543"
                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                      Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                    />
                    {errors.date && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                      Preferred Time *
                    </label>
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-2 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="14:30">02:30 PM (Lunch)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="21:30">09:30 PM (Dinner)</option>
                      <option value="22:30">10:30 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

                {/* Guests & Seating */}
                <div>
                  <label htmlFor="res-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm appearance-none"
                    >
                      <option value="1">1 Person (Solo Dining)</option>
                      <option value="2">2 Persons (Couple Table)</option>
                      <option value="4">4 Persons (Family / Friends)</option>
                      <option value="6">6 Persons (Large Family)</option>
                      <option value="8">8 Persons (Party Table)</option>
                      <option value="12+">12+ Persons (Private Dining Hall)</option>
                    </select>
                    <Users className="w-4 h-4 text-[#687158] absolute right-4 top-3 pointer-events-none" />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="res-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                    Seating Preference or Dietary Notes
                  </label>
                  <input
                    id="res-notes"
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Window side, quiet corner, celebrating birthday"
                    className="w-full px-4 py-2 bg-white rounded-xl border border-[#D9CBB6] focus:outline-none focus:ring-2 focus:ring-[#ED704D] text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#ED704D] hover:bg-[#dc5f3c] text-white font-medium rounded-full shadow-md shadow-[#ED704D]/25 transition-all text-sm"
                >
                  Submit Reservation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
