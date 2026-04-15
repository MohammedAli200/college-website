import React from "react";
import PGLayout from "../pg/PGLayout";
import { ShieldCheck, GraduationCap } from "lucide-react";

const PGEligibility = () => {
  return (
    <PGLayout title="Eligibility">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
          <GraduationCap size={48} className="text-[#D4AF37]" />
        </div>
        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 italic uppercase">Qualifying Criteria</h3>
          <p className="text-slate-500 font-light leading-relaxed">
            Minimum qualification is a pass in the relevant Bachelor's degree (B.Tech/B.E/B.Sc/B.Com/BCA) from a recognized University as per APSCHE norms.
          </p>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7A1F1F] animate-pulse">
          Detailed Subject-wise Criteria Updating Soon
        </div>
      </div>
    </PGLayout>
  );
};

export default PGEligibility;