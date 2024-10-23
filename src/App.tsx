import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassw";
import CheckEmail from './pages/CheckEmail';

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
    path: "/check-email",     // Check password path
    element: <CheckEmail />,  // Renders CheckPassword component
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
