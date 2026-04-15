import React from "react";
import AboutLayout from "../../components/AboutLayout";

const Vision = () => {
   const missionPoints = [
      {
         id: "M1",
         title: "Pedagogy & Infrastructure",
         text: "Adapt continuous improvements in innovative teaching-learning practices and state-of-the-art infrastructure to transform students as competent professionals, entrepreneurs in multi-disciplinary fields.",
      },
      {
         id: "M2",
         title: "Innovation Ecosystem",
         text: "Develop an interdisciplinary research and innovation ecosystem with strong participation of faculty members and students.",
      },
      {
         id: "M3",
         title: "Societal Connectivity",
         text: "Impart regional development spirit in the students to utilize their knowledge and skills for societal benefits.",
      },
   ];

   return (
      <AboutLayout title="Vision & Mission">
         <div className="max-w-7xl mx-auto px-6 pb-48 pt-24 font-sans bg-white text-slate-900">

            {/* SECTION 01: THE VISION (ULTRA-BOLD) */}
            <section className="relative mb-60">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-5">
                     <div className="space-y-4">
                        <span className="text-[#D4AF37] font-mono text-[10px] tracking-[0.5em] uppercase">
                           Institutional Goal // 01
                        </span>
                        <h1 className="text-8xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-slate-900">
                           Vision<span className="text-[#D4AF37]">.</span>
                        </h1>
                     </div>
                  </div>
                  <div className="lg:col-span-7 flex items-end">
                     <p className="text-2xl md:text-4xl font-extralight leading-tight text-slate-500 tracking-tight max-w-2xl">
                        To produce <span className="text-slate-900 font-normal">globally competent professionals</span> who contribute to Industry, Research & Societal benefit with ethical consciousness.
                     </p>
                  </div>
               </div>
               {/* Background Decorative Line */}
               <div className="absolute -bottom-20 left-0 w-full h-px bg-slate-100"></div>
            </section>

            {/* SECTION 02: THE MISSION (ULTRA-SLIM) */}
            <section className="relative">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4">
                     <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 sticky top-24">
                        Mission<br />
                        <span className="text-slate-200">Objectives</span>
                     </h2>
                  </div>

                  <div className="lg:col-span-8 space-y-0">
                     {missionPoints.map((point, index) => (
                        <div
                           key={index}
                           className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all duration-500 px-4"
                        >
                           {/* Number Accent */}
                           <div className="w-12 shrink-0">
                              <span className="font-mono text-xs text-[#7A1F1F] opacity-40 group-hover:opacity-100 transition-opacity">
                                 {point.id}
                              </span>
                           </div>

                           {/* Text Content */}
                           <div className="space-y-4">
                              <h3 className="text-xs font-black tracking-[0.4em] uppercase text-[#D4AF37]">
                                 {point.title}
                              </h3>
                              <p className="text-lg md:text-xl font-light leading-relaxed text-slate-500 group-hover:text-slate-900 transition-colors duration-500 max-w-2xl">
                                 {point.text}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* REFINED CLOSING ACCENT */}
            <footer className="mt-40 border-t border-slate-900 pt-12">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="space-y-2">
                     <p className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-300">Annamacharya University</p>
                     <p className="text-[10px] font-mono text-slate-400">EST. 2001 // GOVERNANCE DOCUMENT</p>
                  </div>
                  <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
                  <div className="text-[9px] font-bold text-slate-300 tracking-[0.2em] italic">
                     Excellence Through Innovation
                  </div>
               </div>
            </footer>
         </div>
      </AboutLayout>
   );
};

export default Vision;