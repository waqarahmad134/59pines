import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";

export default function HeroSection() {
  return (
    <>
      <div className="py-5 md:py-12 space-y-8">
        <div className="text-center space-y-1 md:space-y-3">
          <h1 className="text-[#212936] text-3xl md:text-4xl lg:text-5xl font-semibold">
            Purchase Proposal
          </h1>
          <p className=" text-[#475467] text-xs md:text-lg font-semibold max-w-96 mx-auto">
            5351 Packed St. Los Angeles 9009
          </p>
        </div>
        <div className="relative bg-gradient-to-r from-white via-white to-themeGraySuit shadow-lg p-5 rounded-xl md:grid md:grid-cols-3">
          <div className="absolute top-0 right-0 z-30 ">
            <img className="rounded-tr-lg" src="../images/herobg.png" alt="" />
          </div>
          <div className="absolute top-5 right-5 z-30 ">
            <div className="text-[#E9EAEB] text-xl text-center">
              <span className="text-[#E9EAEB]"></span> Buying 15 <br />
              <strong>Homes</strong> <br />
              <span className="text-[#E9EAEB]"></span> This Week
            </div>
          </div>

          <div className="col-span-1">
            <img
              className="rounded-xl w-full md:w-[382px]"
              src="../images/hero.png"
              alt=""
            />
          </div>
          <div className="col-span-2 pt-3 md:pt-0 md:px-5 h-full relative">
            <div className="flex flex-col h-full">
              <div className="flex flex-col justify-center h-full gap-5">
                <h3>Hello 👋🏻</h3>
                <p className="text-lg">
                  My name is Mark, and I'm great at solving seller problems with
                  creative finance.
                </p>
                <p className="text-lg">
                  You name it, I've done it... probate, divorce, squaters,
                  unpermitted structures, lease options, contract for deed, wrap
                  around mortgages, etc.
                </p>
                <p className="text-lg">
                  Let's work together to structure a deal that gets you excited!
                  🏠
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:p-x-4 py-4 gap-3">
                <button className="flex items-center bg-black border border-transparent gap-x-2 rounded-lg py-2 px-5 w-full md:w-auto">
                  <LuPhoneCall className="text-white text-xl" />
                  <a
                    className="text-xs md:text-lg text-white font-medium"
                    href="tel:+(480)555-0103"
                  >
                    (480)555-0103
                  </a>
                </button>
                <button className="flex items-center bg-white border border-themePurpleLight gap-x-2 rounded-lg w-full md:w-auto  py-2 px-5">
                  <IoMailOpenOutline className="text-xl" />
                  <a
                    className="text-xs md:text-lg font-medium"
                    href="mailto:mark@honeyhomeoffers.com"
                  >
                    mark@honeyhomeoffers.com
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
