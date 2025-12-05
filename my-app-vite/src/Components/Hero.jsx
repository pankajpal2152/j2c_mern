import React from "react";
import "../Styles/Hero.css";
import heroImage from "../assets/hero.png";
import GoogleIcon from "../assets/google.png"; // Add google.png in /src/assets
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

const Hero = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        console.log("Google Login Clicked");
        navigate("/google-auth");
    };

    const handleEmailLogin = () => {
        navigate("/login");
    };

    return (
        <section className="hero-wrapper">
            <div className="hero-inner">
                <div className="hero-left">
                    <h1 className="hero-title">Empower Your Career</h1>
                    <p className="hero-sub">
                        with Internships, Courses & Fresher <br />
                        Jobs
                    </p>

                    {/* BUTTONS */}
                    <div className="hero-btn-group">

                        {/* GOOGLE LOGIN */}
                        <button className="hero-btn google-btn" onClick={handleGoogleLogin}>
                            <img src={GoogleIcon} className="google-icon" alt="Google" />
                            Continue with Google
                            <span className="btn-ripple"></span>
                        </button>

                        {/* EMAIL LOGIN */}
                        <button className="hero-btn email-btn" onClick={handleEmailLogin}>
                            <Mail size={18} />
                            Login with Email
                            <span className="btn-ripple"></span>
                        </button>
                    </div>

                    <p className="hero-terms">
                        By continuing, you agree to our{" "}
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>.
                        <br />
                        Want to post jobs?{" "}
                        <Link to="/register-employer">Register as an Employer</Link>.
                    </p>
                </div>

                <div className="hero-right">
                    <img src={heroImage} alt="Hero" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
