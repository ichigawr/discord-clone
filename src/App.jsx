import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
// import routes from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* TODO: implement scroll to top */}
        {/* <ScrollToTop /> */}
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            {/* {routes.map((RouteComp) => (
              <Route
                key={RouteComp.path}
                path={RouteComp.path}
                element={<RouteComp.component />}
              />
            ))} */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
