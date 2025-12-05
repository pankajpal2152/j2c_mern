import React, { useRef, useState, useEffect } from "react";
import "../Styles/CourseSection.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseSection = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState("All");

    const courses = [
        { title: "Full Stack Development", image: "/courses/fullstack.jpg", category: "IT" },
        { title: "UI/UX Design", image: "/courses/uiux.jpg", category: "Design" },
        { title: "Data Analytics", image: "/courses/data.jpg", category: "Data" },
        { title: "Digital Marketing", image: "/courses/marketing.jpg", category: "Marketing" },
        { title: "Cloud Computing", image: "/courses/cloud.jpg", category: "IT" }
    ];

    const filters = ["All", "IT", "Design", "Data", "Marketing"];

    const filteredCourses =
        activeFilter === "All"
            ? courses
            : courses.filter((c) => c.category === activeFilter);

    /* AUTO SLIDE */
    useEffect(() => {
        const interval = setInterval(() => scrollRight(), 3500);
        return () => clearInterval(interval);
    });

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        updateDots(-1);
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        updateDots(1);
    };

    const updateDots = (dir) => {
        setActiveIndex((prev) => {
            let next = prev + dir;
            if (next < 0) next = filteredCourses.length - 1;
            if (next >= filteredCourses.length) next = 0;
            return next;
        });
    };

    return (
        <section className="course-wrapper">
            <div className="course-inner fade-up">

                {/* HEADER */}
                <div className="course-header">
                    <h2 className="course-title">Top Career Courses</h2>
                    <Link to="/courses" className="view-all-btn">View All →</Link>
                </div>

                {/* FILTER BUTTONS */}
                <div className="course-filters">
                    {filters.map((f, idx) => (
                        <button
                            key={idx}
                            className={`course-filter-btn ${activeFilter === f ? "active-filter" : ""}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* ARROWS */}
                <button className="course-arrow left" onClick={scrollLeft}>
                    <ChevronLeft size={22} />
                </button>

                <button className="course-arrow right" onClick={scrollRight}>
                    <ChevronRight size={22} />
                </button>

                {/* CAROUSEL */}
                <div ref={sliderRef} className="course-carousel">
                    {filteredCourses.map((item, index) => (
                        <div
                            key={index}
                            className={`course-card ${activeIndex === index ? "active-card" : ""}`}
                        >
                            <div className="course-img-wrapper">
                                <img src={item.image} alt={item.title} className="course-img" loading="lazy" />
                            </div>
                            <p className="course-text">{item.title}</p>
                        </div>
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="course-dots">
                    {filteredCourses.map((_, idx) => (
                        <span key={idx} className={`dot ${activeIndex === idx ? "active" : ""}`}></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
