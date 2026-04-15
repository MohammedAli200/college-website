import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const AlumniEvents = () => {
  const events = [
    {
      title: "Annual Homecoming 2026",
      date: "Dec 24",
      loc: "ALITS Main Auditorium",
      type: "Flagship"
    },
    {
      title: "Bangalore Chapter Meetup",
      date: "Aug 15",
      loc: "Electronic City",
      type: "Networking"
    },
    {
      title: "Hyderabad Tech Summit",
      date: "Oct 10",
      loc: "HITEC City",
      type: "Workshop"
    }
  ];

  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.2}>
      <Navbar />

      <main className="relative z-10 w-full pt-32 md:pt-48 pb-20 px-5 md:px-6">
        {/* Header Section */}
        <header className="max-w-7xl mx-auto mb-20">
          <div className="border-l-8 border-[#7A1F1F] pl-8">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-4">Community Calendar</p>
            <h1 className="text-black font-serif font-black text-5xl md:text-8xl tracking-tighter leading-tight">
              Meet & <br /> Greet<span className="text-[#7A1F1F]">.</span>
            </h1>
          </div>
        </header>

        {/* Events List */}
        <section className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[2px] flex-1 bg-gray-100"></div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] text-gray-400">Upcoming Meets</h2>
          </div>

          <div className="space-y-6">
            {events.map((e, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-10 border-2 border-gray-50 rounded-[2.5rem] bg-white hover:border-[#7A1F1F] hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500 group"
              >
                <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-serif italic text-gray-200 group-hover:text-[#D4AF37] transition-colors duration-500">
                      {e.date.split(' ')[1]}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{e.date.split(' ')[0]}</span>
                  </div>

                  <div className="h-12 w-[1px] bg-gray-100 hidden md:block"></div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-50 text-[#7A1F1F] text-[9px] font-black uppercase tracking-widest mb-2 group-hover:bg-[#7A1F1F] group-hover:text-white transition-all">
                      {e.type}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-black group-hover:translate-x-1 transition-transform">{e.title}</h4>
                    <p className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <MapPin size={14} className="text-[#D4AF37]" /> {e.loc}
                    </p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#7A1F1F] transition-all">
                  RSVP Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </BokehBackground>
  );
};

// CRITICAL: This is the line that was missing and caused your error
export default AlumniEvents;