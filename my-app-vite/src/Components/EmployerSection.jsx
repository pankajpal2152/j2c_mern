import React from "react";
import "../Styles/EmployerSection.css";
import employerImg from "../assets/logo.png"; // <-- Add your image here
import { Link } from "react-router-dom";

const EmployerSection = () => {
    return (
        <section className="employer-wrapper">
            <div className="employer-card">

                {/* LEFT IMAGE */}
                <div className="employer-left">
                    <img 
                        src={employerImg}
                        alt="Employer using system"
                        className="employer-img"
                        loading="lazy"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="employer-right">

                    <span className="employer-tag">PCS GLOBAL FOR EMPLOYERS</span>

                    <h2 className="employer-title">
                        Looking to hire <span>freshers and interns?</span>
                    </h2>

                    <p className="employer-sub">
                        Access a large talent pool of skilled candidates with  
                        <strong> AI-powered tools</strong> and smart filters to hire faster.
                    </p>

                    <Link to="/employer-post" className="employer-btn">
                        Post now for free →
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default EmployerSection;
