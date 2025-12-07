import React, { useRef, useState, useEffect } from "react";
import "../Styles/Trending.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Trending = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { title: "Placement Courses", image: "/trending/placement.jpg", link: "/courses/placement" },
        { title: "Certification Courses", image: "/trending/certification.jpg", link: "/courses/certification" },
        { title: "Campus Competitions", image: "/trending/campus.jpg", link: "/campus" },
        { title: "Trending Courses", image: "/trending/trending.jpg", link: "/courses" },
        { title: "IT Bootcamps", image: "/trending/it.jpg", link: "/bootcamp" }
    ];

    /* AUTO SLIDE */
    useEffect(() => {
        const interval = setInterval(() => scrollRight(), 3200);
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
            if (next < 0) next = items.length - 1;
            if (next >= items.length) next = 0;
            return next;
        });
    };

    return (
        <section className="trending-wrapper">

            {/* ARROWS Positioned between wrapper & inner */}
            <button className="trend-scroll-btn left" onClick={scrollLeft}>
                <ChevronLeft size={26} />
            </button>

            <button className="trend-scroll-btn right" onClick={scrollRight}>
                <ChevronRight size={26} />
            </button>

            <div className="trending-inner">

                {/* HEADER */}
                <div className="trending-header">
                    <h2 className="trending-title">Trending Now</h2>
                    <Link to="/courses" className="view-all-btn">Explore All →</Link>
                </div>

                {/* CAROUSEL */}
                <div ref={sliderRef} className="trending-carousel">
                    {items.map((item, index) => (
                        <Link to={item.link} className="trending-card" key={index}>
                            <div className="trending-img-wrapper">
                                <img src={item.image} alt={item.title} className="trending-img" loading="lazy" />
                            </div>
                            <p className="trending-text">{item.title}</p>
                        </Link>
                    ))}
                </div>

                {/* DOTS */}
                <div className="dots-container">
                    {items.map((_, idx) => (
                        <span key={idx} className={`dot ${activeIndex === idx ? "active" : ""}`}></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
