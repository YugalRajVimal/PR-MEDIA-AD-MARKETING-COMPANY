import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer className="bg-[#3B2E22] text-[#fff2e1] px-8 py-12 w-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="footer-section flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="text-sm">
            We create innovative online earning systems to help individuals grow
            and thrive in the digital world. Please note: it's non-refundable payment.
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
                  href="#testimonials"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  Testimonials
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
                  Rs. 5,790
                </a>
              </li>
              {/* <li>
                <a href="/package2" className="hover:text-gray-300 transition">
                  3.99 Crore
                </a>
              </li>

              <li>
                <a href="/package3" className="hover:text-gray-300 transition">
                  99 Lakh
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* End Section */}
        <div className="footer-section flex flex-col gap-4 items-center md:items-center">
          <p className="text-sm">
            Office No-109, Second Floor, Om Tower, Commercial Belt, Alfa-1, Near
            Pari Chowk, Greater Noida, India ( Pin code - 201310 )
          </p>
          <p className="text-sm text-left w-full">
            Contact No. 7500010933, 7500030415
          </p>
          <p className="text-base text-left w-full h-[30px] ">
            <a
              href="https://instagram.com/theprmedia01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>
                <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform duration-200" />
              </span>
              <span className="pt-1">The PR Media</span>
            </a>
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
