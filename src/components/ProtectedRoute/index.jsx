import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import config from "@/config";
import validateProps from "@/utils/validateProps";
import auth from "@/utils/auth";

function ProtectedRoute({ children }) {
  validateProps(ProtectedRoute, { children });

  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const data = await auth("me", null, {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      });
      if (data) setCurrentUser(data.user);

      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
