import React from "react";
import UGLayout from "../ug/UGLayout";
import { GraduationCap, Verified } from "lucide-react";

const UGEligibility = () => {
  return (
    <UGLayout title="Eligibility">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-[#7A1F1F]/10 rounded-full blur-2xl"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <GraduationCap size={48} className="text-[#D4AF37]" />
          </div>
        </div>

        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
            Entry Requirements
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            Eligibility for UG programs is strictly based on <span className="font-bold text-[#7A1F1F]">EAPCET</span> ranks and Intermediate Board results. Detailed percentage breakdowns will update soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
          <div className="p-5 bg-white border border-slate-100 rounded-3xl flex items-center gap-3 opacity-40 grayscale">
            <Verified size={20} />
            <span className="text-[11px] font-black uppercase tracking-wider">10+2 MPC Stream</span>
          </div>
          <div className="p-5 bg-white border border-slate-100 rounded-3xl flex items-center gap-3 opacity-40 grayscale">
            <Verified size={20} />
            <span className="text-[11px] font-black uppercase tracking-wider">Lateral Entry (ECET)</span>
          </div>
        </div>
      </div>
    </UGLayout>
  );
};

export default UGEligibility;