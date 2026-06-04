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

  // Ultra-realistic premium dimensions
  const sizeClasses = {
    sm: "h-64 w-32",
    md: "h-80 w-40",
    lg: "h-96 w-48",
    xl: "h-[420px] w-52",
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
      {/* 3D GLASS/MATTE CYLINDRICAL BOTTLE BODY IN DEEP COBALT */}
      <div className="w-full h-[76%] relative rounded-t-full rounded-b-[20px] overflow-hidden flex flex-col justify-center items-center bg-[#20438E] shadow-[inset_0_4px_12px_rgba(255,255,255,0.15),0_12px_24px_rgba(0,0,0,0.1)]">
        
        {/* LIGHTING LAYER 1: 3D Cylinder shadow drop-off on outer boundaries */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent via-white/5 to-black/45 pointer-events-none z-10" />
        
        {/* LIGHTING LAYER 2: Highly polished studio matte velvet highlight reflection */}
        <div className="absolute top-0 bottom-0 left-[22%] w-[16%] bg-gradient-to-r from-white/0 via-white/18 to-white/0 pointer-events-none z-20 filter blur-[1.5px]" />
        
        {/* LIGHTING LAYER 3: Soft ambient glow on left outer edge */}
        <div className="absolute top-0 bottom-0 left-0 w-[12%] bg-gradient-to-r from-white/12 to-transparent pointer-events-none z-20" />
        
        {/* LIGHTING LAYER 4: Rounded bottom curvature ambient occlusion rim */}
        <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-black/25 to-transparent pointer-events-none z-20" />
        
        {/* LIGHTING LAYER 5: Dome crown top highlights for realistic hemispheric sphere look */}
        <div className="absolute top-0 left-0 right-0 h-[24%] bg-gradient-to-b from-white/15 to-transparent rounded-t-full pointer-events-none z-20" />

        {/* HIGH-FIDELITY WRAPPED PAPER LABEL (Cream Linen Style) */}
        <div className="absolute top-[22%] left-[10%] right-[10%] bottom-[22%] bg-[#FAF8F3] shadow-[0_3px_10px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.7)] flex flex-col justify-center items-center p-3 z-10 rounded-[1px] border border-black/[0.03]">
          
          {/* Shading representing curl on the cylinder sides */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/8 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-[18%] w-[8%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 pointer-events-none filter blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#334B89]/2 to-transparent pointer-events-none" />

          {/* Center typography - absolute minimal, bold word indicator - branding is removed */}
          <div className="w-full text-center flex flex-col items-center justify-center">
            <h4 className="font-serif italic font-black text-3xl sm:text-4.5xl text-[#C02E29] tracking-tighter leading-none select-none lowercase italic">
              {wordMap[step]}
            </h4>
          </div>
        </div>
      </div>

      {/* METALLIC SCREW ACCENT COUPLING/NECK (Ridged steel threaded rings) */}
      <div className="w-[36%] h-[5.5%] relative z-10 flex flex-col justify-between overflow-hidden bg-gradient-to-r from-[#8b919d] via-[#f1f5f9] via-[#e2e8f0] to-[#5a5f6b] shadow-[0_2px_4px_rgba(0,0,0,0.1)] border-x border-[#334B89]/10">
        <div className="w-full h-[1px] bg-[#334B89]/10" />
        {/* Simulated fine metallic threading details */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]" />
        <div className="w-full h-[2px] bg-[#334B89]/20" />
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]" />
        <div className="w-full h-[1px] bg-black/15" />
      </div>

      {/* 3D CYLINDRICAL RED WOOD-LAQUERED CAP (Base Stand) */}
      <div className="w-[48%] h-[14%] rounded-b-[24px] rounded-t-[3px] border border-[#334B89]/10 relative shadow-[0_12px_24px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col items-center justify-center bg-[#A92E29]">
        {/* Soft cylindrical reflection shading on the red cap */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-white/10 via-transparent to-black/45 pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 left-[25%] w-[12%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10 filter blur-[1px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/25 to-transparent pointer-events-none z-10" />
      </div>

      {/* Beautiful soft physical ground landing shadow */}
      <div className="absolute -bottom-4.5 w-[85%] h-4.5 bg-black/12 blur-sm rounded-full -z-10 opacity-75 pointer-events-none" />
    </div>
  );
}
