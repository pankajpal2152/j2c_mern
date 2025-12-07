import React, { useState } from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ChevronDown
} from "lucide-react";

const Footer = () => {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <footer className="footer-wrapper">

            <div className="footer-divider"></div>

            <div className="footer-container">

                {/* BRAND */}
                <div className="footer-section brand">
                    <div className="brand-logo">J2C</div>
                    <p className="brand-text">
                        Your gateway to internships, jobs & career growth — built for young professionals.
                    </p>

                    <div className="social-icons">
                        <a><Facebook size={18} /></a>
                        <a><Instagram size={18} /></a>
                        <a><Twitter size={18} /></a>
                        <a><Linkedin size={18} /></a>
                    </div>
                </div>

                {/* QUICK LINKS - Desktop */}
                <div className="footer-section desktop">
                    <h4>Quick Links</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/internships">Internships</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* STAY UPDATED */}
                <div className="footer-section desktop">
                    <h4>Stay Updated</h4>
                    <p className="small-text">
                        Get weekly updates on internships & job opportunities.
                    </p>

                    <div className="newsletter">
                        <input type="email" placeholder="Email address" />
                        <button>Join</button>
                    </div>
                </div>

                {/* CONTACT */}
                <div className="footer-section desktop">
                    <h4>Contact</h4>
                    <p className="contact"><MapPin size={16} /> Kolkata, India</p>
                    <p className="contact"><Phone size={16} /> +91 9876543210</p>
                    <p className="contact"><Mail size={16} /> support@j2cglobal.com</p>
                </div>

                {/* MOBILE ACCORDION */}
                <div className="footer-section mobile accordion-wrapper">

                    <div className="accordion-block" onClick={() => toggle(1)}>
                        <h4>
                            Quick Links
                            <ChevronDown size={18} className={open === 1 ? "rotate" : ""} />
                        </h4>

                        <div className={`accordion-body ${open === 1 ? "open" : ""}`}>
                            <Link to="/about">About Us</Link>
                            <Link to="/jobs">Jobs</Link>
                            <Link to="/internships">Internships</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className="accordion-block" onClick={() => toggle(2)}>
                        <h4>
                            Stay Updated
                            <ChevronDown size={18} className={open === 2 ? "rotate" : ""} />
                        </h4>

                        <div className={`accordion-body ${open === 2 ? "open" : ""}`}>
                            <div className="newsletter mobile">
                                <input type="email" placeholder="Email address" />
                                <button>Join</button>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-block" onClick={() => toggle(3)}>
                        <h4>
                            Contact
                            <ChevronDown size={18} className={open === 3 ? "rotate" : ""} />
                        </h4>

                        <div className={`accordion-body ${open === 3 ? "open" : ""}`}>
                            <p className="contact"><MapPin size={16} /> Kolkata, India</p>
                            <p className="contact"><Phone size={16} /> +91 9876543210</p>
                            <p className="contact"><Mail size={16} /> support@j2cglobal.com</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* ---- CENTERED COPYRIGHT ONLY ---- */}
            <div className="footer-bottom">
                <p className="copyright">
                    © {new Date().getFullYear()} J2C — Journey to Career
                </p>
            </div>

        </footer>
    );
};

export default Footer;
