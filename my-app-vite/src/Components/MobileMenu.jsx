import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MobileMenu.css";
import { X } from "lucide-react";

const MobileMenu = ({ open, onClose }) => {
    return (
        <div className={`mobile-menu ${open ? "open" : ""}`}>
            <div className="mobile-close" onClick={onClose}>
                <X size={30} />
            </div>

            <div className="mobile-links">
                <Link to="/jobs" onClick={onClose}>Jobs</Link>
                <Link to="/internship" onClick={onClose}>Internship</Link>
                <Link to="/courses" onClick={onClose}>Courses</Link>
                <Link to="/hiring" onClick={onClose}>We Are Hiring</Link>

                <hr />

                <Link to="/login" onClick={onClose}>Login</Link>
                <Link to="/register" onClick={onClose}>Register</Link>
            </div>
        </div>
    );
};

export default MobileMenu;
