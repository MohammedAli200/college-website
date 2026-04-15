import React from "react";
import AboutLayout from "../../components/AboutLayout";
import { TreePine, GraduationCap, Users, Lightbulb, Rocket, Globe } from "lucide-react";

const AboutALTS = () => {
  // Structured JSON data for the component
  const aboutData = {
    history: {
      founder: "Sri M. Anantha Ramudu",
      founded: "2008",
      society: "Anantha Lakshmi Educational Society",
      location: "Anantapur - Chennai highway near Itikalapalli",
      campusSize: "54 Acres"
    },
    stats: [
      { label: "Vibrant Students", value: "1600+", icon: <Users className="text-blue-500" /> },
      { label: "Expert Faculty", value: "130+", icon: <GraduationCap className="text-emerald-500" /> },
      { label: "Green Campus", value: "5 Acres", icon: <TreePine className="text-green-500" /> }
    ],
    missionPoints: [
      {
        title: "Academic Excellence",
        text: "Ranked high in the Rayalaseema region, outperforming through quality and value-based technical education.",
        icon: <Rocket size={20} />
      },
      {
        title: "Personalized Growth",
        text: "Ideal teacher-learner ratio ensuring personalized attention and hi-tech information access.",
        icon: <Lightbulb size={20} />
      },
      {
        title: "Global Standards",
        text: "Preparing students as better managers, leaders, and technologists with global pedagogical standards.",
        icon: <Globe size={20} />
      }
    ]
  };

  return (
    <AboutLayout title="About ALTS">
      <div className="space-y-12">
        {/* Intro Paragraph */}
        <section className="relative">
          <p className="text-xl md:text-2xl font-serif text-black leading-snug mb-6 italic">
            "The dream of its founder, {aboutData.history.founder}, took shape in {aboutData.history.founded} in the form of Anantha Lakshmi Institute of Technology & Sciences."
          </p>
          <p className="text-gray-500 leading-relaxed">
            Located on a sprawling {aboutData.history.campusSize} campus amidst lush green fields near {aboutData.history.location},
            ALITS is governed by a progressive management that strives to develop it as one of the best centers of Academic Excellence in India.
          </p>
        </section>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.stats.map((stat, i) => (
            <div key={i} className="bg-gray-50/50 border border-gray-100 p-6 rounded-[2rem] flex items-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-500">
              <div className="p-3 bg-white rounded-2xl shadow-sm">{stat.icon}</div>
              <div>
                <div className="text-2xl font-black text-black">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-black uppercase tracking-tighter text-black">Our Philosophy</h3>
            <div className="h-[1px] flex-1 bg-gray-100"></div>
          </div>

          <div className="grid gap-6">
            {aboutData.missionPoints.map((point, i) => (
              <div key={i} className="group flex gap-6 p-8 bg-white border border-gray-50 rounded-[2.5rem] hover:border-[#7A1F1F]/20 transition-all duration-500">
                <div className="shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#7A1F1F] group-hover:bg-[#7A1F1F] group-hover:text-white transition-all duration-500">
                  {point.icon}
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">{point.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Identity Statement */}
        <div className="p-10 bg-black rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7A1F1F]/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <p className="relative z-10 text-lg font-light leading-relaxed opacity-90">
            ALITS distinguishes itself not just as a college of engineering, but as an institution.
            The idea of creating <span className="text-[#D4AF37] font-bold">good technologists, better managers, and leaders</span>
            suffuses through every aspect of our curriculum.
          </p>
        </div>
      </div>
    </AboutLayout>
  );
};

export default AboutALTS;