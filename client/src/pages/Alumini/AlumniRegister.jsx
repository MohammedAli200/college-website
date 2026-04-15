import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";
import { ClipboardCheck, Sparkles } from "lucide-react";

const AlumniRegister = () => {
  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.2}>
      <Navbar />

      <main className="relative z-10 w-full pt-32 md:pt-48 pb-20 px-5 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A1F1F]/5 text-[#7A1F1F] mb-6">
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Alumni Membership</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-black tracking-tighter mb-4 text-black">
              Join the <br className="md:hidden" /> Network<span className="text-[#D4AF37]">.</span>
            </h2>
            <p className="text-gray-500 font-light text-lg">Verify your status and unlock exclusive alumni benefits.</p>
          </div>

          {/* Registration Card */}
          <form className="space-y-6 bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#7A1F1F] pl-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-4 md:p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#7A1F1F]/20 focus:bg-white outline-none transition-all text-black font-semibold"
                  placeholder="Mohammed Ali"
                />
              </div>

              {/* Roll Number */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#7A1F1F] pl-2">Roll Number / ID</label>
                <input
                  type="text"
                  className="w-full p-4 md:p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#7A1F1F]/20 focus:bg-white outline-none transition-all text-black font-semibold"
                  placeholder="18AL1A0XXX"
                />
              </div>

              {/* Batch Year */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#7A1F1F] pl-2">Graduation Year</label>
                <input
                  type="text"
                  className="w-full p-4 md:p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#7A1F1F]/20 focus:bg-white outline-none transition-all text-black font-semibold"
                  placeholder="2022"
                />
              </div>

              {/* Current Company */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#7A1F1F] pl-2">Current Workplace</label>
                <input
                  type="text"
                  className="w-full p-4 md:p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#7A1F1F]/20 focus:bg-white outline-none transition-all text-black font-semibold"
                  placeholder="Google / Startup / Self"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#7A1F1F] pl-2">Primary Email</label>
              <input
                type="email"
                className="w-full p-4 md:p-5 bg-gray-50 rounded-2xl border border-transparent focus:border-[#7A1F1F]/20 focus:bg-white outline-none transition-all text-black font-semibold"
                placeholder="ali@example.com"
              />
            </div>

            <div className="pt-6">
              <button className="w-full bg-[#7A1F1F] text-[#FFF7E6] py-5 md:py-6 rounded-[1.5rem] font-black uppercase tracking-[0.3em] hover:bg-black hover:shadow-2xl hover:shadow-[#7A1F1F]/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                <ClipboardCheck size={20} className="text-[#D4AF37]" />
                Submit Registration
              </button>
            </div>

            <p className="text-center text-[10px] text-gray-400 leading-relaxed max-w-xs mx-auto">
              By registering, you agree to our alumni privacy policy and data protection guidelines.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </BokehBackground>
  );
};

export default AlumniRegister;