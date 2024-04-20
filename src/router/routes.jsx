import { createBrowserRouter } from "react-router-dom";
import { Developers, Home, NotFound, Privacity, Terms } from "../pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/developers",
    element: <Developers />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacity",
    element: <Privacity />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default createBrowserRouter(routes);
