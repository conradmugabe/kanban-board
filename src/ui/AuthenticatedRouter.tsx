import React from "react";
import { RouterProvider } from "react-router-dom";
import { authenticatedRouter } from "./routes/authenticatedRoutes";

function AuthenticatedRouter() {
  return <RouterProvider router={authenticatedRouter} />;
}

export default AuthenticatedRouter;
