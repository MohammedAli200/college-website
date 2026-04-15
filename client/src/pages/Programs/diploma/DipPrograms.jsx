import React from "react";
import DiplomaLayout from "../diploma/DiplomaLayout";
import { Table, LayoutGrid, CheckCircle } from "lucide-react";

const DipPrograms = () => {
  const programs = [
    { id: 1, name: "Diploma in Computer Engineering (CME)", year: "2022", intake: 180 },
    { id: 2, name: "Diploma in Electronics and Communication Engineering (ECE)", year: "2022", intake: 180 },
    { id: 3, name: "Diploma in Electrical and Electronics Engineering (EEE)", year: "2022", intake: 60 },
  ];

  return (
    <DiplomaLayout title="Programs Offered">
      <div className="space-y-8">
        {/* Intro Text */}
        <div className="flex items-start gap-4 p-6 bg-[#7A1F1F]/5 rounded-3xl border border-[#7A1F1F]/10">
          <div className="bg-[#7A1F1F] p-2 rounded-lg text-white">
            <LayoutGrid size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Diploma Courses</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We offer specialized diploma programs designed to provide practical technical
              expertise and industry-ready skills for the next generation of engineers.
            </p>
          </div>
        </div>

        {/* Programs Table */}
        <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest">S.No</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest">Programs</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest">Est. Year</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-right">Intake</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {programs.map((prog, index) => (
                <tr key={prog.id} className="group hover:bg-[#FFF7E6]/50 transition-colors">
                  <td className="px-6 py-5 text-sm font-bold text-slate-400">0{index + 1}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-sm font-bold text-slate-700">{prog.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-500">{prog.year}</td>
                  <td className="px-6 py-5 text-sm font-black text-slate-900 text-right">
                    <span className="inline-block px-3 py-1 bg-slate-50 rounded-lg border border-slate-100 group-hover:border-[#D4AF37]/30 transition-colors">
                      {prog.intake}
                    </span>
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr className="bg-slate-50/50">
                <td colSpan="3" className="px-6 py-6 text-right">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Intake Capacity</span>
                </td>
                <td className="px-6 py-6 text-right">
                  <span className="text-xl font-black text-[#7A1F1F]">420</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl">
            <CheckCircle size={18} className="text-[#D4AF37]" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">AICTE Approved Programs</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-slate-100 rounded-2xl">
            <CheckCircle size={18} className="text-[#D4AF37]" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-tight">Practical Hands-on Labs</span>
          </div>
        </div>
      </div>
    </DiplomaLayout>
  );
};

export default DipPrograms;