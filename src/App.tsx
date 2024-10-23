import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassw";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
