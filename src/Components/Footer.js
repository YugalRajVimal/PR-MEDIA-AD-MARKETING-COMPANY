import React, { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer className="bg-[#3B2E22] text-[#fff2e1] px-8 py-12 w-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="text-sm">
            We create innovative web solutions to help businesses grow and
            thrive in the digital era.
          </p>
        </div>

        {/* Middle Section
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div> */}

        {/* End Section */}
        <div className="footer-section flex flex-col items-center md:items-center">
          <p className="text-sm">&copy; 2024. All rights reserved.</p>
          <p className="text-sm">
            Powered by <span className="font-semibold">Gowappily Infotech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
