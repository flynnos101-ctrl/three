import React, { useState } from "react";
import { X, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successOrderNumber, setSuccessOrderNumber] = useState("");

  if (!isOpen) return null;

  // Compute auto-bundle dynamic discount
  const hasCleanse = cart.find((item) => item.id === "cleanse");
  const hasExfoliate = cart.find((item) => item.id === "exfoliate");
  const hasMoisturise = cart.find((item) => item.id === "moisturise");

  const cleanseQty = hasCleanse?.quantity || 0;
  const exfoliateQty = hasExfoliate?.quantity || 0;
  const moisturiseQty = hasMoisturise?.quantity || 0;
  
  const autoBundledSets = Math.min(cleanseQty, exfoliateQty, moisturiseQty);
  const bundleDiscount = autoBundledSets * 12;

  const itemsSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = itemsSubtotal - bundleDiscount;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName || !address) return;
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSuccessOrderNumber(`THR-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1400);
  };

  const handleResetSuccess = () => {
    setIsSuccess(false);
    onClearCart();
    setEmail("");
    setFullName("");
    setAddress("");
    onClose();
  };

  return (
    <div id="cart-drawer-overlay" className="fixed inset-0 z-50 flex justify-end">
      {/* Background slide cover */}
      <div
        id="cart-backdrop"
        onClick={isSuccess ? handleResetSuccess : onClose}
        className="absolute inset-0 bg-[#334B89]/50 backdrop-blur-[4px] transition-opacity duration-300"
      />

      {/* Cart side panel sheet */}
      <div
        id="cart-panel"
        className="relative w-full max-w-md bg-[#FAF2DB] h-full flex flex-col border-l-4 border-[#334B89] shadow-2xl overflow-y-auto z-10"
      >
        {/* HEADER SECTION */}
        <div className="p-6 border-b-4 border-[#334B89] flex justify-between items-center bg-[#FFFDEC]">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-5 h-5 text-[#E63931]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-black text-[#334B89]">
              Cart Storage ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </span>
          </div>
          <button
            id="close-cart-btn"
            onClick={isSuccess ? handleResetSuccess : onClose}
            className="px-4 py-1.5 bg-[#E63931] hover:bg-[#334B89] text-white border-2 border-[#334B89] rounded-full transition-all duration-300 font-mono text-[10px] uppercase font-black"
          >
            close
          </button>
        </div>

        {isSuccess ? (
          /* SUCCESS TRANSACTION OUTCOME */
          <div className="flex-1 flex flex-col justify-between p-8 text-[#334B89]">
            <div className="my-auto space-y-7 text-center">
              <div className="w-16 h-16 bg-[#F2B824] text-[#334B89] border-4 border-[#334B89] rounded-full mx-auto flex items-center justify-center font-serif italic text-3xl font-black select-none shadow-md">
                3
              </div>
              
              <div className="space-y-2">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#E63931] font-black block uppercase">
                  TRANSACTION COMPLETED
                </span>
                <h3 className="font-serif italic text-4xl text-[#334B89] font-black leading-none uppercase">
                  Skincare, sorted.
                </h3>
              </div>
              
              <p className="font-sans text-sm text-[#334B89]/90 leading-relaxed max-w-xs mx-auto font-bold">
                Congratulations, {fullName.split(" ")[0]}. Your premium routine has been secured. Your set is being hand-packaged in Sydney and dispatched.
              </p>

              {/* Order invoice breakdown details */}
              <div className="bg-[#FFFDEC] border-4 border-[#334B89] p-6 text-left rounded-[32px] font-sans space-y-4 shadow-lg">
                <div className="flex justify-between border-b-2 border-[#334B89]/10 pb-2 text-[11px] font-bold">
                  <span className="text-[#334B89]/60 font-mono text-[9px] uppercase">ORDER REFERENCE</span>
                  <span className="font-mono font-black text-[#334B89]">{successOrderNumber}</span>
                </div>
                <div className="flex justify-between border-b-2 border-[#334B89]/10 pb-2 text-[11px] font-bold">
                  <span className="text-[#334B89]/60 font-mono text-[9px] uppercase">DELIVER TO</span>
                  <span className="font-sans font-black text-[#334B89] truncate max-w-[170px] text-right uppercase text-[10px]">{address}</span>
                </div>
                
                <div className="space-y-2.5 pt-1">
                  <span className="text-[#E63931] text-[9px] uppercase font-mono font-black tracking-widest block">PACKAGED ITEMS:</span>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs text-[#334B89] font-bold">
                      <span className="capitalize">{item.name} × {item.quantity}</span>
                      <span className="font-mono text-[#334B89]/65">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  {bundleDiscount > 0 && (
                    <div className="flex justify-between text-xs text-[#E63931] font-mono font-black tracking-wide">
                      <span>• Set Pricing Savings Applied</span>
                      <span>-${bundleDiscount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between pt-3.5 border-t-2 border-[#334B89]/10 text-xs font-black text-[#334B89] uppercase font-mono tracking-wider">
                  <span>TOTAL PAID</span>
                  <span className="text-base font-black text-[#E63931]">${finalTotal.toFixed(2)} AUD</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-[#334B89]/70 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4 text-[#E63931]" />
                <span>Sydney Dispatch Active</span>
              </div>
            </div>

            <button
              id="continue-shopping-btn"
              onClick={handleResetSuccess}
              className="w-full bg-[#E63931] text-white py-4 rounded-full font-mono text-xs uppercase tracking-widest font-black hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 flex justify-center items-center group mt-6 border-4 border-[#334B89]"
            >
              Back to Catalog
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* EMPTY NOTIFICATION STATE */
          <div className="flex-1 flex flex-col justify-center items-center p-8 text-center bg-white">
            <div className="w-14 h-14 rounded-full border-4 border-dashed border-[#334B89] flex items-center justify-center text-[#334B89]/30 mb-5 font-mono text-xs select-none">
              O
            </div>
            <h4 className="font-serif italic text-2xl text-[#334B89] font-black uppercase">
              Your box is empty.
            </h4>
            <p className="font-sans text-sm text-[#334B89]/75 mt-2 max-w-xs leading-relaxed font-bold">
              Pristine skin texture is only moments away. Initiate your transition with the complete set.
            </p>
            <button
              id="empty-cta-btn"
              onClick={onClose}
              className="mt-6 bg-[#E63931] text-white py-3 px-8 rounded-full font-mono text-xs uppercase tracking-widest font-black border-2 border-[#334B89] hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 shadow-md"
            >
              Acquire The Set
            </button>
          </div>
        ) : (
          /* CART ACTIVE SEQUENCE AND FORM CHECKOUT */
          <div className="flex-1 flex flex-col justify-between">
            {/* IN-BOX ITEMS LISTS */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[44vh] bg-[#FFFDEC]">
              {autoBundledSets > 0 && (
                <div className="bg-[#E63931]/10 border-2 border-[#E63931] p-5 flex items-start space-x-3.5 rounded-[24px]">
                  <Tag className="w-4 h-4 text-[#334B89] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-mono text-[9px] font-black text-[#E63931] uppercase tracking-wider">
                      AUTO-BUNDLE SAVING APPLIED
                    </h5>
                    <p className="text-xs text-[#334B89] leading-relaxed mt-1 font-bold">
                      We aligned your matching singles automatically. You unlocked our signature set pricing—saving you <strong className="text-[#E63931] font-black">${bundleDiscount} AUD</strong>.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    id={`cart-item-${item.id}`}
                    className="flex justify-between items-start pb-4 border-b-2 border-[#334B89]/10"
                  >
                    <div className="flex space-x-4">
                      {/* Product Mini representation step */}
                      <div className="w-10 h-14 bg-[#334B89] text-[#FAF2DB] border-2 border-[#334B89] rounded-xl flex flex-col items-center justify-center shrink-0">
                        {item.id === "bundle" ? (
                          <div className="flex flex-col items-center text-center">
                            <span className="text-[6px] tracking-widest text-[#F2B824] font-mono font-black leading-none">SET</span>
                            <span className="text-[8px] font-sans font-black mt-0.5">1-2-3</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-[6px] text-[#FAF2DB] tracking-widest uppercase font-mono font-black leading-none">STEP</span>
                            <span className="text-xs font-serif italic mt-0.5 font-black">{item.step}</span>
                          </>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-serif italic text-base text-[#334B89] font-black capitalize leading-tight">
                          {item.id === "bundle" ? "COMPLETE REGIMEN SET" : item.name}
                        </h4>
                        <p className="font-mono text-[9px] text-[#334B89]/50 uppercase tracking-widest font-bold">
                          {item.volume ? item.volume : "REGIMEN SUITE"}
                        </p>
                        <button
                          id={`remove-item-${item.id}`}
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[10px] text-[#E63931] tracking-wider font-mono uppercase hover:underline hover:text-[#334B89] font-black cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <span className="font-mono text-sm font-black text-[#334B89] block">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      
                      {/* Quantity Toggles - Pill */}
                      <div className="inline-flex items-center rounded-full bg-[#334B89]/5 p-0.5 border border-[#334B89]/10">
                        <button
                          id={`qty-minus-${item.id}`}
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-[20px] h-[20px] rounded-full flex items-center justify-center hover:bg-[#E63931] hover:text-white transition-colors"
                        >
                          <Minus className="w-2 h-2" />
                        </button>
                        <span className="px-2 font-mono text-[10px] font-semibold text-[#334B89]">
                          {item.quantity}
                        </span>
                        <button
                          id={`qty-plus-${item.id}`}
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-[20px] h-[20px] rounded-full flex items-center justify-center hover:bg-[#E63931] hover:text-white transition-colors"
                        >
                          <Plus className="w-2 h-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CHECKOUT CALCULATION & DETAILS */}
            <div className="p-6 bg-[#FAF2DB] border-t-4 border-[#334B89] space-y-5 shadow-inner">
              
              {/* Cost Calculations table list */}
              <div className="space-y-2 font-mono text-[9.5px] text-[#334B89]/70 uppercase tracking-widest font-black">
                <div className="flex justify-between">
                  <span>ITEMS SUB-TOTAL</span>
                  <span className="font-black text-[#334B89]">${itemsSubtotal.toFixed(2)} AUD</span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-[#E63931] font-black">
                    <span>1-2-3 SYSTEM SAVINGS</span>
                    <span>-${bundleDiscount.toFixed(2)} AUD</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Sydney Dispatch Courier</span>
                  <span className="text-[#E63931] font-black">FREE SHIPPING</span>
                </div>
                
                <div className="flex justify-between text-[#334B89] font-black border-t-2 border-[#334B89]/10 pt-3">
                  <span className="text-xs font-serif italic capitalize">ESTIMATED TOTAL</span>
                  <span className="font-mono text-lg font-black text-[#E63931]">${finalTotal.toFixed(2)} AUD</span>
                </div>
              </div>

              {/* CHECKOUT SECURE BILLING FORM */}
              <form onSubmit={handleCheckout} className="space-y-2.5 pt-1">
                <input
                  id="checkout-name-input"
                  type="text"
                  required
                  placeholder="Full name for dispatch"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-xs font-sans p-3 bg-[#FFFDEC] border-2 border-[#334B89] rounded-full placeholder-[#334B89]/40 text-[#334B89] focus:outline-none focus:border-[#E63931] font-black"
                />
                <input
                  id="checkout-email-input"
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs font-sans p-3 bg-[#FFFDEC] border-2 border-[#334B89] rounded-full placeholder-[#334B89]/40 text-[#334B89] focus:outline-none focus:border-[#E63931] font-black"
                />
                <input
                  id="checkout-address-input"
                  type="text"
                  required
                  placeholder="Shipping destination (Global)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs font-sans p-3 bg-[#FFFDEC] border-2 border-[#334B89] rounded-full placeholder-[#334B89]/40 text-[#334B89] focus:outline-none focus:border-[#E63931] font-black"
                />

                <button
                  id="submit-order-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-[#E63931] text-white py-3.5 px-6 rounded-full font-mono text-xs uppercase tracking-widest font-black hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-4 border-[#334B89]"
                >
                  {isSubmitting ? "PAYMENT TRANSMITTING..." : `Secure Order — $${finalTotal.toFixed(2)} AUD`}
                </button>
              </form>

              <p className="text-[8px] text-center text-[#334B89]/55 font-mono leading-normal tracking-wide uppercase font-black">
                Clean and honest formulas. Empty container return policy: if your skin behaves poorly in 30 days, keep the bottles, get your payment refunded.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
