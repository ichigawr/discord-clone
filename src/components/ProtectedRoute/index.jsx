import { useEffect, useState } from "react";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";

import config from "@/config";
import authService from "@/services/authService";

import logo from "@/assets/logos/logo.png";
import spinningLogoMp4 from "@/assets/videos/spinning-logo.mp4";
import spinningLogoWebm from "@/assets/videos/spinning-logo.webm";

import styles from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);

      const data = await authService.me();

      if (data.status === "success") {
        setCurrentUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        console.error(data.message);
      }

      setIsLoading(false);
    };

    fetchUserData();
  }, [searchParams, setSearchParams]);

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
