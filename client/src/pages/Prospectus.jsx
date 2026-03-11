import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BokehBackground } from "../components/BokehBackground";

const Prospectus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BokehBackground className="min-h-screen" count={15} speed={0.5}>
      <Navbar />
      <main className="relative z-10 w-full ${false ? 'pt-32' : 'pt-48 md:pt-56 lg:pt-64'} pb-32 px-4 sm:px-6 md:px-12 max-w-[100rem] mx-auto flex flex-col items-center">
        
        {!false && (
          <div className="text-center mb-16 md:mb-24 relative w-full items-center flex flex-col justify-center">
            <span className="px-6 py-2.5 rounded-full border border-[#D4AF37]/50 bg-white/60 text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-8 inline-block shadow-sm backdrop-blur-md">
              Admissions
            </span>
            <h1 className="text-[#7A1F1F] font-serif font-black text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter leading-[1.05] max-w-5xl mx-auto drop-shadow-sm">
              Prospectus
            </h1>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative content-start">
     <div className="lg:col-span-1 border-r border-[#EADBC8] pr-8 hidden lg:block sticky top-36 h-max">
        <h4 className="font-serif font-black text-[#7A1F1F] text-2xl mb-8">Navigation</h4>
        <ul className="space-y-4 relative">
           <div className="absolute left-0 top-2 w-[2px] h-full bg-[#EADBC8] -m-4"></div>
           {["Overview", "Guidelines", "Downloads", "Support"].map((item, i) => (
             <li key={i} className="relative cursor-pointer group">
                <div className="absolute -left-[20px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-[#6B4F3B] hover:text-[#7A1F1F] font-bold text-sm uppercase tracking-widest transition-colors pl-2 block py-2">{item}</span>
             </li>
           ))}
        </ul>
     </div>
     
     <div className="lg:col-span-3 space-y-12 bg-white p-10 md:p-16 rounded-[3rem] border border-[#EADBC8] shadow-sm">
        <div className="border-b-4 border-[#D4AF37] inline-block pb-2 mb-8">
           <h3 className="text-4xl font-serif font-black text-[#7A1F1F]">Executive Summary</h3>
        </div>
        <p className="text-xl leading-loose text-[#6B4F3B] font-light text-justify drop-cap">
           <span className="float-left text-7xl font-serif font-black text-[#7A1F1F] leading-none mt-2 mr-4">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p className="text-lg leading-relaxed text-[#6B4F3B] font-light">
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <div className="bg-[#FFF7E6] p-8 md:p-12 rounded-[2rem] border border-[#D4AF37]/30 my-12 relative">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7A1F1F] via-[#D4AF37] to-[#7A1F1F]"></div>
           <h4 className="font-serif font-black text-[#7A1F1F] text-2xl mb-6">Key Information Bulletin</h4>
           <div className="space-y-4">
              {[1, 2, 3].map(i => (
                 <div key={i} className="flex gap-6 items-center bg-white p-4 rounded-xl border border-[#EADBC8]">
                    <div className="w-12 h-12 rounded-full bg-[#7A1F1F] text-[#D4AF37] flex items-center justify-center shrink-0">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    </div>
                    <div>
                       <h5 className="font-bold text-[#7A1F1F]">Document Policy</h5>
                       <p className="text-sm text-[#6B4F3B]">Last updated: March 2026</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
     </div>
  </div>
        
      </main>
      <Footer />
    </BokehBackground>
  );
};

export default Prospectus;
