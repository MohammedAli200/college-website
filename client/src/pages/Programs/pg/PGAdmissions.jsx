import React from "react";
import PGLayout from "../pg/PGLayout";
import { Info, CheckCircle2, FileText } from "lucide-react";

const PGAdmissions = () => {
  return (
    <PGLayout title="Admission">
      <div className="space-y-10">
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#D4AF37] rounded-full"></div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">M.Tech Admission Pattern</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
              <h4 className="font-bold text-[#7A1F1F]">CSE & VLSI Programs</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Candidates must possess a B.E/B.Tech in the respective branch or MSc/MCA for CSE. Admissions are based on a valid **GATE score** or eligibility at **PGECET**.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-[#D4AF37] rounded-full"></div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">MBA Admission Pattern</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-100 rounded-[2rem] space-y-4">
              <span className="px-4 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase">Category A (70%)</span>
              <p className="text-sm text-slate-600">Convener Quota seats filled through <b>ICET/PGECET Web Counseling</b> based on state rank and reservation rules.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-[2rem] space-y-4">
              <span className="px-4 py-1 bg-[#D4AF37] text-slate-900 text-[10px] font-black rounded-full uppercase">Category B (30%)</span>
              <p className="text-sm text-slate-600">Management Quota seats filled following <b>APSCHE guidelines</b>, subject to ratification by JNTUA.</p>
            </div>
          </div>
        </section>
      </div>
    </PGLayout>
  );
};

export default PGAdmissions;