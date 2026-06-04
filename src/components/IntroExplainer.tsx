import React, { useState } from "react";
import { TubeProduct } from "./TubeProduct";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface IntroExplainerProps {
  onAddToBag?: (id: string, name: string, price: number, step: 1 | 2 | 3, volume: string) => void;
}

export function IntroExplainer({ onAddToBag: _onAddToBag }: IntroExplainerProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      step: 1,
      id: "cleanse",
      product: "cleanse",
      frequency: "morning & night",
    },
    {
      step: 2,
      id: "exfoliate",
      product: "exfoliate",
      frequency: "3 × a week, evenings",
    },
    {
      step: 3,
      id: "moisturise",
      product: "moisturise",
      frequency: "morning & night",
    },
  ];

  return (
    <section id="routine-explainer" className="bg-[#FAF2DB] text-[#334B89] py-32 px-6 md:px-16 overflow-hidden border-b-4 border-[#334B89]">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* EDITORIAL HEADER */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif italic text-5xl sm:text-7xl md:text-8xl font-black text-[#334B89] tracking-tight leading-none lowercase">
            three bottles, one perfect ritual.
          </h2>
          <div className="w-16 h-[2px] bg-[#334B89]/20 mx-auto" />
          <p className="font-sans text-lg text-[#334B89]/90 max-w-xl mx-auto leading-relaxed font-semibold">
            we stripped out the fuss.
          </p>
        </div>

        {/* 3-COLUMN CARDS WITH HOVER EXPAND */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {steps.map((item) => {
            const numWord = item.step === 1 ? "one" : item.step === 2 ? "two" : "three";
            const isExpanded = activeStep === item.step;

            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(item.step)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-[#FFFDEC] border-4 ${
                  isExpanded ? "border-[#E63931] shadow-[0_24px_48px_rgba(230,57,49,0.12)]" : "border-[#334B89] hover:border-[#E63931] hover:shadow-[0_24px_48px_rgba(230,57,49,0.1)]"
                } p-8 md:p-10 rounded-[40px] flex flex-col items-center justify-between transition-all duration-300 shadow-xl text-center cursor-pointer group`}
              >
                {/* Number word */}
                <h3 className="font-serif italic text-6xl md:text-7xl font-black text-[#E63931] tracking-tight leading-none mb-2 lowercase select-none group-hover:scale-105 transition-transform duration-300">
                  {numWord}
                </h3>

                {/* Product name below number */}
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#334B89] font-black mb-6">
                  {item.product}
                </div>

                {/* Tube Product visual */}
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
                      className="w-full mt-6 pt-6 border-t-2 border-[#334B89]/15 overflow-hidden flex justify-center"
                    >
                      <span className="font-mono text-sm uppercase tracking-widest font-black text-[#334B89]">
                        {item.frequency}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 pt-4 border-t border-[#334B89]/5 w-full flex justify-center items-center"
                    >
                      <ChevronDown className="w-5 h-5 text-[#E63931]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
