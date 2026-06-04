import React from "react";

export function WhyThreeManifesto() {
  const points = [
    {
      title: "No Ten-Step Fluff",
      desc: "Legacy skincare companies thrive on selling unnecessary intermediate products. Serums, complex toners, mud masks—they are not clinical necessities, they are invoice fillers. You have one face: wash it daily, refine it, and lock-shield hydration. Done."
    },
    {
      title: "Sydney Formulated, Real Resilience",
      desc: "Designed to withstand harsh sun, oceanic humidity, dry wind, and active lifestyles. We design Three to withstand sudden heat variations, salty air-conditioning, and active outdoor environments."
    },
    {
      title: "Tactile Counter Sculptures",
      desc: "Our bottles feel like solid matte designer sculptures. There are no distracting clinical texts, no chemical diagrams, and no cosmetic artificial odors. Beautiful colored design statement objects on your counter."
    }
  ];

  return (
    <section id="brand-manifesto" className="bg-[#FAF2DB] text-[#334B89] py-32 px-6 md:px-16 border-b-4 border-[#334B89] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Large Left Column Slogan */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E63931] font-bold block">
              OUR MANIFESTO
            </span>
            <h2 className="font-serif italic text-5xl md:text-6xl font-black leading-none text-[#334B89] uppercase">
              We did the editing, so you don’t have to.
            </h2>
            <div className="border-[#E63931] border-l-4 pl-4 py-1 text-sm font-sans italic text-[#334B89]/80 leading-relaxed font-bold">
              \"Traditional routines treat physical skin like a medical experiment. We treat you like a smart friend who values pristine aesthetics and raw, structural health.\"
            </div>
            
            {/* Minimal Stat display */}
            <div className="pt-8 grid grid-cols-2 gap-4 border-t-2 border-[#334B89]/15">
              <div className="space-y-1">
                <span className="font-serif text-5xl text-[#E63931] font-black">0%</span>
                <p className="font-mono text-[9px] tracking-widest text-[#334B89]/65 uppercase font-bold">Synthetic Scent / Fillers</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-5xl text-[#E63931] font-black">2 Min</span>
                <p className="font-mono text-[9px] tracking-widest text-[#334B89]/65 uppercase font-bold">Daily Ritual Duration</p>
              </div>
            </div>
          </div>

          {/* Right Column Points */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="space-y-4 text-center md:text-left">
              <p className="font-serif italic text-2xl text-[#334B89]/90 font-bold leading-relaxed">
                Skincare isn’t complex. It is the simple removal of daily debris, deep pore refinement, and sealing your protective barrier.
              </p>
              <p className="font-sans text-sm text-[#334B89]/75 leading-relaxed font-semibold">
                You do not need to decipher compound chemistry scripts. Three represents a radical, clean, high-design protest against cosmetic overproduction:
              </p>
            </div>

            {/* List sequence */}
            <div className="space-y-6">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 p-6 rounded-[32px] bg-[#FFFDEC] border-4 border-[#334B89] transition-all duration-300 shadow-lg"
                >
                  <div className="font-serif text-xl italic text-[#E63931] shrink-0 mt-0.5 select-none font-black">
                    0{index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-black tracking-tight text-[#334B89] uppercase">
                      {point.title}
                    </h3>
                    <p className="font-sans text-sm text-[#334B89]/85 leading-relaxed font-semibold">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cinematic customer profile quote card */}
            <div className="bg-[#334B89] text-[#FAF2DB] p-8 md:p-12 rounded-[40px] border-4 border-[#334B89] space-y-6 relative overflow-hidden shadow-2xl">
              <p className="font-serif italic font-semibold text-lg sm:text-xl leading-relaxed z-10 relative">
                \"My counter transitioned from a cluttered pharmacy testing lab to three premium matte bottles. My skin is noticeably clearer, the routine requires less than one minute, and dry flakiness is fully gone.\"
              </p>
              
              <div className="font-mono text-[10px] tracking-widest uppercase z-10 relative text-[#F2B824] font-black">
                — Harrison M., Sydney CBD (Verified Customer)
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
