import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import RedirectAnd404 from "./pages/redirectand404.jsx";

const Home = lazy(() => import("./pages/home.jsx"));
const Contact = lazy(() => import("./pages/contact.jsx"));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<RedirectAnd404 />} />
      </Routes>
    </Suspense>
  </Router>
);

export default Routes;
