import React from "react";
import "../Styles/PartnerSlider.css";

const PartnerSlider = () => {
    const brands = [
        "/partner/logo.png",
        "/partner/logo192.png",
        "/partner/logo copy.png",
    ];

    return (
        <section className="partner-wrapper">
            <div className="partner-glass"></div>

            <div className="partner-inner">
                {/* LEFT TEXT PANEL */}
                <div className="partner-left">
                    <h2>10K+</h2>
                    <p>Openings Every Day</p>
                </div>

                {/* SLIDER */}
                <div className="partner-slider">
                    <div className="partner-track">
                        {brands.concat(brands).map((logo, index) => (
                            <div className="partner-logo-box" key={index}>
                                <img src={logo} alt="brand" className="partner-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSlider;
