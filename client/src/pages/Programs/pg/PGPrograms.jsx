import React from "react";
import PGLayout from "../pg/PGLayout";
import { GraduationCap, Award } from "lucide-react";

const PGPrograms = () => {
  const programs = [
    { id: 1, name: "M.Tech – Computer Science and Engineering (CSE)", year: "2012", intake: 24 },
    { id: 2, name: "M.Tech – VLSI Design", year: "2012", intake: 24 },
    { id: 3, name: "M.Tech – Electrical Power Systems (EPS)", year: "2012", intake: 24 },
    { id: 4, name: "M.Tech – Structural Engineering", year: "2012", intake: 24 },
    { id: 5, name: "MBA (Master of Business Administration)", year: "2009", intake: 180 },
    { id: 6, name: "MCA (Master of Computer Applications)", year: "2023", intake: 180 },
  ];

  return (
    <PGLayout title="Programs Offered">
      <div className="space-y-8">
        <div className="flex items-start gap-4 p-6 bg-[#7A1F1F]/5 rounded-3xl border border-[#7A1F1F]/10">
          <div className="bg-[#7A1F1F] p-2 rounded-xl text-white">
            <Award size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Postgraduate Excellence</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              ALITS offers specialized PG programs focused on advanced research, technical mastery, and leadership in management.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest">S.No</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest">Program</th>
                <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-right">Intake</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {programs.map((prog, index) => (
                <tr key={prog.id} className="group hover:bg-[#FFF7E6]/50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-slate-300">0{index + 1}</td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-700">{prog.name}</td>
                  <td className="px-6 py-5 text-sm font-black text-slate-900 text-right">{prog.intake}</td>
                </tr>
              ))}
              <tr className="bg-slate-50/80">
                <td colSpan="2" className="px-6 py-8 text-right font-black uppercase text-[10px] tracking-widest text-slate-400">Total PG Intake</td>
                <td className="px-6 py-8 text-right text-3xl font-serif font-black text-[#7A1F1F]">456</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PGLayout>
  );
};

export default PGPrograms;