// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  return (
    <CustomerContext.Provider value={{}}>{children}</CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);
