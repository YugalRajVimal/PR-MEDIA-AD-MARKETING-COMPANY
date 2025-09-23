import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import CustomerLogin from "./Components/AuthComponents/CustomerLogin";
import CustomerSignUp from "./Components/AuthComponents/CustomerSignUp";
import CustomerResetPassword from "./Components/AuthComponents/CustomerResetPassword";
import CustomerVerifyAccount from "./Components/AuthComponents/CustomerVerifyAccount";
import MessageBox from "./Components/MessageBox/MessageBox";
import { useEffect, useState } from "react";
import MessageBox2 from "./Components/MessageBox2/MessageBox2";
import SubscribeButton from "./SubscribeButton";

const Layout = () => {
  const [isCustomerLoginVisible, setIsCustomerLoginVisible] = useState(false);

  const [isCustomerSignUpVisible, setIsCustomerSignUpVisible] = useState(false);

  const [isCustomerForgetPasswordVisible, setIsCustomerForgetPasswordVisible] =
    useState(false);

  const [isCustomerVerifyAccountVisible, setIsCustomerVerifyAccountVisible] =
    useState(false);

  const [mainEmail, setMainEmail] = useState("");

  const handlePageChange = (key) => {
    switch (key) {
      case "login":
        setIsCustomerLoginVisible(true);
        setIsCustomerSignUpVisible(false);
        setIsCustomerForgetPasswordVisible(false);
        setIsCustomerVerifyAccountVisible(false);
        break;
      case "signup":
        setIsCustomerLoginVisible(false);
        setIsCustomerSignUpVisible(true);
        setIsCustomerForgetPasswordVisible(false);
        setIsCustomerVerifyAccountVisible(false);
        break;
      case "forget":
        setIsCustomerLoginVisible(false);
        setIsCustomerSignUpVisible(false);
        setIsCustomerForgetPasswordVisible(true);
        setIsCustomerVerifyAccountVisible(false);
        break;
      case "verify":
        setIsCustomerLoginVisible(false);
        setIsCustomerSignUpVisible(false);
        setIsCustomerForgetPasswordVisible(false);
        setIsCustomerVerifyAccountVisible(true);
        break;
      default:
        setIsCustomerLoginVisible(false);
        setIsCustomerSignUpVisible(false);
        setIsCustomerForgetPasswordVisible(false);
        setIsCustomerVerifyAccountVisible(false);
    }
  };

  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId: "718983a2-79ca-42de-8aec-a940452f08f9",
        autoRegister: false,
        promptOptions: {
          slidedown: {
            enabled: false,
          },
        },
        notifyButton: {
          enable: false, // disables the bell widget
        },
      });
    });
    // rest of init code
  }, []);

  // useEffect(() => {
  //   window.OneSignalDeferred = window.OneSignalDeferred || [];
  //   window.OneSignalDeferred.push(async function (OneSignal) {
  //     await OneSignal.init({
  //       appId: "718983a2-79ca-42de-8aec-a940452f08f9",
  //       autoRegister: false,
  //       promptOptions: {
  //         slidedown: {
  //           enabled: false,
  //         },
  //       },
  //       notifyButton: {
  //         enable: false, // disables the bell widget
  //       },
  //     });
  //   });
  // }, []);

  return (
    <div className="w-screen h-screen font-medio">
      {/* <button id="subscribe-btn">Subscribe to Notifications</button>
      <SubscribeButton /> */}

      <SubscribeButton />

      <div className="">
        <Nav handlePageChange={handlePageChange} />
        {/* <LandingPageBackground /> */}
        <Outlet />
        <Footer />
      </div>

      {isCustomerLoginVisible && (
        <CustomerLogin
          setIsCustomerLoginVisible={setIsCustomerLoginVisible}
          handlePageChange={handlePageChange}
          setMainEmail={setMainEmail}
        />
      )}
      {isCustomerSignUpVisible && (
        <CustomerSignUp
          setIsCustomerSignUpVisible={setIsCustomerSignUpVisible}
          handlePageChange={handlePageChange}
          setMainEmail={setMainEmail}
        />
      )}
      {isCustomerForgetPasswordVisible && (
        <CustomerResetPassword
          setIsCustomerForgetPasswordVisible={
            setIsCustomerForgetPasswordVisible
          }
          handlePageChange={handlePageChange}
          setMainEmail={setMainEmail}
        />
      )}
      {isCustomerVerifyAccountVisible && (
        <CustomerVerifyAccount
          setIsCustomerVerifyAccountVisible={setIsCustomerVerifyAccountVisible}
          mainEmail={mainEmail}
        />
      )}
      {/* <MessageBox setIsCustomerLoginVisible={setIsCustomerLoginVisible} />  */}
      <MessageBox2 setIsCustomerLoginVisible={setIsCustomerLoginVisible} />
    </div>
  );
};

export default Layout;
