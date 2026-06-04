import React from "react";

export function WhyThreeManifesto() {
  const points = [
    {
      title: "wash.",
      desc: "every morning. every night. no exceptions.",
    },
    {
      title: "refine.",
      desc: "three times a week. that's it.",
    },
    {
      title: "protect.",
      desc: "one layer. locks everything in.",
    },
  ];

  return (
    <section id="brand-manifesto" className="bg-[#FAF2DB] text-[#334B89] py-32 px-4 md:px-10 border-b-4 border-[#334B89] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left sticky column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="font-serif italic text-6xl md:text-7xl font-black leading-none text-[#334B89] lowercase">
              why three.
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-[#334B89]/80 leading-snug font-semibold">
              most skincare is unnecessary.
            </p>
          </div>

          {/* Right column — three numbered points */}
          <div className="lg:col-span-7 space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex gap-8 p-8 md:p-10 rounded-[32px] bg-[#FFFDEC] border-4 border-[#334B89] shadow-lg items-start"
              >
                <div className="font-serif italic text-5xl md:text-6xl text-[#E63931] shrink-0 leading-none select-none font-black">
                  0{index + 1}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-[#334B89] uppercase italic leading-none">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm text-[#334B89]/85 leading-relaxed font-semibold">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
