import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BokehBackground } from "../components/BokehBackground";

const Sports = () => {
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
              Facilities
            </span>
            <h1 className="text-[#7A1F1F] font-serif font-black text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter leading-[1.05] max-w-5xl mx-auto drop-shadow-sm">
              Sports & Athletics
            </h1>
          </div>
        )}

        <div className="w-full max-w-7xl mx-auto space-y-16">
    <div className="relative h-[60vh] min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
       <div className="absolute inset-0 bg-gradient-to-t from-[#7F1D1D] opacity-80 mix-blend-multiply z-10 transition-opacity duration-1000 group-hover:opacity-60"></div>
       <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-[3s] ease-out" />
       <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-6 drop-shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Sports & Athletics</h1>
          <p className="text-[#F87171] text-xl font-bold uppercase tracking-[0.3em] drop-shadow-md">Campus Facilities</p>
       </div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
       {[1,2,3,4].map(i => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-[#EADBC8] hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col justify-center text-center group cursor-pointer">
             <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF7E6] flex items-center justify-center text-[#F87171] font-black text-2xl mb-6 group-hover:scale-110 transition-transform">{i}</div>
             <h4 className="text-[#7A1F1F] font-bold text-lg mb-3">Facility Detail {i}</h4>
             <p className="text-[#6B4F3B] text-sm text-balance">High-end infrastructure available 24/7 for student access and development.</p>
          </div>
       ))}
    </div>
  </div>
        
      </main>
      <Footer />
    </BokehBackground>
  );
};

export default Sports;
