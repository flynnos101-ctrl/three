import React, { useState } from "react";
import { TubeProduct } from "./TubeProduct";
import { ArrowRight, Check, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface IntroExplainerProps {
  onAddToBag?: (id: string, name: string, price: number, step: 1 | 2 | 3, volume: string) => void;
}

export function IntroExplainer({ onAddToBag }: IntroExplainerProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      step: 1,
      id: "cleanse",
      title: "01 • Cleanse",
      product: "cleanse",
      subtitle: "The Milky Balm Wash",
      text: "A non-foaming emulsion that lifts daily residue with absolutely zero surface tightness. Spreads like cool lotion and melts instantly upon rinsing.",
      ingredients: ["Active Aloe Nectar", "Kaolin Clay Extract", "Tasmanian Pine Needles"],
      meta: "150ml • Morning & Night",
      price: 26,
    },
    {
      step: 2,
      id: "exfoliate",
      title: "02 • Exfoliate",
      product: "exfoliate",
      subtitle: "The Micro-Active Fluid",
      text: "A fast-absorbing, leave-on liquid exfoliant that dissolves pore residue and cell buildup. Noticeably refines rough matte skin texture and targets blemishes.",
      ingredients: ["Salicylic Acid 2%", "Active Ocean Kelp", "Tasmanian Rosewater"],
      meta: "100ml • 3 Nights a Week",
      price: 32,
    },
    {
      step: 3,
      id: "moisturise",
      title: "03 • Hydrate",
      product: "moisturise",
      subtitle: "The Zero-Shine Hydrator",
      text: "A whipped, featherlight moisture barrier defense that completely locks in hydration without leaving grease. Fully vanishes into a clean finish on contact.",
      ingredients: ["Vitamin E Antioxidants", "Meadowfoam Seed Oil", "Sandalwood Extract"],
      meta: "75ml • Morning & Night",
      price: 29,
    },
  ];

  return (
    <section id="routine-explainer" className="bg-[#FAF2DB] text-[#334B89] py-32 px-6 md:px-16 overflow-hidden border-b-4 border-[#334B89]">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* EDITORIAL HEADER DESIGN */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E63931] font-bold block">
            AUTHENTIC SKIN ETHICS
          </span>
          <h2 className="font-serif italic text-5xl sm:text-7xl md:text-8xl font-black text-[#334B89] tracking-tight leading-none uppercase">
            Three numbers. <br />
            <span className="text-[#E63931]">One perfect ritual.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#334B89]/20 mx-auto" />
          <p className="font-sans text-lg text-[#334B89]/90 max-w-xl mx-auto leading-relaxed font-semibold">
            We stripped out the multi-step industry clutter. Skincare is just washing your face, refining cellular texture, and shielding your moisture barrier.
          </p>
        </div>

        {/* HIGH-END 3-COLUMN SEAMLESS ALIGNMENT WITH COLLAPSIBLE EXPANSION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {steps.map((item) => {
            const numWord = item.step === 1 ? "one" : item.step === 2 ? "two" : "three";
            const isExpanded = activeStep === item.step;
            
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(isExpanded ? null : item.step)}
                className={`bg-[#FFFDEC] border-4 ${
                  isExpanded ? "border-[#E63931] shadow-[0_24px_48px_rgba(230,57,49,0.12)]" : "border-[#334B89] hover:border-[#E63931] hover:shadow-[0_24px_48px_rgba(230,57,49,0.1)]"
                } p-8 md:p-10 rounded-[40px] flex flex-col items-center justify-between transition-all duration-300 shadow-xl text-center cursor-pointer group`}
              >
                {/* Lowercase spelled-out number */}
                <h3 className="font-serif italic text-6xl md:text-7xl font-black text-[#E63931] tracking-tight leading-none mb-6 lowercase select-none group-hover:scale-105 transition-transform duration-300">
                  {numWord}
                </h3>

                {/* Tube Product visual container */}
                <div className="w-full flex justify-center py-6 bg-[#FAF2DB]/45 rounded-[28px] border-2 border-[#334B89]/5 overflow-hidden group-hover:bg-[#FAF2DB]/85 transition-colors duration-300">
                  <TubeProduct step={item.step as 1 | 2 | 3} label={item.product} size="md" interactive={true} />
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full mt-6 pt-6 border-t-2 border-[#334B89]/15 text-left space-y-4 overflow-hidden"
                    >
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#E63931] font-black block">
                          {item.meta}
                        </span>
                        <h4 className="font-serif italic text-2xl font-black text-[#334B89] mt-0.5 leading-tight">
                          {item.subtitle}
                        </h4>
                      </div>
                      
                      <p className="font-sans text-[13px] text-[#334B89]/85 leading-relaxed font-semibold">
                        {item.text}
                      </p>

                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#334B89]/60 font-bold block">
                          Active Profile:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.ingredients.map((ing, i) => (
                            <span 
                              key={i} 
                              className="font-sans text-[9px] font-black uppercase tracking-wider bg-[#FAF2DB] border border-[#334B89]/10 text-[#334B89] px-2 py-0.5 rounded-full"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      {onAddToBag && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToBag(item.product, item.product, item.price, item.step as 1 | 2 | 3, item.meta.split(" • ")[0]);
                          }}
                          className="w-full bg-[#E63931] text-white hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 py-3.5 px-5 rounded-full font-mono text-[10px] uppercase tracking-widest font-black text-center shadow-md hover:scale-102 flex items-center justify-center gap-2 cursor-pointer mt-2"
                        >
                          Add Step {numWord} • ${item.price}
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 pt-4 border-t border-[#334B89]/5 w-full flex justify-center items-center"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#E63931] font-black group-hover:underline">
                        Reveal Secrets ↓
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* REASSURING BOTTOM INFO CARD */}
        <div className="max-w-4xl mx-auto bg-[#FFFDEC] rounded-[36px] p-8 md:p-12 border-4 border-[#334B89] relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#E63931] font-bold block">
              BORN IN SYDNEY
            </span>
            <h4 className="font-serif italic text-3xl md:text-4xl font-black text-[#334B89] leading-tight">
              A smarter routine is designed by editing.
            </h4>
            <p className="font-sans text-sm text-[#334B89]/85 font-semibold max-w-md">
              Order individual containers when you run out of a step. When purchased together, the full set is discounted by $12.
            </p>
          </div>

          <a
            href="#hero-bundle-section"
            className="bg-[#E63931] text-white hover:bg-[#334B89] hover:text-[#FAF2DB] transition-all duration-300 py-4.5 px-8 rounded-full font-mono text-xs uppercase tracking-widest font-black text-center shadow-lg hover:scale-105"
          >
            Aquire the Routine • $75
          </a>
        </div>

      </div>
    </section>
  );
}
