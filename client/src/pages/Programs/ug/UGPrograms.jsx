import React from "react";
import UGLayout from "../ug/UGLayout";
import { Table, LayoutGrid, CheckCircle, GraduationCap } from "lucide-react";

const UgPrograms = () => {
  const programs = [
    { id: 1, name: "B.Tech – Civil Engineering", year: "2011", intake: 30 },
    { id: 2, name: "B.Tech – Electrical and Electronics Engineering (EEE)", year: "2008", intake: 60 },
    { id: 3, name: "B.Tech – Computer Science and Engineering (CSE)", year: "2008", intake: 360 },
    { id: 4, name: "B.Tech – CSE (AI & ML)", year: "2021", intake: 120 },
    { id: 5, name: "B.Tech – CSE (Data Science)", year: "2022", intake: 180 },
    { id: 6, name: "B.Tech – CSE (Artificial Intelligence)", year: "2025", intake: 60 },
    { id: 7, name: "B.Tech – Electronics and Communication Engineering (ECE)", year: "2008", intake: 240 },
    { id: 8, name: "B.Tech – Mechanical Engineering", year: "2014", intake: 30 },
  ];

  return (
    <UGLayout title="Programs Offered">
      <div className="space-y-8">
        {/* Header Insight */}
        <div className="flex items-start gap-4 p-6 bg-[#7A1F1F]/5 rounded-3xl border border-[#7A1F1F]/10">
          <div className="bg-[#7A1F1F] p-2 rounded-xl text-white shadow-lg shadow-[#7A1F1F]/20">
            <GraduationCap size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Undergraduate Engineering (B.Tech)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our B.Tech programs are designed to foster innovation and technical excellence,
              offering a wide spectrum of specializations from core engineering to cutting-edge AI technologies.
            </p>
          </div>
        </div>

        {/* Programs Table */}
        <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest">S.No</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest">Branch Name</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest">Est. Year</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-right">Intake</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {programs.map((prog, index) => (
                <tr key={prog.id} className="group hover:bg-[#FFF7E6]/50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-slate-300">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-sm font-bold text-slate-700">{prog.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-500 italic">{prog.year}</td>
                  <td className="px-6 py-5 text-sm font-black text-slate-900 text-right">
                    <span className="inline-block min-w-[50px] px-3 py-1 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-[#D4AF37]/30 group-hover:bg-white transition-all">
                      {prog.intake}
                    </span>
                  </td>
                </tr>
              ))}
              {/* Grand Total Footer */}
              <tr className="bg-slate-50/80">
                <td colSpan="3" className="px-6 py-8 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Consolidated</span>
                    <span className="text-sm font-black text-slate-900 uppercase">Total UG Intake</span>
                  </div>
                </td>
                <td className="px-6 py-8 text-right">
                  <span className="text-3xl font-serif font-black text-[#7A1F1F]">1140</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Accreditation Tags */}
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="flex items-center gap-3 px-5 py-3 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <CheckCircle size={16} className="text-[#D4AF37]" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">AICTE Approved</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <CheckCircle size={16} className="text-[#D4AF37]" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">JNTUA Affiliated</span>
          </div>
        </div>
      </div>
    </UGLayout>
  );
};

export default UgPrograms;