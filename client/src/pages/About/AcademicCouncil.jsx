import React from "react";
import AboutLayout from "../../components/AboutLayout";


const AcademicCouncil = () => {
  const councilData = [
    { sNo: "01", name: "Dr. K. Sreenivasulu", category: "Principal", nature: "Chairman" },
    { sNo: "02", name: "Prof. S. Krishnaiah", category: "University Nominee", nature: "Member" },
    { sNo: "03", name: "Prof. P. Chenna Reddy", category: "University Nominee", nature: "Member" },
    { sNo: "04", name: "Prof. P. Sujatha", category: "University Nominee", nature: "Member" },
    { sNo: "05", name: "Prof. K. Nagabhushan Raju", category: "Nominated by Governing Body", nature: "Member" },
    { sNo: "06", name: "Mr. Ravi Sankar Landu", category: "Nominated by Governing Body", nature: "Member" },
    { sNo: "07", name: "Dr. P. V. Ramana", category: "Nominated by Governing Body", nature: "Member" },
    { sNo: "08", name: "Dr. K. Naveen", category: "Nominated by Governing Body", nature: "Member" },
    { sNo: "09", name: "Dr. Y. L. Ajay Kumar", category: "HoD of ECE", nature: "Member" },
    { sNo: "10", name: "Dr. K. Bhargavi", category: "HoD of CSE", nature: "Member" },
    { sNo: "11", name: "Dr. C. Rajeswari", category: "HoD of H&S", nature: "Member" },
    { sNo: "12", name: "Mr. K. Nagabhushanam", category: "HoD of CE", nature: "Member" },
    { sNo: "13", name: "Dr. K. Krishna Priya", category: "HoD of EEE", nature: "Member" },
    { sNo: "14", name: "Mr. M. Ashok", category: "HoD of ME", nature: "Member" },
    { sNo: "15", name: "Mr. K. Chakradhar", category: "HoD of MBA", nature: "Member" },
    { sNo: "16", name: "Mr. Y. Sudarshan Chowdary", category: "HoD of MCA", nature: "Member" },
    { sNo: "17", name: "Dr. M. Surendra Naidu", category: "Teacher of the College", nature: "Member" },
    { sNo: "18", name: "Mr. K. Purushotham", category: "Teacher of the College", nature: "Member" },
    { sNo: "19", name: "Ms. A. Sandhya Rani", category: "Teacher of the College", nature: "Member" },
    { sNo: "20", name: "Dr. T. Madhavi", category: "Teacher of the College", nature: "Member" },
    { sNo: "21", name: "Dr. K. Sreenivasulu", category: "Controller of Examinations", nature: "Member" },
    { sNo: "22", name: "Mr. K. Venkata Krishna", category: "Nominated by Principal", nature: "Member-Secretary" },
  ];

  return (
    <AboutLayout title="Academic Council">
      <div className="max-w-7xl mx-auto px-6 pb-40 pt-12 font-sans bg-[#FCFCFC]">

        {/* BOLD ARCHITECTURAL HEADER */}
        <header className="relative mb-20">
          <div className="flex flex-col md:flex-row items-baseline gap-4">
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none m-0">
              COUNCIL.
            </h1>
            <p className="text-[#7A1F1F] font-bold text-lg md:text-2xl tracking-[0.2em] uppercase">
              Academic Excellence
            </p>
          </div>
          <div className="mt-8 h-[2px] w-full bg-slate-100 relative">
            <div className="absolute left-0 top-0 h-full w-24 bg-[#D4AF37]"></div>
          </div>
        </header>

        {/* REFINED SLIM DATA GRID */}
        <div className="flex flex-col border-t-2 border-slate-900 shadow-sm bg-white overflow-x-auto">

          {/* Table Header - Bold & Fixed Widths */}
          <div className="min-w-[800px] flex items-center bg-slate-50 py-4 px-6 border-b border-slate-200">
            <div className="w-16 text-[10px] font-black uppercase tracking-widest text-slate-400">#</div>
            <div className="flex-[3] text-[10px] font-black uppercase tracking-widest text-slate-400">Academician Name</div>
            <div className="flex-[2] text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Category / Office</div>
            <div className="w-48 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Nature</div>
          </div>

          {/* Table Body - Slim Names */}
          <div className="min-w-[800px] divide-y divide-slate-50">
            {councilData.map((member, index) => (
              <div
                key={index}
                className="group flex items-center py-3 px-6 hover:bg-[#7A1F1F]/[0.02] transition-colors duration-200"
              >
                {/* Index - Monospace slim */}
                <div className="w-16 font-mono text-[11px] text-slate-300 group-hover:text-[#D4AF37]">
                  {member.sNo}
                </div>

                {/* Name - Slim/Lightweight but takes most space */}
                <div className="flex-[3]">
                  <h2 className="text-base md:text-lg font-light text-slate-700 group-hover:text-black tracking-tight transition-all">
                    {member.name}
                  </h2>
                </div>

                {/* Category - Narrow Pill to save space */}
                <div className="flex-[2] px-4">
                  <span className="inline-block px-3 py-1 rounded-sm border border-slate-100 bg-white text-[9px] font-medium text-slate-400 uppercase tracking-wider group-hover:border-[#D4AF37]/40 whitespace-nowrap overflow-hidden text-ellipsis">
                    {member.category}
                  </span>
                </div>

                {/* Nature - Slim Maroon accent */}
                <div className="w-48 text-right">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#7A1F1F]/60 group-hover:text-[#7A1F1F]">
                    {member.nature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MINIMALIST FOOTER */}
        <footer className="mt-20 border-t border-slate-100 pt-10">
          <div className="flex justify-between items-center opacity-30">
            <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-slate-400">
              ALITS • Academic Governance Directory
            </span>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-slate-900 rounded-full" />)}
            </div>
          </div>
        </footer>
      </div>
    </AboutLayout>
  );
};

export default AcademicCouncil;