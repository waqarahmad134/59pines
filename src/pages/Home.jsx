import React from "react";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Offers from "../components/Offers";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0"
        src="images/body-left.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0"
        src="images/body-right.png"
        alt=""
      />
      <div className="relative w-11/12 md:w-2/3 mx-auto z-10">
        <Navbar />
        <HeroSection/>
        <Offers />
        <VideoSection/>
        <FAQ/>
      </div>
    </div>
  );
}
