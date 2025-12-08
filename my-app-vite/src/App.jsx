import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import TopStrip from "./Components/TopStrip";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import FullStackCourse from "./Pages/FullStackCourse";

import "./App.css";

// -------------------------
// INTERNAL WRAPPER
// -------------------------
const AppContent = () => {
  const location = useLocation();

  // Routes where main navbar should NOT appear
  const hideNavbarRoutes = ["/courses/fullstack"];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Always show top strip */}
      <TopStrip />

      {/* Show navbar on ALL pages except fullstack course page */}
      {!hideNavbar && <Navbar />}

      {/* Routed content */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/fullstack" element={<FullStackCourse />} />
        </Routes>
      </div>

      {/* Always show footer */}
      <Footer />
    </>
  );
};

export default AppContent;
