import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import logoPng from "../assets/logo.png";
import "../Styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMega, setActiveMega] = useState(null);
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [logoRipple, setLogoRipple] = useState(false);

    const dropdownRef = useRef(null);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    /* SEARCH */
    const handleSearchSubmit = () => {
        const q = searchRef.current.value.trim();
        if (q) navigate(`/search?query=${encodeURIComponent(q)}`);
    };

    /* AUTO HIDE NAV ON SCROLL + CLOSE DROPDOWN */
    useEffect(() => {
        const handleScroll = () => {
            const curr = window.scrollY;
            setHidden(curr > lastScroll && curr > 80);
            setLastScroll(curr);

            // Close any open dropdown while scrolling
            if (activeMega) {
                setActiveMega(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll, activeMega]);

    /* CLOSE DROPDOWN ON OUTSIDE CLICK */
    useEffect(() => {
        const close = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setActiveMega(null);
            }
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    const handleLogoClick = () => {
        setLogoRipple(true);
        setTimeout(() => setLogoRipple(false), 400);
    };

    const toggleDropdown = (menu) => {
        setActiveMega(activeMega === menu ? null : menu);
    };

    // When hovering over another menu item, close any currently open dropdown
    const handleNavHover = (menuKey) => {
        if (activeMega && activeMega !== menuKey) {
            setActiveMega(null);
        }
    };

    return (
        <>
            <motion.nav
                className="navbar"
                animate={{ y: hidden ? -90 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="nav-inner">

                    {/* LOGO */}
                    <Link to="/" className="nav-logo" onClick={handleLogoClick}>
                        <div className={`logo-wrapper ${logoRipple ? "ripple" : ""}`}>
                            <img src={logoPng} alt="Logo" className="logo-img" />
                        </div>
                    </Link>

                    {/* CENTER NAV */}
                    <div className="nav-center" ref={dropdownRef}>
                        <div className="nav-links">

                            {/* JOBS */}
                            <div
                                className="nav-item"
                                onMouseEnter={() => handleNavHover("jobs")}
                                onClick={() => toggleDropdown("jobs")}
                            >
                                <span>Jobs</span> <ChevronDown size={16} />

                                {activeMega === "jobs" && (
                                    <motion.div className="mega-menu modern-dropdown">
                                        <div className="dropdown-arrow"></div>
                                        <Link to="/jobs/it">IT Jobs</Link>
                                        <Link to="/jobs/marketing">Marketing Jobs</Link>
                                        <Link to="/jobs/engineering">Engineering Jobs</Link>
                                    </motion.div>
                                )}
                            </div>

                            {/* INTERNSHIPS */}
                            <div
                                className="nav-item"
                                onMouseEnter={() => handleNavHover("internships")}
                                onClick={() => toggleDropdown("internships")}
                            >
                                <span>Internships</span> <ChevronDown size={16} />

                                {activeMega === "internships" && (
                                    <motion.div className="mega-menu modern-dropdown">
                                        <div className="dropdown-arrow"></div>
                                        <Link to="/internship/work-from-home">Work From Home</Link>
                                        <Link to="/internship/design">Design Internships</Link>
                                        <Link to="/internship/engineering">Engineering Internships</Link>
                                    </motion.div>
                                )}
                            </div>

                            {/* COURSES */}
                            <div
                                className="nav-item"
                                onMouseEnter={() => handleNavHover("courses")}
                                onClick={() => toggleDropdown("courses")}
                            >
                                <span>Courses</span> <ChevronDown size={16} />

                                {activeMega === "courses" && (
                                    <motion.div className="mega-menu modern-dropdown large">
                                        <div className="dropdown-arrow"></div>
                                        <div>
                                            <h4>Popular</h4>
                                            <Link to="/courses/fullstack">Full Stack</Link>
                                            <Link to="/courses/uiux">UI/UX</Link>
                                        </div>

                                        <div>
                                            <h4>Certifications</h4>
                                            <Link to="/courses/java">Java</Link>
                                            <Link to="/courses/python">Python</Link>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* SEARCH BAR */}
                            <div className="nav-search">
                                <input
                                    type="text"
                                    placeholder="Search anything..."
                                    ref={searchRef}
                                    onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                                />
                                <Search
                                    size={18}
                                    className="search-icon clickable"
                                    onClick={handleSearchSubmit}
                                />
                            </div>

                            {/* LOGIN */}
                            <Link to="/login" className="nav-btn login-btn">Login</Link>

                            {/* REGISTER */}
                            <Link to="/register" className="nav-btn register-btn">Register</Link>

                            {/* EMPLOYERS */}
                            <Link to="/employer" className="nav-btn employer-btn">For Employers</Link>

                        </div>
                    </div>

                    {/* MOBILE HAMBURGER — ONLY SHOW ON MOBILE */}
                    <button
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </motion.nav>

            {/* MOBILE DROPDOWN MENU */}
            <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
                <div className="mobile-top">
                    <h2>Menu</h2>
                    <X size={30} onClick={() => setMenuOpen(false)} />
                </div>

                <Link to="/jobs">Jobs</Link>
                <Link to="/internship">Internships</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/employer">For Employers</Link>
            </div>
        </>
    );
};

export default Navbar;
