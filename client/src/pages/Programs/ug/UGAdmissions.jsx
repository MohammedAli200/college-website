import React from "react";
import UGLayout from "../ug/UGLayout";
import { Clock, Landmark, ArrowRight } from "lucide-react";

const UGAdmissions = () => {
  return (
    <UGLayout title="Admission">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-[#7A1F1F]/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <Landmark size={48} className="text-[#D4AF37]" />
          </div>
        </div>

        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
            B.Tech Admissions 2026
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            The undergraduate admission portal and counseling guidelines are currently being synchronized with the <span className="font-bold text-[#7A1F1F]">APSCHE</span> official calendar.
          </p>
        </div>

        <div className="w-full max-w-lg p-6 bg-slate-900 rounded-3xl border border-white/10 shadow-2xl text-left">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">Coming Soon</p>
          </div>
          <p className="text-sm text-white/80 font-medium">
            Detailed step-by-step counseling procedures and management quota details will update soon.
          </p>
        </div>
      </div>
    </UGLayout>
  );
};

export default UGAdmissions;