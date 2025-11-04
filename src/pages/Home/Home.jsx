import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import TrendingApps from "../../components/Home/TrendingApps";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <HeroSection />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <TrendingApps />
      </div>
    </div>
  );
};

export default Home;
