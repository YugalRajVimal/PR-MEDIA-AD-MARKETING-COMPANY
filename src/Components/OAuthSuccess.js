import { useEffect } from "react";

const OAuthSuccess = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const name = urlParams.get("name");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("lastLoginTime", Date.now());
      // or new Date().getTime()
      localStorage.setItem("name", name);
      console.log(name);

      console.log(new Date());
      window.location.href = "/"; // or wherever you want to redirect
    } else {
      // Handle token not found
      console.error("Token not found in URL");
      window.location.href = "/"; // fallback
    }
  }, []);

  return <p>Logging you in, please wait...</p>;
};

export default OAuthSuccess;
