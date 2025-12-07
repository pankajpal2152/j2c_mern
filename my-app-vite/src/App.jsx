import React from "react";
import { Routes, Route } from "react-router-dom";

import TopStrip from "./Components/TopStrip";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";

import "./App.css";

const App = () => {
  return (
    <>
      {/* Always at top */}
      <TopStrip />
      <Navbar />

      {/* Main routed content */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Add more pages here */}
          {/* <Route path="/jobs" element={<JobsPage />} /> */}
        </Routes>
      </div>

      {/* Always at bottom */}
      <Footer />
    </>
  );
};

export default App;
