import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";
import { Quote } from "lucide-react";

const AlumniStories = () => {
  const stories = [
    {
      name: "Anil Kumar",
      role: "SDE-2 @ Amazon",
      batch: "Class of 2019",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      quote: "The rigorous training and competitive environment at ALITS were instrumental in shaping my career trajectory in Big Tech."
    },
    {
      name: "Sana Khan",
      role: "Product Manager @ Meta",
      batch: "Class of 2017",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      quote: "Beyond the academics, the leadership opportunities I found here gave me the confidence to lead global products today."
    },
    {
      name: "Rahul Varma",
      role: "Founder @ TechFlow",
      batch: "Class of 2015",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      quote: "ALITS doesn't just produce employees; it nurtures entrepreneurs. The innovation lab was my second home."
    }
  ];

  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.2}>
      <Navbar />

      <main className="relative z-10 w-full pt-32 md:pt-48 pb-20 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <header className="mb-20">
            <div className="border-l-8 border-[#7A1F1F] pl-8">
              <p className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">Success Stories</p>
              <h1 className="text-black font-serif font-black text-5xl md:text-8xl tracking-tighter leading-tight mb-6">
                Global <br /> Impact<span className="text-[#7A1F1F]">.</span>
              </h1>
              <div className="h-[1px] w-full bg-gray-100 mt-8"></div>
            </div>
          </header>

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {stories.map((s, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 md:p-10 rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="shrink-0 relative">
                  <div className="absolute inset-0 bg-[#7A1F1F] rounded-[2rem] rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img
                    src={s.img}
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={s.name}
                  />
                </div>

                {/* Content */}
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-[#D4AF37]/20 w-12 h-12" />
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-1">{s.name}</h3>
                  <div className="flex flex-col mb-4">
                    <span className="text-[#7A1F1F] font-bold text-xs uppercase tracking-widest">{s.role}</span>
                    <span className="text-gray-400 font-bold text-[10px] uppercase">{s.batch}</span>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed italic md:text-lg">
                    "{s.quote}"
                  </p>
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

export default AlumniStories;