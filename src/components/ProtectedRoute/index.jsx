import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import auth from "@/utils/auth";

import spinningLogoWebm from "@/assets/videos/spinning-logo.webm";
import spinningLogoMp4 from "@/assets/videos/spinning-logo.mp4";
import logo from "@/assets/logos/logo.png";

import styles from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const data = await auth("me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data) setCurrentUser(data.user);

      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <video
          autoPlay
          className={styles.spinner}
          loop
          playsInline
        >
          <source src={spinningLogoWebm} type="video/webm" />
          <source src={spinningLogoMp4} type="video/mp4" />
          <img src={logo} alt="" />
        </video>
      </div>
    );
  }

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

export default ProtectedRoute;
