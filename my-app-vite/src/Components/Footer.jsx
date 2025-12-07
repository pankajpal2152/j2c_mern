import React, { useState } from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    ChevronDown,
} from "lucide-react";

import logo from "../assets/logo.png";

// New icons as images or Lucide icons
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <footer className="footer-wrapper">

            {/* Gradient Divider */}
            <div className="footer-divider"></div>

            <div className="footer-container">

                {/* BRAND SECTION */}
                <div className="footer-section brand">
                    <img src={logo} alt="Logo" className="footer-logo-img" />

                    <p className="brand-text">
                        Your gateway to internships, jobs & career growth — built for young professionals.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS (DESKTOP) */}
                <div className="footer-section desktop">
                    <h4>Quick Links</h4>
                    <Link to="/about">About Us</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/internships">Internships</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* NEWSLETTER */}
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

                    {/* Quick Links */}
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

                    {/* Newsletter */}
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

                    {/* Contact */}
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

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                <p className="copyright">
                    © {new Date().getFullYear()} J2C — Journey to Career
                </p>
            </div>

        </footer>
    );
};

export default Footer;
