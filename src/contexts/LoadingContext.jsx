import { createContext, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const value = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {/* {loading ? <LoadingScreen /> : children} */}
      {loading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };
