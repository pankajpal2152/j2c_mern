import React, { useState, useRef, useEffect } from "react";
import "../Styles/CourseSection.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseSection = () => {
    const filters = [
        "All Courses",
        "Get placed in top brands",
        "Exclusive placement opportunities",
        "Top Rated courses",
    ];

    const courses = [
        {
            title: "Full Stack Courses",
            category: "Top Rated courses",
            image: "/courses/fullstack.jpg",
            link: "/courses/fullstack",
        },
        {
            title: "UI/UX Courses",
            category: "Exclusive placement opportunities",
            image: "/courses/uiux.jpg",
            link: "/courses/uiux",
        },
        {
            title: "Data Analytics Courses",
            category: "Get placed in top brands",
            image: "/courses/data.jpg",
            link: "/courses/data-analytics",
        },
        {
            title: "Cloud Engineering",
            category: "Top Rated courses",
            image: "/courses/cloud.jpg",
            link: "/courses/cloud",
        }
    ];

    const [activeCategory, setActiveCategory] = useState("All Courses");
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredCourses =
        activeCategory === "All Courses"
            ? courses
            : courses.filter((c) => c.category === activeCategory);

    const sliderRef = useRef(null);

    const scrollToCard = (index) => {
        const cardWidth = 350;
        sliderRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    const nextCard = () => {
        let newIndex = activeIndex + 1;
        if (newIndex >= filteredCourses.length) newIndex = 0;
        setActiveIndex(newIndex);
        scrollToCard(newIndex);
    };

    const prevCard = () => {
        let newIndex = activeIndex - 1;
        if (newIndex < 0) newIndex = filteredCourses.length - 1;
        setActiveIndex(newIndex);
        scrollToCard(newIndex);
    };

    // Auto-center active card every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                let newIndex = prevIndex + 1;
                if (newIndex >= filteredCourses.length) newIndex = 0;
                scrollToCard(newIndex);
                return newIndex;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [filteredCourses]);

    return (
        <section className="course-wrapper">
            <div className="course-inner">

                <div className="course-header">
                    <h2 className="course-title">Placement Courses</h2>
                    <Link to="/courses" className="view-all-btn">View All →</Link>
                </div>

                {/* Filters */}
                <div className="course-filters">
                    {filters.map((f, index) => (
                        <button
                            key={index}
                            className={`course-filter-btn ${activeCategory === f ? "active-filter" : ""}`}
                            onClick={() => {
                                setActiveCategory(f);
                                setActiveIndex(0);
                                scrollToCard(0);
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Arrows */}
                <button className="course-arrow left" onClick={prevCard}>
                    <ChevronLeft size={24} />
                </button>

                <button className="course-arrow right" onClick={nextCard}>
                    <ChevronRight size={24} />
                </button>

                {/* Carousel */}
                <div className="course-container" ref={sliderRef}>
                    {filteredCourses.map((course, index) => (
                        <Link to={course.link} className={`course-card ${index === activeIndex ? "active-card" : ""}`} key={index}>
                            <img src={course.image} className="course-img" alt=""/>
                            <p className="course-text">{course.title}</p>
                        </Link>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="dot-wrapper">
                    {filteredCourses.map((_, idx) => (
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

export default CourseSection;
