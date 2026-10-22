import React from "react";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import FPSSection from "./components/FPSSection";
import SaleSection from "./components/SaleSection";
import ROStatusSection from "./components/ROStatusSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <HomeHero />
      </div>
      <FPSSection />
      <SaleSection />
      <ROStatusSection />
      <Footer />
    </div>
  );
};

export default App;
