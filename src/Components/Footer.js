import React, { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer className="bg-[#3B2E22] text-[#fff2e1] px-8 py-12 w-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="footer-section flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>

          <p className="text-sm">
            We create innovative web solutions to help businesses grow and
            thrive in the digital era.
          </p>

          <div>
            <p className="text-sm">Open 10 Am to 6 Pm</p>
            <p className="text-sm">Mon to Sat</p>
          </div>
        </div>
        <div className="footer-section w-full flex justify-between">
          <div className="footer-section flex w-1/2 justify-center">
            <ul className="text-sm space-y-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

              <li>
                <a href="/" className="hover:text-gray-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  Company that Trust Us
                </a>
              </li>

              <li>
                <a href="#call" className="hover:text-gray-300 transition">
                  Demo Call
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="footer-section flex w-1/2 justify-evenly w-full">
            <ul className="text-sm space-y-1">
              <h3 className="text-lg font-semibold mb-2">Packages</h3>

              <li>
                <a href="/package1" className="hover:text-gray-300 transition">
                  4.99 Crore
                </a>
              </li>
              <li>
                <a href="/package2" className="hover:text-gray-300 transition">
                  99 Lakh
                </a>
              </li>

              <li>
                <a href="/package3" className="hover:text-gray-300 transition">
                  9 Lakh
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* End Section */}
        <div className="footer-section flex flex-col gap-4 items-center md:items-center">
          <p className="text-sm">
            Office No-217, Second Floor, Krishna Apra Royal Plaza Tower,
            Commercial Belt, Alfa-1, Near Pari Chowk, Greater Noida, India ( Pin
            code - 201310 )
          </p>
          <p className="text-sm text-left w-full">
            Contact No. 7500030415, 7500010933 
          </p>
          <div>
            <p className="text-sm md:text-left md:w-full">
              Copyright &copy; 2019 THE PR MEDIA. All rights reserved.
            </p>

            <p className="text-sm">
              Powered by{" "}
              <span className="font-semibold">Gowappily Infotech</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
