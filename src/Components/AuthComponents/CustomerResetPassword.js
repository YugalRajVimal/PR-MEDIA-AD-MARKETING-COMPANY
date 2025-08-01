import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

const CustomerResetPassword = ({
  setIsCustomerForgetPasswordVisible,
  handlePageChange,
  setMainEmail,
}) => {
  const { forgetPassword } = useCustomerAuth();
  const navigate = useNavigate();

  // State to manage email and password input
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  //   // Handle form submission
  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Create reset password data object
    const resetPasswordData = {
      email,
      newPassword,
    };

    try {
      const response = await forgetPassword(resetPasswordData);
      if (response.status === 200) {
        setMainEmail(email);
        handlePageChange("verify");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleClose = () => {
    setIsCustomerForgetPasswordVisible(false);
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
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-center text-gray-900 ">
            Forget Account Password ( Farmer )
          </h2>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-6" onSubmit={handleResetPassword}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="new-password" className="sr-only">
                New Password
              </label>
              <input
                id="new-password"
                name="newPassword"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
          {/* LogIn */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                onClick={() => handlePageChange("login")}
                className="font-medium text-indigo-600 hover:text-indigo-500 px-1"
              >
                Log In
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerResetPassword;
