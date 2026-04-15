import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BokehBackground } from "../../components/BokehBackground";

const PlacementCompanies = () => {
  // Sample list of recruiters - You can add more here
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  ];

  return (
    <BokehBackground className="min-h-screen bg-white" count={6} speed={0.2}>
      <Navbar />

      <main className="relative z-10 w-full pt-32 md:pt-48 pb-20 px-5 md:px-6">

        {/* Header Area */}
        <header className="max-w-7xl mx-auto mb-20 md:mb-32">
          <div className="border-l-8 border-[#7A1F1F] pl-8">
            <p className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-4">Corporate Relations</p>
            <h1 className="text-black font-serif font-black text-5xl md:text-8xl tracking-tighter leading-tight mb-6">
              Our Top <br /> Recruiters<span className="text-[#7A1F1F]">.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl font-light">
              ALITS partners with industry leaders to ensure our students step directly into world-class careers.
            </p>
          </div>
        </header>

        {/* Logo Grid */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {companies.map((company, i) => (
              <div
                key={i}
                className="group flex items-center justify-center p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto bg-black rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Want to hire from ALITS?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join our ecosystem of 200+ partner companies and find the talent your team needs.</p>
          <button className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all">
            Contact Placement Cell
          </button>
        </section>

      </main>

      <Footer />
    </BokehBackground>
  );
};

export default PlacementCompanies;