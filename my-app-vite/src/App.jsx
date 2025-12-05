import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
import Jobs from "./Pages/Jobs";
import Internship from "./Pages/Internship";
import Courses from "./Pages/Courses";
import Hiring from "./Pages/Hiring";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default App;
