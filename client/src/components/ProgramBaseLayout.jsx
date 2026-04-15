import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BokehBackground } from "./BokehBackground";
import { ChevronRight, LayoutGrid, GraduationCap } from "lucide-react";

const ProgramBaseLayout = ({ children, title, menuItems, categoryName }) => {
  const location = useLocation();

  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.1}>
      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto pt-32 md:pt-48 pb-20 px-5 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">

          {/* SIDEBAR */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-40 backdrop-blur-md bg-white/40 rounded-[2.5rem] p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="bg-[#7A1F1F] p-2 rounded-xl text-white shadow-lg">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">Catalog</h3>
                  <p className="text-[11px] font-black uppercase tracking-[0.1em] text-black">{categoryName}</p>
                </div>
              </div>

              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`group flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all duration-500 ${isActive ? "bg-black text-white scale-[1.02]" : "text-gray-400 hover:bg-gray-50 hover:text-black"
                        }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight size={14} className={`${isActive ? "text-[#D4AF37]" : "opacity-0 group-hover:opacity-100"}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="flex-1 min-w-0">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <p className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-[10px]">{categoryName} Overview</p>
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-black leading-none uppercase">
                {title}<span className="text-[#7A1F1F]">.</span>
              </h1>
            </header>
            <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-gray-50">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </BokehBackground>
  );
};

export default ProgramBaseLayout;