import React, { useState } from "react";
import { ArrowRight, Mail, Instagram, Twitter, Globe } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="brand-footer" className="bg-[#FAF2DB] text-[#334B89] pt-24 pb-12 px-4 md:px-10 border-t-4 border-[#334B89]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Upper grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Email capture */}
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E63931] font-bold block">
              STAY IN THE LOOP
            </span>
            <h3 className="font-serif italic text-4xl font-black text-[#334B89] tracking-tight lowercase">
              once a month. no spam.
            </h3>
            <p className="font-sans text-sm text-[#334B89]/75 leading-relaxed max-w-sm font-semibold">
              New products, restocks, and the occasional skin tip. That's it.
            </p>

            {subscribed ? (
              <div className="bg-[#FFFDEC] text-[#334B89] p-5 rounded-3xl font-sans text-xs max-w-sm space-y-1 font-bold border-4 border-[#334B89]">
                <span className="font-mono text-[10px] font-black block uppercase tracking-widest text-[#E63931]">✔ you're in.</span>
                <span>Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex max-w-md items-center border-4 border-[#334B89] bg-[#FFFDEC] rounded-full p-1.5 focus-within:border-[#E63931] transition-all">
                <div className="pl-4 text-[#334B89]/50 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-0 py-2 px-3 text-sm font-sans text-[#334B89] placeholder-[#334B89]/40 focus:outline-none focus:ring-0 font-semibold"
                />
                <button
                  id="footer-subscribe-btn"
                  type="submit"
                  className="bg-[#E63931] text-white hover:bg-[#334B89] transition-all py-2.5 px-6 font-mono text-xs uppercase font-black tracking-widest rounded-full flex items-center shrink-0 shadow-sm select-none"
                >
                  Join
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </form>
            )}
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E63931] font-bold block">
              SHOP
            </span>
            <ul className="space-y-3 font-mono text-xs text-[#334B89]/70 font-black uppercase tracking-wider">
              <li>
                <a href="#hero-bundle-section" className="hover:text-[#E63931] transition-colors">
                  The Full Set
                </a>
              </li>
              <li>
                <a href="#individual-product-grid" className="hover:text-[#E63931] transition-colors">
                  Refill Singles
                </a>
              </li>
              <li><span className="opacity-40">Delivery</span></li>
              <li><span className="opacity-40">Returns</span></li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E63931] font-bold block">
              FIND US
            </span>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2.5 border-4 border-[#334B89] text-[#334B89] rounded-full hover:border-[#E63931] hover:text-[#E63931] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="p-2.5 border-4 border-[#334B89] text-[#334B89] rounded-full hover:border-[#E63931] hover:text-[#E63931] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <p className="font-sans text-xs text-[#334B89]/60 leading-relaxed font-semibold pt-1">
              Designed and bottled in Sydney, Australia.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t-2 border-[#334B89]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 font-mono text-[9px] text-[#334B89]/50 uppercase tracking-widest font-bold">
            <Globe className="w-3.5 h-3.5 text-[#E63931]" />
            <span>Sydney Origin. Cruelty Free.</span>
          </div>

          <div className="font-serif italic text-4xl tracking-tight text-[#334B89] select-none lowercase font-black">
            three<span className="text-[#E63931]">.</span>
          </div>

          <div className="font-mono text-[9px] text-[#334B89]/40 tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} three skincare. all rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
