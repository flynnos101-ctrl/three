import React, { useEffect, useState } from "react";

const SLOGANS = [
  "THREE STEPS. TWO MINUTES. ONE RITUAL.",
  "EVERYTHING YOU NEED. NOTHING YOU DON'T.",
  "NO TEN-STEP NONSENSE. ONLY THE BASICS.",
  "WE DID THE EDITING SO YOUR BATHROOM COUNTER DOESN'T HAVE TO.",
  "BORN IN SYDNEY. READY FOR THE WORLD.",
  "30-DAY SATISFACTION REFUND GUARANTEE."
];

export function PromoBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLOGANS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      id="promo-banner" 
      className="w-full bg-[#FFFDEC] text-[#E63931] py-3.5 px-4 overflow-hidden border-b-4 border-[#334B89] font-mono text-xs tracking-[0.25em] flex justify-center items-center uppercase select-none transition-all duration-300 font-bold"
    >
      <div className="flex items-center space-x-3.5">
        <span className="text-[#E63931] text-[10px]">●</span>
        <span className="animate-fade-in transition-all duration-500 font-black">{SLOGANS[index]}</span>
        <span className="text-[#E63931] text-[10px]">●</span>
      </div>
    </div>
  );
}
