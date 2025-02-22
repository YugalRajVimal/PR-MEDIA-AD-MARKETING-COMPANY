import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AuditCallCard = () => {
  return (
    <div className="p-4 sm:p-10 md:p-20 flex justify-center bg-[#fff2e1]">
      <div className="bg-[#fff2e1] p-6 md:p-8 shadow-lg rounded-lg w-full border border-[2px] border-black">
        {/* Title */}
        <h2 className="text-[#0B0B45] text-lg md:text-xl font-extrabold uppercase">
          This audit call is perfect for:
        </h2>

        {/* List Items */}
        <ul className="mt-4 space-y-4 text-gray-800 text-sm md:text-base font-medium">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#0B0B45] mt-1 shrink-0" />
            <p>
              Businesses looking to convert their current website into a{" "}
              <span className="font-extrabold">
                high quality & streamlined funnel format.
              </span>
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#0B0B45] mt-1 shrink-0" />
            <p>
              Businesses looking to take their offline business{" "}
              <span className="font-extrabold">online</span>.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#0B0B45] mt-1 shrink-0" />
            <p>
              Businesses looking to understand their{" "}
              <span className="font-extrabold">increased revenue potential</span>{" "}
              with funnels & conversion rate optimization.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#0B0B45] mt-1 shrink-0" />
            <p>
              Businesses looking to{" "}
              <span className="font-extrabold">
                maximize their conversion rates & average order value.
              </span>
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#0B0B45] mt-1 shrink-0" />
            <p>
              Businesses looking for a reliable agency that can{" "}
              <span className="font-extrabold">make their company a priority.</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuditCallCard;
