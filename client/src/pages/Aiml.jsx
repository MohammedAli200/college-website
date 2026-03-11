import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BokehBackground } from "../components/BokehBackground";

const Aiml = () => {
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
              Department
            </span>
            <h1 className="text-[#7A1F1F] font-serif font-black text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter leading-[1.05] max-w-5xl mx-auto drop-shadow-sm">
              AI & Machine Learning
            </h1>
          </div>
        )}

        <div className="w-full bg-gradient-to-b from-[#0F172A] to-[#020617] p-12 md:p-24 rounded-[3rem] text-white shadow-2xl relative overflow-hidden my-12 border border-white/10">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#38BDF8] rounded-full blur-[150px] opacity-20"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="text-6xl mb-6">⚡</div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">Innovating the <br/><span className="text-[#2DD4BF]">Digital Frontier.</span></h2>
               <p className="text-white/70 text-lg leading-relaxed mb-8 font-light max-w-lg">Advanced computation, algorithmic mastery, and future-ready software engineering principles defining the next era of technology.</p>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                     <span className="text-[#2DD4BF] text-4xl font-black block mb-1">500+</span>
                     <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Placed Alumni</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                     <span className="text-[#2DD4BF] text-4xl font-black block mb-1">12</span>
                     <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Tech Labs</span>
                  </div>
               </div>
            </div>
            
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/20 hidden lg:block">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
        </div>
        
        <div className="mt-24 border-t border-white/10 pt-16 grid md:grid-cols-3 gap-8 relative z-10">
           {["Cybersecurity Cell", "AI Research Lab", "Cloud Computing Center"].map((lab, i) => (
              <div key={i} className="flex gap-4 items-start group cursor-pointer">
                 <div className="text-[#2DD4BF] bg-white/5 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#2DD4BF] transition-colors">{lab}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">Dedicated infrastructure for advanced specialized research.</p>
                 </div>
              </div>
           ))}
        </div>
    </div>
        
      </main>
      <Footer />
    </BokehBackground>
  );
};

export default Aiml;
