import React from "react";
import { RouterProvider } from "react-router-dom";
import { unAuthenticatedRouter } from "./routes/unAuthenticatedRoutes";

function UnAuthenticatedRouter() {
  return <RouterProvider router={unAuthenticatedRouter} />;
}

export default UnAuthenticatedRouter;
