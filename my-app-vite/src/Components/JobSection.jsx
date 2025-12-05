import React, { useEffect, useRef, useState } from "react";
import "../Styles/JobSection.css";
import { Link } from "react-router-dom";
import {
    MapPin,
    Clock3,
    IndianRupee,
    Briefcase,
    User,
    GraduationCap,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const JobSection = () => {
    const filters = [
        "All",
        "Freshers",
        "Experienced",
        "IT",
        "Finance",
        "Marketing",
        "Engineering",
    ];

    const jobs = [
        {
            title: "Software Developer",
            category: "IT",
            icon: <User size={20} />,
            location: "Bangalore",
            experience: "0-1 Years",
            salary: "₹4,50,000 / year",
            link: "/jobs/software-developer",
        },
        {
            title: "Account Executive",
            category: "Finance",
            icon: <Briefcase size={20} />,
            location: "Mumbai",
            experience: "1-2 Years",
            salary: "₹3,80,000 / year",
            link: "/jobs/account-executive",
        },
        {
            title: "Digital Marketing Associate",
            category: "Marketing",
            icon: <GraduationCap size={20} />,
            location: "Remote",
            experience: "0-1 Years",
            salary: "₹25,000 / month",
            link: "/jobs/digital-marketing",
        },
        {
            title: "Mechanical Engineer",
            category: "Engineering",
            icon: <GraduationCap size={20} />,
            location: "Chennai",
            experience: "1-3 Years",
            salary: "₹5,20,000 / year",
            link: "/jobs/mechanical-engineer",
        },
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [activeIndex, setActiveIndex] = useState(0);
    const [animateCards, setAnimateCards] = useState(false);

    const sliderRef = useRef(null);

    const filteredJobs =
        activeCategory === "All"
            ? jobs
            : jobs.filter((job) => job.category === activeCategory);

    const scrollToCard = (index) => {
        const cardWidth = 330;
        sliderRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth",
        });
    };

    const nextCard = () => {
        let newIndex = activeIndex + 1;
        if (newIndex >= filteredJobs.length) newIndex = 0;
        setActiveIndex(newIndex);
        scrollToCard(newIndex);
    };

    const prevCard = () => {
        let newIndex = activeIndex - 1;
        if (newIndex < 0) newIndex = filteredJobs.length - 1;
        setActiveIndex(newIndex);
        scrollToCard(newIndex);
    };

    /** AUTO SCROLL **/
    useEffect(() => {
        const timer = setInterval(nextCard, 4000);
        return () => clearInterval(timer);
    }, [activeIndex, filteredJobs]);

    /** SLIDE-IN ANIMATION **/
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setAnimateCards(true);
            },
            { threshold: 0.2 }
        );

        const section = document.querySelector(".job-wrapper");
        if (section) obs.observe(section);

        return () => obs.disconnect();
    }, []);

    return (
        <section className="job-wrapper">
            <div className="job-inner">

                {/* HEADER */}
                <div className="job-header">
                    <h2 className="job-title">What are you looking for today?</h2>
                    <Link to="/jobs" className="job-view-all">View All →</Link>
                </div>

                {/* FILTERS */}
                <div className="job-filters">
                    {filters.map((btn, index) => (
                        <button
                            key={index}
                            className={`job-filter-btn ${activeCategory === btn ? "active-filter" : ""
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
                <button className="job-arrow left" onClick={prevCard}>
                    <ChevronLeft size={24} />
                </button>

                <button className="job-arrow right" onClick={nextCard}>
                    <ChevronRight size={24} />
                </button>

                {/* CARDS */}
                <div className="job-container" ref={sliderRef}>
                    {filteredJobs.map((job, index) => (
                        <div
                            key={index}
                            className={`job-card slide-card 
                ${animateCards ? "slide-in" : ""} 
                ${index === activeIndex ? "active-card" : ""}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="job-card-header">
                                {job.icon}
                                <h3>{job.title}</h3>
                            </div>

                            <div className="job-details">
                                <p><MapPin size={16} /> Location: {job.location}</p>
                                <p><Clock3 size={16} /> Experience: {job.experience}</p>
                                <p><IndianRupee size={16} /> Salary: {job.salary}</p>
                            </div>

                            <Link to={job.link} className="job-link">
                                View details →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="job-dots">
                    {filteredJobs.map((_, idx) => (
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

export default JobSection;
