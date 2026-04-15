import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";
// Added 'Users' to the import list below
import { Search, BookOpen, Globe, Shield, Users, ArrowRight } from "lucide-react";

const AlumniPortal = () => {
  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.2}>
      <Navbar />

      <main className="relative z-10 w-full pt-32 md:pt-48 pb-20 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="border-l-4 md:border-l-8 border-[#7A1F1F] pl-6 md:pl-8 mb-16">
            <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-black">
              Portal<span className="text-[#D4AF37]">.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mt-4 max-w-2xl font-light">
              Access exclusive resources, verify credentials, and stay connected with the global ALITS network.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Directory", desc: "Find and connect with fellow batchmates.", icon: <Users size={32} /> },
              { title: "E-Library", desc: "Lifetime access to research journals.", icon: <BookOpen size={32} /> },
              { title: "Transcripts", desc: "Request official academic documents.", icon: <Shield size={32} /> },
              { title: "Job Board", desc: "Exclusive openings from alumni-led firms.", icon: <Globe size={32} /> }
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 md:p-12 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border border-gray-100 hover:bg-black transition-all duration-700 cursor-pointer relative overflow-hidden"
              >
                {/* Decorative background icon for hover state */}
                <div className="absolute -right-4 -bottom-4 text-black/5 group-hover:text-white/10 transition-colors duration-700 transform scale-150">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-[#7A1F1F] group-hover:text-[#D4AF37] mb-6 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white mb-3 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 mb-8 transition-colors duration-500 max-w-xs">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F1F] group-hover:text-[#D4AF37] transition-colors">
                    Enter Section <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </BokehBackground>
  );
};

export default AlumniPortal;