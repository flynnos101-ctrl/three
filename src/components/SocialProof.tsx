import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "../types";

export function SocialProof() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Marcus K.",
      handle: "@marcus_paddington",
      age: 26,
      stars: 5,
      verified: true,
      text: "Condensed my grooming from 8 steps to 3. Clean skin, no breakouts.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: "2",
      name: "Riley Cooper",
      handle: "@rileycoop",
      age: 31,
      stars: 5,
      verified: true,
      text: "My partner keeps borrowing Step 3. Zero greasy sheen. Ordering set #2.",
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: "3",
      name: "Liam O'Connor",
      handle: "@liam_oc",
      age: 22,
      stars: 5,
      verified: true,
      text: "Upgraded from bar soap. Pores are visibly refined and my shelf looks incredible.",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: "4",
      name: "Devon Patel",
      handle: "@dev_p",
      age: 29,
      stars: 5,
      verified: true,
      text: "No subscription tricks. Just 1, 2, 3 in clean bottles. Arrived next morning.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: "5",
      name: "Thomas Bailey",
      handle: "@t_bailey",
      age: 34,
      stars: 5,
      verified: true,
      text: "Used to get shaving redness all along my jaw. Entirely smooth now.",
      avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60",
    },
    {
      id: "6",
      name: "Zavier S.",
      handle: "@zav_shoppes",
      age: 25,
      stars: 5,
      verified: true,
      text: "Clean design. Clear English. No synthetic fragrances. Exactly what I wanted.",
      avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=60",
    },
  ];

  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="social-proof-section" className="bg-[#FAF2DB] text-[#334B89] py-24 border-b-4 border-[#334B89] overflow-hidden">

      {/* Header */}
      <div className="px-4 md:px-10 mb-16 max-w-7xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E63931] font-bold block mb-3">
          WHAT PEOPLE SAY
        </span>
        <h2 className="font-serif italic text-5xl md:text-6xl font-black text-[#334B89] lowercase tracking-tight leading-none">
          trusted by real faces.
        </h2>
      </div>

      {/* Infinite marquee — full bleed, no max-width */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 marquee-track" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-80 flex-shrink-0 bg-[#FFFDEC] border-4 border-[#334B89] p-7 rounded-[32px] flex flex-col gap-5"
            >
              {/* Avatar + name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#334B89]"
                  />
                  <div>
                    <p className="font-sans font-black text-xs text-[#334B89] uppercase tracking-wider">
                      {t.name}
                    </p>
                    <p className="font-mono text-[9px] text-[#334B89]/55 tracking-wider font-bold">
                      {t.handle}
                    </p>
                  </div>
                </div>
                {t.verified && (
                  <div className="flex items-center gap-1 bg-[#E63931]/8 border border-[#E63931]/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E63931]" />
                    <span className="font-mono text-[7px] text-[#E63931] uppercase font-black tracking-widest">verified</span>
                  </div>
                )}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-[#F2B824] fill-[#F2B824]" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif italic text-sm text-[#334B89]/90 leading-relaxed font-bold">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
