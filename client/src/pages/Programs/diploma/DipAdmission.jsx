import React from "react";
import DiplomaLayout from "../diploma/DiplomaLayout";
import { Clock, Info, ArrowRight } from "lucide-react";

const DipAdmissions = () => {
  return (
    <DiplomaLayout title="Admission">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">

        {/* Animated Icon Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#7A1F1F]/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <Clock size={48} className="text-[#D4AF37] animate-spin-slow" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
            Process Updating
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            The formal admission procedure for the <span className="font-bold text-[#7A1F1F]">Academic Session 2026-27</span> is currently being finalized in accordance with the latest board guidelines.
          </p>
        </div>

        {/* Informational Card */}
        <div className="w-full max-w-lg p-6 bg-slate-900 rounded-3xl flex items-start gap-5 text-left border border-white/10 shadow-2xl">
          <div className="bg-[#D4AF37] p-2 rounded-xl text-slate-900">
            <Info size={20} />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Immediate Assistance</p>
            <p className="text-sm text-white/80 font-medium">
              For urgent admission queries, please contact the administrative office at
              <span className="text-[#D4AF37] ml-1">+91 9533513999</span>
            </p>
          </div>
        </div>

        {/* Decorative Progress Bar */}
        <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#7A1F1F] to-[#D4AF37] w-2/3 rounded-full animate-shimmer"></div>
        </div>
      </div>
    </DiplomaLayout>
  );
};

export default DipAdmissions;