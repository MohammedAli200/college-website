import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BokehBackground } from "../components/BokehBackground";
import { ChevronRight, LayoutGrid } from "lucide-react";

const AboutLayout = ({ children, title }) => {
  const location = useLocation();

  const menuItems = [
    { name: "About ALTS", href: "/about/aboutalts" },
    { name: "Founder", href: "/about/founder" },
    { name: "Trustees", href: "/about/trustees" },
    { name: "Governing Body", href: "/about/governing-body" },
    { name: "Academic Council", href: "/about/acedemiccouncil" },
    { name: "Vision & Mission", href: "/about/vision" },
    { name: "Chairman's Message", href: "/about/chairmansmessage" },
    { name: "Vice Chairman's Message", href: "/about/ViceChairmansmessage" },
    { name: "Principal's Desk", href: "/about/principal" },
  ];

  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.1}>
      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto pt-32 md:pt-48 pb-20 px-5 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">

          {/* LEFT SIDE: NAVIGATION PANEL (Tech-styled) */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-40 backdrop-blur-md bg-white/40 rounded-[2.5rem] p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="bg-[#7A1F1F] p-2 rounded-xl text-white shadow-lg shadow-[#7A1F1F]/20">
                  <LayoutGrid size={18} />
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Navigation</h3>
              </div>

              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`group flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-500 ${isActive
                          ? "bg-black text-white shadow-xl shadow-black/10 scale-[1.02]"
                          : "text-gray-400 hover:bg-gray-50 hover:text-black"
                        }`}
                    >
                      <span className="relative">
                        {item.name}
                        {isActive && (
                          <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#D4AF37] rounded-full"></span>
                        )}
                      </span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-500 ${isActive ? "text-[#D4AF37] translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                          }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Decorative Tech Detail */}
              <div className="mt-8 pt-6 border-t border-gray-100/50">
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-300">
                  <div className="h-1 w-1 bg-[#D4AF37] rounded-full animate-pulse"></div>
                  System Active / v2.0
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: CONTENT AREA */}
          <div className="flex-1 min-w-0">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <p className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px]">Institutional Profile</p>
              </div>

              <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-black leading-none">
                {title}<span className="text-[#7A1F1F]">.</span>
              </h1>
            </header>

            <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-gray-50 shadow-sm">
              <article className="prose prose-lg prose-slate max-w-none text-gray-600 font-light leading-relaxed">
                {children}
              </article>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </BokehBackground>
  );
};

export default AboutLayout;