import React, { useState, useEffect, useRef } from "react";
import "../Styles/InternshipSection.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const InternshipSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateCards, setAnimateCards] = useState(false);
    const scrollRef = useRef(null);

    const internships = [
        { title: "Web Development Intern", company: "PCS Global", location: "Kolkata", mode: "Hybrid", category: "IT" },
        { title: "UI/UX Intern", company: "Adobe", location: "Bangalore", mode: "Remote", category: "Design" },
        { title: "Marketing Intern", company: "Zomato", location: "Delhi", mode: "Hybrid", category: "Marketing" },
        { title: "Finance Intern", company: "TCS", location: "Mumbai", mode: "Office", category: "Finance" },
        { title: "Cloud Intern", company: "Infosys", location: "Pune", mode: "Remote", category: "IT" }
    ];

    const filters = ["All", "IT", "Marketing", "Design", "Finance"];

    const filteredData =
        activeFilter === "All" ? internships : internships.filter((i) => i.category === activeFilter);

    useEffect(() => {
        setTimeout(() => setAnimateCards(true), 150);
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredData.length - 1));
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        setActiveIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="intern-wrapper">

            {/* OUTSIDE SCROLL BUTTONS */}
            <button className="intern-scroll-btn left-btn" onClick={scrollLeft}>
                <ChevronLeft size={26} />
            </button>

            <div className="intern-inner">

                {/* HEADER */}
                <div className="intern-header">
                    <h2 className="intern-title">Internships</h2>
                    <a href="#" className="intern-view-all">View All</a>
                </div>

                {/* FILTER BUTTONS */}
                <div className="intern-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`intern-filter-btn ${activeFilter === filter ? "active-filter" : ""}`}
                            onClick={() => {
                                setAnimateCards(false);
                                setTimeout(() => {
                                    setActiveFilter(filter);
                                    setAnimateCards(true);
                                }, 120);
                            }}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* CARD ROW */}
                <div className="intern-container" ref={scrollRef}>
                    {filteredData.map((card, index) => (
                        <div
                            key={index}
                            className={`intern-card fade-card 
                                ${animateCards ? "fade-in" : "fade-out"}
                                ${index === activeIndex ? "active-card" : ""}`}
                        >
                            <h3 className="intern-card-header">{card.title}</h3>

                            <div className="intern-details">
                                <p><strong>Company:</strong> {card.company}</p>
                                <p><strong>Location:</strong> {card.location}</p>
                                <p><strong>Mode:</strong> {card.mode}</p>
                            </div>

                            <a href="#" className="intern-link">Apply Now →</a>
                        </div>
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="intern-dots">
                    {filteredData.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === activeIndex ? "active-dot" : ""}`}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT SCROLL BUTTON */}
            <button className="intern-scroll-btn right-btn" onClick={scrollRight}>
                <ChevronRight size={26} />
            </button>

        </section>
    );
};

export default InternshipSection;
