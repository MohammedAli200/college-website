import React from "react";
import DiplomaLayout from "../diploma/DiplomaLayout";
import { ShieldCheck, GraduationCap, ChevronRight } from "lucide-react";

const DipEligibility = () => {
  return (
    <DiplomaLayout title="Eligibility">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">

        {/* Icon Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#7A1F1F]/10 rounded-full blur-2xl"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <ShieldCheck size={48} className="text-[#D4AF37]" />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
            Criteria Review
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            Minimum percentage and entrance requirements are being updated based on the
            <span className="font-bold text-slate-900 italic"> SBTET Guidelines.</span>
          </p>
        </div>

        {/* Quick Requirement Preview (Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
          <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 opacity-50 grayscale">
            <GraduationCap size={18} className="text-slate-400" />
            <span className="text-[11px] font-black text-slate-400 uppercase">SSC / 10th Pass</span>
          </div>
          <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 opacity-50 grayscale">
            <GraduationCap size={18} className="text-slate-400" />
            <span className="text-[11px] font-black text-slate-400 uppercase">POLYCET Qualified</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] animate-pulse">
          Details will update soon
        </p>
      </div>
    </DiplomaLayout>
  );
};

export default DipEligibility;