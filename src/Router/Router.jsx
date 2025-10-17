import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayOut from "../Layouts/MainLayOut/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Installation from "../Pages/Installation/Installation";
import AllApps from "../Pages/AllApps/AllApps";
import TrendingApps from "../Pages/Home/TrendingApps/TrendingApps";
import AppDetails from "../Pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
      },
      {
        path: "/Installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
