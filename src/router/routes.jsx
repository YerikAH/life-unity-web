import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from ".";
import {
  Developers,
  HabitPage,
  Home,
  NotFound,
  NutritionPage,
  Privacity,
  Terms,
  TodoPage,
} from "../pages";

const routes = [
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.developers,
    element: <Developers />,
  },
  {
    path: ROUTES.terms,
    element: <Terms />,
  },
  {
    path: ROUTES.privacity,
    element: <Privacity />,
  },
  {
    path: ROUTES.habits,
    element: <HabitPage />,
  },
  {
    path: ROUTES.todo,
    element: <TodoPage />,
  },
  {
    path: ROUTES.nutrition,
    element: <NutritionPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default createBrowserRouter(routes);
