import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import "../Styles/CourseNavbar.css";

const FullStackNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  /* CLOSE WHEN CLICK OUTSIDE */
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* CLOSE ON SCROLL */
  useEffect(() => {
    const close = () => setActiveMenu(null);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <nav className="fs-nav">
      {/* LOGO –> GO HOME */}
      <div className="fs-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>

      {/* CENTER LINKS */}
      <div className="fs-center" ref={dropdownRef}>

        {/* MENU 1 – Certification Courses */}
        <div
          className="fs-item"
          onMouseEnter={() => toggleMenu("cert")}
          onClick={() => toggleMenu("cert")}
        >
          Certification Courses <span className="offer-tag">OFFER</span>
          <ChevronDown size={16} />

          {activeMenu === "cert" && (
            <div className="fs-mega">
              {/* COLUMN 1 */}
              <div className="fs-col">
                <h4>Most Popular</h4>
                <p>Top AI Courses</p>
                <p>IIT Madras Certified</p>
                <p>Programming</p>
                <p>Business & Management</p>
                <p>Core Engineering</p>
                <p>Data Science</p>
                <p>Design</p>
                <p>Creative Arts</p>
                <p>Language</p>
                <p>Career Development</p>
                <p>Architecture</p>
              </div>

              {/* COLUMN 2 */}
              <div className="fs-col">
                <p>Web Development with AI</p>
                <p>Programming in Python with AI</p>
                <p>Digital Marketing with AI</p>
                <p>Machine Learning with AI</p>
                <p>Advanced Excel with AI</p>
                <p>AutoCAD</p>
                <p>Data Science with AI</p>
                <p>Programming in C & C++</p>
                <p>Financial Modelling</p>
                <p>Android App Development</p>
                <p>Vibe Coding with Replit</p>
                <p>AI & ML (NEW)</p>
              </div>

              {/* COLUMN 3 */}
              <div className="fs-col">
                <p>Personal Branding</p>
                <p>AI in Digital Marketing (NEW)</p>
                <p>AI in Data Science (NEW)</p>
              </div>
            </div>
          )}
        </div>

        {/* MENU 2 – Placement Courses */}
        <div
          className="fs-item"
          onMouseEnter={() => toggleMenu("placement")}
          onClick={() => toggleMenu("placement")}
        >
          Placement Courses with AI <ChevronDown size={16} />

          {activeMenu === "placement" && (
            <div className="fs-mega">
              <div className="fs-col">
                <p>Prompt Engineering</p>
                <p>Generative AI</p>
                <p>AI in Business</p>
                <p>AI in Software Dev</p>
                <p>AI in Data Science</p>
              </div>
              <div className="fs-col">
                <p>Coding with AI</p>
                <p>Python Automation</p>
                <p>Automation Expert</p>
                <p>AI for Product Teams</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE – LOGIN */}
      <button className="fs-login">Login</button>
    </nav>
  );
};

export default FullStackNavbar;
