import React from "react";
import DiplomaLayout from "../diploma/DiplomaLayout";
import { ReceiptIndianRupee, AlertCircle, FileText } from "lucide-react";

const DipFee = () => {
  return (
    <DiplomaLayout title="Fee Structure">
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-8">

        {/* Icon Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-3xl group-hover:bg-[#7A1F1F]/20 transition-colors duration-700"></div>
          <div className="relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl transform transition-transform group-hover:scale-110">
            <ReceiptIndianRupee size={48} className="text-[#7A1F1F]" />
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-md space-y-4">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
            Fee Details Pending
          </h3>
          <p className="text-slate-500 font-light leading-relaxed">
            The fee structure for the <span className="font-bold text-[#7A1F1F]">2026-27 Diploma batch</span> is being updated to reflect the latest government scholarships and institutional subsidies.
          </p>
        </div>

        {/* Info Box */}
        <div className="w-full max-w-lg p-6 bg-slate-50 rounded-3xl border border-slate-200/60 flex items-center gap-6 text-left">
          <div className="bg-slate-900 p-3 rounded-2xl text-[#D4AF37]">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Notification</p>
            <p className="text-sm text-slate-700 font-bold">Official PDF will be available for download shortly.</p>
          </div>
        </div>

        {/* Decorative Status */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#7A1F1F]/5 rounded-full border border-[#7A1F1F]/10">
          <div className="h-2 w-2 bg-[#7A1F1F] rounded-full animate-ping"></div>
          <span className="text-[10px] font-black text-[#7A1F1F] uppercase tracking-[0.2em]">Awaiting Board Approval</span>
        </div>
      </div>
    </DiplomaLayout>
  );
};

export default DipFee;