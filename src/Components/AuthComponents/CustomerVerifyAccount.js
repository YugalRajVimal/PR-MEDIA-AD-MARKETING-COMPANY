import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

const CustomerVerifyAccount = ({
  setIsCustomerVerifyAccountVisible,
  mainEmail,
}) => {
  const navigate = useNavigate();

  const { otpVerification } = useCustomerAuth();

  // State for form inputs
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the data object to be sent to the API
    const verifyAccountData = {
      email:mainEmail,
      otp,
    };

    try {
      const result = await otpVerification(verifyAccountData);
      if (result) {
        navigate("/");
      } else {
        setError("Failed to verify account. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleClose = () => {
    setIsCustomerVerifyAccountVisible(false);
  };

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/20">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg relative">
        <button onClick={handleClose} className="absolute top-0 right-0 m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="text-xl font-semibold  text-center">
          Verify Your Account {mainEmail}
        </h3>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="otp" className="sr-only">
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="one-time-code"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerVerifyAccount;
