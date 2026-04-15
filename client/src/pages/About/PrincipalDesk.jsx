import React, { useEffect, useState, useRef } from "react";
import AboutLayout from "../../components/AboutLayout";
import {
   Quote, BookOpen, Microscope, Users,
   ArrowUpRight, GraduationCap, FileText, Binary
} from "lucide-react";

// IMAGE IMPORTS
import principalImg from "../../assets/images/DrKSreenivasulu.png";

const useScrollReveal = () => {
   const [revealed, setRevealed] = useState(false);
   const ref = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) setRevealed(true);
         },
         { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
   }, []);

   return [ref, revealed];
};

const PrincipalsDesk = () => {
   const [revealRef, isRevealed] = useScrollReveal();
   const portraitRef = useRef(null);
   const [tilt, setTilt] = useState({ x: 0, y: 0 });

   const handleMouseMove = (e) => {
      const rect = portraitRef.current.getBoundingClientRect();
      setTilt({
         x: (e.clientY - rect.top - rect.height / 2) / 25,
         y: (e.clientX - rect.left - rect.width / 2) / 25,
      });
   };

   const principalData = {
      name: "Dr. K. Sreenivasulu",
      suffix: "B.E, M.Tech, Ph.D (JNTUK)",
      bio: "With over 25 years of profound academic and administrative experience, Dr. K. Sreenivasulu leads ALITS with a focus on research excellence and pedagogical innovation. A prolific researcher and mentor, he has shaped the careers of thousands of engineers through his leadership roles across prestigious institutions.",
      quote: "True education is the bridge between theoretical knowledge and societal application, built on the pillars of discipline and research.",
      stats: [
         { label: "25+ Years Experience", icon: GraduationCap },
         { label: "20+ Journal Publications", icon: FileText },
         { label: "Ph.D Research Guide", icon: Microscope },
         { label: "Tech Evangelist", icon: Binary }
      ],
      highlights: [
         {
            title: "Academic Pedigree",
            desc: "An alumnus of Bangalore University, JNTU Anantapur, and JNTUK Kakinada, maintaining an excellent academic track throughout his career."
         },
         {
            title: "Research Leadership",
            desc: "Published 20+ International Journals and 10+ global conference papers, currently guiding Ph.D scholars under JNTUA."
         },
         {
            title: "Administrative Mastery",
            desc: "Formerly served as Principal, HoD (CSE), and Controller of Examinations at leading engineering colleges across Andhra Pradesh."
         }
      ]
   };

   return (
      <AboutLayout title="Principal's Desk">
         {/* 1. HERO SECTION & UPDATES BAR 
          As seen in your screenshot, this sits directly under the header 
      */}

         {/* 2. THE CONTENT WRAPPER 
          This adds the necessary 'max-width' and 'centered' styling 
          for the profile and message text below the hero.
      */}
         <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32 pb-32 overflow-hidden bg-[#FDFBF7]">

            {/* PROFILE SECTION */}
            <section className="relative flex flex-col lg:flex-row gap-20 items-center lg:items-start pt-24">
               <div className="w-full lg:w-5/12 perspective-[1500px]">
                  <div
                     ref={portraitRef}
                     onMouseMove={handleMouseMove}
                     onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                     style={{
                        transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                        transition: "transform 0.2s ease-out"
                     }}
                     className="relative z-10"
                  >
                     <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#7A1F1F]/5 rounded-full blur-3xl -z-10"></div>
                     <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white/60 bg-white">
                        <img
                           src={principalImg}
                           alt={principalData.name}
                           className="w-full h-auto object-cover transform transition-transform duration-[2s] hover:scale-105"
                        />
                     </div>
                     <div className="absolute -bottom-10 -right-4 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/50">
                        <div className="bg-[#7A1F1F] p-3 rounded-2xl text-[#D4AF37] shadow-lg">
                           <BookOpen size={28} />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">Membership</p>
                           <p className="text-sm font-black text-slate-900">MIE, MISTE Professional</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex-1 space-y-12">
                  <div className="space-y-6">
                     <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] block mb-2 drop-shadow-sm">
                        From the Principal's Desk
                     </span>
                     <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] md:leading-[0.9]">
                        Dr. K. <br className="md:hidden" /> Sreenivasulu
                        <span className="text-2xl md:text-3xl font-light text-slate-400/80 ml-4 inline-block align-baseline">
                           {principalData.suffix}
                        </span>
                     </h1>
                  </div>

                  <div className="relative">
                     <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl border-l-[3px] border-[#D4AF37]/30 pl-8 py-2">
                        {principalData.bio}
                     </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                     {principalData.stats.map((stat, i) => (
                        <div key={i} className="group flex items-center gap-5 p-2">
                           <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-[#7A1F1F] group-hover:bg-[#7A1F1F] group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm border border-slate-100">
                              <stat.icon size={22} />
                           </div>
                           <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{stat.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="relative py-28 px-8 md:px-20 bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1F1F]/10 blur-[120px] rounded-full"></div>
               <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/5 -rotate-12" />
               <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
                  <p className="text-2xl md:text-4xl font-serif text-white/90 leading-tight italic">
                     "{principalData.quote}"
                  </p>
                  <div className="flex flex-col items-center gap-4">
                     <div className="h-1 w-12 bg-[#D4AF37] rounded-full"></div>
                     <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Administrative Philosophy</span>
                  </div>
               </div>
            </section>

            {/* MILESTONES SECTION */}
            <section ref={revealRef} className="space-y-16">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-12">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Professional Milestones</h3>
                  <div className="flex items-center gap-3 text-slate-900 font-black group cursor-pointer text-[10px] uppercase tracking-widest">
                     <span className="border-b-2 border-[#D4AF37] pb-1">Academic Journey</span>
                     <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D4AF37]" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {principalData.highlights.map((item, i) => (
                     <div
                        key={i}
                        className={`group p-10 bg-white rounded-[3rem] border border-slate-100 transition-all duration-1000 hover:shadow-2xl hover:-translate-y-2 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                           }`}
                        style={{ transitionDelay: `${i * 200}ms` }}
                     >
                        <div className="space-y-6">
                           <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-[#7A1F1F] group-hover:bg-[#7A1F1F] group-hover:text-white transition-all">
                              <Users size={20} />
                           </div>
                           <h4 className="text-2xl font-black text-slate-900 leading-tight">
                              {item.title}
                           </h4>
                           <p className="text-slate-500 font-light leading-relaxed">
                              {item.desc}
                           </p>
                           <div className="h-0.5 w-8 bg-slate-100 group-hover:w-full group-hover:bg-[#7A1F1F] transition-all duration-700"></div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </AboutLayout>
   );
};

export default PrincipalsDesk;