import { Route, Routes } from "react-router-dom";

import NoLayout from "@/layouts/NoLayout";
import ProtectedRoute from "../ProtectedRoute";
import routes from "@/routes";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout = route.layout || NoLayout;
        const Component = route.component;

        return (
          <Route
            key={route.path}
            element={
              route.protected ? (
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              ) : (
                <Layout />
              )
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
