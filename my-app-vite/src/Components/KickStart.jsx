import React from "react";
import "../Styles/KickStart.css";
import kickImg from "../assets/logo.png"; // <-- place your image here

const KickStart = () => {
    return (
        <section className="kick-wrapper">
            <div className="kick-card">

                <div className="kick-left">
                    <img src={kickImg} alt="Kickstart Career" className="kick-img" />
                </div>

                <div className="kick-right">
                    <div className="kick-badge">J2C FOR STUDENTS</div>

                    <h2 className="kick-title">
                        Kick-start your <span>career journey</span>
                    </h2>

                    <p className="kick-sub">
                        Explore internships, jobs, courses & career-ready programs designed to help students build their professional path faster and smarter.
                    </p>

                    <button className="kick-btn">
                        Get Started <span className="arrow">→</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default KickStart;
