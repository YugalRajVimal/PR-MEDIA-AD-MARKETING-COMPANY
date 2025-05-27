// import React from "react";

// const PackagePage = (props) => {
//   const { packagePrice } = props;
//   return (
//     <div className="md:p-10 bg-[#dbc3ab] md:bg-[#f7dbb6] text-[#3B2E22] min-h-screen mt-[70px] text-[#3B2E22]">
//       <h2 className="text-4xl md:text-5xl lg:text-6xl text-center p-6 font-semibold">
//         {packagePrice}
//       </h2>
//       <p className="px-6 sm:px-10 md:px-24 py-10">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sunt
//         nemo iusto ullam excepturi dolorum blanditiis, delectus corrupti
//         perspiciatis voluptatibus libero. Vero nulla eaque, veritatis quidem at
//         blanditiis consectetur laborum sed itaque consequuntur ad explicabo,
//         minima deserunt commodi suscipit quisquam officia incidunt ea quasi
//         iste? Quam pariatur sunt, laborum incidunt porro officiis exercitationem
//         corporis debitis architecto. Iste magnam culpa ad dolor sint quos quo
//         expedita cupiditate blanditiis inventore accusamus, repellendus officiis
//         possimus, quae vitae reiciendis, ducimus recusandae pariatur perferendis
//         voluptatibus dolore sequi. Reiciendis dolorem asperiores rerum
//         consequatur voluptatem omnis repellendus, voluptatibus laudantium
//         ratione numquam recusandae nostrum assumenda architecto provident
//         voluptas officia quam consectetur, sapiente cum esse nam non. Aspernatur
//         sed facilis vel? Unde, ipsum et nemo debitis numquam ipsam error dolorum
//         quibusdam illum eum magnam ab quas earum corrupti vero cupiditate harum.
//         Adipisci quaerat eaque quisquam omnis. Molestiae, praesentium sunt! Ab
//         hic quae optio quos voluptas doloremque omnis, eum odit iure adipisci
//         harum laborum dolorem molestiae molestias obcaecati, deleniti iste
//         praesentium totam! Quam cumque dicta temporibus? Amet aliquid doloribus
//         delectus dolorem exercitationem esse rem at, est quaerat beatae tenetur
//         temporibus in id asperiores error dolorum harum corrupti. Reiciendis
//         incidunt earum sint, temporibus sequi magnam nulla ducimus praesentium
//         laudantium veniam vero.
//       </p>
//     </div>
//   );
// };

// export default PackagePage;

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

const PackagePage = (props) => {
  const { packageDetails } = props;
  return (
    <div className="md:pt-20 bg-[#dbc3ab] md:bg-[#f7dbb6] text-[#3B2E22] min-h-screen pt-[100px] text-[#3B2E22]">
      <h2 className="text-2xl md:text-3xl font-bold text-center w-full px-4">
        {packageDetails.title}
      </h2>
      <p className="text-lg md:text-xl text-center px-4">
        {packageDetails.subTitle}
      </p>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-black mx-auto my-4"></div>

      <p className="text-lg md:text-xl text-center px-4">
        {packageDetails.description}
      </p>
      <div>
        <ul className="sticky top-[15%] mt-4 space-y-2 relative text-md md:text-base px-4 ">
          {packageDetails.features.map((feature, index) => (
            <li
              key={index}
              className="sticky top-[15%] flex justify-center relative h-52"
            >
              <div className="sticky top-[15%] h-52 w-full max-w-[500px] p-2">
                <div className="relative h-full text-black flex  items-center font-bold w-full border border-zinc-700 bg-[#dbc3ab] md:bg-[#f7dbb6] border-[2px] rounded-xl p-4  md:p-6">
                  <div className="flex flex-col gap-4 ">
                    <span>
                      <img
                        src={feature.image}
                        className="h-10 w-10 object-contain"
                      />
                    </span>
                    <p>{feature.description}</p>
                  </div>
                  <div className="h-full w-full absolute top-4 left-4 bg-zinc-500 z-[-2] rounded-xl"></div>
                  <div className="h-full w-full absolute top-[6px] left-[6px] bg-[#dbc3ab] md:bg-[#f7dbb6] z-[-1] rounded-xl"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-lg md:text-xl text-center text-black px-4 h-[100px] flex justify-center items-center ">
        {packageDetails.management_fee}
      </p>
    </div>
  );
};

export default PackagePage;
