import React, { useState } from "react";
import { ArrowRight, Mail, Instagram, MessageSquare, Twitter, Globe } from "lucide-react";

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
    <footer id="brand-footer" className="bg-[#334B89] text-[#FAF2DB] pt-28 pb-14 px-6 md:px-16 border-t-4 border-[#334B89]">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Email capture field column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B824] font-bold block">
              WEEKLY DIGEST
            </span>
            <h3 className="font-serif italic text-4xl font-black text-white tracking-tight uppercase">
              Acquire our routine notes.
            </h3>
            <p className="font-sans text-sm text-[#FAF2DB]/85 leading-relaxed max-w-sm font-semibold">
              We write about once a month. No spam, no busy discount codes. Just plain skin preservation and Sydney formulated product release logs.
            </p>

            {subscribed ? (
              <div className="bg-[#FAF2DB] text-[#334B89] p-5 rounded-3xl font-sans text-xs max-w-sm space-y-1 font-bold border-2 border-[#E63931]">
                <span className="font-mono text-[10px] font-black block uppercase tracking-widest text-[#E63931]">✔ REGISTERED</span>
                <span>Check your inbox. We will dispatch your message instantly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex max-w-md items-center border-[3px] border-[#FAF2DB]/80 bg-[#FAF2DB]/10 rounded-full p-1.5 focus-within:border-[#F2B824] transition-all">
                <div className="pl-4 text-[#FAF2DB]/70 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-0 py-2 px-3 text-sm font-sans text-white placeholder-white/50 focus:outline-none focus:ring-0 font-semibold"
                />
                <button
                  id="footer-subscribe-btn"
                  type="submit"
                  className="bg-[#E63931] text-white hover:bg-[#FAF2DB] hover:text-[#334B89] transition-all py-2.5 px-6 font-mono text-xs uppercase font-black tracking-widest rounded-full flex items-center shrink-0 shadow-md select-none border-2 border-[#FAF2DB]"
                >
                  Join
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </form>
            )}
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B824] font-bold block">
              DIRECTORY
            </span>
            <ul className="space-y-3 font-mono text-xs text-[#FAF2DB]/75 font-black uppercase tracking-wider">
              <li>
                <a href="#hero-bundle-section" className="hover:text-white transition-colors">
                  Shop the Full Set
                </a>
              </li>
              <li>
                <a href="#individual-product-grid" className="hover:text-white transition-colors">
                  Shop Refill Singles
                </a>
              </li>
              <li>
                <span className="opacity-35 block">
                  Delivery Logs
                </span>
              </li>
              <li>
                <span className="opacity-35 block">
                  Returns & Guarantee
                </span>
              </li>
            </ul>
          </div>

          {/* Social Channels Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B824] font-bold block">
              LOCATION
            </span>
            <div className="flex gap-3 text-white">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 border-2 border-[#FAF2DB]/40 bg-[#FAF2DB]/10 rounded-full hover:border-[#F2B824] hover:text-[#F2B824] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 border-2 border-[#FAF2DB]/40 bg-[#FAF2DB]/10 rounded-full hover:border-[#F2B824] hover:text-[#F2B824] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#routine-explainer" className="p-2.5 border-2 border-[#FAF2DB]/40 bg-[#FAF2DB]/10 rounded-full hover:border-[#F2B824] hover:text-[#F2B824] transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 font-sans text-xs text-[#FAF2DB]/65 leading-relaxed font-semibold">
              We design, conceptualize, and bottle our products in Sydney, Australia. Fully carbon neutral. Minimal skincare for guys who care.
            </div>
          </div>

        </div>

        {/* Lower footer row */}
        <div className="pt-8 border-t-2 border-[#FAF2DB]/15 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center space-x-2.5 text-xs font-mono text-[#FAF2DB]/60 uppercase tracking-widest font-bold">
            <Globe className="w-4 h-4 text-[#F2B824]" />
            <span>Sydney Origin Certified. Cruelty Free.</span>
          </div>

          {/* Elegant display logo */}
          <div className="font-serif italic text-4xl tracking-tight text-white select-none lowercase font-black">
            three<span className="text-[#F2B824]">.</span>
          </div>

          <div className="font-mono text-[9px] text-[#FAF2DB]/50 tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} THREE SKINCARE LTD. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
