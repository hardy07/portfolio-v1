import { createRoutes } from "react-router";
import React, { Suspense } from "react";
import RedirectAnd404 from "./pages/redirectand404.jsx";

const Home = React.lazy(() => import("./pages/home.jsx"));
const Contact = React.lazy(() => import("./pages/contact.jsx"));

const routes = createRoutes([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <RedirectAnd404 />,
  },
]);

export default routes;
