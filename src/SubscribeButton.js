// src/components/SubscribeButton.js
import { useEffect, useState } from "react";

const SubscribeButton = () => {
  const [isOneSignalReady, setIsOneSignalReady] = useState(false);

  useEffect(() => {
    // Wait for OneSignal to be available
    const checkReady = setInterval(() => {
      if (window.OneSignal) {
        setIsOneSignalReady(true);
        clearInterval(checkReady);
      }
    }, 100);
    return () => clearInterval(checkReady);
  }, []);

  const handleSubscribe = () => {
    if (window.OneSignal && isOneSignalReady) {
      console.log("Attempting to show native prompt...");
      window.OneSignalDeferred.push(function (OneSignal) {
        OneSignal.showNativePrompt();
      });
    } else {
      console.warn("OneSignal not ready");
    }
  };

  return (
    <button onClick={handleSubscribe} disabled={!isOneSignalReady}>
      Subscribe to Notifications
    </button>
  );
};

export default SubscribeButton;
