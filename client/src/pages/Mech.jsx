import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BokehBackground } from "../components/BokehBackground";

const Mech = () => {
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
              Mechanical Engineering
            </h1>
          </div>
        )}

        <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/3 bg-gradient-to-br from-[#3F3F46] to-[#27272A] rounded-[2rem] p-10 text-white flex flex-col justify-between shadow-xl">
               <div>
                  <div className="text-5xl mb-6 opacity-80">⚡</div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">Mastering<br/>Physical Physics.</h3>
                  <p className="text-white/70 font-light leading-relaxed">Core engineering principles mapped to real-world structural and mechanical dynamics.</p>
               </div>
               <div className="mt-12 bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md">
                  <div className="text-sm text-white/60 uppercase tracking-widest font-bold mb-1">Workshop Area</div>
                  <div className="text-[#A1A1AA] text-3xl font-black">15,000 sq.ft</div>
               </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 gap-8">
               <div className="h-[300px] md:h-full rounded-[2rem] overflow-hidden group relative">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">Heavy Machinery Lab</div>
               </div>
               <div className="grid grid-rows-2 gap-8">
                  <div className="bg-[#FFF7E6] rounded-[2rem] p-8 border border-[#EADBC8] flex items-center justify-center text-center hover:border-[#D4AF37] transition-colors">
                     <div>
                        <span className="text-4xl font-serif font-black text-[#7A1F1F] block mb-2">100%</span>
                        <span className="text-xs font-bold text-[#6B4F3B] uppercase tracking-widest">Practical Training</span>
                     </div>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden group relative">
                     <img src="https://images.unsplash.com/photo-1541888081622-1ca15b57f208?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
               </div>
            </div>
        </div>
        
        <div className="bg-white p-12 rounded-[3rem] border border-[#EADBC8] shadow-sm">
           <h3 className="text-3xl font-serif font-black text-[#7A1F1F] mb-8 border-b border-[#EADBC8] pb-6">Core Competencies</h3>
           <div className="grid md:grid-cols-3 gap-12">
              {["Structural Analysis", "Thermodynamics", "Material Science"].map((topic, i) => (
                 <div key={i} className="border-l-4 border-l-[#D4AF37] pl-6">
                    <h4 className="font-bold text-[#7A1F1F] text-xl mb-3">{topic}</h4>
                    <p className="text-[#6B4F3B] leading-relaxed">Rigorous academic focus blended with extensive workshop requirements to ensure industry readiness from day one.</p>
                 </div>
              ))}
           </div>
        </div>
    </div>
        
      </main>
      <Footer />
    </BokehBackground>
  );
};

export default Mech;
