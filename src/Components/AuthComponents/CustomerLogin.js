import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

const CustomerLogin = ({
  setIsCustomerLoginVisible,
  handlePageChange,
  setMainEmail,
}) => {
  const navigate = useNavigate();
  const { login } = useCustomerAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response.status === 200) {
        handlePageChange();
      } else if (response.status === 403) {
        setMainEmail(email);
        handlePageChange("verify");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  const handleClose = () => {
    setIsCustomerLoginVisible(false);
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
        <div className="flex justify-between items-center">
          <p>Sign In</p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              onClick={() => handlePageChange("forget")}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
            <a
              onClick={() => handlePageChange("signup")}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
