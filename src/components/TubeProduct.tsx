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

// CSS background-image crop for each product in the 1400×933 group photo
const cropStyle: Record<1 | 2 | 3, React.CSSProperties> = {
  1: { backgroundSize: "380% auto", backgroundPosition: "3.5% 35%" },
  2: { backgroundSize: "320% auto", backgroundPosition: "46% 17%" },
  3: { backgroundSize: "360% auto", backgroundPosition: "88% 100%" },
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
        backgroundBlendMode: "multiply",
        ...cropStyle[step],
      }}
    />
  );
}
