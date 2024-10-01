import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LogPage from "./pages/LogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogPage />,
    errorElement: <ErrorPage />,
  },
  { path: "/home", element: <HomePage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
