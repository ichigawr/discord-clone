import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import authService from "@/services/authService";

import logo from "@/assets/logos/logo.png";
import spinningLogoMp4 from "@/assets/videos/spinning-logo.mp4";
import spinningLogoWebm from "@/assets/videos/spinning-logo.webm";

import styles from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await authService.getCurrentUser();
        setCurrentUser(data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <video autoPlay className={styles.spinner} loop playsInline>
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
