import React, { useState, useEffect } from "react";
import { Search, ChevronDown, ArrowRight, Menu, X, Mail, Phone, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", submenu: ["Trustees", "Governing Body", "Vision", "Principal's Desk", "Disclosures"] },
    { name: "Programs", submenu: ["Diploma", "UG", "PG"] },
    { name: "Admissions", submenu: ["Procedure", "Fee Structure", "Prospectus"] },
    { name: "Departments", submenu: ["CSE", "AI & ML", "Civil", "MECH", "EEE", "ECE", "MBA", "MCA"] },
    { name: "Facilities", submenu: ["Library", "Auditorium", "Digital Rooms", "Hostels", "Sports"] },
    { name: "Placements", submenu: ["Placement Cell", "Statistics", "Top Recruiters"] },
    { name: "Exams", submenu: ["Syllabus", "Results", "Academic Calendar"] },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-[1000] font-sans flex flex-col items-center">
      
      {/* Top Bar - Sliding up on scroll */}
      <div 
        className={`w-full bg-[#7A1F1F] text-[#FFF7E6] flex justify-center transition-all duration-500 origin-top overflow-hidden 
        ${isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"}`}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 flex justify-between items-center text-[10px] sm:text-xs tracking-wider">
          <div className="flex items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer hover:text-[#D4AF37] transition-colors">
              <GraduationCap size={14} className="text-[#D4AF37] group-hover:scale-110 transition-transform sm:w-4 sm:h-4" /> 
              <span className="font-bold">CODE: ALTS</span>
            </span>
            <span className="hidden md:flex items-center gap-2 group cursor-pointer hover:text-[#D4AF37] transition-colors">
              <Mail size={14} className="text-[#D4AF37] group-hover:scale-110 transition-transform" /> 
              principal@alits.ac.in
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hidden sm:block hover:text-[#D4AF37] transition-colors">Student Portal</a>
            <a href="#" className="hidden sm:block hover:text-[#D4AF37] transition-colors">Alumni</a>
            <span className="flex items-center gap-1.5 sm:gap-2 bg-[#5a1616] px-2 sm:px-3 py-1 rounded-full text-[#D4AF37] font-bold shadow-inner">
              <Phone size={12} /> +91 9533513999
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Floating Glass Container */}
      <div className={`w-full transition-all duration-500 ease-in-out px-4 flex justify-center ${isScrolled ? 'py-4' : 'py-5'}`}>
        <div 
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500
          ${isScrolled 
            ? 'bg-white/90 backdrop-blur-2xl px-4 sm:px-6 py-3 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/40' 
            : 'bg-[#FFF7E6]/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-[0_4px_20px_-10px_rgba(122,31,31,0.1)] border border-[#EADBC8]'
          }`}
        >
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group relative shrink-0">
            <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[#7A1F1F] to-[#5a1616] transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5
              ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
            >
              <span className="text-[#D4AF37] font-serif font-bold text-xl uppercase tracking-tighter">AL</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold uppercase leading-none tracking-tight transition-colors duration-300 text-[#7A1F1F]
                ${isScrolled ? 'text-xl' : 'text-2xl'}`}
              >
                ALITS
              </span>
              <span className={`font-semibold uppercase text-[#D4AF37] tracking-[0.3em] transition-all duration-300
                ${isScrolled ? 'text-[8px]' : 'text-[10px]'}`}
              >
                Anantapur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center gap-1 2xl:gap-3 flex-1 px-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href || '#'}
                  className={`flex items-center gap-1 px-1.5 2xl:px-2 py-2 rounded-lg text-[11px] 2xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap
                    ${activeDropdown === link.name ? 'text-[#7A1F1F] bg-[#7A1F1F]/5' : 'text-[#6B4F3B] hover:text-[#7A1F1F] hover:bg-[#7A1F1F]/5'}
                  `}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-[#7A1F1F]' : 'opacity-60'}`} 
                    />
                  )}
                </a>

                {/* Refined Dropdown with Hover Bridge */}
                {link.submenu && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[220px] pt-4 transition-all duration-300 origin-top
                    ${activeDropdown === link.name ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}
                    `}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                      <div className="h-1 w-full bg-gradient-to-r from-[#7A1F1F] via-[#D4AF37] to-[#7A1F1F]"></div>
                      <div className="py-2 px-2 flex flex-col relative">
                        {link.submenu.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="group/item flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-gray-600 rounded-xl hover:text-[#7A1F1F] hover:bg-[#FFF7E6] transition-all"
                          >
                            <span className="relative z-10 transition-transform group-hover/item:translate-x-1">{item}</span>
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#D4AF37]" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center gap-2 2xl:gap-4 shrink-0">
            <button className="p-2 text-[#6B4F3B] hover:text-[#7A1F1F] hover:bg-[#7A1F1F]/10 rounded-full transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </button>
            <a 
              href="#apply" 
              className="relative group overflow-hidden rounded-full p-[2px] shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFF7E6] to-[#D4AF37] rounded-full opacity-70 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" />
              <div className="relative flex items-center gap-1.5 2xl:gap-2 bg-[#7A1F1F] px-4 2xl:px-6 py-2 2xl:py-2.5 rounded-full text-[#FFF7E6] font-bold text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all group-hover:bg-[#5a1616] whitespace-nowrap">
                Apply Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-[#7A1F1F] hover:bg-[#7A1F1F]/10 rounded-full transition-colors shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`fixed inset-0 z-[2000] xl:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[85vw] max-w-md bg-[#FFF7E6] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#EADBC8]">
            <span className="text-xl font-serif font-bold text-[#7A1F1F] tracking-tight">ALITS</span>
            <button 
              className="p-2 rounded-full bg-white text-[#7A1F1F] shadow-sm active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto py-4 px-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.submenu ? (
                  <button 
                    className={`flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-sm border-b border-[#EADBC8]/50 transition-colors
                      ${activeDropdown === link.name ? 'text-[#7A1F1F]' : 'text-[#6B4F3B] hover:text-[#7A1F1F]'}`}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a 
                    href={link.href || '#'}
                    className="flex items-center justify-between py-4 text-left font-bold uppercase tracking-wider text-sm border-b border-[#EADBC8]/50 transition-colors text-[#6B4F3B] hover:text-[#7A1F1F]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
                
                {link.submenu && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${activeDropdown === link.name ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-[#D4AF37]/40 bg-white/40 rounded-r-xl">
                      {link.submenu.map((item) => (
                        <a 
                          key={item} 
                          href="#" 
                          className="py-2.5 px-4 text-sm font-semibold text-gray-700 hover:text-[#7A1F1F] hover:bg-white rounded-lg transition-colors flex items-center justify-between group"
                        >
                          {item}
                          <ArrowRight size={14} className="text-[#D4AF37] opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer of Drawer */}
          <div className="p-6 bg-white border-t border-[#EADBC8]">
            <a 
              href="#apply" 
              className="flex items-center justify-center gap-2 w-full py-4 text-white font-bold bg-[#7A1F1F] rounded-xl uppercase tracking-widest shadow-lg active:scale-[0.98] transition-all"
            >
              Apply Now <ArrowRight size={18} className="text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;