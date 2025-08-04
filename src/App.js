import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Layout";
import PackagePage from "./Pages/PackagePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerProtectedRoute from "./ProtectedRoutes/CustomerProtectedRoute";
import { CustomerAuthProvider } from "./context/CustomerAuthContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Admin/AdminAuthComponents/AdminLogin";
import AdminResetPassword from "./Admin/AdminAuthComponents/AdminResetPassword";
import AdminVerifyAccount from "./Admin/AdminAuthComponents/AdminVerifyAccount";
import AdminSubLayout from "./Admin/AdminSubLayout";
import AdminDashboard from "./Admin/AdminComponents/AdminDashboard";
import AddNamesComments from "./Admin/AdminComponents/AddNamesComments";
import UploadImages from "./Admin/AdminComponents/UploadImages";
import { AdminProvider } from "./context/AdminContext";

const App = () => {


  const packages = [
    {
      title: "Rs. 5,790 Package",
      subTitle: "Providing services to clients online and getting paid",
      description:
        "For those who are looking for the best and most genuine ways to earn through freelancing.",
      features: [
        {
          image: "/packages/13.png",
          description:
            "How to build real income streams using your skills online.",
        },
        {
          image: "/packages/14.png",
          description:
            "Step-by-step strategies to start earning through Amazon and digital platforms.",
        },
        {
          image: "/packages/15.png",
          description:
            "How to create and sell digital products for passive income.",
        },
        {
          image: "/packages/16.png",
          description:
            "The basics of content creation, marketing, and audience building.",
        },
        {
          image: "/packages/17.png",
          description:
            "How to leverage Amazon to sell products, services, or affiliate links.",
        },
        {
          image: "/packages/18.png",
          description:
            "The exact mindset and habits needed to succeed in freelancing.",
        },
      ],
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CustomerAuthProvider>
                <CustomerProtectedRoute>
                  <Layout />
                </CustomerProtectedRoute>
              </CustomerAuthProvider>
            }
          >
            <Route index element={<LandingPage />} />
            <Route
              path="/package1"
              element={<PackagePage packageDetails={packages[0]} />}
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          <Route
            path="/admin"
            element={
              <AdminAuthProvider>
                <AdminProvider>
                  <AdminLayout />
                </AdminProvider>
              </AdminAuthProvider>
            }
          >
            <Route
              index
              element={<Navigate to="/admin/panel/dashboard" replace />}
            />

            <Route path="panel" element={<AdminSubLayout />}>
              <Route
                index
                element={<Navigate to="/admin/panel/dashboard" replace />}
              />

              <Route
                path="dashboard"
                element={
                  <AdminProtectedRoute>
                    <AdminDashboard />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="add-names-comments"
                element={
                  <AdminProtectedRoute>
                    <AddNamesComments />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="upload-images"
                element={
                  <AdminProtectedRoute>
                    <UploadImages />
                  </AdminProtectedRoute>
                }
              />

              <Route path="signin" element={<AdminLogin />} />
              <Route path="verify-account" element={<AdminVerifyAccount />} />
              <Route path="reset-password" element={<AdminResetPassword />} />
              <Route
                path="*"
                element={<Navigate to="/admin/panel/dashboard" replace />}
              />
            </Route>
            <Route
              path="*"
              element={<Navigate to="/admin/panel/dashboard" replace />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // or "light", "dark"
      />
    </>
  );
};

export default App;
