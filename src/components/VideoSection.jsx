import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

export default function VideoSection() {
  return (
    <>
      <section className="grid  grid-cols-3 md:grid-cols-2 bg-videoBanner bg-no-repeat bg-cover rounded-xl">
        <div className="text-white flex flex-col justify-end h-full gap-2 md:gap-4 px-4 md:px-20 py-3 md:py-16 col-span-2 md:col-span-1">
          <h3>Confused??</h3>
          <p>This five-minute video explains everything.</p>
          <button className="bg-themePurpleDark py-2 px-4 w-max flex gap-x-2 rounded-md">
            <FaRegPlayCircle />
            Play Now
          </button>
        </div>
        <div className="col-span-1 flex items-end">
          <img src="../images/videoPerson.png" alt="" />
        </div>
      </section>
    </>
  );
}
