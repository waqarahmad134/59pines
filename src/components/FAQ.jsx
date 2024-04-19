import React, { useState } from "react";
import { FaMinus, FaPlus, FaRegEnvelopeOpen } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function FAQ() {
  const [accordion, setAccordion] = useState(false);

  const handleActive = (dropdownId) => {
    if (accordion === dropdownId) {
      setAccordion(null);
    } else {
      setAccordion(dropdownId);
    }
  };

  const isAccordionActive = (dropdownId) => {
    return accordion === dropdownId;
  };

  return (
    <>
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-[#101828] uppercase">
                Frequently Asked Question
              </h3>
              <p className="text-[#4D5562] max-w-sm">
                Don't see the answer you are looking for? Feel free to call,
                text or email me.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FiPhoneCall color="#6941C6" />
                <span className="text-[#101828] text-lg font-medium">
                  (480) 555-0103
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaRegEnvelopeOpen color="#6941C6" />
                <span className="text-[#101828] text-lg font-medium">
                  mark@honeyhomeoffers.com
                </span>
              </div>
            </div>
          </div>

          {/* for desktop */}
          <div className="space-y-4 hidden md:block">
            <div
              className={`${
                isAccordionActive("one")
                  ? "bg-gradient-to-r from-white to-themeBlueLight border border-themePurpleLight"
                  : "bg-[#F9FAFB]"
              } rounded-2xl px-5 py-4 flex gap-2`}
            >
              <div className="w-full flex flex-col gap-2">
                <div
                  className="flex cursor-pointer"
                  onClick={() => handleActive("one")}
                >
                  <span className="text-[#101828] font-bold -mt-1.5">
                    Will I still receive a commission as the seller’s agent for
                    this specific creative finance transaction?
                  </span>

                  {isAccordionActive("one") ? (
                    <FaMinus color="#8F64F3" size={20} />
                  ) : (
                    <FaPlus color="#8F64F3" size={20} />
                  )}
                </div>

                {isAccordionActive("one") && (
                  <div>
                    <p className="text-themeDarkGray text-sm">
                      Absolutely! As the agent facilitating this creative
                      finance transaction for the property, rest assured that
                      you will receive a full commission for your expertise and
                      hard work. Furthermore, creative finance transactions
                      often lead to higher purchase prices, potentially
                      resulting in higher commissions for you as the agent.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${
                isAccordionActive("two")
                  ? "bg-gradient-to-r from-white to-themeBlueLight border border-themePurpleLight"
                  : "bg-[#F9FAFB]"
              } rounded-2xl px-5 py-4 flex gap-2`}
            >
              <div className="w-full flex flex-col gap-2">
                <div
                  className="flex cursor-pointer"
                  onClick={() => handleActive("two")}
                >
                  <span className="text-[#101828] font-bold -mt-1.5">
                    What are the unique advantages of this specific creative
                    finance transaction for my clients?
                  </span>

                  {isAccordionActive("two") ? (
                    <FaMinus color="#8F64F3" size={20} />
                  ) : (
                    <FaPlus color="#8F64F3" size={20} />
                  )}
                </div>

                {isAccordionActive("two") && (
                  <div>
                    <p className="text-themeDarkGray text-sm">
                      Absolutely! As the agent facilitating this creative
                      finance transaction for the property, rest assured that
                      you will receive a full commission for your expertise and
                      hard work. Furthermore, creative finance transactions
                      often lead to higher purchase prices, potentially
                      resulting in higher commissions for you as the agent.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${
                isAccordionActive("three")
                  ? "bg-gradient-to-r from-white to-themeBlueLight border border-themePurpleLight"
                  : "bg-[#F9FAFB]"
              } rounded-2xl px-5 py-4 flex gap-2`}
            >
              <div className="w-full flex flex-col gap-2">
                <div
                  className="flex cursor-pointer"
                  onClick={() => handleActive("three")}
                >
                  <span className="text-[#101828] font-bold -mt-1.5">
                    How do I know if my seller might be open to considering a
                    creative finance offer?
                  </span>

                  {isAccordionActive("three") ? (
                    <FaMinus color="#8F64F3" size={20} />
                  ) : (
                    <FaPlus color="#8F64F3" size={20} />
                  )}
                </div>

                {isAccordionActive("three") && (
                  <div>
                    <p className="text-themeDarkGray text-sm">
                      Absolutely! As the agent facilitating this creative
                      finance transaction for the property, rest assured that
                      you will receive a full commission for your expertise and
                      hard work. Furthermore, creative finance transactions
                      often lead to higher purchase prices, potentially
                      resulting in higher commissions for you as the agent.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* for mobile  */}
          <div className="space-y-4 block md:hidden">
            <div className="rounded-2xl py-4 flex gap-2">
              <div className="w-full flex flex-col gap-2">
                <div className="flex cursor-pointer">
                  <span className="text-[#101828] font-bold -mt-1.5">
                    Will I still receive a commission as the seller’s agent for
                    this specific creative finance transaction?
                  </span>
                </div>
                <div>
                  <p className="text-themeDarkGray text-sm">
                    Absolutely! As the agent facilitating this creative finance
                    transaction for the property, rest assured that you will
                    receive a full commission for your expertise and hard work.
                    Furthermore, creative finance transactions often lead to
                    higher purchase prices, potentially resulting in higher
                    commissions for you as the agent.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="rounded-2xl py-4 flex gap-2">
              <div className="w-full flex flex-col gap-2">
                <div className="flex cursor-pointer">
                  <span className="text-[#101828] font-bold -mt-1.5">
                    What are the unique advantages of this specific creative
                    finance transaction for my clients?
                  </span>
                </div>

                <div>
                  <p className="text-themeDarkGray text-sm">
                    Absolutely! As the agent facilitating this creative finance
                    transaction for the property, rest assured that you will
                    receive a full commission for your expertise and hard work.
                    Furthermore, creative finance transactions often lead to
                    higher purchase prices, potentially resulting in higher
                    commissions for you as the agent.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="rounded-2xl py-4 flex gap-2">
              <div className="w-full flex flex-col gap-2">
                <div className="flex cursor-pointer">
                  <span className="text-[#101828] font-bold -mt-1.5">
                    How do I know if my seller might be open to considering a
                    creative finance offer?
                  </span>
                </div>

                <div>
                  <p className="text-themeDarkGray text-sm">
                    Absolutely! As the agent facilitating this creative finance
                    transaction for the property, rest assured that you will
                    receive a full commission for your expertise and hard work.
                    Furthermore, creative finance transactions often lead to
                    higher purchase prices, potentially resulting in higher
                    commissions for you as the agent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
