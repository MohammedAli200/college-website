import React, { useState } from "react";
import {
  BookOpen, Award, Users, ArrowRight, Building2,
  Briefcase, GraduationCap, ChevronRight, CheckCircle2,
  Microscope, Monitor, Trophy, Bus, Home as HomeIcon, MapPin, Phone
} from "lucide-react";

const Body = () => {
  const [activeTab, setActiveTab] = useState("NEWS");

  const sectionTitle = "text-[#7A1F1F] font-serif font-black text-4xl md:text-6xl mb-6 tracking-tight leading-[1.1]";
  const badgeStyle = "px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-white/50 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block shadow-sm backdrop-blur-sm";

  const newsData = {
    NEWS: [
      { title: "Q Spiders Placement Drive Selected-34", date: "03/12/2025" },
      { title: "Maintech(HCL) Placement Drive Selected-142", date: "02/12/2025" },
      { title: "Renault Nissan pvt ltd Placement Drive Selected-55", date: "22/11/2025" },
      { title: "Tata Strive Pvt Ltd Placement Drive", date: "21/11/2025" },
      { title: "VStand4u Placement Drive Selected-11", date: "14/11/2025" },
      { title: "Tap Academy Placement Drive Selected-13", date: "13/11/2025" },
      { title: "Rinex Technologies pvt ltd Placement Drive Selected-10", date: "07/11/2025" },
    ],
    CIVIL: [{ title: "Civil Engineering Updates", date: "Ongoing" }],
    EEE: [{ title: "Electrical Engineering Updates", date: "Ongoing" }],
    MECH: [{ title: "Mechanical Engineering Updates", date: "Ongoing" }],
    ECE: [{ title: "Electronics Engineering Updates", date: "Ongoing" }],
    CSE: [{ title: "Computer Science Updates", date: "Ongoing" }],
    "H & S": [{ title: "Humanities & Sciences Updates", date: "Ongoing" }],
    "MBA & MCA": [{ title: "Management Updates", date: "Ongoing" }],
    IIC: [{ title: "Innovation Council Updates", date: "Ongoing" }],
    POLYTECHNIC: [{ title: "Polytechnic Updates", date: "Ongoing" }],
    NSS: [{ title: "National Service Scheme Updates", date: "Ongoing" }]
  };

  const mous = [
    "SKU-ATAL Incubation Center",
    "E-Commerce Consultants, New Mexico, USA",
    "Blackbucks Education Pvt. Ltd.",
    "TAL Transformers-Hyderabad",
    "ExvelR Edtech Pvt. Ltd.",
    "SkillDzire Technologies Pvt. Ltd.",
    "DATAPOINT Info Solutions, Hyd.",
    "GRP Constructions, ATP, AP."
  ];

  const programs = [
    { title: "POLYTECHNIC", items: ["DIPLOMA – CME", "DIPLOMA – ECE", "DIPLOMA – EEE"] },
    { title: "UG Programs", items: ["B.Tech – Civil", "B.Tech – EEE", "B.Tech – MECHANICAL", "B.Tech – ECE", "B.Tech – CSE", "B.Tech – CSE(AIML)", "B.Tech – CSE(DS)", "B.Tech – CSE(AI)"] },
    { title: "PG Programs", items: ["M.Tech – CSE", "M.Tech – VLSI", "M.Tech – EPS", "M.Tech – Str.Engg", "MBA", "MCA"] }
  ];

  const features = [
    { icon: <BookOpen />, title: "Library" },
    { icon: <Microscope />, title: "R & D" },
    { icon: <Award />, title: "Skill Development" },
    { icon: <Monitor />, title: "Digital Class\nRooms" },
    { icon: <Users />, title: "NSS" },
    { icon: <Trophy />, title: "Sports" },
    { icon: <HomeIcon />, title: "Hostel" },
    { icon: <Bus />, title: "Transport" }
  ];

  return (
    <div className="bg-[#FFF7E6] overflow-hidden">
      
      {/* 1. INTRO / WELCOME SECTION */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <span className={badgeStyle}>Tradition Meets Innovation</span>
            <h2 className={sectionTitle}>
              Empowering <span className="text-[#D4AF37] italic">Minds</span>, <br />
              Transforming <span className="text-[#D4AF37] relative">
                Futures
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#D4AF37]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span>.
            </h2>
            <p className="text-[#6B4F3B] text-xl leading-relaxed font-light max-w-2xl border-l-2 border-[#D4AF37] pl-6">
              Ananthalakshmi institutions function 2k17. We are committed to nurturing
              technical prowess and leadership to shape the next generation of innovators and professionals globally.
            </p>
            <div className="flex gap-4 pt-6">
               <button className="group relative overflow-hidden rounded-full p-[1px] shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all">
                <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFF7E6] to-[#D4AF37] opacity-100" />
                <div className="relative bg-[#7A1F1F] px-8 py-4 rounded-full text-[#FFF7E6] font-bold uppercase tracking-widest text-xs hover:bg-[#5a1616] transition-colors flex items-center gap-3">
                  Read Our Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
                </div>
               </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Decorative Background Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7A1F1F]/5 to-[#D4AF37]/5 rounded-[3rem] transform -rotate-3 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-b from-white to-[#FFF7E6] p-8 rounded-[2rem] flex flex-col justify-between h-64 shadow-[0_20px_50px_-15px_rgba(122,31,31,0.08)] border border-[#EADBC8] group hover:-translate-y-2 transition-all duration-500">
                <Building2 size={40} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <div>
                  <h4 className="text-4xl font-serif font-black text-[#7A1F1F]">Top</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B4F3B] mt-2">Infrastructure</p>
                </div>
              </div>
              <div className="bg-gradient-to-b from-white to-[#FFF7E6] p-8 rounded-[2rem] flex flex-col justify-between h-64 shadow-[0_20px_50px_-15px_rgba(122,31,31,0.08)] border border-[#EADBC8] mt-12 group hover:-translate-y-2 transition-all duration-500">
                <Briefcase size={40} className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <div>
                  <h4 className="text-4xl font-serif font-black text-[#7A1F1F]">100%</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B4F3B] mt-2">Placement Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMS SECTION (Darker Theme Contrast) */}
      <section className="bg-[#FAF5ED] py-24 md:py-32 border-y border-[#EADBC8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className={badgeStyle}>Academics</span>
            <h2 className={sectionTitle}>Programs Offered</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-10 shadow-sm border border-[#EADBC8] hover:border-[#D4AF37] hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] transition-all duration-500 relative overflow-hidden group">
                {/* Large Background Icon */}
                <div className="w-40 h-40 bg-[#FFF7E6] rounded-full absolute -right-10 -top-10 opacity-30 group-hover:scale-[2] transition-transform duration-1000 ease-out z-0" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7A1F1F] to-[#5a1616] rounded-2xl flex items-center justify-center mb-8 shadow-md">
                    <GraduationCap size={32} className="text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-[#7A1F1F] mb-8 relative inline-block">
                    {program.title}
                    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#D4AF37] rounded-full group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  <ul className="space-y-4">
                    {program.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-[#6B4F3B] font-medium text-sm group/item">
                        <div className="mt-0.5"><CheckCircle2 size={16} className="text-[#D4AF37]/50 group-hover/item:text-[#D4AF37] transition-colors" /></div>
                        <span className="group-hover/item:text-[#7A1F1F] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIPS & MOUs */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className={badgeStyle}>Global Network</span>
          <h2 className={sectionTitle}>Memorandum of <span className="text-[#D4AF37] italic">Understanding</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mous.map((mou, idx) => (
             <div key={idx} className="bg-white border border-[#EADBC8] p-8 rounded-[2rem] hover:border-[#D4AF37] hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] transition-all group flex flex-col justify-center items-center text-center h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF7E6]/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <BookOpen size={32} className="text-[#D4AF37] mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all z-10" strokeWidth={1.5} />
                <span className="text-[#7A1F1F] font-bold text-sm tracking-wide z-10 leading-relaxed">{mou}</span>
             </div>
          ))}
        </div>
      </section>

      {/* 4. ACADEMIC BULLETINS & NEWS */}
      <section className="bg-white py-24 md:py-32 border-y border-[#EADBC8] relative overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFF7E6] via-transparent to-transparent opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
             <div>
               <span className={badgeStyle}>Bulletins</span>
               <h2 className={sectionTitle + " mb-0"}>Latest <span className="text-[#D4AF37] italic">Updates</span></h2>
             </div>
             <a href="#" className="group flex items-center gap-3 text-[#7A1F1F] font-bold text-[10px] uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-colors bg-[#FFF7E6] px-8 py-4 rounded-full border border-[#EADBC8] shadow-sm hover:shadow-md">
               View All Directory <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </a>
           </div>

           {/* Departments Scrollable Nav */}
           <div className="flex overflow-x-auto custom-scrollbar gap-2 mb-12 pb-4 border-b border-[#EADBC8]/50">
             {Object.keys(newsData).map((dept) => (
               <button
                 key={dept}
                 onClick={() => setActiveTab(dept)}
                 className={`whitespace-nowrap px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all rounded-full border ${
                   activeTab === dept 
                     ? "bg-[#7A1F1F] text-[#FFF7E6] border-[#7A1F1F] shadow-lg shadow-[#7A1F1F]/20"
                     : "bg-white text-[#6B4F3B] border-transparent hover:border-[#EADBC8] hover:bg-[#FFF7E6]"
                 }`}
               >
                 {dept}
               </button>
             ))}
           </div>

           {/* Academic Journal Styled List */}
           <div className="max-w-5xl mx-auto bg-[#FFF7E6] rounded-[2.5rem] p-8 md:p-14 border border-[#EADBC8] shadow-[0_20px_60px_-15px_rgba(122,31,31,0.08)]">
             <div className="h-[450px] overflow-y-auto pr-4 custom-scrollbar space-y-0 relative">
               {newsData[activeTab].map((item, idx) => (
                 <div key={idx} className="group border-b border-[#EADBC8]/60 last:border-0 py-6 md:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white transition-all cursor-pointer rounded-3xl px-6 md:px-8 -mx-6 md:-mx-8">
                   <div className="flex flex-col md:flex-row md:items-start sm:items-center gap-4 md:gap-12 w-full">
                     <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] shrink-0 sm:w-32 border-l-[3px] border-[#D4AF37] pl-4">
                       {item.date}
                     </span>
                     <h4 className="text-xl md:text-2xl font-serif font-black text-[#7A1F1F] leading-snug group-hover:text-[#5a1616] group-hover:translate-x-2 transition-all duration-300">
                       {item.title}
                     </h4>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-[#EADBC8] shrink-0 flex items-center justify-center text-[#7A1F1F] group-hover:bg-[#7A1F1F] group-hover:text-[#FFF7E6] transition-all bg-white shadow-sm mt-4 sm:mt-0">
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* 4. PLACEMENTS CROWN JEWEL */}
      <section className="bg-gradient-to-b from-[#7A1F1F] to-[#4A1111] text-center py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Award size={64} className="text-[#D4AF37] mx-auto mb-8 animate-[bounce_3s_infinite]" strokeWidth={1} />
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 leading-[1.1] drop-shadow-xl">Placements & <br/><span className="text-[#D4AF37] italic">Success Stories</span></h2>
          <p className="text-white/80 text-xl font-light mb-16 max-w-2xl mx-auto">Discover how our students step into the industry with top-tier companies globally.</p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
             <button className="bg-[#D4AF37] text-[#7A1F1F] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-xl w-full sm:w-auto">
                Recruiters
             </button>
             <button className="border border-white/30 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
                Students Selection List
             </button>
             <button className="border border-white/30 text-white backdrop-blur-md px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
                Testimonials
             </button>
          </div>
        </div>
      </section>

      {/* 5. CENTRAL LIBRARY */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2.5rem] overflow-hidden h-96 lg:h-[600px] border-[8px] border-white shadow-[0_20px_60px_-15px_rgba(122,31,31,0.2)] group">
             <div className="absolute inset-0 bg-[#7A1F1F]/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop" 
                alt="Central Library" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
          </div>
          <div className="space-y-8 pl-0 lg:pl-8">
            <span className={badgeStyle}>Facilities</span>
            <h2 className="text-[#7A1F1F] font-serif font-black text-4xl md:text-6xl tracking-tight">The Central Library</h2>
            <div className="w-16 h-1 bg-[#D4AF37] rounded-full"></div>
            <p className="text-[#6B4F3B] text-lg font-light leading-relaxed">
              The central library of the college is located in the New Building. It is spacious, well-ventilated, and provided with adequate furniture. It is equipped with specialized collections of books, journals, and non-book materials in Basic Sciences, Engineering & Technology, and Management Studies to cater the needs of the students and faculty.
            </p>
            <p className="text-[#6B4F3B] text-lg font-light leading-relaxed">
              A good collection of titles is earmarked as reference books and a spacious reading room is attached to it. The library subscribes to many National and International Print Journals, E-Journals, and Magazines. All library operations are completely automated.
            </p>
            <div className="pt-6">
               <button className="group flex items-center gap-3 text-[#7A1F1F] font-bold uppercase tracking-widest text-sm hover:text-[#D4AF37] transition-colors">
                 <span>Explore Library</span>
                 <span className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                   <ArrowRight size={16} />
                 </span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPECIAL FEATURES TILE GRID */}
      <section className="bg-[#FAF5ED] border-t border-[#EADBC8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className={badgeStyle}>Amenities</span>
            <h2 className={sectionTitle}>Special Features</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-[#EADBC8] flex flex-col items-center justify-center text-center gap-6 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-all duration-500 group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFF7E6] to-white shadow-inner flex items-center justify-center text-[#7A1F1F] group-hover:bg-[#7A1F1F] group-hover:text-[#D4AF37] transition-colors duration-500 border border-[#EADBC8]">
                  {React.cloneElement(feat.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h4 className="font-serif font-black text-[#7A1F1F] text-lg md:text-xl uppercase tracking-wider whitespace-pre-line group-hover:text-[#5a1616] transition-colors">{feat.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EVENTS & GALLERY */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 text-center border border-[#EADBC8] shadow-[0_20px_60px_-15px_rgba(122,31,31,0.05)] relative overflow-hidden">
          {/* Large Background Watermark */}
          <Monitor size={400} className="absolute -right-20 -bottom-20 text-[#FFF7E6] opacity-50 z-0 pointer-events-none" strokeWidth={0.5} />
          
          <div className="relative z-10 max-w-3xl mx-auto">
             <span className={badgeStyle}>Stay Connected</span>
             <h2 className={sectionTitle}>Events & Infrastructure <br/><span className="text-[#D4AF37] italic">Gallery</span></h2>
             <p className="text-[#6B4F3B] text-lg font-light mb-12">Browse through our state of the art campus and recent college celebrations.</p>
             
             <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <button className="bg-[#7A1F1F] text-[#FFF7E6] px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#5a1616] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                   CollegeDay16
                </button>
                <button className="border-2 border-[#D4AF37] text-[#7A1F1F] px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all hover:shadow-lg hover:-translate-y-1">
                   ALITS @ News
                </button>
                <button className="border-2 border-[#D4AF37] text-[#7A1F1F] px-8 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all hover:shadow-lg hover:-translate-y-1">
                   Infrastructure
                </button>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Body;