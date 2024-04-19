import React from 'react'
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiPlusMinusFill } from "react-icons/pi";
import { LuInfo } from "react-icons/lu";

export default function Offers() {
  return (
    <div><div className="w-11/12 lg:w-9/12 mx-auto space-y-10">
    <div className="text-center space-y-3">
      <h4 className="text-[#212936] text-3xl md:text-4xl lg:text-5xl font-semibold">
        3 Offers for Consideration
      </h4>
      <p className="bg-[#FFE819] text-[#212936] max-w-96 mx-auto">
        All offers are negotiable. Feel free to counter!
      </p>
    </div>

    <div>
      <div className="flex gap-1 justify-end">
        <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold rounded-lg">
          Offer A
        </div>
        <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold rounded-lg">
          Offer A
        </div>
        <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold rounded-lg">
          Offer A
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
          <span>
            <IoDocumentTextOutline size={20} />
          </span>
          <span>Key Terms</span>
        </div>

        <div className="flex justify-between">
          <p
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Purchase Price
          </p>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $412k
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $93k
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $13k
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Seller Agent Commission
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $412k
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $93k
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $13k
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Buyer Agent Commission
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $412k
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $93k
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $13k
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Days to Close
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $412k
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $93k
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              $13k
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
          <span>
            <PiPlusMinusFill size={20} />
          </span>
          <span>Finance Terms</span>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Partial Seller Carry
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Bank Financed Buyer Loan
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Subject to Existing Loans
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center"></div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Cash
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
          <span>
            <LuInfo size={20} />
          </span>
          <span>Contingencies</span>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Sale of Current Home
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center"></div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center"></div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Buyer Loan Approval
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Formal Appraisal
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center"></div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Inspection
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Title Report
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Home Insurance
          </div>

          <div className="flex justify-end col-span-1">
            <div className="p-2 md:p-4 bg-[#FBF8F8] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center flex justify-center">
              <FaCheck />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 bg-black p-3 text-white rounded-tl-lg rounded-bl-lg">
          <span>
            <IoDocumentTextOutline size={20} />
          </span>
          <span>Seller Carry Terms</span>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Down Pmt.
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              371M
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              432M
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Purchase Price
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              300k
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              400k
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Monthly Pmt.
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              2158
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              2245
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Balloon Pmt.
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              50
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              60
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Loan Amt.
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              372M
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              360M
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Loan APR
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              0.01%
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              0.02%
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Loan Term
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              12 yrs
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              8 yrs
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Total No. of Pmt.
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              3 yrs
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              5 yrs
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Broker/ Agents Commissions
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              294K
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              276K
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Net Pmt. to Seller (At Close)
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              250M
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              450M
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className="p-2 md:p-4 underline decoration-[#9C76F4] decoration-dashed col-span-2 
          text-[#212936] text-base md:text-xl"
          >
            Net Pmt. to Seller (Total)
          </div>

          <div className="flex justify-end col-span-1">
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaMinus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
            <div className="p-2 md:p-4 bg-[#FAF2F2] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              320M
            </div>
            <div className="p-2 md:p-4 bg-[#F2E6E6] text-base md:text-xl font-semibold w-[70px] md:w-[100px] text-center">
              450M
            </div>
            <button className="w-[70px] md:w-[100px] flex justify-center items-center">
              <FaPlus className="bg-[#F6F2FE] text-[#6941C6] w-6 h-6 md:w-8 md:h-8 p-1.5 md:p-2 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}
