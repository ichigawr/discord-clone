import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import ProtectedRoute from "../ProtectedRoute";
import NoLayout from "@/layouts/NoLayout";
import routes from "@/routes";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout = route.layout || NoLayout;
        const Component = route.component;
        const RouteWrapper = route.protected ? ProtectedRoute : Fragment;

        return (
          <Route
            key={route.path}
            element={
              <RouteWrapper>
                <Layout />
              </RouteWrapper>
            }
          >
            <Route path={route.path} element={<Component />} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
