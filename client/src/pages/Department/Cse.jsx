import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";
import News from "../../components/News";
import Events from "../../components/Events";

const Cse = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <BokehBackground className="min-h-screen bg-white" count={6} speed={0.2}>
         <Navbar />

         <main className="relative z-10 w-full pt-28 md:pt-48 pb-10 md:pb-20">

            {/* 1. HERO: Scaled for Mobile */}
            <header className="max-w-7xl mx-auto px-5 md:px-6 mb-16 md:mb-24">
               <div className="border-l-4 md:border-l-8 border-[#7A1F1F] pl-5 md:pl-12">
                  <p className="text-[#D4AF37] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs mb-2 md:mb-4">
                     Department of Technology
                  </p>
                  {/* Font size reduced for mobile (text-5xl) and scaled up for laptop */}
                  <h1 className="text-black font-serif font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
                     Computer <br className="hidden md:block" /> Science<span className="text-[#7A1F1F]">.</span>
                  </h1>
                  <p className="text-lg md:text-3xl text-gray-600 max-w-3xl font-light leading-relaxed">
                     Anantapur's hub for algorithmic research and future-ready tech leadership.
                  </p>
               </div>
            </header>

            {/* 2. STATS BAR: 2x2 Grid on Mobile */}
            <section className="bg-black text-white py-12 md:py-16 mb-20 md:mb-32">
               <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                  {[
                     { label: "Placements", val: "500+" },
                     { label: "Research Labs", val: "12" },
                     { label: "Ph.D Faculty", val: "18" },
                     { label: "MOU Partners", val: "06" }
                  ].map((stat, i) => (
                     <div key={i} className="text-center md:text-left">
                        <span className="block text-3xl md:text-6xl font-black text-[#D4AF37] mb-1">{stat.val}</span>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-400">{stat.label}</span>
                     </div>
                  ))}
               </div>
            </section>

            {/* 3. NEWS SECTION: Reduced Padding on Mobile */}
            <section className="max-w-7xl mx-auto px-5 md:px-6 mb-20 md:mb-32">
               <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16">
                  <h2 className="text-2xl md:text-5xl font-serif font-bold text-black italic">Latest Bulletin</h2>
                  <div className="h-[1px] md:h-[2px] flex-1 bg-gray-100"></div>
               </div>
               {/* p-4 for mobile, p-12 for laptop */}
               <div className="bg-white border border-gray-100 shadow-xl p-4 md:p-12 rounded-[1.5rem] md:rounded-[2rem]">
                  <News />
               </div>
            </section>

            {/* 4. IMMERSIVE LABS: Stacking order handled */}
            <section className="max-w-7xl mx-auto px-5 md:px-6 mb-20 md:mb-32">
               <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
                  <div className="bg-[#7A1F1F] p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] text-white flex flex-col justify-center">
                     <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6">Cutting Edge <br />Infrastructure.</h2>
                     <p className="text-white/70 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light">
                        Our specialized labs provide hands-on experience in AI, IoT, and Cybersecurity.
                     </p>
                     <ul className="space-y-3 md:space-y-4">
                        {["AI Research Center", "Advanced Networking Lab", "Mobile App Dev Studio"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-[11px] md:text-sm font-bold uppercase tracking-widest">
                              <div className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full"></div> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  {/* aspect-video for mobile to prevent massive height */}
                  <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl aspect-video lg:aspect-auto">
                     <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                        className="w-full h-full object-cover"
                        alt="Research Lab"
                     />
                  </div>
               </div>
            </section>

            {/* 5. EVENTS SECTION */}
            <section className="max-w-7xl mx-auto px-5 md:px-6">
               <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16">
                  <div className="h-[1px] md:h-[2px] flex-1 bg-gray-100"></div>
                  <h2 className="text-2xl md:text-5xl font-serif font-bold text-black italic text-right">Upcoming Events</h2>
               </div>
               <Events />
            </section>

         </main>

         <Footer />
      </BokehBackground>
   );
};

export default Cse;