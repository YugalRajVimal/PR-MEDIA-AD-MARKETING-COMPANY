import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

const Card3 = () => {
  return (
    <div className="w-full p-10 pt-10 flex justify-center items-center">
      <div className="relative h-28 max-w-[500px] md:max-w-[350px] text-black flex justify-center items-center font-bold w-full border border-zinc-700 bg-[#dbc3ab] md:bg-[#f7dbb6] border-[2px]  rounded-t-xl rounded-l-xl p-4  md:p-6 mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <p>Schedule your free audit call today.</p>
        </div>
        {/* <div class="w-0 h-0  border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-transparent border-b-2 border-black"></div> */}
        <div class="absolute -right-[13px] -bottom-3 w-0 h-0 border-l-[19px] rotate-[27deg] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-[#3f3f46] z-[-1]"></div>
        <div class="absolute -right-[11px] -bottom-2 w-0 h-0 border-l-[20px] rotate-[27deg] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-[#dbc3ab] md:border-b-[#f7dbb6]"></div>

        {/* <div className="h-full w-full absolute top-4 left-4 bg-zinc-500 z-[-2] rounded-t-xl rounded-l-xl"></div> */}
        {/* <div className="h-full w-full absolute top-[6px] left-[6px] bg-[#dbc3ab] md:bg-[#f7dbb6] z-[-1] rounded-t-xl rounded-l-xl"></div> */}
        <div className="absolute w-full bottom-2 right-2 text-2xl h-[24px] text-right space-x-1 ">
          <span className="absolute top-1/2 -translate-y-1/2 right-[60px]">
            <a href="tel:+917500030415">
              <IoCallOutline />
            </a>
          </span>
          <span className="absolute top-1/2 -translate-y-1/2 right-[30px]">
            <a href="mailto:info@theprmedia.com">
              <FiMail />
            </a>
          </span>
          <span className="absolute top-1/2 -translate-y-1/2 right-0 text-black inline-block">
            <a href="https://wa.me/+917500010933">
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card3;
