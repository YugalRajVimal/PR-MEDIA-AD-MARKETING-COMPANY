import React, { useEffect, useRef } from "react";

const Testimonials2 = () => {
  return (
    <div id="testimonials" className="p-4 sm:p-10 md:p-20  text-[#fff2e1] ">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-[#3B2E22] font-semibold p-6">
        Testimonials
      </h2>
      <div className="relative flex flex-col items-center gap-2 rounded-xl  h-[888px]  mx-auto bg-[#3B2E22] z-[-2]">
        {/* <div className="h-[106%] w-full absolute -top-[3%] left-0 z-[-1]">
          <img src="bg1.png" className="h-full w-full" />
        </div> */}
        {[
          { name: "Iman Gadzhi", role: "Founder", img: "user.png" },
          {
            name: "Dany Benavides",
            role: "Chief Marketing Officer",
            img: "user.png",
          },
          { name: "Ciaran Anderson", role: "Copywriter", img: "user.png" },
          { name: "Ciaran Anderson", role: "Copywriter", img: "user.png" },
        ].map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-6 rounded-xl w-full z-[1]"
          >
            <div className="h-24 w-24 rounded-full border-4 border-[#9D2140] overflow-hidden">
              <img
                src={person.img}
                alt={person.name}
                className=" object-cover h-[120%] w-[120%] "
              />
            </div>

            <h3 className="text-2xl font-bold">{person.name}</h3>
            <p className="text-[#fff2e1] text-lg">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials2;
