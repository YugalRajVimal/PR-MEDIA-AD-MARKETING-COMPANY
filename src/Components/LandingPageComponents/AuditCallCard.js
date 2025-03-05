import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const AuditCallCard = () => {
  return (
    <div className="p-4 sm:p-10 md:p-20 flex justify-center">
      <div className=" p-6 md:p-8  rounded-lg w-full">
        <div className="h-12 aspect-[1/1] text-white text-2xl rounded-full bg-black mx-auto flex justify-center items-center">
          <FaPhone />
        </div>
        {/* Title */}
        <h2 className=" text-lg md:text-xl font-extrabold uppercase text-center pt-3">
          This audit call is perfect for:
        </h2>

        <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-[1px] border-black mx-auto"></div>

        {/* List Items */}
        <ul className="mt-4 space-y-4  text-md md:text-base font-medium">
          <li className="flex items-start gap-3">
            <FaCheckCircle className=" mt-1 shrink-0 " />

            <p>
              Businesses that want to turn their website into a{" "}
              <span className="font-extrabold">high-converting sales</span>{" "}
              funnel.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className=" mt-1 shrink-0 " />
            <p>
              Companies looking to take their offline
              <span className="font-extrabold"> business online and grow.</span>
              .
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className=" mt-1 shrink-0 " />
            <p>
              Brands that want to
              <span className="font-extrabold"> increase sales</span> through
              better funnels and conversion strategies.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className=" mt-1 shrink-0 " />
            <p>
              Businesses aiming to{" "}
              <span className="font-extrabold"> get more customers</span> and
              increase their profits.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className=" mt-1 shrink-0 " />
            <p>
              Companies that{" "}
              <span className="font-extrabold">
                need a dedicated agency to help them succeed.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuditCallCard;
