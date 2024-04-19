import React from "react";
import Navbar from "../components/Navbar";

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
      <div className="relative w-2/3 mx-auto z-10">
        <Navbar />
      </div>
    </div>
  );
}
