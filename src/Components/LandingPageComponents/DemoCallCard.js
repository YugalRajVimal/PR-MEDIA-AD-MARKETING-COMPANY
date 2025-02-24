import React from "react";
import { PiVideoCameraBold, PiClockBold } from "react-icons/pi";

const DemoCallCard = () => {
  return (
    <div className="p-6 md:p-20 flex justify-center bg-[291f12]">
      <div className="relative bg-[291f12] p-6 shadow-lg rounded-lg w-[350px]  md:w-[614px] text-center border border-black overflow-hidden">
        {/* Ribbon */}
        <div className="absolute flex flex-col justify-center items-center w-[46%] md:w-[25%] -right-8 top-[42%] md:-right-8 md:top-[45%]   bg-gray-700 text-white text-xs font-semibold px-4 py-1 transform rotate-45 origin-top-right">
          Powered by <span>GoWappily</span>
        </div>

        <h3 className="text-[#0B0B45] font-semibold">The PR Media</h3>
        <h2 className="text-2xl font-bold text-[#0B0B45] mt-1">Demo Call</h2>

        <div className="flex items-center justify-start gap-2 mt-3 text-[#0B0B45]">
          <PiClockBold size={18} />
          <span>15 min</span>
        </div>

        <div className="flex items-center text-left justify-start gap-2 mt-2 text-[#0B0B45]">
          <PiVideoCameraBold size={18} />
          <span className="text-sm ">
            Web conferencing details provided upon confirmation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DemoCallCard;
