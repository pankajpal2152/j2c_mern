import React from "react";
import "../Styles/TopStrip.css";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const TopStrip = () => {
    return (
        <div className="top-strip">

            {/* LEFT SIDE — CONTACT */}
            <div className="strip-left">
                <span className="strip-item">
                    📞 +91 86977 41611 / +91 83340 01667
                </span>

                <span className="strip-divider">|</span>

                <span className="strip-item">
                    📧 contact@j2c.in
                </span>
            </div>

            {/* RIGHT SIDE — SOCIAL ICONS */}
            <div className="strip-right">

                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>

                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube />
                </a>

            </div>
        </div>
    );
};

export default TopStrip;
