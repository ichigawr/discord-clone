import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./components/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* TODO: implement scroll to top */}
        {/* <ScrollToTop /> */}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
