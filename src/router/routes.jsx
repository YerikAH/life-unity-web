import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Developers from "../pages/Developers";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/developers",
    element: <Developers />,
  },
];
export default createBrowserRouter(routes);
