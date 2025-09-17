// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const CustomerAuthContext = createContext();

export const CustomerAuthProvider = ({ children }) => {
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(false);
  const [isCustomerApproved, setIsUserApproved] = useState(false);
  const [name, setName] = useState("");

  // In CustomerAuthProvider:
  const verifyCustomerAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/customer/auth`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("userId", response.data.userId);
        setIsCustomerAuthenticated(true);
        return true;
      } else {
        setIsCustomerAuthenticated(false);
        return false;
      }
    } catch (error) {
      console.error("Failed to validate token", error);
      setIsCustomerAuthenticated(false);
      return false;
    }
  };

  const forgetPassword = async (credentials) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/customer/reset-password`,
        credentials
      );

      toast.success(response?.data?.message);
      return response;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return false;
    }
  };

  const otpVerification = async (credentials) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/customer/verify-account`,
        credentials
      );

      toast.success(response?.data?.message);
      localStorage.setItem("token", response?.data?.token);
      setIsCustomerAuthenticated(true);
      return true;
    } catch (err) {
      toast.error(err?.response?.data?.message);
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/customer/signin`,
        {
          email: credentials?.email,
          password: credentials?.password,
        }
      );

      toast.success("Login successful");
      setIsCustomerAuthenticated(true);
      localStorage.setItem("token", response?.data?.token);
      return { status: 200, data: response.data };
    } catch (err) {
      const status = err?.response?.status;

      if (status === 403) {
        toast.error(
          "User not verified. OTP sent to your email. Verify Account.."
        );
        return { status: 403 };
      } else if (status === 401) {
        toast.error("Invalid credentials. Please try again.");
        return { status: 401 };
      } else {
        toast.error("Login failed. Please try again.");
        return { status: 500 };
      }
    }
  };

  const signup = async (credentials) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/customer/signup`,
        credentials
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        return response;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const logout = () => {
    setIsCustomerAuthenticated(false);
    localStorage.removeItem("token");
    toast.error("Logout successfully");
  };

  const getAllNameCommentAndImagesCombined = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/customer/get-all-name-comment-and-images-combined`
      );

      if (response.status === 200) {
        toast.success("Data fetched successfully");
        return response.data;
      }
    } catch (error) {
      toast.error("Failed to fetch data. Please try again.");
      return false;
    }
  };

  const isUserApproved = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/customer/is-user-approved`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        // toast.success("User approval status fetched successfully");
        setIsUserApproved(response.data.approved);
        setName(response.data.name);

        return response.data.approved;
      }
    } catch (error) {
      // toast.error("Failed to fetch user approval status. Please try again.");
      return false;
    }
  };

  return (
    <CustomerAuthContext.Provider
      value={{
        isCustomerAuthenticated,
        setIsCustomerAuthenticated,
        verifyCustomerAuth,
        login,
        logout,
        signup,
        otpVerification,
        forgetPassword,
        getAllNameCommentAndImagesCombined,
        isCustomerApproved,
        setIsUserApproved,
        isUserApproved,
        name,
      }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
};

export const useCustomerAuth = () => useContext(CustomerAuthContext);
