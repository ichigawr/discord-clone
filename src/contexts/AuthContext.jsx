import { createContext, useState, useEffect, useCallback } from "react";
import authService from "@/services/authService";
import useLoading from "@/hooks/useLoading";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const { setLoading } = useLoading();

  const fetchCurrentUser = useCallback(async () => {
    setLoading(true);

    const res = await authService.me();

    if (res.status === "success") {
      setCurrentUser(res.data);
    } else {
      console.error(res?.message);
      setCurrentUser(null);
    }

    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const value = {
    currentUser,
    setCurrentUser,
    fetchCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
