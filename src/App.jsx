import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { LoadingProvider } from "./contexts/LoadingContext";

import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
      <LoadingProvider>
        <AuthProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
