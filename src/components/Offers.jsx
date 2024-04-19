import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

import { IoDocumentTextOutline, IoLogoHtml5 } from "react-icons/io5";
import { PiPlusMinusFill } from "react-icons/pi";
import { LuInfo } from "react-icons/lu";
import {
  contingencies,
  financeTerms,
  keyTerms,
  sellerCarry,
} from "../utilities/data";

export default function Offers() {
  const [toolTip, setToolTip] = useState(false);
  return (
    <>
      <div className="space-y-10 my-12">
        <div className="text-center space-y-3">
          <h1 className="text-[#212936] text-3xl md:text-4xl lg:text-5xl font-semibold">
            3 Offers for Consideration
          </h1>
          <p className="bg-themeYellow text-themeGray text-xs md:text-lg font-semibold rounded-[4px] max-w-96 mx-auto">
            All offers are negotiable. Feel free to counter!
          </p>
        </div>

        <div>
          <div className="flex gap-1 justify-end">
            <div className="p-1 md:p-4 bg-[#FBF8F8] text-xs md:text-xl font-semibold rounded-tl-lg rounded-tr-lg h-full w-[48px] md:w-[120px]">
              Offer A
            </div>
            <div className="p-1 md:p-4 bg-[#FAF2F2] text-xs md:text-xl font-semibold rounded-tl-lg rounded-tr-lg w-[48px] md:w-[120px]">
              Offer B
            </div>
            <div className="p-1 md:p-4 bg-[#F2E6E6] text-xs md:text-xl font-semibold rounded-tl-lg rounded-tr-lg w-[48px] md:w-[120px]">
              Offer C
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
              <span>
                <IoDocumentTextOutline size={28} />
              </span>
              <h5>Key Terms</h5>
            </div>
            {keyTerms?.map((data, index) => (
              <div className="flex justify-between border-b-[1px] border-[FBF8F8]">
                <div className="relative">
                  <p onClick={()=>setToolTip(true)} className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed text-[#212936] text-base md:text-2xl -tracking-[2%] w-full cursor-pointer">
                    {data?.title}
                  </p>
                  {index === 0 && toolTip === true ? (
                    <div className="absolute -top-[100%] left-[90%] text-white bg-themePurpleDark border border-white rounded-md p-4 w-48 z-50">
                      <button onClick={()=>setToolTip(false)} className="absolute -top-[15px] -right-2 text-black bg-white rounded-full h-8 w-8 flex items-center justify-center ">X</button>
                      <p className="text-sm md:text-lg font-semibold leading-[18px]">
                        Click or tap any underlined terms to learn more.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex justify-end items-center [&>p]:h-full [&>p]:p-1 [&>p]:md:p-4 [&>p]:text-xs [&>p]:md:text-xl [&>p]:font-semibold [&>p]:w-[48px] [&>p]:md:w-[120px] [&>p]:text-center [&>p]:flex [&>p]:justify-center [&>p]:items-center">
                  <p
                    className={`relative ${
                      index === 0 ? "bg-themeYellow" : "bg-[#FBF8F8]"
                    }`}
                  >
                    {index === 0 && (
                      <img
                        className="absolute top-0 left-0 h-full w-full"
                        src="../images/Hand Draw Shape.png"
                        alt=""
                      />
                    )}
                    {data?.offerA}
                  </p>
                  <p className="bg-[#FAF2F2]">{data?.offerB}</p>
                  <p className="bg-[#F2E6E6]">{data?.offerC}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
              <span>
                <PiPlusMinusFill size={28} />
              </span>
              <h5 className="text-base md:text-2xl">Finance Terms</h5>
            </div>
            {financeTerms?.map((data, index) => (
              <div
                className="flex justify-between border-b-[1px] border-[FBF8F8]"
                key={index}
              >
                <div className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed text-[#212936] text-base md:text-xl">
                  {data?.title}
                </div>

                <div className="flex justify-end items-center [&>p]:h-full [&>p]:p-1 [&>p]:md:p-4 [&>p]:text-xs [&>p]:md:text-xl [&>p]:font-semibold [&>p]:w-[48px] [&>p]:md:w-[120px] [&>p]:text-center [&>p]:flex [&>p]:justify-center [&>p]:items-center">
                  <p className="bg-[#FBF8F8]">
                    {data?.offerA === true ? <FaCheck /> : ""}
                  </p>
                  <p className="bg-[#FAF2F2]">
                    {data?.offerB === true ? <FaCheck /> : ""}
                  </p>
                  <p className="bg-[#F2E6E6]">
                    {data?.offerC === true ? <FaCheck /> : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
              <span>
                <LuInfo size={28} />
              </span>
              <h5>Contingencies</h5>
            </div>
            {contingencies?.map((data, index) => (
              <div
                className="flex justify-between border-b-[1px] border-[FBF8F8]"
                key={index}
              >
                <div className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed text-[#212936] text-base md:text-xl">
                  {data?.title}
                </div>

                <div className="flex justify-end items-center [&>p]:h-full [&>p]:p-1 [&>p]:md:p-4 [&>p]:text-xs [&>p]:md:text-xl [&>p]:font-semibold [&>p]:w-[48px] [&>p]:md:w-[120px] [&>p]:text-center [&>p]:flex [&>p]:justify-center [&>p]:items-center">
                  <p className="p-2 md:p-4 bg-[#FBF8F8]">
                    {data?.offerA === true ? <FaCheck /> : ""}
                  </p>
                  <p className="p-2 md:p-4 bg-[#FAF2F2]">
                    {data?.offerB === true ? <FaCheck /> : ""}
                  </p>
                  <p className="p-2 md:p-4 bg-[#F2E6E6] ">
                    {data?.offerC === true ? <FaCheck /> : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
              <span>
                <IoDocumentTextOutline size={28} />
              </span>
              <h5>Seller Carry Terms</h5>
            </div>
            {sellerCarry?.map((data, index) => (
              <div
                className="flex justify-between border-b-[1px] border-[FBF8F8]"
                key={index}
              >
                <div
                  className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed  
          text-[#212936] text-base md:text-xl"
                >
                  {data?.title}
                </div>
                <div className="flex justify-end items-center [&>p]:h-full [&>p]:p-1 [&>p]:md:p-4 [&>p]:text-xs [&>p]:md:text-xl [&>p]:font-semibold [&>p]:w-[48px] [&>p]:md:w-[120px] [&>p]:text-center [&>p]:flex [&>p]:justify-center [&>p]:items-center">
                  <button className="w-[48px] md:w-[120px] flex justify-center items-center">
                    <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
                  </button>
                  <p className="p-2 md:p-4 bg-[#FAF2F2] ">{data?.offerA}</p>
                  <p className="p-2 md:p-4 bg-[#F2E6E6] ">{data?.offerB}</p>
                  <button className="w-[48px] md:w-[120px] flex justify-center items-center">
                    <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
