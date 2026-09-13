import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { RESTAURANT_INFO } from '../../data/menuData';

export const Footer: React.FC = () => {
  const { openReservation } = useCart();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#303D24] text-[#FAF6EE] pt-16 pb-12 overflow-hidden">
      {/* Decorative sculpted travertine rim top wave */}
      <div className="absolute top-0 inset-x-0 h-4 bg-[#FAF6EE] rounded-b-[2rem] opacity-90 shadow-inner" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#687158]/40">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              {/* Steaming Handi Logo pure white - moved slightly up & slightly increased size */}
              <img
                src="/images/logo-white.png"
                alt="Desi Bites Pot Logo"
                className="w-7 h-7 sm:w-[30px] sm:h-[30px] object-contain group-hover:scale-105 transition-transform duration-300 shrink-0 brightness-0 invert drop-shadow-[0_1px_4px_rgba(255,255,255,0.25)] -translate-y-1 sm:-translate-y-[3.5px]"
              />
              {/* DESI BITES in straight line - size increased very little bit */}
              <span className="font-serif text-[17.5px] sm:text-[19px] md:text-[20.5px] font-bold tracking-wider text-[#FAF6EE] group-hover:text-[#ED704D] transition-colors leading-none flex items-center">
                DESI BITES
              </span>
            </Link>

            <p className="font-serif text-xl sm:text-2xl text-[#D9CBB6] italic font-normal">
              Authentic flavours. Shared moments.
            </p>

            <p className="text-sm text-[#D9CBB6]/80 max-w-sm leading-relaxed">
              Warm hospitality, traditional Pakistani recipes, and sculpted spaces designed for family feasts and meaningful gatherings.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={openReservation}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ED704D] hover:bg-[#dc5f3c] text-white text-sm font-medium rounded-full transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FAF6EE] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D9CBB6]">
              <li>
                <Link to="/" className="hover:text-[#ED704D] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#ED704D] transition-colors">Full Menu</Link>
              </li>
              <li>
                <Link to="/restaurant" className="hover:text-[#ED704D] transition-colors">Restaurant & Dining</Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-[#ED704D] transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ED704D] transition-colors">Contact & Location</Link>
              </li>
            </ul>

          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-sm text-[#D9CBB6]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FAF6EE] mb-4">
              Hospitality Desk
            </h3>
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#ED704D] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.address}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#ED704D] shrink-0" />
              <span>{RESTAURANT_INFO.phone}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#ED704D] shrink-0" />
              <span>{RESTAURANT_INFO.email}</span>
            </p>
          </div>
        </div>

        {/* Bottom copyright and demo disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9CBB6]/70">
          <p>© {currentYear} DESI BITES. All rights reserved.</p>
          <p className="text-center sm:text-right italic">
            Frontend demonstration prototype • All bookings and checkouts are simulated
          </p>
        </div>
      </div>
    </footer>
  );
};
