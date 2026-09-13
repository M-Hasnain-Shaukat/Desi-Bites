import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { DemoCheckoutModal } from './components/cart/DemoCheckoutModal';
import { ReservationModal } from './components/reservation/ReservationModal';
import { DishDetailModal } from './components/menu/DishDetailModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { StoryPage } from './pages/StoryPage';
import { ContactPage } from './pages/ContactPage';
import { VisitPage } from './pages/VisitPage';

// Auto scroll-to-top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#24271D] selection:bg-[#ED704D]/20 selection:text-[#303D24]">
          {/* Main Navigation Header */}
          <Header />

          {/* Page Routing */}
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/restaurant" element={<RestaurantPage />} />
              <Route path="/our-story" element={<StoryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/visit" element={<VisitPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Interactive Modals & Drawers */}
          <CartDrawer />
          <DemoCheckoutModal />
          <ReservationModal />
          <DishDetailModal />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
