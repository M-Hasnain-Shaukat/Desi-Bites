import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Calendar } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const { totalItems, openCart, openReservation } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 5 equally distributed navigation sections requested by the user
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="absolute top-0 inset-x-0 z-40 w-full bg-transparent border-0 transition-all duration-300 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-14 pt-1 sm:pt-1.5 flex items-center justify-between gap-4">
        
        {/* Left: Brand with Handi Logo in Straight Line */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D] rounded-lg py-1 shrink-0"
        >
          {/* Handi/Pot Logo increased slightly towards downside */}
          <img
            src="/images/logo.png"
            alt="Desi Bites Pot Logo"
            className="w-9 h-9 sm:w-[38px] sm:h-[38px] lg:w-[40px] lg:h-[40px] object-contain group-hover:scale-105 transition-transform duration-300 shrink-0 -translate-y-1"
          />

          {/* DESI BITES in straight line */}
          <span className="font-serif text-lg sm:text-xl md:text-[1.35rem] font-bold tracking-wider text-[#24271D] group-hover:text-[#303D24] whitespace-nowrap transition-colors leading-none flex items-center">
            DESI BITES
          </span>
        </Link>

        {/* Center: 5 Navigation Sections */}
        <nav className="header-desktop-nav items-center justify-center gap-6 lg:gap-8 xl:gap-12 -translate-y-0.5 mx-auto max-w-2xl pl-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-xs sm:text-[13.5px] lg:text-[14.5px] font-semibold tracking-wider transition-colors duration-200 text-center whitespace-nowrap ${
                  isActive
                    ? 'text-[#ED704D]'
                    : 'text-[#24271D] hover:text-[#ED704D]'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D] rounded`}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ED704D] rounded-full"
                    style={{ transformOrigin: 'center' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Cart & Order Now */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Cart Trigger */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Shopping cart with ${totalItems} items`}
            className="relative p-2.5 sm:p-3 text-[#303D24] hover:text-[#ED704D] bg-[#FAF6EE]/90 hover:bg-[#F3EBDD] rounded-full border border-[#D9CBB6]/80 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D]"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1 text-[11px] font-bold text-white bg-[#ED704D] rounded-full shadow-sm animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Desktop Order Now Button */}
          <Link
            to="/menu"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold tracking-wide text-white bg-[#ED704D] hover:bg-[#dc5f3c] active:bg-[#c95333] rounded-full shadow-sm shadow-[#ED704D]/25 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ED704D]"
          >
            <span>Order Now</span>
            <span aria-hidden="true" className="text-base leading-none">→</span>
          </Link>

          {/* Mobile/Tablet Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="header-mobile-toggle p-2.5 text-[#303D24] hover:text-[#ED704D] bg-[#FAF6EE]/90 rounded-full border border-[#D9CBB6]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED704D]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="header-mobile-toggle fixed inset-x-0 top-[60px] sm:top-[70px] bg-[#FAF6EE] border-b border-[#D9CBB6] shadow-xl p-6 transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-lg font-serif font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#ED704D] bg-[#F3EBDD]/70 font-bold'
                      : 'text-[#24271D] hover:text-[#ED704D] hover:bg-[#F3EBDD]/40'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#ED704D]" />}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#D9CBB6]/50 flex flex-col gap-3">
              <Link
                to="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-center text-white bg-[#ED704D] hover:bg-[#dc5f3c] font-medium rounded-full shadow-sm text-sm"
              >
                <span>Order Now</span>
                <span aria-hidden="true">→</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-center text-[#303D24] bg-[#F3EBDD] hover:bg-[#EAE1D2] border border-[#303D24]/20 font-medium rounded-full text-sm"
              >
                <Calendar className="w-4 h-4 text-[#ED704D]" />
                <span>Book a Table</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
