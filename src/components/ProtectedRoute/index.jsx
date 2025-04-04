import { Navigate, useLocation } from "react-router-dom";
import useCurrentUser from "@/hooks/useCurrentUser";
import config from "@/config";
import useLoading from "@/hooks/useLoading";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const { currentUser } = useCurrentUser();
  const { loading } = useLoading();

  if (loading) return null;

  if (!currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

export default ProtectedRoute;
