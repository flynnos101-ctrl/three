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

  // Width drives everything; height = width × (380/100)
  const widthMap = { sm: 62, md: 82, lg: 100, xl: 120 };
  const w = widthMap[size];
  const h = Math.round(w * 3.8);
  const uid = `bottle${step}`;

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
          ? "hover:scale-[1.07] hover:-translate-y-3 transition-all duration-300 ease-out cursor-pointer"
          : ""
      } ${isWiggling ? "animate-physical-wiggle" : ""} ${className}`}
    >
      {/*
        ViewBox: 0 0 100 380
        ─────────────────────────────
        y   0–12   nozzle arm
        y   4–19   pump head
        y  18–44   pump shaft
        y  38–50   collar ring
        y  44–76   bottle neck
        y  72–98   shoulder (trapezoid)
        y  86–342  main body
        y 340–348  base rim
        y 370      ground shadow
      */}
      <svg
        viewBox="0 0 100 380"
        width={w}
        height={h}
        style={{ overflow: "visible" }}
        aria-label={`Step ${step}: ${wordMap[step]}`}
      >
        <defs>
          {/* ── BODY: deep cylinder gradient left→right ── */}
          <linearGradient id={`${uid}-body`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#7090d8" />
            <stop offset="5%"   stopColor="#4a6cbf" />
            <stop offset="14%"  stopColor="#2c52ae" />
            <stop offset="32%"  stopColor="#1e3f96" />
            <stop offset="55%"  stopColor="#18338a" />
            <stop offset="78%"  stopColor="#102268" />
            <stop offset="100%" stopColor="#071440" />
          </linearGradient>

          {/* ── BODY SPECULAR: narrow bright band ~22% from left ── */}
          <linearGradient id={`${uid}-sheen`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.00" />
            <stop offset="17%"  stopColor="white" stopOpacity="0.00" />
            <stop offset="22%"  stopColor="white" stopOpacity="0.18" />
            <stop offset="27%"  stopColor="white" stopOpacity="0.00" />
            <stop offset="100%" stopColor="white" stopOpacity="0.00" />
          </linearGradient>

          {/* ── BODY TOP FADE: AO at top under collar ── */}
          <linearGradient id={`${uid}-topfade`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="black" stopOpacity="0.28" />
            <stop offset="100%" stopColor="black" stopOpacity="0.00" />
          </linearGradient>

          {/* ── BODY BOTTOM FADE: AO at base ── */}
          <linearGradient id={`${uid}-botfade`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="black" stopOpacity="0.00" />
            <stop offset="100%" stopColor="black" stopOpacity="0.25" />
          </linearGradient>

          {/* ── NECK gradient ── */}
          <linearGradient id={`${uid}-neck`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4060b5" />
            <stop offset="18%"  stopColor="#2444a0" />
            <stop offset="58%"  stopColor="#162e82" />
            <stop offset="100%" stopColor="#0b1a52" />
          </linearGradient>

          {/* ── CHROME vertical (top-lit) ── */}
          <linearGradient id={`${uid}-chrome-v`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#f6f8fa" />
            <stop offset="18%"  stopColor="#dde5ed" />
            <stop offset="48%"  stopColor="#b0bdc9" />
            <stop offset="78%"  stopColor="#8a98a6" />
            <stop offset="100%" stopColor="#6c7c8c" />
          </linearGradient>

          {/* ── CHROME horizontal (left-lit) ── */}
          <linearGradient id={`${uid}-chrome-h`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#dceaf4" />
            <stop offset="20%"  stopColor="#eef3f8" />
            <stop offset="56%"  stopColor="#c8d4de" />
            <stop offset="100%" stopColor="#8c9aaa" />
          </linearGradient>

          {/* ── LABEL: warm cream with curvature shading ── */}
          <linearGradient id={`${uid}-label`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#e2dcd0" />
            <stop offset="12%"  stopColor="#f7f3eb" />
            <stop offset="48%"  stopColor="#fdfbf6" />
            <stop offset="88%"  stopColor="#f0ebe2" />
            <stop offset="100%" stopColor="#dfd8cb" />
          </linearGradient>

          {/* ── Clip: body shape ── */}
          <clipPath id={`${uid}-clip`}>
            <rect x="21" y="86" width="58" height="258" rx="12" ry="12" />
          </clipPath>

          {/* ── Drop shadow filter ── */}
          <filter id={`${uid}-shadow`} x="-45%" y="-8%" width="190%" height="130%">
            <feDropShadow dx="4" dy="10" stdDeviation="7"
              floodColor="#000c28" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* ══════════ GROUND SHADOW ══════════ */}
        <ellipse cx="52" cy="372" rx="26" ry="5"
          fill="rgba(0,10,40,0.18)"
          style={{ filter: "blur(4px)" }}
        />

        {/* ══════════ MAIN BODY ══════════ */}
        <rect x="21" y="86" width="58" height="258" rx="12" ry="12"
          fill={`url(#${uid}-body)`}
          filter={`url(#${uid}-shadow)`}
        />
        {/* Specular sheen overlay */}
        <rect x="21" y="86" width="58" height="258" rx="12" ry="12"
          fill={`url(#${uid}-sheen)`}
        />
        {/* Left rim catch-light — thin bright sliver */}
        <rect x="21" y="92" width="3" height="246" rx="1.5"
          fill="white" opacity="0.22"
          clipPath={`url(#${uid}-clip)`}
        />
        {/* Top AO darkening under collar */}
        <rect x="21" y="86" width="58" height="32"
          fill={`url(#${uid}-topfade)`}
          clipPath={`url(#${uid}-clip)`}
        />
        {/* Bottom AO darkening */}
        <rect x="21" y="316" width="58" height="28"
          fill={`url(#${uid}-botfade)`}
          clipPath={`url(#${uid}-clip)`}
        />

        {/* ══════════ LABEL ══════════ */}
        {/* Shadow behind label (recessed) */}
        <rect x="25.5" y="167.5" width="49" height="108" rx="2" ry="2"
          fill="rgba(0,0,0,0.14)"
        />
        {/* Label fill */}
        <rect x="25" y="167" width="49" height="108" rx="2" ry="2"
          fill={`url(#${uid}-label)`}
        />
        {/* Label left/right curl shadows */}
        <rect x="25" y="167" width="5" height="108" rx="1"
          fill="rgba(0,0,0,0.07)"
        />
        <rect x="69" y="167" width="5" height="108" rx="1"
          fill="rgba(0,0,0,0.07)"
        />
        {/* Label top/bottom micro-shadows */}
        <rect x="25" y="167" width="49" height="4"
          fill="rgba(0,0,0,0.05)"
        />
        <rect x="25" y="271" width="49" height="4"
          fill="rgba(0,0,0,0.05)"
        />

        {/* NUMBER WORD — only text on the bottle */}
        <text
          x="49.5"
          y="222"
          fontFamily='"Bricolage Grotesque", "Georgia", "Times New Roman", serif'
          fontSize="16"
          fontStyle="italic"
          fontWeight="900"
          fill="#C02E29"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {wordMap[step]}
        </text>

        {/* ══════════ SHOULDER (trapezoid) ══════════ */}
        <path d="M 21 98 L 79 98 L 69 72 L 31 72 Z"
          fill={`url(#${uid}-neck)`}
        />
        {/* Shoulder left highlight */}
        <path d="M 21 98 L 31 72 L 36 72 L 25 98 Z"
          fill="white" opacity="0.09"
        />
        {/* Shoulder bottom edge AO */}
        <rect x="21" y="92" width="58" height="8"
          fill="rgba(0,0,0,0.14)"
          clipPath={`url(#${uid}-clip)`}
        />

        {/* ══════════ NECK ══════════ */}
        <rect x="31" y="46" width="38" height="28" rx="5" ry="5"
          fill={`url(#${uid}-neck)`}
        />
        {/* Neck left highlight */}
        <rect x="31" y="48" width="9" height="24"
          fill="white" opacity="0.10" rx="3"
        />
        {/* Neck right shadow */}
        <rect x="62" y="48" width="7" height="24"
          fill="rgba(0,0,0,0.14)" rx="3"
        />

        {/* ══════════ COLLAR RING ══════════ */}
        <rect x="27" y="38" width="46" height="12" rx="6" ry="6"
          fill={`url(#${uid}-neck)`}
        />
        <rect x="27" y="38" width="46" height="5" rx="6"
          fill="white" opacity="0.08"
        />

        {/* ══════════ PUMP SHAFT ══════════ */}
        <rect x="37" y="14" width="26" height="28" rx="5" ry="5"
          fill={`url(#${uid}-chrome-h)`}
        />
        {/* Shaft left highlight */}
        <rect x="37" y="14" width="7" height="28"
          fill="white" opacity="0.22" rx="4"
        />
        {/* Shaft right shadow */}
        <rect x="56" y="14" width="7" height="28"
          fill="rgba(0,0,0,0.14)" rx="4"
        />
        {/* Shaft seam line */}
        <line x1="50" y1="14" x2="50" y2="42"
          stroke="rgba(0,0,0,0.06)" strokeWidth="0.5"
        />

        {/* ══════════ PUMP HEAD ══════════ */}
        <rect x="23" y="5" width="54" height="15" rx="7" ry="7"
          fill={`url(#${uid}-chrome-v)`}
        />
        {/* Pump head top specular band */}
        <rect x="27" y="6" width="46" height="5" rx="4"
          fill="white" opacity="0.30"
        />
        {/* Pump head under-edge shadow */}
        <rect x="23" y="17" width="54" height="3"
          fill="rgba(0,0,0,0.12)"
        />
        {/* Pump head left edge highlight */}
        <rect x="23" y="5" width="4" height="15"
          fill="white" opacity="0.16" rx="3"
        />

        {/* ══════════ NOZZLE ══════════ */}
        {/* Nozzle arm */}
        <rect x="68" y="3" width="24" height="10" rx="5" ry="5"
          fill={`url(#${uid}-chrome-v)`}
        />
        {/* Nozzle top highlight */}
        <rect x="68" y="3" width="24" height="4" rx="5"
          fill="white" opacity="0.28"
        />
        {/* Nozzle bottom shadow */}
        <rect x="68" y="10" width="24" height="3" rx="0"
          fill="rgba(0,0,0,0.12)"
        />
        {/* Nozzle tip opening (dark hole) */}
        <ellipse cx="93" cy="8" rx="2.5" ry="3.5"
          fill="#1a2030"
        />
        {/* Nozzle tip rim */}
        <ellipse cx="93" cy="8" rx="2.5" ry="3.5"
          fill="none" stroke="#7a8896" strokeWidth="1"
        />

        {/* ══════════ BASE RIM ══════════ */}
        <rect x="19" y="339" width="62" height="7" rx="3" ry="3"
          fill="rgba(5,14,48,0.90)"
        />
        {/* Base top highlight */}
        <rect x="19" y="339" width="62" height="2" rx="3"
          fill="white" opacity="0.06"
        />
      </svg>
    </div>
  );
}
