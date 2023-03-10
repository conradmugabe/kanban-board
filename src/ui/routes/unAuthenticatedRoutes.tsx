import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage";

export const unAuthenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);
