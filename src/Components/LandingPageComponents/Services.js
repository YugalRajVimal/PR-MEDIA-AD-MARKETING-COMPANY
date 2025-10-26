import React from "react";

const services = [
  {
    title: "Your book #1 Bestseller",
    items: [
      {
        image: "/four.png",
        para: "Many authors fail because they don’t know the right strategy and roadmap for their book.",
      },
      {
        image: "/five.png",
        para: "Only with the right strategy and a well-planned approach can your book achieve true success.",
      },
      {
        image: "/six.png",
        para: "After writing your book, marketing and promotion are essential, and they must follow a proven plan.",
      },
    ],
  },
  // {
  //   title: "Learn Real Skills",
  //   items: [
  //     {
  //       image: "/one.png",
  //       para: "Master the art of selling—because every skill needs sales.",
  //     },
  //     {
  //       image: "/two.png",
  //       para: "Learn sales, unlock income. It’s that powerful.",
  //     },
  //     {
  //       image: "/three.png",
  //       para: "Sales isn’t pressure, it’s persuasion—learn how to do it right.",
  //     },
  //   ],
  // },
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
        <div className="  w-full md:w-full rounded-lg  p-4 md:p-6 relative">
          <h2 className="text-2xl font-bold text-center pt-3">
            Learn Real Skills
          </h2>
          <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-black mx-auto my-4"></div>

          <div className="w-fit mx-auto rounded-lg p-1 md:p-1 relative ">
            <div className="h-full w-full absolute top-4 left-4 bg-zinc-500 z-[-2] rounded-xl"></div>
            <div className="h-full w-full absolute top-[6px] left-[6px] bg-[#dbc3ab] md:bg-[#f7dbb6] z-[-1] rounded-xl"></div>
            <div className="max-w-[700px] mx-auto  w-fit mx-auto text-left space-y-4 p-10 text-black bg-[#dbc3ab] md:bg-[#f7dbb6] border-[2px] rounded-xl border border-black">
              <h2 className="text-2xl font-bold text-left pt-3">
                Premium Bestseller Program for Authors
              </h2>
              <p className="text-lg md:text-xl font-semibold">Hi Author 🙂</p>
              <p className="text-base md:text-lg">
                Are you ready to make your book a{" "}
                <span className="font-extrabold">#1 Amazon Bestseller</span> in
                just 15–20 days?
              </p>

              <p className="text-base md:text-lg font-semibold mt-6">
                Promotion Duration: 2.5 months
              </p>
              <ul className="mt-2 space-y-2 text-base md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>2 months of targeted ad promotion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>Professionally designed high-quality ad visuals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    Your own luxury, personalized website to showcase your book
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>Significantly boost your book sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>Build strong credibility in the market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    Earn the prestigious orange{" "}
                    <span className="font-extrabold">#1 Bestseller tag</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0">✅</span>
                  <span>
                    Receive weekly performance reports to track your book’s
                    progress
                  </span>
                </li>
              </ul>

              <p className="text-lg md:text-xl font-bold mt-6">
                💰 Investment: ₹99,000 — unmatched value for{" "}
                <span className="font-extrabold">guaranteed results</span>
              </p>
              <p className="text-base md:text-lg">
                If you’re interested, send us a message on WhatsApp today 🙂
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSalesSection;
