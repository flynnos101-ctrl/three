import React, { useState, useEffect } from "react";
import { ShoppingBag, ArrowRight, Check, Sparkles, Shield, Bookmark, Minimize2, Eye } from "lucide-react";
import { CartItem } from "./types";
import productsImg from "./assets/products.png";
import { PromoBanner } from "./components/PromoBanner";
import { TubeProduct } from "./components/TubeProduct";
import { IntroExplainer } from "./components/IntroExplainer";
import { IndividualGrid } from "./components/IndividualGrid";
import { WhyThreeManifesto } from "./components/WhyThreeManifesto";
import { SocialProof } from "./components/SocialProof";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";

const LOCAL_STORAGE_KEY = "three_skincare_cart";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [bundleAdded, setBundleAdded] = useState(false);

  // Persistence local storage loading
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Storage warning: Local persistence unavailable.", e);
    }
  }, []);

  // Save to storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart));
    } catch (e) {
      console.warn("Could not write to localStorage.", e);
    }
  };

  const handleAddToBag = (
    id: string,
    name: string,
    price: number,
    step: 1 | 2 | 3 | "bundle",
    volume: string
  ) => {
    const existing = cart.find((item) => item.id === id);
    let updated: CartItem[];

    if (existing) {
      updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cart, { id, name, price, quantity: 1, step, volume }];
    }

    saveCart(updated);
    setIsCartOpen(true); // Open drawer instantly
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  const handleRemoveItem = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleAddBundle = () => {
    handleAddToBag("bundle", "THE COMPLETE ROUTINE SET", 75, "bundle", "COMBO SET");
    setBundleAdded(true);
    setTimeout(() => {
      setBundleAdded(false);
    }, 1500);
  };

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF2DB] text-[#334B89] font-sans antialiased relative selection:bg-[#E63931] selection:text-white">
      
      {/* Sliding Minimal Announcement Bar */}
      <PromoBanner />

      {/* CORE NAVIGATION BAR */}
      <nav
        id="navbar"
        className="w-full py-6 px-4 md:px-10 flex justify-between items-center bg-[#FAF2DB]/95 sticky top-0 z-40 backdrop-blur-md border-b-4 border-[#334B89] transition-all duration-300"
      >
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif italic font-black text-3xl tracking-tight text-[#334B89] cursor-pointer hover:text-[#E63931] transition-colors flex items-center gap-1 select-none lowercase"
        >
          three<span className="text-[#E63931]">.</span>
        </div>

        {/* Minimal Navigation Triggers List */}
        <div className="hidden lg:flex items-center space-x-10 font-mono text-[11px] tracking-[0.2em] font-black text-[#334B89] uppercase">
          <button 
            onClick={() => scrollToAnchor("routine-explainer")} 
            className="hover:text-[#E63931] transition-colors cursor-pointer"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToAnchor("hero-bundle-section")} 
            className="hover:text-[#E63931] transition-colors font-black text-[#E63931] underline decoration-2 cursor-pointer"
          >
            The Set ($75)
          </button>
          <button 
            onClick={() => scrollToAnchor("individual-product-grid")} 
            className="hover:text-[#E63931] transition-colors cursor-pointer"
          >
            Refill Singles
          </button>
          <button 
            onClick={() => scrollToAnchor("brand-manifesto")} 
            className="hover:text-[#E63931] transition-colors cursor-pointer"
          >
            Our Manifesto
          </button>
        </div>

        {/* Dynamic High Contrast Minimal Cart Trigger */}
        <button
          id="cart-trigger-btn"
          onClick={() => setIsCartOpen(true)}
          className="relative px-6 py-2.5 rounded-full hover:scale-105 transition-all duration-300 flex items-center space-x-3 bg-[#FFFDEC] border-4 border-[#334B89] text-[#334B89] font-black shadow-md cursor-pointer animate-none"
        >
          <ShoppingBag className="w-4 h-4 text-[#E63931]" />
          <span className="font-mono text-[11px] uppercase tracking-wider">Bag</span>
          {cartTotalItems > 0 && (
            <div className="w-6 h-6 bg-[#E63931] text-white rounded-full flex items-center justify-center font-mono text-xs font-black border border-white">
              {cartTotalItems}
            </div>
          )}
        </button>
      </nav>

      {/* LUXURY EDITORIAL HERO SECTION */}
      <header id="hero" className="w-full pt-16 pb-24 md:py-32 px-4 md:px-10 bg-[#FAF2DB] text-[#334B89] relative overflow-hidden border-b-4 border-[#334B89]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column: Elegant Display Typeface */}
          <div className="lg:col-span-6 space-y-10 text-left">
            {/* Title - Bold, rounded, bigger display typography */}
            <h1 className="font-serif italic font-black text-6xl sm:text-8xl tracking-tight text-[#334B89] leading-[0.95] lowercase">
              skincare doesn't <br />
              need to be <span className="text-[#E63931]">hard.</span>
            </h1>

            <p className="font-sans text-sm text-[#334B89]/90 font-bold leading-relaxed">
              it should be as easy as one two three.
            </p>

            {/* Premium retro CTA triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-cta-btn"
                onClick={() => scrollToAnchor("hero-bundle-section")}
                className="bg-[#E63931] text-white py-4 px-8 rounded-full font-mono text-xs uppercase tracking-widest font-black hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 flex items-center justify-center gap-2.5 border-4 border-[#334B89] shadow-lg hover:scale-105 cursor-pointer"
              >
                Acquire The Set — $75
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                id="hero-secondary-btn"
                onClick={() => scrollToAnchor("individual-product-grid")}
                className="bg-[#FFFDEC] text-[#334B89] py-4 px-8 rounded-full font-mono text-xs uppercase tracking-widest font-black border-4 border-[#334B89] hover:bg-[#E63931] hover:text-white transition-all duration-300 text-center cursor-pointer"
              >
                Refill Singles
              </button>
            </div>
          </div>

          {/* Right Column: actual product photo */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg overflow-hidden rounded-[36px] border-4 border-[#334B89] shadow-2xl">
              <img
                src={productsImg}
                alt="three. skincare — one, two, three"
                className="w-full h-auto block"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </header>

      {/* LUXURIOUS EDITORIAL EXPLAINER */}
      <IntroExplainer onAddToBag={handleAddToBag} />

      {/* THE DEFINITIVE BUNDLE SECTION */}
      <section id="hero-bundle-section" className="bg-[#FAF2DB] text-[#334B89] py-32 px-4 md:px-10 border-b-4 border-[#334B89]">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Aesthetic stage display with gold shadow */}
          <div className="lg:col-span-6 flex flex-col justify-between py-16 px-6 bg-[#FFFDEC] rounded-[44px] overflow-hidden mb-12 lg:mb-0 relative min-h-[460px] shadow-2xl border-4 border-[#334B89]">
            {/* Absolute badge */}
            <div className="absolute top-6 left-6 bg-[#E63931] text-white font-mono text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-md border-2 border-[#334B89] z-20">
              SAVES 14% DAILY
            </div>

            <img
              src={productsImg}
              alt="the three routine set"
              className="w-full h-auto block z-10 relative"
              draggable={false}
            />
          </div>

          {/* Luxury set sales card */}
          <div className="lg:col-span-6 space-y-8 pl-0 lg:pl-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E63931] font-black block">
                THE SYSTEM BUNDLED COMPLETE
              </span>
              <h2 className="font-serif italic text-5xl md:text-6xl text-[#334B89] leading-none font-black uppercase tracking-tight">
                The three routine set.
              </h2>
              <div className="flex flex-wrap items-baseline gap-4 mt-2">
                <span className="font-mono text-4xl font-black text-[#334B89]">
                  $75 <span className="text-sm font-semibold text-[#334B89]/60">AUD</span>
                </span>
                <span className="font-mono text-lg text-[#334B89]/40 line-through font-bold">
                  $87.00 AUD
                </span>
                <span className="bg-[#E63931]/10 border-2 border-[#E63931] px-3.5 py-1 rounded-full text-[#E63931] font-mono text-[10px] uppercase tracking-wider font-black">
                  Saves $12 instantly
                </span>
              </div>
            </div>

            <p className="font-sans text-sm md:text-base text-[#334B89] leading-relaxed font-bold">
              This routine set provides the absolute baseline skin preservation suite. You receive three identical tactile canisters designed to wash debris, clear dry surface buildup, and protect skin layers. Vegan, bio-neutral, certified carbon neutral, and fully airport travel compliant.
            </p>

            {/* Structured simple box deck list */}
            <div className="bg-[#FFFDEC] border-4 border-[#334B89] p-6 rounded-[28px] space-y-4 shadow-lg">
              <h4 className="font-mono text-[10px] font-black text-[#334B89]/75 uppercase tracking-widest">
                WHAT IS INCLUDED INSIDE:
              </h4>
              <div className="space-y-3 font-mono text-xs text-[#334B89] uppercase font-bold">
                <div className="flex justify-between items-center border-b-2 border-[#334B89]/10 pb-2.5">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E63931]" />
                    STEP 01 • CLEANSE
                  </span>
                  <span className="text-[#334B89]/75">150 ML</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-[#334B89]/10 pb-2.5">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FAF2DB] border-2 border-[#334B89]" />
                    STEP 02 • EXFOLIATE
                  </span>
                  <span className="text-[#334B89]/75">100 ML</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#334B89]" />
                    STEP 03 • MOISTURISE
                  </span>
                  <span className="text-[#334B89]/75">75 ML</span>
                </div>
              </div>
            </div>

            {/* Trigger Button */}
            <button
              id="add-bundle-set-btn"
              onClick={handleAddBundle}
              className="w-full bg-[#E63931] text-white py-4 px-8 rounded-full font-mono text-xs uppercase tracking-widest font-black hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 flex justify-center items-center gap-2 text-center shadow-lg border-4 border-[#334B89] hover:scale-105 cursor-pointer"
            >
              {bundleAdded ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Routine Set Placed in Box</span>
                </>
              ) : (
                <>
                  <span>ACQUIRE THE COMPLETE SET — $75</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-6 text-[11px] font-mono text-[#334B89]/75 uppercase tracking-widest font-bold">
              <span>CO2-Neutral Delivery</span>
              <div>•</div>
              <span>30-Day Satisfaction Guarantee</span>
            </div>

          </div>

        </div>
      </section>

      {/* REFILL SINGLES GRID */}
      <IndividualGrid onAddToBag={handleAddToBag} />

      {/* WHY THREE BRAND MANIFESTO */}
      <WhyThreeManifesto />

      {/* CANDID REVIEWS FEEDS */}
      <SocialProof />

      {/* FOOTER */}
      <Footer />

      {/* DRAWER CART COMPONENT */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
