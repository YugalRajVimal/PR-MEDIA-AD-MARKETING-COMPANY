// src/context/AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const uploadNameComments = async (nameComments) => {
    const adminToken = localStorage.getItem("admin-token");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/upload-name-comments`,
        { nameComments },
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      toast.success(response.data.message);
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const getAllNameComments = async () => {
    const adminToken = localStorage.getItem("admin-token");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/get-all-name-comments`,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      return response.data.nameComments;
    } catch (error) {
      toast.error(error.response.data.message);
      return [];
    }
  };

  const deleteAllNameComments = async () => {
    const adminToken = localStorage.getItem("admin-token");
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/admin/delete-all-name-comments`,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      toast.success(response.data.message);
      return response;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const uploadImages = async (selectedFiles) => {
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("images", file));

    const adminToken = localStorage.getItem("admin-token");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/admin/upload-images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${adminToken}`,
          },
        }
      );
      console.log("Upload Success:", response.data);
      toast.success("Images uploaded successfully");
      return response;
    } catch (error) {
      console.error("Upload Failed:", error);
      toast.error("Failed to upload images");
      return false;
    }
  };

  const getUploadedImages = async () => {
    const adminToken = localStorage.getItem("admin-token");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/admin/get-uploaded-images`,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      toast.success("Images fetched successfully");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch images:", error);
      toast.error("Failed to fetch images");
      return false;
    }
  };

  const deleteAllImages = async () => {
    const adminToken = localStorage.getItem("admin-token");
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/admin/delete-all-images`,
        {
          headers: {
            Authorization: `${adminToken}`,
          },
        }
      );
      console.log("All images deleted successfully:", response.data);
      toast.success("All images deleted successfully");
      return response;
    } catch (error) {
      console.error("Failed to delete all images:", error);
      toast.error("Failed to delete all images");
      return false;
    }
  };

  return (
    <AdminContext.Provider
      value={{
        uploadNameComments,
        getAllNameComments,
        deleteAllNameComments,
        uploadImages,
        getUploadedImages,
        deleteAllImages
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
