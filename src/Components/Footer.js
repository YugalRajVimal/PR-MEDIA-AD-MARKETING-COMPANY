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

        {/* Middle Section */}
        {/* <div className="footer-section flex justify-center">
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
        </div> */}

        {/* End Section */}
        <div className="footer-section flex flex-col items-center md:items-center">
          <p className="text-sm">&copy; 2013. All rights reserved.</p>
          <p className="text-sm">
            Powered by <span className="font-semibold">Gowappily Infotech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
