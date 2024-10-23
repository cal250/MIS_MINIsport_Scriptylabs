import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassw";

import DashboardLayout from "./components/custom/DashboardLayout";
import Dashboard from "./pages/Dashboard";

import CheckEmail from "./pages/CheckEmail";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "/dashboard/",
        Component: Dashboard,
      },
    ],
  },
  {
    path: "/check-email", // Check password path
    element: <CheckEmail />,
  },
  // Renders CheckPassword component
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
