import React from "react";
import "../Styles/GovernmentBody.css";

// ---------- Logos (place your images inside /src/assets/) ----------
import logoSkillIndia from "../assets/logo.png";
import logoNSDC from "../assets/logo.png";
import logoIITM from "../assets/logo.png";
import logoMESC from "../assets/logo.png";
import logoNIELIT from "../assets/logo.png";
import logoAICTE from "../assets/logo.png";

const GovernmentBody = () => {
    const partners = [
        { img: logoSkillIndia, name: "Skill India" },
        { img: logoNSDC, name: "NSDC" },
        { img: logoIITM, name: "IIT Madras" },
        { img: logoMESC, name: "MESC" },
        { img: logoNIELIT, name: "NIELIT" },
        { img: logoAICTE, name: "AICTE" },
    ];

    return (
        <section className="gov-wrapper">
            <div className="gov-card">
                <h2 className="gov-title">Proud partner of leading government bodies</h2>

                <div className="gov-list">
                    {partners.map((p, idx) => (
                        <div className="gov-item" key={idx}>
                            <img src={p.img} alt={p.name} className="gov-logo" />
                            <p className="gov-name">{p.name}</p>

                            {/* Vertical Divider – hide for last item */}
                            {idx !== partners.length - 1 && <div className="gov-divider"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernmentBody;
