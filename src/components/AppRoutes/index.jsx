import { Route, Routes } from "react-router-dom";

import NoLayout from "@/layouts/NoLayout";
import routes from "@/routes";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout = route.layout || NoLayout;
        const Component = route.component;

        return (
          <Route key={route.path} element={<Layout />}>
            <Route path={route.path} element={<Component />} />;
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
