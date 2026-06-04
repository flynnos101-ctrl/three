import React, { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Product } from "../types";
import { TubeProduct } from "./TubeProduct";

interface IndividualGridProps {
  onAddToBag: (id: string, name: string, price: number, step: 1 | 2 | 3, volume: string) => void;
}

export function IndividualGrid({ onAddToBag }: IndividualGridProps) {
  const [activeTab, setActiveTab] = useState<Record<string, "benefits" | "how">>( {
    cleanse: "benefits",
    exfoliate: "benefits",
    moisturise: "benefits",
  });

  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "cleanse",
      step: 1,
      name: "cleanse",
      tagline: "The Daily Wash",
      volume: "150ml",
      price: 26,
      description: "Lifts daily residue without stripping. Non-foaming, gentle, done.",
      benefits: [
        "Lifts daily residue",
        "Preserves skin pH",
        "Non-foaming, never tight"
      ],
      howToUse: "Massage onto damp skin for 30 seconds. Rinse with cool water."
    },
    {
      id: "exfoliate",
      step: 2,
      name: "exfoliate",
      tagline: "The Resurfacing Liquid",
      volume: "100ml",
      price: 32,
      description: "A leave-on liquid that clears pores and smooths texture. Use it, don't rinse it.",
      benefits: [
        "Clears pores",
        "Smooths rough texture",
        "No grit, no scrubbing"
      ],
      howToUse: "Pat 3–4 drops onto dry skin. Leave it. Don't rinse."
    },
    {
      id: "moisturise",
      step: 3,
      name: "moisturise",
      tagline: "The Velvet Barrier",
      volume: "75ml",
      price: 29,
      description: "Absorbs instantly. Zero grease. Locks in everything the first two steps did.",
      benefits: [
        "Absorbs in seconds",
        "Zero grease, zero shine",
        "Seals the barrier"
      ],
      howToUse: "One small squeeze. Massage in. Done."
    }
  ];

  const handleProductAdd = (p: Product) => {
    onAddToBag(p.id, p.name, p.price, p.step, p.volume);
    setAddedProduct(p.id);
    setTimeout(() => {
      setAddedProduct(null);
    }, 1500);
  };

  return (
    <section id="individual-product-grid" className="bg-[#FAF2DB] text-[#334B89] py-32 px-6 md:px-16 border-b-4 border-[#334B89]">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="mb-20 space-y-4 max-w-2xl text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E63931] font-bold block">
            REFILL SINGLES
          </span>
          <h2 className="font-serif italic text-5xl md:text-6xl text-[#334B89] font-black leading-tight lowercase">
            need a refill?
          </h2>
          <p className="font-sans text-lg text-[#334B89] font-semibold max-w-md leading-relaxed">
            pick up whichever step you're running low on.
          </p>
        </div>

        {/* Minimal 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((p) => (
            <div
              key={p.id}
              id={`product-card-${p.id}`}
              className="bg-[#FFFDEC] rounded-[36px] p-8 flex flex-col justify-between border-4 border-[#334B89] hover:translate-y-[-6px] transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                
                {/* Visual Cylinder Render Platform */}
                <div className="flex justify-center py-10 bg-[#FAF2DB]/50 rounded-[28px] border-2 border-[#334B89]/10 overflow-hidden">
                  <TubeProduct
                    step={p.step}
                    label={p.name}
                    size="md"
                    interactive={true}
                  />
                </div>

                {/* Name & Pricing Details */}
                <div className="space-y-1.5 border-b-2 border-[#334B89]/15 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif italic text-3xl font-black text-[#334B89] capitalize">
                      {p.name}
                    </h3>
                    <span className="font-mono text-xl font-black text-[#334B89]">
                      ${p.price} <span className="text-[10px] text-[#334B89]/60 font-bold uppercase tracking-widest">AUD</span>
                    </span>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider text-[#E63931] font-bold">
                    <span>{p.tagline}</span>
                    <span className="font-black bg-[#E63931]/10 px-2.5 py-0.5 rounded-full">{p.volume}</span>
                  </div>
                </div>

                <p className="font-sans text-sm text-[#334B89]/95 leading-relaxed min-h-[50px] font-semibold">
                  {p.description}
                </p>

                {/* Minimalist Tabs: Benefits vs Usage without brutal colors */}
                <div className="space-y-4 pt-1">
                  <div className="flex border-b-2 border-[#334B89]/10 text-xs font-mono tracking-widest">
                    <button
                      id={`tab-benefits-${p.id}`}
                      onClick={() => setActiveTab((prev) => ({ ...prev, [p.id]: "benefits" }))}
                      className={`pb-2 pr-6 font-black uppercase border-b-4 transition-all duration-300 ${
                        activeTab[p.id] === "benefits" ? "border-[#E63931] text-[#E63931]" : "border-transparent text-[#334B89]/50"
                      }`}
                    >
                      BENEFITS
                    </button>
                    <button
                      id={`tab-how-${p.id}`}
                      onClick={() => setActiveTab((prev) => ({ ...prev, [p.id]: "how" }))}
                      className={`pb-2 px-3 font-black uppercase border-b-4 transition-all duration-300 ${
                        activeTab[p.id] === "how" ? "border-[#E63931] text-[#E63931]" : "border-transparent text-[#334B89]/50"
                      }`}
                    >
                      USAGE
                    </button>
                  </div>

                  {/* Body Text inside Tabs container */}
                  <div className="min-h-[110px] text-xs font-sans leading-relaxed text-[#334B89] font-semibold">
                    {activeTab[p.id] === "benefits" ? (
                      <ul className="space-y-2 cursor-default font-bold">
                        {p.benefits.map((b, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#E63931] mr-2 shrink-0">●</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="bg-[#FAF2DB]/50 p-4 rounded-2xl border-2 border-[#334B89]/10 text-xs text-[#334B89]/95 font-bold leading-relaxed">
                        {p.howToUse}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Add to Box Action Button */}
              <button
                id={`add-to-bag-${p.id}`}
                onClick={() => handleProductAdd(p)}
                className="w-full mt-6 bg-[#E63931] text-white py-3.5 px-6 rounded-full font-mono text-xs uppercase tracking-widest font-black hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 flex justify-center items-center gap-2 shadow-md leading-none"
              >
                {addedProduct === p.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-current" />
                    <span>Added To Box</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-current" />
                    <span>Add to Box — ${p.price}</span>
                  </>
                )}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
