import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";

const Mba = () => {
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
                     Master of Business Administration
                  </h1>
               </div>
            )}


            <div className="grid lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 space-y-12">
                  <div className="bg-white p-12 rounded-[3rem] border border-[#EADBC8] shadow-lg relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7A1F1F] to-[#5a1616] opacity-5 rounded-bl-full pointer-events-none"></div>
                     <div className="text-5xl mb-8">⚡</div>
                     <h2 className="text-4xl font-serif font-black text-[#7A1F1F] mb-6">Department Overview</h2>
                     <p className="text-[#6B4F3B] text-lg leading-relaxed font-light mb-8">
                        A center of excellence dedicated to cultivating deep expertise in Master of Business Administration. Our faculty brings decades of combined industry and academic experience to the classroom.
                     </p>
                     <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-[#EADBC8]">
                        {[{ v: "15+", l: "Ph.D Faculty" }, { v: "50+", l: "Publications" }, { v: "Tier 1", l: "Recruiters" }].map((s, i) => (
                           <div key={i}>
                              <span className="block text-3xl font-black text-[#D4AF37] mb-1">{s.v}</span>
                              <span className="text-xs font-bold text-[#6B4F3B] uppercase tracking-widest">{s.l}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-4 space-y-8">
                  <div className="bg-gradient-to-br from-[#7A1F1F] to-[#5a1616] p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-[20px]"></div>
                     <h4 className="font-serif font-black text-2xl mb-6 relative z-10">Department Head</h4>
                     <div className="flex gap-4 items-center mb-6 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/30 truncate">
                           <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <div className="font-bold text-lg">Dr. Academic</div>
                           <div className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">HOD</div>
                        </div>
                     </div>
                     <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-bold text-sm transition-colors relative z-10 backdrop-blur-md">
                        Message HOD
                     </button>
                  </div>
               </div>
            </div>


         </main>
         <Footer />
      </BokehBackground>
   );
};

export default Mba;
