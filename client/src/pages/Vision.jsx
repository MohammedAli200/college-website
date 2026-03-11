import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BokehBackground } from "../components/BokehBackground";

const Vision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BokehBackground className="min-h-screen" count={15} speed={0.5}>
      <Navbar />
      <main className="relative z-10 w-full ${true ? 'pt-32' : 'pt-48 md:pt-56 lg:pt-64'} pb-32 px-4 sm:px-6 md:px-12 max-w-[100rem] mx-auto flex flex-col items-center">
        
        {!true && (
          <div className="text-center mb-16 md:mb-24 relative w-full items-center flex flex-col justify-center">
            <span className="px-6 py-2.5 rounded-full border border-[#D4AF37]/50 bg-white/60 text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-8 inline-block shadow-sm backdrop-blur-md">
              About
            </span>
            <h1 className="text-[#7A1F1F] font-serif font-black text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter leading-[1.05] max-w-5xl mx-auto drop-shadow-sm">
              Vision & Mission
            </h1>
          </div>
        )}

        <div className="w-full space-y-24">
     <div className="bg-[#0F172A] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#38BDF8] via-transparent to-transparent opacity-20"></div>
        <div className="relative z-10 max-w-4xl">
           <span className="text-[#38BDF8] font-bold text-sm uppercase tracking-[0.3em] mb-6 block">Our Vision</span>
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight mb-8">
              To be a premier institute<br/>of <span className="text-[#38BDF8] italic">Academic Excellence.</span>
           </h2>
           <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">Producing technically sound and ethically strong professionals who will impact global industries and societies.</p>
        </div>
     </div>
     
     <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white border text-left border-[#EADBC8] p-12 rounded-[3rem] hover:shadow-xl transition-shadow group flex flex-col justify-center">
           <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-[0.3em] mb-6 block drop-shadow-sm">Our Mission</span>
           <ul className="space-y-6">
              {[
                "Imparting high-quality technical education", 
                "Fostering a culture of innovation and research",
                "Instilling ethical values and leadership skills",
                "Building strong industry-institute collaborations"
              ].map((m, i) => (
                 <li key={i} className="flex gap-4 items-start text-lg text-[#6B4F3B] group-hover:text-[#7A1F1F] transition-colors">
                    <span className="text-[#D4AF37] font-bold mt-1">✓</span>
                    {m}
                 </li>
              ))}
           </ul>
        </div>
        <div className="rounded-[3rem] h-[500px] overflow-hidden shadow-xl border border-[#EADBC8]">
           <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
        </div>
     </div>
  </div>
        
      </main>
      <Footer />
    </BokehBackground>
  );
};

export default Vision;
