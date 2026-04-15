import React from "react";
import { Megaphone } from "lucide-react";
import programsImg from "../assets/images/10-programs.jpeg";

const MainImage = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* FULL WIDTH IMAGE CONTAINER */}
      <div className="w-full h-[50vh] md:h-[50vh]">
        <img
          src={programsImg}
          alt="ALITS Campus Life"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* LATEST UPDATES BAR */}
      <div className="bg-gray-50 border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#7A1F1F] p-2 rounded-lg text-white">
              <Megaphone size={20} />
            </div>
            <span className="font-black uppercase tracking-widest text-xs text-black">
              Latest Updates
            </span>
          </div>

          <div className="h-6 w-[1px] bg-gray-300 hidden md:block"></div>

          <div className="flex-1">
            <div className="flex items-center gap-4">
              <span className="bg-[#D4AF37] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">
                New
              </span>
              <p className="text-[#7A1F1F] font-bold text-sm md:text-base leading-tight">
                04 Students got Selected in IPCS BANGALORE — Congratulations to the Department of Technology!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainImage;