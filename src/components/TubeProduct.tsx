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

  const widthMap = { sm: 68, md: 88, lg: 108, xl: 128 };
  const w = widthMap[size];
  const h = Math.round(w * 3.7);
  const uid = `t${step}`;

  const handleClick = () => {
    if (!interactive) return;
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 550);
  };

  /*
    ViewBox: 0 0 100 370

    Layout top → bottom:
      Dome top:   y ≈ 30–80   (smooth rounded shoulder + tip)
      Body:       y = 78–312  (tall cylindrical tube)
      Base cap:   y = 310–348 (slightly wider flat cap)
      Shadow:     y ≈ 362
  */

  // Body + dome combined silhouette path
  const bodyPath = `
    M 21 312
    L 21 88
    C 21 56, 32 36, 50 34
    C 68 36, 79 56, 79 88
    L 79 312
    Z
  `;

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
        viewBox="0 0 100 370"
        width={w}
        height={h}
        style={{ overflow: "visible" }}
        aria-label={`Step ${step}: ${wordMap[step]}`}
      >
        <defs>
          {/* ── Matte body: subtle left→right cylinder gradient ── */}
          <linearGradient id={`${uid}-g-body`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4a72c8" />
            <stop offset="8%"   stopColor="#3060bc" />
            <stop offset="22%"  stopColor="#2252b0" />
            <stop offset="45%"  stopColor="#1c48aa" />
            <stop offset="72%"  stopColor="#163ca0" />
            <stop offset="100%" stopColor="#0e2878" />
          </linearGradient>

          {/* ── Soft matte sheen: diffuse, not specular ── */}
          <linearGradient id={`${uid}-g-sheen`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.12" />
            <stop offset="30%"  stopColor="white" stopOpacity="0.04" />
            <stop offset="65%"  stopColor="black" stopOpacity="0.00" />
            <stop offset="100%" stopColor="black" stopOpacity="0.06" />
          </linearGradient>

          {/* ── Top AO: darkens just under dome ── */}
          <linearGradient id={`${uid}-g-topao`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="black" stopOpacity="0.14" />
            <stop offset="100%" stopColor="black" stopOpacity="0.00" />
          </linearGradient>

          {/* ── Bottom AO: darkens just above base cap ── */}
          <linearGradient id={`${uid}-g-botao`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="black" stopOpacity="0.00" />
            <stop offset="100%" stopColor="black" stopOpacity="0.20" />
          </linearGradient>

          {/* ── Base cap gradient ── */}
          <linearGradient id={`${uid}-g-cap`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#3a62b8" />
            <stop offset="35%"  stopColor="#1e44a8" />
            <stop offset="100%" stopColor="#0e2268" />
          </linearGradient>

          {/* ── Base cap vertical: top-lit ── */}
          <linearGradient id={`${uid}-g-capv`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="white"  stopOpacity="0.08" />
            <stop offset="40%"  stopColor="white"  stopOpacity="0.00" />
            <stop offset="100%" stopColor="black"  stopOpacity="0.22" />
          </linearGradient>

          {/* ── Clip path: body silhouette ── */}
          <clipPath id={`${uid}-clip`}>
            <path d={bodyPath} />
          </clipPath>

          {/* ── Drop shadow ── */}
          <filter id={`${uid}-f-shadow`} x="-40%" y="-5%" width="180%" height="125%">
            <feDropShadow dx="3" dy="9" stdDeviation="6"
              floodColor="#00081a" floodOpacity="0.24" />
          </filter>

          {/* ── Cap shadow ── */}
          <filter id={`${uid}-f-capshadow`} x="-40%" y="-10%" width="180%" height="140%">
            <feDropShadow dx="3" dy="8" stdDeviation="5"
              floodColor="#00081a" floodOpacity="0.20" />
          </filter>
        </defs>

        {/* ═══ GROUND SHADOW ═══ */}
        <ellipse cx="51" cy="362" rx="28" ry="5"
          fill="rgba(0,8,28,0.18)"
          style={{ filter: "blur(4px)" }}
        />

        {/* ═══ BASE CAP ═══ */}
        <rect x="14" y="310" width="72" height="36" rx="8" ry="8"
          fill={`url(#${uid}-g-cap)`}
          filter={`url(#${uid}-f-capshadow)`}
        />
        {/* Cap sheen top-to-bottom */}
        <rect x="14" y="310" width="72" height="36" rx="8"
          fill={`url(#${uid}-g-capv)`}
        />
        {/* Cap separation groove */}
        <line x1="14" y1="313" x2="86" y2="313"
          stroke="rgba(0,0,0,0.18)" strokeWidth="1.5"
        />
        {/* Cap left edge highlight */}
        <rect x="14" y="313" width="2" height="30"
          fill="white" opacity="0.10" rx="1"
        />

        {/* ═══ MAIN TUBE BODY ═══ */}
        <path
          d={bodyPath}
          fill={`url(#${uid}-g-body)`}
          filter={`url(#${uid}-f-shadow)`}
        />

        {/* Matte sheen overlay */}
        <path d={bodyPath} fill={`url(#${uid}-g-sheen)`} />

        {/* Left edge rim light */}
        <rect x="21" y="88" width="2.5" height="224"
          fill="white" opacity="0.16"
          clipPath={`url(#${uid}-clip)`}
        />

        {/* Top AO (under dome tip, into body) */}
        <rect x="21" y="78" width="58" height="40"
          fill={`url(#${uid}-g-topao)`}
          clipPath={`url(#${uid}-clip)`}
        />

        {/* Bottom AO (above cap junction) */}
        <rect x="21" y="282" width="58" height="32"
          fill={`url(#${uid}-g-botao)`}
          clipPath={`url(#${uid}-clip)`}
        />

        {/* ═══ LABEL ═══ */}

        {/* Label recessed shadow */}
        <rect x="21.6" y="153.6" width="56.8" height="120" rx="1" ry="1"
          fill="rgba(0,0,0,0.14)"
        />

        {/* Label face — clean white, like The Ordinary */}
        <rect x="21" y="153" width="57" height="120" rx="1" ry="1"
          fill="#F9F9F7"
        />

        {/* Label edge curl shadows */}
        <rect x="21" y="153" width="4.5" height="120"
          fill="rgba(0,0,0,0.06)" rx="0.5"
        />
        <rect x="73.5" y="153" width="4.5" height="120"
          fill="rgba(0,0,0,0.06)" rx="0.5"
        />

        {/* Label top/bottom micro-shadow lines */}
        <rect x="21" y="153" width="57" height="3.5"
          fill="rgba(0,0,0,0.06)"
        />
        <rect x="21" y="269.5" width="57" height="3.5"
          fill="rgba(0,0,0,0.06)"
        />

        {/* ═══ WORD — only text on the bottle ═══ */}
        <text
          x="49.5"
          y="214"
          fontFamily='"Bricolage Grotesque", "Georgia", serif'
          fontSize="17"
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
