import React from "react";
import {
  MapPin,
  Mail,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Departments", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Placements", href: "#" },
    { name: "Exam Section", href: "#" },
  ];

  const facilities = [
    "Library",
    "Computer Center",
    "Seminar Hall",
    "Sports Facilities",
    "Transport",
    "Hostels",
  ];

  return (
    <footer className="relative bg-transparent pt-20 pb-10 overflow-hidden">
      {/* 1. TOP GOLD DIVIDER - Made thicker and brighter */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* COLUMN 1: BRAND & MISSION */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-black tracking-tight text-white drop-shadow-md">
            Anantha Lakshmi <br />
            <span className="text-[#D4AF37] italic font-medium">Institute</span>
          </h2>
          {/* Increased opacity and weight for readability */}
          <p className="text-sm leading-relaxed text-white font-semibold">
            Cultivating technical mastery and academic excellence in the heart of Ananthapuramu. A legacy of innovation and leadership.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-all duration-500 hover:bg-[#D4AF37] hover:text-black"
              >
                <Icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2: QUICK NAVIGATION */}
        <div className="space-y-6">
          <h3 className="text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.3em] drop-shadow-sm">Navigation</h3>
          <ul className="grid grid-cols-1 gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-[15px] font-bold text-white flex items-center group transition-colors hover:text-[#D4AF37]">
                  <ChevronRight size={16} className="mr-2 text-[#D4AF37] transition-all" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: CAMPUS FACILITIES */}
        <div className="space-y-6">
          <h3 className="text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.3em]">Campus Life</h3>
          <ul className="grid grid-cols-1 gap-3">
            {facilities.map((item) => (
              <li key={item} className="text-[15px] font-bold flex items-center text-white transition-colors cursor-default">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3 shadow-[0_0_8px_#D4AF37]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4: CONTACT & LOCATION */}
        <div className="space-y-6">
          <h3 className="text-[#D4AF37] text-[12px] font-black uppercase tracking-[0.3em]">Contact Us</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black shrink-0 transition-transform group-hover:scale-110">
                <MapPin size={18} strokeWidth={2.5} />
              </div>
              <p className="text-sm leading-relaxed text-white font-bold">
                Near S.K. University, Itukalapalli, <br />
                Anantapur, AP - 515721.
              </p>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                <Mail size={18} strokeWidth={2} />
              </div>
              <span className="text-sm text-[#D4AF37] font-black tracking-wider group-hover:text-white transition-colors">principal@alits.ac.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-20 border-t-2 border-[#D4AF37]/20 pt-8 text-center bg-black/40 backdrop-blur-sm">
        <p className="text-[11px] uppercase tracking-[0.4em] text-white font-black">
          © {currentYear} Anantha Lakshmi Institute of Technology & Science. <br className="md:hidden" />
          <span className="hidden md:inline mx-2">•</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;