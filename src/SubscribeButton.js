import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

const SubscribeButton = () => {
  const [isOneSignalReady, setIsOneSignalReady] = useState(false);

  const [showButton, setShowButton] = useState(true);

  const [isIosSafari, setIsIosSafari] = useState(false);

  useEffect(() => {
    // Detect iOS Safari
    const ua = window.navigator.userAgent || navigator.vendor || window.opera;
    const isIos = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isSafari = /^((?!chrome|crios|android).)*safari/i.test(ua);
    setIsIosSafari(isIos && isSafari);
  }, []);

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (
        window.OneSignal &&
        window.OneSignal.User &&
        window.OneSignal.User.PushSubscription
      ) {
        setIsOneSignalReady(true);
        clearInterval(checkReady);
      }
    }, 100);
    return () => clearInterval(checkReady);
  }, []);

  const handleSubscribe = () => {
    if (isOneSignalReady) {
      console.log("Triggering push subscription...");
      window.OneSignalDeferred.push(async function (OneSignal) {
        try {
          const res = await OneSignal.User.PushSubscription.optIn();
          console.log("User prompted!", res);
        } catch (error) {
          console.error("Error during subscription prompt:", error);
        }
      });
    }
    setShowButton(false);
  };

  useEffect(() => {
    if ("Notification" in window) {
      console.log("Notification permission:", Notification.permission);

      switch (Notification.permission) {
        case "granted":
          setShowButton(false);
          break;
        case "denied":
          setShowButton(true);
          break;
        case "default":
          setShowButton(true);

          break;
      }
    } else {
      console.error("🚫 This browser does not support notifications.");
    }
  }, []);

  return (
    showButton && (
      <div className="fixed top-0 h-screen w-screen bg-[#dbc3ab] z-40">
            <div className="h-screen w-screen  bg-[#dbc3ab] flex flex-col justify-center items-center text-center px-6">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center mb-8">
      <div

        className="flex flex-col justify-center items-center text-center"
      >
        <a href="/">
          <img src="logo1.svg" className="h-40 object-contain" alt="Logo" />
        </a>
      </div>
        <p className="text-sm tracking-wide text-gray-700 uppercase">
          Your Story. Our Strategy.
        </p>
      </div>

      {/* Headline Text */}
      <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-10">
        One chance <br className="hidden sm:block" />
        can change your life <br /><span className="font-bold">Join Now</span>
      </h1>

      <button
        onClick={handleSubscribe}
        disabled={!isOneSignalReady}
        className={`
          bg-[#206A40] text-white text-lg font-semibold px-10 py-3 rounded-md shadow-md hover:bg-[#1A5633] transition-all duration-300 ease-in-out
          z-40
          px-6 py-3 rounded-full text-white font-semibold shadow-lg
          transition-all duration-300 ease-in-out  flex  items-center w-fit sm:w-auto flex justify-center items-center
          ${
            isOneSignalReady
              ? " hover:scale-105 hover:bg-black animate-pulse"
              : "bg-gray-400 cursor-not-allowed"
          }
        `}
      >
        <FaBell className="inline-block mr-2 text-xl" />
        {isOneSignalReady
          ? "Subscribe to Notifications"
          : isIosSafari
          ? "Add to Home Screen for Notifications"
          : "Loading..."}
      </button>

      {/* Stats Section */}
      <div className="flex justify-center gap-6 mt-10 text-gray-700 font-medium">
        <p>3 Lakh+ Students</p>
        
      </div>
    </div>

     
      
      </div>
    )
  );
};

export default SubscribeButton;

// import { useEffect, useState } from "react";
// import { FaBell } from "react-icons/fa";

// const SubscribeButton = () => {
//   const [isOneSignalReady, setIsOneSignalReady] = useState(false);
//   const [showButton, setShowButton] = useState(true);
//   const [isIosSafari, setIsIosSafari] = useState(false);

//   useEffect(() => {
//     // Detect iOS Safari
//     const ua = window.navigator.userAgent.toLowerCase();
//     const isIos = /iphone|ipad|ipod/.test(ua);
//     const isSafari = /^((?!chrome|android).)*safari/i.test(
//       window.navigator.userAgent
//     );
//     setIsIosSafari(isIos && isSafari);

//     const checkReady = setInterval(() => {
//       if (
//         window.OneSignal &&
//         window.OneSignal.User &&
//         window.OneSignal.User.PushSubscription
//       ) {
//         setIsOneSignalReady(true);
//         clearInterval(checkReady);
//       }
//     }, 100);
//     return () => clearInterval(checkReady);
//   }, []);

//   const handleSubscribe = () => {
//     if (isOneSignalReady) {
//       console.log("Triggering push subscription...");
//       window.OneSignalDeferred.push(async function (OneSignal) {
//         try {
//           const res = await OneSignal.User.PushSubscription.optIn();
//           console.log("User prompted!", res);
//         } catch (error) {
//           console.error("Error during subscription prompt:", error);
//         }
//       });
//     }
//     setShowButton(false);
//   };

//   useEffect(() => {
//     if ("Notification" in window) {
//       console.log("Notification permission:", Notification.permission);

//       switch (Notification.permission) {
//         case "granted":
//           setShowButton(false);
//           break;
//         case "denied":
//           setShowButton(true);
//           break;
//         case "default":
//           setShowButton(true);
//           break;
//       }
//     } else {
//       console.error("🚫 This browser does not support notifications.");
//     }
//   }, []);

//   return (
//     showButton && (
//       <button
//         onClick={handleSubscribe}
//         disabled={!isOneSignalReady}
//         className={`absolute top-[10vh] left-1/2 -translate-x-1/2 z-50
//           px-6 py-3 rounded-full text-white font-semibold shadow-lg
//           transition-all duration-300 ease-in-out flex items-center w-[90vw] sm:w-auto flex justify-center items-center
//           ${
//             isOneSignalReady
//               ? "bg-gradient-to-r from-black to-black hover:scale-105 hover:bg-black animate-pulse"
//               : "bg-gray-400 cursor-not-allowed"
//           }
//         `}
//       >
//         <FaBell className="inline-block mr-2 text-xl" />
//         {isOneSignalReady
//           ? "Subscribe to Notifications"
//           : isIosSafari
//           ? "Add to Home Screen for Notifications"
//           : "Loading..."}
//       </button>
//     )
//   );
// };

// export default SubscribeButton;
