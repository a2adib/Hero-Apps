import React from "react";
import HeroSection from "./HeroSection";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <div className="bg-gray-100">
        <HeroSection/>
        <TrendingProducts/>
    </div>
  )
};

export default Home;
