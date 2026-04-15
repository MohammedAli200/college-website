import React from "react";
import PGLayout from "../pg/PGLayout";
import { ReceiptIndianRupee, Clock } from "lucide-react";

const PGFee = () => {
  return (
    <PGLayout title="Fee Structure">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
          <ReceiptIndianRupee size={48} className="text-[#7A1F1F]" />
        </div>
        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 italic uppercase">Fees Information</h3>
          <p className="text-slate-500 font-light leading-relaxed">
            Fees are determined as per the <b>Andhra Pradesh Higher Education Regulatory and Monitoring Commission (AFRC)</b>.
          </p>
        </div>
        <div className="px-6 py-2 bg-slate-900 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
          Content will update soon
        </div>
      </div>
    </PGLayout>
  );
};

export default PGFee;