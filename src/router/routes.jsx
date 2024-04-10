import { createBrowserRouter } from "react-router-dom";
import { Home, Developers, NotFound } from "../pages";

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
    path: "*",
    element: <NotFound />,
  },
];
export default createBrowserRouter(routes);
