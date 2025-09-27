import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

const SubscribeButton = () => {
  const [isOneSignalReady, setIsOneSignalReady] = useState(false);

  const [showButton, setShowButton] = useState(true);

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
      <button
        onClick={handleSubscribe}
        disabled={!isOneSignalReady}
        className={`absolute top-[10vh] left-1/2 -translate-x-1/2 z-50
          px-6 py-3 rounded-full text-white font-semibold shadow-lg
          transition-all duration-300 ease-in-out  flex  items-center
          ${
            isOneSignalReady
              ? "bg-gradient-to-r from-black  to-black hover:scale-105 hover:bg-black animate-pulse"
              : "bg-gray-400 cursor-not-allowed"
          }
        `}
      >
        <FaBell className="inline-block mr-2 text-xl" />
        {isOneSignalReady ? "Subscribe to Notifications" : "Loading..."}
      </button>
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
