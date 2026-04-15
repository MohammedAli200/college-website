import React from "react";
import AboutLayout from "../../components/AboutLayout";

const Trustees = () => {
   const trusteesData = [
      { sNo: "01", name: "Sri. M. Ramudu", role: "President" },
      { sNo: "02", name: "Sri. M. Ramesh Naidu", role: "Vice-President" },
      { sNo: "03", name: "Smt. M. Ramadevi", role: "Secretary" },
      { sNo: "04", name: "Smt. M. Lakshmidevi", role: "Joint Secretary" },
      { sNo: "05", name: "Smt. E. Anitha", role: "Treasurer" },
      { sNo: "06", name: "Sri. Ranga Swamy Pothula", role: "EC Member" },
      { sNo: "07", name: "Sri. Batta Sathish Babu", role: "EC Member" },
      { sNo: "08", name: "Sri. M. Venkatesh", role: "EC Member" },
      { sNo: "09", name: "Smt. M. Anusha", role: "EC Member" },
   ];

   return (
      <AboutLayout title="Governance">
         <div className="max-w-6xl mx-auto px-4 md:px-8 pb-32 pt-12 font-sans bg-white">

            {/* HEAVY BOLD HEADER AREA */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-4 border-slate-900 pb-10">
               <div className="space-y-2">
                  <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.6em]">
                     Executive Council
                  </p>
                  <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                     Trustees
                  </h1>
               </div>
               <div className="md:text-right">
                  <p className="text-slate-400 text-xs font-light tracking-[0.2em] max-w-[250px] md:ml-auto">
                     THE GOVERNING BOARD OF ANNAMACHARYA EDUCATIONAL TRUST
                  </p>
               </div>
            </header>

            {/* ULTRA-SLIM DATA LIST */}
            <div className="w-full">
               {/* Table Head - Bold & Tight */}
               <div className="flex items-center bg-slate-900 text-white px-6 py-3 rounded-t-sm">
                  <div className="w-12 text-[10px] font-black uppercase tracking-widest opacity-50">#</div>
                  <div className="flex-1 text-[10px] font-black uppercase tracking-widest">Board Member Name</div>
                  <div className="w-40 md:w-64 text-right text-[10px] font-black uppercase tracking-widest">Designation</div>
               </div>

               {/* Table Body - Slim & Dense */}
               <div className="border-x border-slate-100">
                  {trusteesData.map((trustee, index) => (
                     <div
                        key={index}
                        className="group flex items-center px-6 py-4 border-b border-slate-50 hover:bg-[#7A1F1F]/[0.02] transition-colors duration-200"
                     >
                        {/* Index - Slim */}
                        <div className="w-12 font-mono text-[11px] text-slate-300 group-hover:text-[#D4AF37] transition-colors">
                           {trustee.sNo}
                        </div>

                        {/* Name - Slim Typography */}
                        <div className="flex-1">
                           <h2 className="text-base md:text-lg font-light text-slate-600 group-hover:text-slate-900 transition-all">
                              {trustee.name}
                           </h2>
                        </div>

                        {/* Role - High Contrast Slim */}
                        <div className="w-40 md:w-64 text-right">
                           <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-slate-400 group-hover:text-[#7A1F1F] transition-colors">
                              {trustee.role}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* ACCENT FOOTER - Removes the empty feel at bottom */}
            <div className="flex items-center gap-4 mt-12 opacity-20">
               <div className="h-px flex-1 bg-slate-900"></div>
               <div className="w-2 h-2 rotate-45 border border-slate-900"></div>
               <div className="h-px flex-1 bg-slate-900"></div>
            </div>
         </div>
      </AboutLayout>
   );
};

export default Trustees;