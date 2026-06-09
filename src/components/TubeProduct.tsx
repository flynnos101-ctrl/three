import React, { useState } from "react";
import productsImg from "../assets/products.png";

interface TubeProductProps {
  step: 1 | 2 | 3;
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  interactive?: boolean;
}

const sizeMap = {
  sm:  { w: 110, h: 150 },
  md:  { w: 150, h: 200 },
  lg:  { w: 190, h: 255 },
  xl:  { w: 230, h: 308 },
};

// Centers of each product in the 1400×933 group photo.
// backgroundSize: 300% auto → scaled image = 3× container width.
// Positions derived from: X = (CW/2 - TX·SW/IW) / (CW−SW) × 100
// (consistent across all container sizes — verified numerically)
const cropStyle: Record<1 | 2 | 3, React.CSSProperties> = {
  1: { backgroundSize: "300% auto", backgroundPosition: "0% 50%"   }, // tube,   center x≈215
  2: { backgroundSize: "300% auto", backgroundPosition: "45% 38%"  }, // bottle, center x≈650
  3: { backgroundSize: "300% auto", backgroundPosition: "94% 100%" }, // jar,    center x≈1110
};

export function TubeProduct({
  step,
  label: _label,
  size = "md",
  className = "",
  interactive = true,
}: TubeProductProps) {
  const [isWiggling, setIsWiggling] = useState(false);
  const { w, h } = sizeMap[size];

  const handleClick = () => {
    if (!interactive) return;
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 550);
  };

  return (
    <div
      id={`bottle-step-${step}`}
      onClick={handleClick}
      className={`select-none rounded-2xl ${
        interactive
          ? "hover:scale-[1.06] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
          : ""
      } ${isWiggling ? "animate-physical-wiggle" : ""} ${className}`}
      style={{
        width: w,
        height: h,
        flexShrink: 0,
        backgroundImage: `url(${productsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FAF2DB",
        ...cropStyle[step],
      }}
    />
  );
}
