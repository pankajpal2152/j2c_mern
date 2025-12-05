import React, { useState, useEffect, useRef } from "react";
import "../Styles/JobSection.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const JobSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateCards, setAnimateCards] = useState(false);

    const scrollRef = useRef(null);

    const jobs = [
        { title: "Frontend Developer", company: "Google", location: "Bengaluru", mode: "Hybrid" },
        { title: "Backend Developer", company: "Amazon", location: "Hyderabad", mode: "Office" },
        { title: "Fullstack Developer", company: "Flipkart", location: "Mumbai", mode: "Remote" },
        { title: "UI/UX Designer", company: "Zomato", location: "Delhi", mode: "Hybrid" },
        { title: "Data Analyst", company: "TCS", location: "Pune", mode: "Office" },
        { title: "Cloud Engineer", company: "Infosys", location: "Hyderabad", mode: "Remote" }
    ];

    const filters = ["All", "IT", "Marketing", "Design", "Finance"];

    /* AUTO SLIDE ANIMATION */
    useEffect(() => {
        setTimeout(() => setAnimateCards(true), 100);
    }, []);

    /* SCROLL LEFT / RIGHT */
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : jobs.length - 1));
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        setActiveIndex((prev) => (prev < jobs.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="job-wrapper">
            <div className="job-inner">
                {/* HEADER */}
                <div className="job-header">
                    <h2 className="job-title">Jobs</h2>
                    <a href="#" className="job-view-all">View All</a>
                </div>

                {/* FILTER BUTTONS */}
                <div className="job-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`job-filter-btn ${activeFilter === filter ? "active-filter" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* ARROWS */}
                <button className="job-arrow left" onClick={scrollLeft}>
                    <ChevronLeft size={22} />
                </button>

                <button className="job-arrow right" onClick={scrollRight}>
                    <ChevronRight size={22} />
                </button>

                {/* JOB CARDS */}
                <div className="job-container" ref={scrollRef}>
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className={`job-card slide-card 
                                ${animateCards ? "slide-in" : ""} 
                                ${index === activeIndex ? "active-card" : ""}`}
                        >
                            {/* wrapper fixes hover layout shifting */}
                            <div className="job-card-content">
                                <h3 className="job-card-header">{job.title}</h3>

                                <div className="job-details">
                                    <p><strong>Company:</strong> {job.company}</p>
                                    <p><strong>Location:</strong> {job.location}</p>
                                    <p><strong>Mode:</strong> {job.mode}</p>
                                </div>

                                <a href="#" className="job-link">Apply Now →</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DOTS */}
                <div className="job-dots">
                    {jobs.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === activeIndex ? "active-dot" : ""}`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobSection;
