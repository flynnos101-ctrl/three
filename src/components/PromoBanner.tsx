import React from "react";

export function PromoBanner() {
  return (
    <div
      id="promo-banner"
      className="w-full bg-[#FFFDEC] text-[#E63931] py-3.5 px-4 overflow-hidden border-b-4 border-[#334B89] font-mono text-xs tracking-[0.25em] flex justify-center items-center uppercase select-none transition-all duration-300 font-bold"
    >
      <div className="flex items-center space-x-3.5">
        <span className="text-[#E63931] text-[10px]">●</span>
        <span className="font-black">BORN IN SYDNEY</span>
        <span className="text-[#E63931] text-[10px]">●</span>
      </div>
    </div>
  );
}
