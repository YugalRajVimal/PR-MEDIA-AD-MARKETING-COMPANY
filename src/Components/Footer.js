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
            We make your book a market-leading bestseller by combining expert
            marketing, engaging visuals, and a personalized luxury platform.
            Please note: it's non-refundable payment.
          </p>
          <div>
            <p className="text-sm">Open 10 AM to 7 PM</p>
            <p className="text-sm">Mon to Sat</p>
          </div>
        </div>
        <div className="footer-section w-full flex justify-between">
          <div className="footer-section flex w-1/2 justify-center">
            <ul className="text-sm space-y-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

              <li>
                <a href="/" className="hover:text-gray-300 transition whitespace-nowrap">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#clients-feedbacks"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  Clients' Feedbacks
                </a>
              </li>

              <li>
                <a
                  href="#monthly-subscription"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  Monthly Subscriptions
                </a>
              </li>
              <li>
                <a href="#our-team" className="hover:text-gray-300 transition whitespace-nowrap">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-services"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  Terms of Services
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-gray-300 transition whitespace-nowrap"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Section */}
          <div className="footer-section flex w-1/2 justify-evenly w-full">
            <ul className="text-sm space-y-1">
              <h3 className="text-lg font-semibold mb-2">Best Package</h3>

              <li>
                <a
                  // href="/package1"
                  className="hover:text-gray-300 transition"
                >
                  Rs. 99,000
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
            <a
              href="tel:+917500030415"
              className="hover:text-gray-300 transition"
            >
              Contact No. +91 75000 30415
            </a>
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
