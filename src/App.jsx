import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { LoadingProvider } from "./contexts/LoadingContext";
import { AuthProvider } from "./components/AuthProvider";
import AppRoutes from "./components/AppRoutes";
import store from "./store";

function App() {
  return (
    <>
      <LoadingProvider>
        <ReduxProvider store={store}>
          <Router>
            <AuthProvider />
            <AppRoutes />
          </Router>
        </ReduxProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
