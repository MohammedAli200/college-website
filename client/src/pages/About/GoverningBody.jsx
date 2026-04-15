import React from "react";
import AboutLayout from "../../components/AboutLayout";

const GoverningBody = () => {
   const governingData = [
      { sNo: "01", name: "Sri. M. Ramudu", category: "Management", nature: "Chairman" },
      { sNo: "02", name: "Sri. M. Ramesh Naidu", category: "Management", nature: "Vice-Chairman" },
      { sNo: "03", name: "Smt. M. Ramadevi", category: "Management", nature: "Secretary" },
      { sNo: "04", name: "Smt. M. Lakshmi Devi", category: "Management", nature: "Joint-Secretary" },
      { sNo: "05", name: "Smt. E. Anitha", category: "Management", nature: "Treasurer" },
      { sNo: "06", name: "Dr. P. Ramana Reddy", category: "University Nominee", nature: "Member" },
      { sNo: "07", name: "Prof. K. Nagabhushan Raju", category: "Educationist / Industrialist", nature: "Member" },
      { sNo: "08", name: "Dr. M. Surendra Naidu", category: "Teacher of the College", nature: "Member" },
      { sNo: "09", name: "Dr. G. Viswanath", category: "Teacher of the College", nature: "Member" },
      { sNo: "10", name: "Mr. V. T. A. Chowdary", category: "Administrative Staff", nature: "Member" },
      { sNo: "11", name: "Dr. K. Sreenivasulu", category: "Principal", nature: "Member-Secretary" },
   ];

   return (
      <AboutLayout title="Governing Body">
         <div className="max-w-7xl mx-auto px-6 pb-40 pt-12 font-sans bg-[#FCFCFC]">

            {/* BOLD ARCHITECTURAL HEADER */}
            <header className="relative mb-20">
               <div className="flex flex-col md:flex-row items-baseline gap-4">
                  <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none m-0">
                     BODY.
                  </h1>
                  <p className="text-[#7A1F1F] font-bold text-lg md:text-2xl tracking-[0.2em] uppercase">
                     Governing Council
                  </p>
               </div>
               <div className="mt-8 h-[2px] w-full bg-slate-100 relative">
                  <div className="absolute left-0 top-0 h-full w-24 bg-[#D4AF37]"></div>
               </div>
            </header>

            {/* HIGH-PRECISION LIST */}
            <div className="grid grid-cols-1 gap-px bg-slate-100 border-t border-slate-100">
               {/* Table Header Row */}
               <div className="hidden md:flex items-center bg-white py-6 px-4">
                  <div className="w-16 text-[10px] font-black uppercase tracking-widest text-slate-400">#</div>
                  <div className="flex-1 text-[10px] font-black uppercase tracking-widest text-slate-400">Name of the Member</div>
                  <div className="w-64 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Category</div>
                  <div className="w-48 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Nature</div>
               </div>

               {governingData.map((member, index) => (
                  <div
                     key={index}
                     className="group flex flex-col md:flex-row items-center bg-white py-5 px-4 hover:bg-slate-50 transition-colors duration-300"
                  >
                     {/* Index - Slim */}
                     <div className="hidden md:block w-16 font-light text-slate-300 text-sm">
                        {member.sNo}
                     </div>

                     {/* Member Name - Slim & Refined */}
                     <div className="flex-1 w-full md:w-auto mb-4 md:mb-0">
                        <h2 className="text-xl md:text-2xl font-light text-slate-700 group-hover:text-black transition-all">
                           {member.name}
                        </h2>
                     </div>

                     {/* Category - Subtle Pill */}
                     <div className="w-full md:w-64 flex justify-start md:justify-center mb-4 md:mb-0">
                        <span className="px-4 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-medium text-slate-500 uppercase tracking-wider group-hover:border-[#D4AF37]/30 transition-colors">
                           {member.category}
                        </span>
                     </div>

                     {/* Nature - Bold Role Contrast */}
                     <div className="w-full md:w-48 text-left md:text-right">
                        <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#7A1F1F] group-hover:text-slate-900 transition-colors">
                           {member.nature}
                        </span>
                     </div>
                  </div>
               ))}
            </div>

            {/* REFINED CLOSING ACCENT */}
            <footer className="mt-24 border-t border-slate-100 pt-10">
               <div className="flex justify-between items-center opacity-40">
                  <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-slate-400">
                     ALITS Institutional Leadership
                  </span>
                  <div className="flex gap-2">
                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                     <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  </div>
               </div>
            </footer>
         </div>
      </AboutLayout>
   );
};

export default GoverningBody;