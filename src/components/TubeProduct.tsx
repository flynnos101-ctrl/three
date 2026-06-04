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
  label: _label,
  size = "md",
  className = "",
  interactive = true,
}: TubeProductProps) {
  const [isWiggling, setIsWiggling] = useState(false);

  const wordMap: Record<1 | 2 | 3, string> = { 1: "one", 2: "two", 3: "three" };

  const widthMap = { sm: 60, md: 78, lg: 96, xl: 114 };
  const w = widthMap[size];
  const h = Math.round(w * 3.2);
  const uid = `b${step}`;

  const handleClick = () => {
    if (!interactive) return;
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 550);
  };

  return (
    <div
      id={`bottle-step-${step}`}
      onClick={handleClick}
      className={`select-none inline-block ${
        interactive
          ? "hover:scale-[1.06] hover:-translate-y-3 transition-all duration-300 ease-out cursor-pointer"
          : ""
      } ${isWiggling ? "animate-physical-wiggle" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 80 260"
        width={w}
        height={h}
        style={{ overflow: "visible" }}
        aria-label={`Step ${step}: ${wordMap[step]}`}
      >
        <defs>
          {/* Left-to-right cylinder shading */}
          <linearGradient id={`${uid}-body`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#5878d0" />
            <stop offset="8%"   stopColor="#3a60be" />
            <stop offset="25%"  stopColor="#2550b4" />
            <stop offset="50%"  stopColor="#1e48ae" />
            <stop offset="78%"  stopColor="#153898" />
            <stop offset="100%" stopColor="#0c2470" />
          </linearGradient>

          {/* Soft matte sheen */}
          <linearGradient id={`${uid}-sheen`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.14" />
            <stop offset="28%"  stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="black" stopOpacity="0.06" />
          </linearGradient>

          {/* Top cap gradient */}
          <linearGradient id={`${uid}-top`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4068c8" />
            <stop offset="40%"  stopColor="#1e42a8" />
            <stop offset="100%" stopColor="#0c2268" />
          </linearGradient>

          {/* Bottom cap gradient */}
          <linearGradient id={`${uid}-bot`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#3860bc" />
            <stop offset="40%"  stopColor="#1a3ea0" />
            <stop offset="100%" stopColor="#0a1e60" />
          </linearGradient>

          {/* Top AO */}
          <linearGradient id={`${uid}-topao`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="black" stopOpacity="0.18" />
            <stop offset="100%" stopColor="black" stopOpacity="0.00" />
          </linearGradient>

          {/* Bottom AO */}
          <linearGradient id={`${uid}-botao`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="black" stopOpacity="0.00" />
            <stop offset="100%" stopColor="black" stopOpacity="0.20" />
          </linearGradient>

          <clipPath id={`${uid}-clip`}>
            <rect x="10" y="28" width="60" height="196" rx="0" />
          </clipPath>

          <filter id={`${uid}-shadow`} x="-40%" y="-5%" width="180%" height="120%">
            <feDropShadow dx="3" dy="8" stdDeviation="6"
              floodColor="#00060f" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="41" cy="254" rx="26" ry="4"
          fill="rgba(0,6,20,0.18)"
          style={{ filter: "blur(4px)" }}
        />

        {/* ── BOTTLE BODY ── */}
        <rect x="10" y="28" width="60" height="196" rx="0"
          fill={`url(#${uid}-body)`}
          filter={`url(#${uid}-shadow)`}
        />

        {/* Sheen */}
        <rect x="10" y="28" width="60" height="196" rx="0"
          fill={`url(#${uid}-sheen)`}
        />

        {/* Left rim catch-light */}
        <rect x="10" y="30" width="2.5" height="192"
          fill="white" opacity="0.16"
          clipPath={`url(#${uid}-clip)`}
        />

        {/* Top AO */}
        <rect x="10" y="28" width="60" height="30"
          fill={`url(#${uid}-topao)`}
          clipPath={`url(#${uid}-clip)`}
        />

        {/* Bottom AO */}
        <rect x="10" y="194" width="60" height="30"
          fill={`url(#${uid}-botao)`}
          clipPath={`url(#${uid}-clip)`}
        />

        {/* ── TOP CAP ── */}
        <rect x="10" y="14" width="60" height="18" rx="6" ry="6"
          fill={`url(#${uid}-top)`}
        />
        <rect x="10" y="14" width="60" height="6" rx="6"
          fill="white" opacity="0.08"
        />
        {/* Cap-body separation line */}
        <line x1="10" y1="29" x2="70" y2="29"
          stroke="rgba(0,0,0,0.20)" strokeWidth="1.2"
        />

        {/* ── BOTTOM CAP ── */}
        <rect x="10" y="224" width="60" height="18" rx="6" ry="6"
          fill={`url(#${uid}-bot)`}
        />
        {/* Cap-body separation line */}
        <line x1="10" y1="225" x2="70" y2="225"
          stroke="rgba(0,0,0,0.20)" strokeWidth="1.2"
        />
        <rect x="10" y="234" width="60" height="8" rx="6"
          fill="rgba(0,0,0,0.14)"
        />

        {/* ── LABEL ── */}
        {/* Shadow */}
        <rect x="10.6" y="95.6" width="59.8" height="100" rx="0"
          fill="rgba(0,0,0,0.14)"
        />
        {/* Face */}
        <rect x="10" y="95" width="60" height="100" rx="0"
          fill="#F8F8F6"
        />
        {/* Edge curl shadows */}
        <rect x="10" y="95" width="4" height="100"
          fill="rgba(0,0,0,0.06)"
        />
        <rect x="66" y="95" width="4" height="100"
          fill="rgba(0,0,0,0.06)"
        />
        {/* Top/bottom micro lines */}
        <rect x="10" y="95" width="60" height="3"
          fill="rgba(0,0,0,0.07)"
        />
        <rect x="10" y="192" width="60" height="3"
          fill="rgba(0,0,0,0.07)"
        />

        {/* ── WORD ── */}
        <text
          x="40"
          y="146"
          fontFamily='"Bricolage Grotesque", "Georgia", serif'
          fontSize="15"
          fontStyle="italic"
          fontWeight="900"
          fill="#C02E29"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {wordMap[step]}
        </text>
      </svg>
    </div>
  );
}
