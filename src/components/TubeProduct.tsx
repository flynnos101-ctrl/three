import React, { useState } from "react";
import productsImg from "../assets/products.png";

interface TubeProductProps {
  step: 1 | 2 | 3;
  label: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  interactive?: boolean;
}

/*
  The product photo has three items left-to-right:
    step 1 (tube)    → left ~18%
    step 2 (bottle)  → centre 50%
    step 3 (jar)     → right ~82%
  We use object-fit:cover + object-position to crop to each product.
*/
const cropPosition: Record<1 | 2 | 3, string> = {
  1: "18% center",
  2: "50% center",
  3: "82% center",
};

const sizeMap = {
  sm: { w: 110, h: 150 },
  md: { w: 150, h: 200 },
  lg: { w: 190, h: 255 },
  xl: { w: 230, h: 308 },
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
      className={`select-none overflow-hidden rounded-2xl ${
        interactive
          ? "hover:scale-[1.06] hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
          : ""
      } ${isWiggling ? "animate-physical-wiggle" : ""} ${className}`}
      style={{ width: w, height: h, flexShrink: 0 }}
    >
      <img
        src={productsImg}
        alt={`Step ${step} product`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: cropPosition[step],
        }}
        draggable={false}
      />
    </div>
  );
}
