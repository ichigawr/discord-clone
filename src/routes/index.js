import PrivateChannelLayout from "@/layouts/PrivateChannelLayout";
import AuthPageLayout from "@/layouts/AuthPageLayout";
import NoLayout from "@/layouts/NoLayout";

import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Profile from "@/pages/Profile";

import config from "@/config";

const routes = [
  {
    path: config.routes.home,
    component: Home,
    layout: PrivateChannelLayout,
    protected: true,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: AuthPageLayout,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: AuthPageLayout,
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: NoLayout,
    protected: true,
  },
];

export default routes;
