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
          <Route key={route.path} element={<Layout />}>
            <Route
              path={route.path}
              element={
                <RouteWrapper>
                  <Component />
                </RouteWrapper>
              }
            />
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
