import React, { useState } from "react";

interface TubeProductProps {
  step: 1 | 2 | 3;
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  interactive?: boolean;
}

export function TubeProduct({
  step,
  label,
  size = "md",
  className = "",
  interactive = true,
}: TubeProductProps) {
  const [isWiggling, setIsWiggling] = useState(false);

  // Taller, slimmer pump-dispenser bottle dimensions
  const sizeClasses = {
    sm: "h-72 w-24",
    md: "h-96 w-28",
    lg: "h-[28rem] w-32",
    xl: "h-[32rem] w-36",
  };

  const wordMap = {
    1: "one",
    2: "two",
    3: "three",
  };

  const handleClick = () => {
    if (!interactive) return;
    setIsWiggling(true);
    setTimeout(() => {
      setIsWiggling(false);
    }, 550);
  };

  return (
    <div
      id={`bottle-step-${step}`}
      onClick={handleClick}
      className={`relative flex flex-col items-center select-none ${sizeClasses[size]} ${
        interactive
          ? "hover:scale-[1.08] hover:-translate-y-4 hover:rotate-[1deg] transition-all duration-300 ease-out cursor-pointer"
          : ""
      } ${isWiggling ? "animate-physical-wiggle" : ""} ${className}`}
    >
      {/* PUMP NOZZLE — thin angled spout extending to the right */}
      <div className="relative w-full flex justify-center items-end h-[6%] z-30">
        <div className="relative w-[58%] h-full flex items-end">
          {/* Nozzle tip - thin angled rectangle */}
          <div className="absolute right-0 top-[10%] w-[60%] h-[42%] bg-gradient-to-b from-[#C03832] via-[#A92E29] to-[#7c1f1b] rounded-r-[3px] rounded-l-[1px] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_3px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-y-0 left-[15%] w-[15%] bg-white/15 blur-[0.5px]" />
          </div>
        </div>
      </div>

      {/* PUMP HEAD — wider flat oval platform */}
      <div className="relative w-[64%] h-[5%] z-20 -mt-[1%]">
        <div className="w-full h-full bg-gradient-to-b from-[#C03832] via-[#A92E29] to-[#7c1f1b] rounded-[8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_3px_6px_rgba(0,0,0,0.3)]">
          {/* Highlight band */}
          <div className="absolute inset-x-[14%] top-[20%] h-[20%] bg-white/15 rounded-full blur-[1px]" />
          {/* Bottom shadow */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/35 to-transparent rounded-b-[8px]" />
        </div>
      </div>

      {/* BOTTLE NECK — narrow */}
      <div className="relative w-[26%] h-[3%] z-10 bg-gradient-to-r from-[#1a3a7a] via-[#2a5099] to-[#1a3a7a] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.4)]">
        <div className="absolute inset-y-0 left-[20%] w-[18%] bg-white/15" />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/25" />
      </div>

      {/* COLLAR RING — small metallic band where neck meets body */}
      <div className="relative w-[44%] h-[1.5%] z-10 bg-gradient-to-b from-[#1a3a7a] to-[#0f2657] rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-x-[18%] top-[20%] h-[40%] bg-white/10 blur-[0.5px]" />
      </div>

      {/* MAIN CYLINDRICAL BODY — tall, slim, deep blue */}
      <div className="relative w-full flex-1 rounded-b-[14px] rounded-t-[6px] overflow-hidden bg-[#20438E] shadow-[0_18px_36px_rgba(0,0,0,0.18)]">
        {/* CYLINDER SHADING — left highlight + right shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/40 pointer-events-none z-10" />
        {/* Subtle vertical band of light on the left edge */}
        <div className="absolute inset-y-0 left-[6%] w-[10%] bg-gradient-to-r from-white/25 to-transparent pointer-events-none z-10 blur-[1px]" />
        {/* Polished highlight stripe just left of center */}
        <div className="absolute inset-y-0 left-[28%] w-[6%] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10 blur-[1.5px]" />
        {/* Deeper right-edge shadow for cylinder curve */}
        <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-black/45 to-transparent pointer-events-none z-10" />
        {/* Top inner shadow under the collar */}
        <div className="absolute inset-x-0 top-0 h-[5%] bg-gradient-to-b from-black/35 to-transparent pointer-events-none z-10" />
        {/* Bottom inner shadow before the base */}
        <div className="absolute inset-x-0 bottom-0 h-[7%] bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />

        {/* PROMINENT LABEL — large cream/linen panel centered on the body */}
        <div className="absolute top-[14%] left-[8%] right-[8%] bottom-[14%] bg-gradient-to-b from-[#FFFDEC] via-[#FAF8F3] to-[#F2EBD8] flex flex-col justify-center items-center px-2 z-20 shadow-[0_2px_8px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-[2px] border border-black/[0.04]">
          {/* Curl shading across label edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/14 pointer-events-none" />
          <div className="absolute inset-y-0 left-[18%] w-[8%] bg-gradient-to-r from-white/0 via-white/30 to-white/0 pointer-events-none blur-[1px]" />

          {/* Tiny brand mark */}
          <div className="font-mono text-[7px] tracking-[0.3em] uppercase text-[#334B89]/70 font-black mb-1 z-10">
            three.
          </div>
          {/* Thin divider */}
          <div className="w-6 h-[1px] bg-[#334B89]/30 mb-2 z-10" />
          {/* The big italic serif number word */}
          <h4 className="font-serif italic font-black text-3xl sm:text-4xl text-[#C02E29] tracking-tight leading-none select-none lowercase z-10">
            {wordMap[step]}
          </h4>
          {/* Step label */}
          <div className="font-mono text-[7px] tracking-[0.25em] uppercase text-[#334B89]/60 font-bold mt-2 z-10">
            step 0{step}
          </div>
        </div>
      </div>

      {/* FLAT BOTTOM BASE — slight rim */}
      <div className="relative w-[96%] h-[1.5%] bg-gradient-to-b from-[#0f2657] to-black/70 rounded-b-[6px] shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-x-[10%] top-0 h-[40%] bg-white/8" />
      </div>

      {/* Soft ground shadow */}
      <div className="absolute -bottom-4 w-[80%] h-3 bg-black/15 blur-md rounded-full -z-10 opacity-80 pointer-events-none" />
    </div>
  );
}
