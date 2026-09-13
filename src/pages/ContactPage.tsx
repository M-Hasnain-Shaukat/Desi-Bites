import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const ContactPage: React.FC = () => {
  const { openReservation } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [directionsNotice, setDirectionsNotice] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please type your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }
  };

  const handleGetDirections = () => {
    setDirectionsNotice(true);
    setTimeout(() => {
      setDirectionsNotice(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-[#FAF6EE] text-[#24271D]">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 bg-gradient-to-b from-[#F3EBDD]/80 to-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ED704D]">
            Hospitality Desk
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#24271D] leading-[1.05]">
            Get in Touch<span className="text-[#ED704D]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#303D24]/85 leading-relaxed">
            Whether planning a family feast, inquiring about private catering, or booking a table, our hospitality team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. ALL CONTACT CHANNELS (Grid of 4 direct contact cards) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Direct Calling */}
            <div className="p-6 bg-white rounded-[2rem] border border-[#D9CBB6] shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#ED704D]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#24271D]">Phone Support</h3>
              <p className="text-xs text-[#687158]">Direct lines for reservations and instant order updates.</p>
              <div className="pt-2 space-y-1 text-sm font-semibold text-[#303D24]">
                <a href="tel:+924235789922" className="block hover:text-[#ED704D] transition-colors">
                  +92 42 3578 9922
                </a>
                <a href="tel:+923001234567" className="block hover:text-[#ED704D] transition-colors">
                  +92 300 1234 567
                </a>
              </div>
            </div>

            {/* 2. WhatsApp Chat */}
            <div className="p-6 bg-white rounded-[2rem] border border-[#D9CBB6] shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#303D24]/10 flex items-center justify-center text-[#303D24]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#24271D]">WhatsApp Direct</h3>
              <p className="text-xs text-[#687158]">Instant messaging for catering menus and inquiries.</p>
              <div className="pt-2">
                <a
                  href="https://wa.me/923001234567?text=Hello%20Desi%20Bites%2C%20I%20would%20like%20to%20inquire%20about%20a%20reservation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#303D24] hover:bg-[#24271D] text-white text-xs font-semibold rounded-full shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3. Official Email */}
            <div className="p-6 bg-white rounded-[2rem] border border-[#D9CBB6] shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#ED704D]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#24271D]">Email Inquiries</h3>
              <p className="text-xs text-[#687158]">Corporate banquets and general feedback.</p>
              <div className="pt-2 space-y-1 text-xs sm:text-sm font-semibold text-[#303D24]">
                <a href="mailto:hospitality@desibites.pk" className="block truncate hover:text-[#ED704D] transition-colors">
                  hospitality@desibites.pk
                </a>
                <a href="mailto:orders@desibites.pk" className="block truncate hover:text-[#ED704D] transition-colors">
                  orders@desibites.pk
                </a>
              </div>
            </div>

            {/* 4. Opening Hours */}
            <div className="p-6 bg-white rounded-[2rem] border border-[#D9CBB6] shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#303D24]/10 flex items-center justify-center text-[#303D24]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#24271D]">Dining Hours</h3>
              <div className="pt-1 space-y-1 text-xs text-[#687158]">
                <p><span className="font-semibold text-[#24271D]">Mon – Fri:</span> 12:00 PM – 12:00 AM</p>
                <p><span className="font-semibold text-[#24271D]">Saturday:</span> 12:00 PM – 01:00 AM</p>
                <p><span className="font-semibold text-[#24271D]">Sunday:</span> 11:30 AM – 12:00 AM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP LOCATION & CONTACT FORM SECTION */}
      <section className="py-12 bg-[#F3EBDD]/60 border-t border-[#D9CBB6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Interactive Map Location Card */}
            <div className="lg:col-span-6 bg-[#FAF6EE] rounded-[2.5rem] border border-[#D9CBB6] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F3EBDD] border border-[#D9CBB6] flex items-center justify-center text-[#ED704D]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24271D]">Restaurant Location</h2>
                    <p className="text-xs text-[#687158]">Flagship Dining Venue</p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 bg-[#303D24]/10 text-[#303D24] rounded-full">
                  Lahore, PK
                </span>
              </div>

              {/* Minimalist Vector Illustrated Map */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#EBE2D3] overflow-hidden border border-[#D9CBB6] flex items-center justify-center p-2 shadow-inner">
                <svg className="w-full h-full text-[#D9CBB6]/70" viewBox="0 0 400 220" fill="none">
                  {/* Canal River curve */}
                  <path d="M-20 60 Q 180 160 420 90" stroke="#C8D4C8" strokeWidth="20" strokeLinecap="round" />
                  {/* Main Arterial Road (Main Boulevard Gulberg) */}
                  <path d="M40 0 L 360 220" stroke="#F5EDE1" strokeWidth="16" />
                  {/* Cross avenues */}
                  <path d="M0 170 L 400 50" stroke="#F5EDE1" strokeWidth="12" />
                  <path d="M120 0 L 220 220" stroke="#FAF6EE" strokeWidth="8" />
                  <path d="M280 0 L 160 220" stroke="#FAF6EE" strokeWidth="8" />
                  <path d="M0 90 L 400 130" stroke="#FAF6EE" strokeWidth="6" />
                  {/* Green Park Areas */}
                  <rect x="50" y="50" width="70" height="45" rx="12" fill="#D2DEC5" opacity="0.65" />
                  <rect x="240" y="120" width="85" height="50" rx="14" fill="#D2DEC5" opacity="0.65" />
                </svg>

                {/* Animated Pulsing Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#ED704D] flex items-center justify-center text-white shadow-xl animate-bounce">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="mt-1 px-3 py-1 bg-[#FAF6EE] text-xs font-bold text-[#303D24] rounded-md shadow-md border border-[#D9CBB6] whitespace-nowrap">
                    DESI BITES Flagship
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#24271D]">
                <p className="font-semibold text-base">{RESTAURANT_INFO.address}</p>
                <p className="text-xs text-[#687158]">
                  Valet parking available at the main porch. Accessible wheelchair ramp at north entrance.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleGetDirections}
                  className="flex items-center gap-2 px-6 py-3 bg-[#303D24] hover:bg-[#24271D] text-white text-xs sm:text-sm font-medium rounded-full shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#ED704D]" />
                  <span>Get Live Directions</span>
                </button>

                <button
                  type="button"
                  onClick={openReservation}
                  className="flex items-center gap-2 px-6 py-3 bg-[#ED704D] hover:bg-[#dc5f3c] text-white text-xs sm:text-sm font-medium rounded-full shadow-sm transition-all"
                >
                  <span>Book Table at this Location</span>
                </button>
              </div>

              {directionsNotice && (
                <div className="p-4 bg-[#FAF6EE] border border-[#ED704D]/40 rounded-2xl flex items-start gap-3 shadow-md animate-fade-in text-xs">
                  <AlertCircle className="w-5 h-5 text-[#ED704D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#24271D]">Location Map Pin Awaiting Final Confirmation</p>
                    <p className="text-[#687158] mt-0.5">
                      Our official venue coordinates in Gulberg III are currently being finalized. Live Google Maps integration will be enabled upon official launch.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Interactive Contact Message Form */}
            <div className="lg:col-span-6 bg-white rounded-[2.5rem] border border-[#D9CBB6] p-6 sm:p-8 shadow-sm">
              <div className="mb-6 space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24271D]">
                  Send Us a Message
                </h2>
                <p className="text-xs text-[#687158]">
                  We typically respond within 2-4 hours during business hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3 bg-[#FAF6EE] rounded-2xl p-6 border border-[#D9CBB6]">
                  <CheckCircle2 className="w-12 h-12 text-[#303D24] mx-auto" />
                  <h3 className="font-serif text-2xl font-bold text-[#303D24]">Message Received!</h3>
                  <p className="text-sm text-[#687158] max-w-sm mx-auto">
                    Thank you for reaching out. Our hospitality manager will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Zainab Tariq"
                        className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D9CBB6] text-sm focus:outline-none focus:ring-2 focus:ring-[#ED704D]"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300 1234567"
                        className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D9CBB6] text-sm focus:outline-none focus:ring-2 focus:ring-[#ED704D]"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D9CBB6] text-sm focus:outline-none focus:ring-2 focus:ring-[#ED704D]"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D9CBB6] text-sm focus:outline-none focus:ring-2 focus:ring-[#ED704D]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Private Banquet">Private Banquet & Events</option>
                        <option value="Corporate Catering">Corporate Catering</option>
                        <option value="Feedback">Feedback & Suggestions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#687158] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help make your Desi Bites experience special?"
                      className="w-full px-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-[#D9CBB6] text-sm focus:outline-none focus:ring-2 focus:ring-[#ED704D]"
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1 font-medium">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#ED704D] hover:bg-[#dc5f3c] text-white text-sm font-semibold rounded-full shadow-md shadow-[#ED704D]/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiries Directly</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
