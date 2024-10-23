import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassw";
<<<<<<< HEAD
import DashboardLayout from "./components/custom/DashboardLayout";
import Dashboard from "./pages/Dashboard";
=======
import CheckEmail from './pages/CheckEmail';
>>>>>>> 947fba54590e8f1abf4df5595625d9ba6c154372

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
<<<<<<< HEAD
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "/dashboard/",
        Component: Dashboard,
      },
    ],
=======
    path: "/check-email",     // Check password path
    element: <CheckEmail />,  // Renders CheckPassword component
>>>>>>> 947fba54590e8f1abf4df5595625d9ba6c154372
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
