import PrivateChannelLayout from "@/layouts/PrivateChannelLayout";
import AuthPageLayout from "@/layouts/AuthPageLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import config from "@/config";

const routes = [
  {
    path: config.routes.home,
    component: Home,
    layout: PrivateChannelLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: AuthPageLayout,
  },
  {
    path: config.routes.register,
    component: Login,
    layout: AuthPageLayout,
  },
];

export default routes;
