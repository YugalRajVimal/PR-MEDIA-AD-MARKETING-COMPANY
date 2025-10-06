import React, { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { X } from "lucide-react";
import { useCustomerAuth } from "./context/CustomerAuthContext";


const SignInPage = ({ setIsCustomerLoginVisible }) => {

    const [isSignInOpen, setIsSignInOpen] = useState(true);
    const {
        isCustomerAuthenticated,
      } = useCustomerAuth();
  

    const handleGoogleLogin = () => {
      window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
    };
  


  return (<>
    {!isCustomerAuthenticated && (
        <AnimatePresence>
          {!isCustomerAuthenticated && isSignInOpen && (


             <div className="fixed top-0 h-screen w-screen bg-[#dbc3ab] z-50">
            <div className="h-screen w-screen  bg-[#dbc3ab] flex flex-col justify-center items-center text-center px-6">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center mb-8">
      <div

        className="flex flex-col justify-center items-center text-center"
      >
        <a href="/">
          <img src="logo1.svg" className="h-40 object-contain" alt="Logo" />
        </a>
      </div>
        <p className="text-sm tracking-wide text-gray-700 uppercase">
          Your Story. Our Strategy.
        </p>
      </div>

      {/* Headline Text */}
      <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-10">
        One chance <br className="hidden sm:block" />
        can change your life <br /><span className="font-bold">Join Now</span>
      </h1>

      <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-fit px-10 py-4 border border-gray-300 rounded-md shadow-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <img
                    src="/google.png"
                    alt="Google"
                    className="h-6 w-6 mr-2"
                  />
                  Sign in with Google
                </button>

      {/* Stats Section */}
      <div className="flex justify-center gap-6 mt-10 text-gray-700 font-medium">
        <p>3 Lakh+ Students</p>
       
      </div>
    </div>

     
      
      </div>
      

           
          )}
        </AnimatePresence>
      )}
      </>
    
  );
};

export default SignInPage;
