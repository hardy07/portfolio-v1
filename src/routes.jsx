import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import RedirectAnd404 from "./pages/redirectand404.jsx";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <RedirectAnd404 />,
  },
]);

export default router;
