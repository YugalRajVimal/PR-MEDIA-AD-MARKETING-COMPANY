import React from "react";

const services = [
  {
    title: "Freelancing Made Easy",
    items: [
      {
        image: "/four.png",
        para: "We simplify freelancing—no confusion, just clear steps.",
      },
      {
        image: "/five.png",
        para: "Learn real skills and start freelancing, the easy way.",
      },
      {
        image: "/six.png",
        para: "Freelancing doesn’t have to be complicated—we make it simple.",
      },
    ],
  },
  {
    title: "Learn Real Skills",
    items: [
      {
        image: "/one.png",
        para: "Master the art of selling—because every skill needs sales.",
      },
      {
        image: "/two.png",
        para: "Learn sales, unlock income. It’s that powerful.",
      },
      {
        image: "/three.png",
        para: "Sales isn’t pressure, it’s persuasion—learn how to do it right.",
      },
    ],
  },
];

const ServiceCard = ({ title, items }) => {
  return (
    <div className="  w-full md:w-full rounded-lg  p-4 md:p-6 relative">
      <h2 className="text-2xl font-bold text-center pt-3">{title}</h2>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-black mx-auto my-4"></div>

      <ul className="sticky top-[15%] mt-4 space-y-2 relative text-md md:text-base">
        {items.map((item, index) => (
          <li
            key={index}
            className="sticky top-[15%] flex justify-center relative h-52"
          >
            <div className="sticky top-[15%] h-52 w-full max-w-[500px] p-2">
              <div className="relative h-full text-black flex  items-center font-bold w-full border border-zinc-700 bg-[#dbc3ab] md:bg-[#f7dbb6] border-[2px] rounded-xl p-4  md:p-6">
                <div className="flex flex-col gap-4 ">
                  <span>
                    <img
                      src={item.image}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <p>{item.para}</p>
                </div>
                <div className="h-full w-full absolute top-4 left-4 bg-zinc-500 z-[-2] rounded-xl"></div>
                <div className="h-full w-full absolute top-[6px] left-[6px] bg-[#dbc3ab] md:bg-[#f7dbb6] z-[-1] rounded-xl"></div>
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
    <div id="services" className=" md:p-10 min-h-[200vh]">
      <div className="flex flex-col items-center space-y-10  p-2 md:p-8 rounded-xl">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default BusinessSalesSection;
