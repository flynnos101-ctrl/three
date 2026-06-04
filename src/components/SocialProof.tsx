import React from "react";
import { Star, Globe } from "lucide-react";
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
      text: "Literally condensed my grooming space from 8 steps to exactly 3. No thinking. Clean skin, absolutely no breakouts, and smells extremely quiet.",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60",
      lifestyleUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=70"
    },
    {
      id: "2",
      name: "Riley Cooper",
      handle: "@rileycoop",
      age: 31,
      stars: 5,
      verified: true,
      text: "Bought the simple routine suite. My partner keeps borrowing the Hydrator (Step 3) because it leaves absolutely zero greasy sheen on contact. Ordering set #2.",
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60"
    },
    {
      id: "3",
      name: "Liam O'Connor",
      handle: "@liam_oc",
      age: 22,
      stars: 5,
      verified: true,
      text: "Used to wash my face with aggressive soaps. This is an incredible upgrade. Nose pores are visibly refined and my shelf looks incredible.",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=60",
      lifestyleUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=70"
    },
    {
      id: "4",
      name: "Devon Patel",
      handle: "@dev_p",
      age: 29,
      stars: 5,
      verified: true,
      text: "Zero subscription tricks or constant upsell messages. Just 1, 2, 3 in pristine designer bottles. Shipping arrived the next morning.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60"
    },
    {
      id: "5",
      name: "Thomas Bailey",
      handle: "@t_bailey",
      age: 34,
      stars: 5,
      verified: true,
      text: "The Resurfacing Exfoliator is miraculous. I used to get shaving redness all along my jaw. Commenced this fluid and my skin is entirely smooth.",
      avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=60",
      lifestyleUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=70"
    },
    {
      id: "6",
      name: "Zavier S.",
      handle: "@zav_shoppes",
      age: 25,
      stars: 5,
      verified: true,
      text: "A clean, tactile statement on the concrete counter. Best values, clear English, and absolutely no synthetic fragrances or filler ingredients.",
      avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="social-proof-section" className="bg-[#334B89] text-[#FAF2DB] py-32 px-6 md:px-16 border-b-4 border-[#334B89]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left space-y-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F2B824] font-bold block">
            UNCENSORED OPINIONS
          </span>
          <h2 className="font-serif italic text-5xl md:text-6xl font-black text-[#FAF2DB] uppercase tracking-tight leading-none">
            Trusted by active faces.
          </h2>
          <p className="font-sans text-[#FAF2DB]/85 text-sm max-w-md font-semibold leading-relaxed">
            Honest, unfiltered feedback from individuals who discarded bathroom counter clutter for three-step simplicity.
          </p>
        </div>

        {/* Cinematic Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`review-card-${t.id}`}
              className="bg-[#FFFDEC] border-4 border-[#334B89] p-6.5 rounded-[36px] space-y-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 shadow-xl text-[#334B89]"
            >
              <div className="space-y-4">
                {/* User Info Header */}
                <div className="flex justify-between items-center select-none">
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#334B89] shadow-sm"
                    />
                    <div>
                      <h4 className="font-sans font-black text-xs text-[#334B89] uppercase tracking-wider">
                        {t.name}
                      </h4>
                      <p className="font-mono text-[9px] text-[#334B89]/60 tracking-wider font-bold">
                        {t.handle} • Age {t.age}
                      </p>
                    </div>
                  </div>

                  {t.verified && (
                    <div className="flex items-center space-x-1 border border-[#E63931]/20 bg-[#E63931]/5 px-2 py-0.5 rounded-full select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E63931]" />
                      <span className="font-mono text-[7px] text-[#E63931] uppercase font-black tracking-widest">VERIFIED</span>
                    </div>
                  )}
                </div>

                {/* Star Ratings */}
                <div className="flex items-center space-x-0.5 pointer-events-none select-none">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F2B824] fill-[#F2B824]" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="font-serif italic text-sm text-[#334B89]/95 leading-relaxed font-bold">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Lifestyle Representation Image */}
              {t.lifestyleUrl && (
                <div className="mt-4 overflow-hidden rounded-2xl border-2 border-[#334B89] aspect-video relative select-none">
                  <img
                    src={t.lifestyleUrl}
                    alt="Product lifestyle counter"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-[#334B89] text-white px-2.5 py-1 rounded-full font-mono text-[7px] uppercase tracking-widest font-bold">
                    PRACTICAL SET
                  </div>
                </div>
              )}

              {/* Micro actions with elegant styling */}
              <div className="flex items-center space-x-5 pt-4 border-t-2 border-[#334B89]/10 text-[#334B89]/55 text-[9px] font-mono uppercase tracking-widest font-black select-none">
                <span className="cursor-pointer hover:text-[#E63931]">Helpful (11)</span>
                <span>•</span>
                <span>Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal info statement */}
        <div className="mt-20 text-center">
          <div className="inline-block border-4 border-[#334B89] bg-[#FFFDEC] text-[#334B89] rounded-full px-8 py-3.5 font-mono text-xs uppercase tracking-widest font-black shadow-lg">
            Tag us <strong className="text-[#E63931] font-black italic">#ThreeSydney</strong> to share your counter setup.
          </div>
        </div>

      </div>
    </section>
  );
}
