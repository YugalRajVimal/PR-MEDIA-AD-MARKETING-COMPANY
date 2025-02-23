import React from "react";

const services = [
  {
    title: "Business Sales",
    items: [
      "Expert in Scaling Businesses & Increasing Sales. Storytelling Ads That Capture Hearts and Make Your Brand Unforgettable",
      "Driving Growth: Proven Strategies to Increase Sales",
      "Sales Acceleration Experts: We Help Businesses Grow Fast and Reach the Right Target Audience",
    ],
  },
  {
    title: "Selling Real Estate Made Easy",
    items: [
      "Sell Your Property Faster and for More with High-Impact Ads",
      "Expert Real Estate Ads That Help You Get the Best Price for Your Property",
      "Boost Your Property Sale with Ads That Attract the Right Buyers",
    ],
  },
  {
    title: "App Development & ERP Development",
    items: [
      "Experts in App & ERP Development, Creating Catchy, High Converting Websites",
      "Transforming Ideas into Powerful Apps, ERPs, and Captivating Websites",
      "Innovative App & ERP Development with Eye-Catching, Conversion-Driven Websites",
    ],
  },
];

const ServiceCard = ({ title, items }) => {
  return (
    <div className="w-full md:w-full bg-white  rounded-lg shadow-lg border border-[1px] border-black p-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-pink-500 font-bold">✔</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BusinessSalesSection = () => {
  return (
    <div id="services" className="p-4 sm:p-10 md:p-20 ">
      <div className="flex flex-wrap justify-center gap-6 border border-[2px] border-black p-4 md:p-8 rounded-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BusinessSalesSection;
