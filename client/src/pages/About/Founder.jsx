import React, { useEffect, useState, useRef } from "react";
import AboutLayout from "../../components/AboutLayout";
import { Award, Quote, ShieldCheck, Heart, Medal, Target, TreePine, ArrowUpRight } from "lucide-react";

// IMAGE IMPORTS
import founderMainImg from "../../assets/images/chairman.jpg";
import award01 from "../../assets/images/chairman_award_01.jpg";
import award02 from "../../assets/images/chairman_award_02.jpg";
import award03 from "../../assets/images/chairman_award_03.jpg";

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

const Founder = () => {
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

  const founderData = {
    name: "Sri M. Anantha Ramudu",
    suffix: "B.A.",
    bio: "A visionary strategist with decades of mastery in agriculture and industrial transformation. Beyond his professional accolades, he remains a dedicated philanthropist, weaving innovation into the social fabric of the region.",
    quote: "Education is the alchemy that transforms the human mind, providing the meaning and purpose required to navigate the future.",
    stats: [
      { label: "Philanthropist", icon: Heart },
      { label: "Award Winning", icon: Award },
      { label: "Agri-Tech Pioneer", icon: TreePine },
      { label: "Social Advocate", icon: Target }
    ],
    awards: [
      { title: "Learning Innovation", year: "2012", presenter: "Gov. Sri. E.S.L. Narasimhan", image: award01, desc: "For pioneering educational frameworks in the state." },
      { title: "Global Integration", year: "INTL", presenter: "Thai Deputy PM", image: award02, desc: "Recognition of economic development at Bangkok summit." },
      { title: "Excellence Gold Medal", year: "NATL", presenter: "Gov. Sri. Sekhar Dutt", image: award03, desc: "Distinguished leadership and lifelong social service." }
    ]
  };

  return (
    <AboutLayout title="Our Founder">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32 pb-32 overflow-hidden bg-[#FDFBF7]">

        {/* SECTION 1: HERO PORTRAIT & BIO */}
        <section className="relative flex flex-col lg:flex-row gap-20 items-center lg:items-start pt-16">
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
                  src={founderMainImg}
                  alt={founderData.name}
                  className="w-full h-auto object-cover transform transition-transform duration-[2s] hover:scale-105"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-4 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/50">
                <div className="bg-[#7A1F1F] p-3 rounded-2xl text-[#D4AF37] shadow-lg">
                  <Medal size={28} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black">Legacy</p>
                  <p className="text-sm font-black text-slate-900">30+ Years Mastery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] block mb-2 drop-shadow-sm">
                The Visionary Founder
              </span>

              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05] md:leading-[0.9]">
                Sri M. <br className="md:hidden" /> Anantha Ramudu
                <span className="text-2xl md:text-3xl font-light text-slate-400/80 ml-4 inline-block align-baseline">
                  {founderData.suffix}
                </span>
              </h1>
            </div>

            <div className="relative">
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl border-l-[3px] border-[#D4AF37]/30 pl-8 py-2">
                {founderData.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {founderData.stats.map((stat, i) => (
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

        {/* SECTION 2: THE QUOTE (Editorial Style) */}
        <section className="relative py-28 px-8 md:px-20 bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1F1F]/10 blur-[120px] rounded-full"></div>
          <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/5 -rotate-12" />
          <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
            <p className="text-3xl md:text-5xl font-serif text-white/90 leading-tight italic">
              "{founderData.quote}"
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="h-1 w-12 bg-[#D4AF37] rounded-full"></div>
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Message from the Chairman</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: BENTO AWARDS GRID */}
        <section ref={revealRef} className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-12">
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Honors & Accolades</h3>
            <div className="flex items-center gap-3 text-slate-900 font-black group cursor-pointer text-[10px] uppercase tracking-widest">
              <span className="border-b-2 border-[#D4AF37] pb-1">Recognition Archive</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#D4AF37]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {founderData.awards.map((award, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-[3rem] border border-slate-100 transition-all duration-1000 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden m-3 rounded-[2.2rem] relative shadow-inner">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-white/80 text-xs leading-relaxed mb-2 italic">"{award.desc}"</p>
                    <div className="h-0.5 w-8 bg-[#D4AF37]"></div>
                  </div>
                  <div className="absolute top-5 left-5 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#7A1F1F]">
                    {award.year}
                  </div>
                </div>

                <div className="p-8 pt-4 space-y-2">
                  <h4 className="text-xl font-black text-slate-900 group-hover:text-[#7A1F1F] transition-colors leading-tight">
                    {award.title}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {award.presenter}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </AboutLayout>
  );
};

export default Founder;