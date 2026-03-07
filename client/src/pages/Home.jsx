import React from "react";
// We go UP one level (..) and then INTO the components folder
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Body from "../components/Body";
import Footer from "../components/Footer"; // Import the refined Footer
import { BokehBackground } from "../components/BokehBackground";

const Home = () => {
  return (
    /* 1. The BokehBackground provides the primary light-theme 
          with the Pink/Gold highlights you requested */
    <BokehBackground
      className="min-h-screen"
      count={15}
      speed={0.5}
    >

      {/* 2. Fixed or Relative Navbar */}
      <Navbar />

      {/* 3. Main Content Wrapper */}
      <main className="relative w-full">
        {/* HeroSection: The grand entry with the high-res image */}
        <HeroSection />

        {/* Body Section: Contains About Us, Vision, and Events.
            The bg-transparent allows the Bokeh particles to drift behind it */}
        <div className="relative z-10">
          <Body />
        </div>
      </main>

      {/* 4. Refined Formal Footer 
          The Footer now replaces the basic placeholder for a consistent look */}
      <Footer />

    </BokehBackground>
  );
};

export default Home;