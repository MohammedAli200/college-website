import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Mail, GraduationCap, MapPin, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated to match your App.js Routes exactly
  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      submenu: [
        { name: "Founder", href: "/about/founder" },
        { name: "Trustees", href: "/about/trustees" },
        { name: "Governing Body", href: "/about/governing-body" },
        { name: "Academic Council", href: "/about/academic-council" },
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Chairmans Message", href: "/about/chairmansmessage" },
        { name: "VIce Chairmans Message", href: "/about/vicechairmansmessage" },
        { name: "About ALTS", href: "/about/aboutalts" },


        { name: "Principal's Desk", href: "/about/principal" },

      ]
    },
    {
      name: "Programs",
      submenu: [
        { name: "B.Tech (UG)", href: "/programs/ug/offered" },
        { name: "M.Tech/MBA (PG)", href: "/programs/pg/offered" },
        { name: "Diploma", href: "/programs/diploma/offered" },
      ]
    },
    {
      name: "Admissions",
      submenu: [
        { name: "Procedure", href: "/admissions/procedure" },
        { name: "Fee Structure", href: "/admissions/fee-structure" },
        { name: "Prospectus", href: "/admissions/prospectus" },
      ]
    },
    {
      name: "Departments",
      submenu: [
        { name: "CSE", href: "/departments/cse" },
        { name: "AIML", href: "/departments/aiml" },
        { name: "ECE", href: "/departments/ece" },
        { name: "EEE", href: "/departments/eee" },
        { name: "Civil", href: "/departments/civil" },
        { name: "MBA", href: "/departments/mba" },
      ]
    },
    {
      name: "Alumni",
      submenu: [
        { name: "Alumni Portal", href: "/alumni/portal" },
        { name: "Register", href: "/alumni/register" },
        { name: "Stories", href: "/alumni/stories" },
        { name: "Events", href: "/alumni/events" },
      ]
    },
    {
      name: "Placements",
      submenu: [
        { name: "Cell", href: "/placements/cell" },
        { name: "Statistics", href: "/placements/statistics" },
        { name: "Recruiters", href: "/placements/recruiters" },
      ]
    },
    {
      name: "Exams",
      submenu: [
        { name: "Syllabus", href: "/exams/syllabus" },
        { name: "Results", href: "/exams/results" },
        { name: "Calendar", href: "/exams/calendar" },
      ]
    },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-[1000] font-sans">
      {/* 1. TOP INFO BAR */}
      <div className={`bg-white transition-all duration-500 overflow-hidden border-b border-slate-100 ${isScrolled ? "h-0 opacity-0" : "h-20 opacity-100"}`}>
        <div className="max-w-[1500px] mx-auto px-8 h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#b22222] rounded-xl flex items-center justify-center text-[#d4af37] font-black text-2xl shadow-lg border border-white/20">AL</div>
            <div>
              <h1 className="text-[#b22222] font-serif font-black text-xl leading-tight uppercase tracking-tighter">Anantha Lakshmi</h1>
              <p className="text-[#b22222] text-[10px] font-bold tracking-[0.2em] -mt-1 uppercase opacity-80">Institute of Technology & Sciences</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex flex-col items-end border-r pr-6 border-slate-200">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Code: ALTS</span>
              <span className="text-xs font-bold text-slate-700 flex items-center gap-2"><Mail size={12} className="text-[#b22222]" /> principal@alits.ac.in</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Contact</span>
              <span className="text-sm font-black text-[#b22222] tracking-tighter">+91 95335 13999</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (The "Upgrade" Design) */}
      <nav className={`w-full transition-all duration-500 flex justify-center ${isScrolled ? "py-4" : "py-0"}`}>
        <div className={`w-full transition-all duration-500 flex justify-center relative shadow-2xl ${isScrolled
          ? "max-w-[1300px] bg-[#b22222]/90 backdrop-blur-2xl rounded-full border border-white/20 py-1"
          : "max-w-full bg-[#b22222] py-1 border-y border-white/10"
          }`}>
          <div className="flex items-center justify-center gap-1 w-full px-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href || "#"}
                  className={`flex items-center gap-1 px-4 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${location.pathname === item.href ? "text-[#d4af37] bg-white/10" : "text-white hover:text-[#d4af37] hover:bg-white/5"
                    }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={12} className={`opacity-40 transition-transform duration-300 ${activeMenu === item.name ? "rotate-180 opacity-100" : ""}`} />}
                </Link>

                {/* Dropdown - Modern Floating Glass */}
                {item.submenu && activeMenu === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white/95 backdrop-blur-3xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50 overflow-hidden py-3 p-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setActiveMenu(null)}
                          className="block px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-[#b22222] hover:text-white rounded-xl transition-all mb-1 last:mb-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Action Button */}
            <Link to="/contact" className="ml-4 bg-white text-[#b22222] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#d4af37] hover:text-[#b22222] transition-all shadow-lg flex items-center gap-2">
              Apply <Sparkles size={12} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;