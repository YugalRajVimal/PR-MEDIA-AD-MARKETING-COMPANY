import React from "react";

const services = [
  {
    title: "Business Sales",
    items: [
      {
        image: "/one.png",
        para: "Expert in Scaling Businesses & Increasing Sales. Storytelling Ads That Capture Hearts and Make Your Brand Unforgettable",
      },
      {
        image: "/two.png",
        para: "Driving Growth: Proven Strategies to Increase Sales",
      },
      {
        image: "/three.png",
        para: "Sales Acceleration Experts: We Help Businesses Grow Fast and Reach the Right Target Audience",
      },
    ],
  },
  {
    title: "Selling Real Estate Made Easy",
    items: [
      {
        image: "/four.png",
        para: "Sell Your Property Faster and for More with High-Impact Ads",
      },
      {
        image: "/five.png",
        para: "Expert Real Estate Ads That Help You Get the Best Price for Your Property",
      },
      {
        image: "/six.png",
        para: "Boost Your Property Sale with Ads That Attract the Right Buyers",
      },
    ],
  },
];

const ServiceCard = ({ title, items }) => {
  return (
    <div className="  w-full md:w-full rounded-lg  p-6 relative">
      <h2 className="text-xl font-bold text-center pt-3">{title}</h2>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-black mx-auto my-4"></div>

      <ul className="sticky top-[15%] mt-4 space-y-4 relative text-md md:text-base">
        {items.map((item, index) => (
          <li
            key={index}
            className="sticky top-[15%] flex justify-center relative h-48"
          >
            <div className="sticky top-[15%] h-52 w-full max-w-[500px] p-2">
              <div className="relative h-full text-black font-bold w-full border border-zinc-700 bg-[#dbc3ab] border-[2px] rounded-xl  p-6">
                <div className="flex flex-col gap-4">
                  <span>
                    <img
                      src={item.image}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <p>{item.para}</p>
                </div>
                <div className="h-full w-full absolute top-4 left-4 bg-zinc-500 z-[-2] rounded-xl"></div>
                <div className="h-full w-full absolute top-[6px] left-[6px] bg-[#dbc3ab] z-[-1] rounded-xl"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BusinessSalesSection = () => {
  return (
    <div id="services" className="p-4 sm:p-6 md:p-10 min-h-[200vh]">
      <div className="flex flex-col items-center space-y-10  p-2 md:p-8 rounded-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BusinessSalesSection;
