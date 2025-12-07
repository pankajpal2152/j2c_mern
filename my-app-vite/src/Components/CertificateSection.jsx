import React, { useRef, useState, useEffect } from "react";
import "../Styles/CertificationSection.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CertificateSection = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const certificates = [
        { title: "Java Certification", image: "/certificates/java.jpg" },
        { title: "AWS Practitioner", image: "/certificates/aws.jpg" },
        { title: "Google Data Analytics", image: "/certificates/data.jpg" },
        { title: "Cyber Security Essentials", image: "/certificates/cyber.jpg" },
        { title: "UI/UX Advanced", image: "/certificates/uiux.jpg" }
    ];

    /* Auto slide */
    useEffect(() => {
        const interval = setInterval(() => scrollRight(), 3500);
        return () => clearInterval(interval);
    });

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
        updateDots(-1);
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
        updateDots(1);
    };

    const updateDots = (dir) => {
        setActiveIndex((prev) => {
            let next = prev + dir;
            if (next < 0) next = certificates.length - 1;
            if (next >= certificates.length) next = 0;
            return next;
        });
    };

    return (
        <section className="certificate-wrapper">

            {/* EXTERNAL SCROLL BUTTONS */}
            <button className="certificate-scroll-btn left" onClick={scrollLeft}>
                <ChevronLeft size={26} />
            </button>

            <button className="certificate-scroll-btn right" onClick={scrollRight}>
                <ChevronRight size={26} />
            </button>

            <div className="certificate-inner">

                {/* HEADER */}
                <div className="certificate-header">
                    <h2 className="certificate-title">Popular certification courses</h2>

                    <Link to="/certificates" className="certificate-view-all">
                        View All →
                    </Link>
                </div>
                <div><h3 className="">Fastest way to build your CV</h3></div>

                {/* CAROUSEL */}
                <div ref={sliderRef} className="certificate-carousel">
                    {certificates.map((item, index) => (
                        <div
                            key={index}
                            className={`certificate-card ${activeIndex === index ? "active-card" : ""}`}
                        >
                            <div className="certificate-img-wrapper">
                                <img src={item.image} alt={item.title} className="certificate-img" loading="lazy" />
                            </div>
                            <p className="certificate-text">{item.title}</p>
                        </div>
                    ))}
                </div>

                {/* DOTS */}
                <div className="certificate-dots">
                    {certificates.map((_, idx) => (
                        <span key={idx} className={`dot ${activeIndex === idx ? "active" : ""}`}></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificateSection;
