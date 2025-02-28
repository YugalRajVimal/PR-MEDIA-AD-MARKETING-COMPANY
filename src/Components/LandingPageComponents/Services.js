import React from "react";

const services = [
  {
    title: "Business Sales",
    items: [
      {
        image: "/banner1.jpg",
        para: "Driving Growth: Proven Strategies to Increase Sales",
      },
      {
        image: "/banner1.jpg",
        para: "Sales Acceleration Experts: We Help Businesses Grow Fast and Reach the Right Target Audience",
      },
      {
        image: "/banner1.jpg",
        para: "Expert in Scaling Businesses & Increasing Sales. Storytelling Ads That Capture Hearts and Make Your Brand Unforgettable",
      },
    ],
  },
  {
    title: "Selling Real Estate Made Easy",
    items: [
      {
        image: "/banner1.jpg",
        para: "Expert Real Estate Ads That Help You Get the Best Price for Your Property",
      },
      {
        image: "/banner1.jpg",
        para: "Boost Your Property Sale with Ads That Attract the Right Buyers",
      },
      {
        image: "/banner1.jpg",
        para: "Sell Your Property Faster and for More with High-Impact Ads",
      },
    ],
  },
];

const ServiceCard = ({ title, items }) => {
  return (
    <div className="  w-full md:w-full rounded-lg shadow-lg border border-black p-6 relative">
      <h2 className="text-xl font-bold text-center pt-3">{title}</h2>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-black mx-auto my-4"></div>

      <ul className="sticky top-[15%] mt-4 space-y-2 relative text-md md:text-base">
        {items.map((item, index) => (
          <li key={index} className="sticky top-[15%] flex justify-center relative h-48">
            <div className="sticky top-[15%] h-48 w-full max-w-[450px] bg-slate-200 rounded-md overflow-hidden">
              <img src={item.image} className="h-full w-full object-cover" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BusinessSalesSection = () => {
  return (
    <div id="services" className="p-4 sm:p-10 md:p-20 min-h-[200vh]">
      <div className="flex flex-col items-center space-y-10 border border-black p-4 md:p-8 rounded-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BusinessSalesSection;