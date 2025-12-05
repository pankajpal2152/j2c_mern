import React, { useState, useEffect, useRef } from "react";
import "../Styles/JobSection.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const JobSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateCards, setAnimateCards] = useState(false);
    const scrollRef = useRef(null);

    /* JOB DATA */
    const jobs = [
        { title: "Frontend Developer", company: "Google", location: "Bengaluru", mode: "Hybrid", category: "IT" },
        { title: "Backend Developer", company: "Amazon", location: "Hyderabad", mode: "Office", category: "IT" },
        { title: "Digital Marketer", company: "Zomato", location: "Delhi", mode: "Hybrid", category: "Marketing" },
        { title: "UI/UX Designer", company: "Adobe", location: "Mumbai", mode: "Remote", category: "Design" },
        { title: "Financial Analyst", company: "TCS", location: "Pune", mode: "Office", category: "Finance" },
        { title: "Cloud Engineer", company: "Infosys", location: "Hyderabad", mode: "Remote", category: "IT" }
    ];

    const filters = ["All", "IT", "Marketing", "Design", "Finance"];

    const filteredJobs =
        activeFilter === "All" ? jobs : jobs.filter((job) => job.category === activeFilter);

    /* CARD ANIMATION START */
    useEffect(() => {
        setTimeout(() => setAnimateCards(true), 150);
    }, []);

    /* SCROLL LEFT */
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredJobs.length - 1));
    };

    /* SCROLL RIGHT */
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        setActiveIndex((prev) => (prev < filteredJobs.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="job-wrapper">

            {/* SCROLL BUTTON LEFT — OUTSIDE THE INNER BOX */}
            <button className="job-scroll-btn left-btn" onClick={scrollLeft}>
                <ChevronLeft size={26} />
            </button>

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

                {/* CARD CONTAINER */}
                <div className="job-container" ref={scrollRef}>
                    {filteredJobs.map((job, index) => (
                        <div
                            key={index}
                            className={`job-card fade-card 
                                ${animateCards ? "fade-in" : "fade-out"}
                                ${index === activeIndex ? "active-card" : ""}`}
                        >
                            <h3 className="job-card-header">{job.title}</h3>

                            <div className="job-details">
                                <p><strong>Company:</strong> {job.company}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Mode:</strong> {job.mode}</p>
                            </div>

                            <a href="#" className="job-link">Apply Now →</a>
                        </div>
                    ))}
                </div>

                {/* DOTS */}
                <div className="job-dots">
                    {filteredJobs.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === activeIndex ? "active-dot" : ""}`}
                        />
                    ))}
                </div>
            </div>

            {/* SCROLL BUTTON RIGHT — OUTSIDE THE INNER BOX */}
            <button className="job-scroll-btn right-btn" onClick={scrollRight}>
                <ChevronRight size={26} />
            </button>

        </section>
    );
};

export default JobSection;
