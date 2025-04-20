import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useLoading from "@/hooks/useLoading";
import config from "@/config";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { loading } = useLoading();
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);

  if (loading) return null;

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

export default ProtectedRoute;
