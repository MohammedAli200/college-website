import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop",
      title: "Pursue Greatness",
      subtitle: "Join a legacy of innovation, research, and academic excellence at Anantha Lakshmi Institute.",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      title: "Discover Potential",
      subtitle: "State-of-the-art facilities designed to foster creativity and technological advancement.",
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
      title: "Shape The Future",
      subtitle: "Expert faculty and comprehensive programs that prepare you for a rapidly changing world.",
    },
    {
      url: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop",
      title: "Vibrant Campus Life",
      subtitle: "Experience a thriving community where academics, sports, and culture seamlessly blend.",
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop",
      title: "Global Leadership",
      subtitle: "Fostering the next generation of industry leaders through practical, hands-on learning.",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      title: "Limitless Knowledge",
      subtitle: "Unrestricted access to modern libraries and digital resources for endless exploration.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full bg-[#FAFAFA] overflow-hidden flex items-center">

      {/* BACKGROUND EXPERIENCES */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-[2000ms] ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          >
            {/* Very light overlay to ensure text readability but keep the image bright */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={slide.url}
              alt="Campus"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* MINIMALIST CONTENT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20">

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6 md:mb-8 overflow-hidden">
            <div className="h-[1px] w-12 bg-[#D4AF37] animate-slideRight"></div>
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold animate-fadeIn">
              Welcome to ALITS
            </span>
          </div>

          <div className="h-[200px] sm:h-[240px] md:h-[300px] relative w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-out 
                ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <h1 className="text-5xl sm:text-7xl md:text-[90px] font-serif tracking-tight leading-[1.05] text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Simple Clean Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-white text-[#7A1F1F] px-8 py-4 flex items-center justify-center gap-3 w-max font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group">
              Apply For Admission
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-white/40 text-white backdrop-blur-sm px-8 py-4 flex items-center justify-center gap-3 w-max font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#7A1F1F] transition-all duration-300">
              Explore Campus
            </button>
          </div>
        </div>
      </div>

      {/* ELEGANT BOTTOM BAR */}
      <div className="absolute bottom-0 w-full h-24 md:h-32 border-t border-white/20 z-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-full">

          {/* Subtle Progress Indicators */}
          <div className="flex items-center gap-8">
            <span className="text-white/60 font-serif text-2xl italic hidden md:block">0{currentSlide + 1}</span>
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-[2px] transition-all duration-500 rounded-full ${i === currentSlide ? "w-16 bg-[#D4AF37]" : "w-8 bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#7A1F1F] transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#7A1F1F] transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>

      {/* Decorative Golden Corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent z-10 pointer-events-none" />

      <style>
        {`
          @keyframes slideRight {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-slideRight { animation: slideRight 1s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; animation-delay: 0.5s; opacity: 0; }
        `}
      </style>
    </section>
  );
}

export default HeroSection;