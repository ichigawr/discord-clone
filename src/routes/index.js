import PrivateChannelLayout from "@/layouts/PrivateChannelLayout";
import AuthPageLayout from "@/layouts/AuthPageLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
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
];

export default routes;
