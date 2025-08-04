import React, { useState } from "react";
import { useCustomerAuth } from "../../context/CustomerAuthContext";

const CustomerLogin = ({
  setIsCustomerLoginVisible,
  handlePageChange,
  setMainEmail,
}) => {
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

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="relative bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

        <h2 className="text-2xl font-semibold text-center mb-6">Welcome</h2>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <img src="/google.png" alt="Google" className="h-6 w-6 mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default CustomerLogin;

{
  /* <div className="flex justify-between items-center">
          <p>Sign In</p>
        </div> */
}

{
  /* {error && <p className="text-red-500 text-center">{error}</p>} */
}

{
  /* <form className="space-y-6" onSubmit={onSubmit}>
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
        </form> */
}
