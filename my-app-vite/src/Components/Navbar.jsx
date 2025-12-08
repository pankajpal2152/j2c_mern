import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import logoPng from "../assets/logo.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  /* SEARCH */
  const handleSearchSubmit = () => {
    const q = searchRef.current.value.trim();
    if (q) navigate(`/search?query=${encodeURIComponent(q)}`);
    setActiveMenu(null);
  };

  /* CLOSE ON SCROLL */
  useEffect(() => {
    const handleScroll = () => setActiveMenu(null);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  /* MENU CLICK HANDLER */
  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      <motion.nav className="navbar">
        <div className="nav-inner">

          {/* LEFT: LOGO (extremely left inside container) */}
          <Link to="/" className="nav-logo">
            <img src={logoPng} alt="Logo" className="logo-img" />
          </Link>

          {/* CENTER: MENUS + SEARCH + LOGIN/REGISTER */}
          <div className="nav-center" ref={dropdownRef}>
            <div className="nav-links">

              {/* DROPDOWN MENUS */}
              {[
                {
                  label: "Jobs",
                  key: "jobs",
                  links: [
                    ["/jobs/it", "IT Jobs"],
                    ["/jobs/marketing", "Marketing Jobs"],
                    ["/jobs/engineering", "Engineering Jobs"],
                  ],
                },
                {
                  label: "Internships",
                  key: "internships",
                  links: [
                    ["/internship/work-from-home", "Work From Home"],
                    ["/internship/design", "Design"],
                    ["/internship/engineering", "Engineering"],
                  ],
                },
                {
                  label: "Courses",
                  key: "courses",
                  links: [
                    ["/courses/fullstack", "Full Stack"],
                    ["/courses/uiux", "UI/UX"],
                    ["/courses/python", "Python"],
                  ],
                },
                {
                  label: "Campus",
                  key: "campus",
                  links: [
                    ["/campus/ambassador", "Campus Ambassador"],
                    ["/campus/programs", "Programs"],
                  ],
                },
                {
                  label: "Career Gap?",
                  key: "gap",
                  links: [
                    ["/career-gap/restart", "Restart Career"],
                    ["/career-gap/wfh", "Work From Home"],
                  ],
                },
                {
                  label: "Staffing",
                  key: "staffing",
                  links: [
                    ["/staffing/it", "IT Staffing"],
                    ["/staffing/non-it", "Non-IT Staffing"],
                  ],
                },
              ].map((menu) => (
                <div
                  key={menu.key}
                  className="nav-item"
                  onClick={() => toggleMenu(menu.key)}
                  onMouseEnter={() => activeMenu && setActiveMenu(menu.key)}
                >
                  <span>{menu.label}</span>
                  <ChevronDown size={15} />

                  {activeMenu === menu.key && (
                    <motion.div
                      className="mega-menu"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                    >
                      {menu.links.map(([to, text]) => (
                        <Link key={to} to={to} onClick={() => setActiveMenu(null)}>
                          {text}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* SEARCH BAR */}
              <div className="nav-search" onClick={() => setActiveMenu(null)}>
                <input
                  type="text"
                  placeholder="Search anything..."
                  ref={searchRef}
                  onFocus={() => setActiveMenu(null)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                />
                <Search
                  size={17}
                  className="search-icon"
                  onClick={handleSearchSubmit}
                />
              </div>

              {/* LOGIN / REGISTER (still in center group) */}
              <Link
                to="/login"
                className="nav-btn login-btn"
                onClick={() => setActiveMenu(null)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="nav-btn register-btn"
                onClick={() => setActiveMenu(null)}
              >
                Register
              </Link>
            </div>
          </div>

          {/* RIGHT: FOR EMPLOYERS + HAMBURGER (mobile) */}
          <div className="nav-right">
            <Link
              to="/employer"
              className="nav-btn employer-btn"
              onClick={() => setActiveMenu(null)}
            >
              For Employers
            </Link>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
        <div className="mobile-top">
          <h2>Menu</h2>
          <X size={28} onClick={() => setMenuOpen(false)} />
        </div>

        <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
        <Link to="/internship" onClick={() => setMenuOpen(false)}>Internships</Link>
        <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
        <Link to="/campus" onClick={() => setMenuOpen(false)}>Campus</Link>
        <Link to="/career-gap" onClick={() => setMenuOpen(false)}>Career Gap?</Link>
        <Link to="/staffing" onClick={() => setMenuOpen(false)}>Staffing</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        <Link to="/employer" onClick={() => setMenuOpen(false)}>For Employers</Link>
      </div>
    </>
  );
};

export default Navbar;
