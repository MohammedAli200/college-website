import React from "react";
import UGLayout from "../ug/UGLayout";
import { ReceiptIndianRupee, ShieldCheck } from "lucide-react";

const UGFee = () => {
  return (
    <UGLayout title="Fee Structure">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-3xl group-hover:bg-[#7A1F1F]/20 transition-colors duration-700"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <ReceiptIndianRupee size={48} className="text-[#7A1F1F]" />
          </div>
        </div>

        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
            Tuition & Amenities
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            The fee structure for <span className="font-bold text-slate-900 italic">B.Tech Specializations</span> for the upcoming academic session is under final review by the fee regulatory committee.
          </p>
        </div>

        <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-200/60">
          <ShieldCheck size={18} className="text-[#D4AF37]" />
          <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Scholarships & JVD Benefits Apply</span>
        </div>
      </div>
    </UGLayout>
  );
};

export default UGFee;