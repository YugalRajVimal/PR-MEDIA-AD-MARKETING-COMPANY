import React from "react";
import { PiVideoCameraBold, PiClockBold } from "react-icons/pi";

const DemoCallCard = () => {
  return (
    <div className="p-6 md:p-20 flex justify-center">
      <div className="relative p-6 shadow-lg rounded-lg w-[350px]  md:w-[614px] text-center border border-black overflow-hidden">
        {/* Ribbon */}
        <div className="absolute flex flex-col justify-center items-center w-[46%] md:w-[25%] -right-8 top-[42%] md:-right-8 md:top-[45%] bg-gray-700 text-[#3B2E22] text-xs font-semibold px-4 py-1 transform rotate-45 origin-top-right text-black drop-shadow-md">
  Powered by <span className="text-white drop-shadow-lg">GoWappily</span>
</div>


        <h3 className=" font-semibold">The PR Media</h3>
        <h2 className="text-2xl font-bold  mt-1">Demo Call</h2>

        <div className="flex items-center justify-start gap-2 mt-3 ">
          <PiClockBold size={18} />
          <span>15 min</span>
        </div>

        <div className="flex items-center text-left justify-start gap-2 mt-2 ">
          <PiVideoCameraBold size={18} />
          <span className="text-sm ">
            We will share the details on WhatsApp and email for your
            convenience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DemoCallCard;
