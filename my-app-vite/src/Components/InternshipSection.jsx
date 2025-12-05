import React, { useState, useRef, useEffect } from "react";
import "../Styles/InternshipSection.css";
import { Link } from "react-router-dom";
import {
    MapPin,
    Clock3,
    IndianRupee,
    Globe,
    PenTool,
    BarChart,
    Code,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const InternshipSection = () => {
    const filters = [
        "All",
        "Freshers jobs",
        "Work from home",
        "Part Time",
        "Media",
        "Design",
        "Engineering",
    ];

    const internships = [
        {
            title: "Web Development Intern",
            category: "Freshers jobs",
            icon: <Globe size={20} />,
            location: "Remote",
            duration: "3 Months",
            stipend: "₹8,000/month",
            link: "/internship/web-development",
        },
        {
            title: "UI/UX Design Intern",
            category: "Design",
            icon: <PenTool size={20} />,
            location: "Remote",
            duration: "3 Months",
            stipend: "₹8,000/month",
            link: "/internship/uiux-design",
        },
        {
            title: "Digital Marketing Intern",
            category: "Media",
            icon: <BarChart size={20} />,
            location: "Remote",
            duration: "3 Months",
            stipend: "₹8,000/month",
            link: "/internship/digital-marketing",
        },
        {
            title: "Java Developer Intern",
            category: "Engineering",
            icon: <Code size={20} />,
            location: "Remote",
            duration: "3 Months",
            stipend: "₹8,000/month",
            link: "/internship/java-developer",
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateCards, setAnimateCards] = useState(false);

    const sliderRef = useRef(null);

    const filteredInternships =
        activeCategory === "All"
            ? internships
            : internships.filter((job) => job.category === activeCategory);

    const scrollToCard = (index) => {
        const cardWidth = 330;
        sliderRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    const nextCard = () => {
        let newIndex = activeIndex + 1;
        if (newIndex >= filteredInternships.length) newIndex = 0;
        setActiveIndex(newIndex);
        scrollToCard(newIndex);
    };

    const prevCard = () => {
        let newIndex = activeIndex - 1;
        if (newIndex < 0) newIndex = filteredInternships.length - 1;
        setActiveIndex(newIndex);
        scrollToCard(newIndex);
    };

    /** AUTO SCROLL **/
    useEffect(() => {
        const timer = setInterval(nextCard, 4000);
        return () => clearInterval(timer);
    }, [activeIndex, filteredInternships]);

    /** SLIDE-IN ANIMATION WHEN SECTION ENTERS VIEW **/
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimateCards(true);
            },
            { threshold: 0.3 }
        );

        const section = document.querySelector(".internship-wrapper");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="internship-wrapper">
            <div className="internship-inner">

                {/* HEADER */}
                <div className="internship-header">
                    <h2 className="internship-title">Internship?</h2>
                    <Link to="/internship" className="internship-view-all">
                        View All →
                    </Link>
                </div>

                {/* FILTERS */}
                <div className="internship-filters">
                    {filters.map((btn, index) => (
                        <button
                            key={index}
                            className={`internship-filter-btn ${activeCategory === btn ? "active-filter" : ""
                                }`}
                            onClick={() => {
                                setActiveCategory(btn);
                                setActiveIndex(0);
                                scrollToCard(0);
                            }}
                        >
                            {btn}
                        </button>
                    ))}
                </div>

                {/* ARROWS */}
                <button className="internship-arrow left" onClick={prevCard}>
                    <ChevronLeft size={24} />
                </button>

                <button className="internship-arrow right" onClick={nextCard}>
                    <ChevronRight size={24} />
                </button>

                {/* INTERNSHIP CARDS */}
                <div className="internship-container" ref={sliderRef}>
                    {filteredInternships.map((job, index) => (
                        <div
                            className={`internship-card slide-card ${animateCards ? "slide-in" : ""
                                } ${index === activeIndex ? "active-card" : ""}`}
                            key={index}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="internship-card-header">
                                {job.icon}
                                <h3>{job.title}</h3>
                            </div>

                            <div className="internship-details">
                                <p><MapPin size={16} /> Location: {job.location}</p>
                                <p><Clock3 size={16} /> Duration: {job.duration}</p>
                                <p><IndianRupee size={16} /> Stipend: {job.stipend}</p>
                            </div>

                            <Link to={job.link} className="internship-link">
                                View details →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="internship-dots">
                    {filteredInternships.map((_, idx) => (
                        <div
                            key={idx}
                            className={`dot ${activeIndex === idx ? "active-dot" : ""}`}
                            onClick={() => {
                                setActiveIndex(idx);
                                scrollToCard(idx);
                            }}
                        ></div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InternshipSection;
