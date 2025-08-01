// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};

export const useAdmin = () => useContext(AdminContext);
