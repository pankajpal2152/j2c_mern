import React, { useRef, useState, useEffect } from "react";
import "../Styles/StoriesSection.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StoriesSection = () => {
    const sliderRef = useRef(null);
    const [active, setActive] = useState(0);

    const stories = [
        {
            name: "Amit Verma",
            role: "Web Development Intern",
            image: "/stories/user1.jpg",
            quote:
                "PCS Global helped me land my internship in just 2 weeks! The interview prep and AI suggestions made a huge difference."
        },
        {
            name: "Sneha Roy",
            role: "Data Analyst Trainee",
            image: "/stories/user2.jpg",
            quote:
                "The certification programs boosted my confidence. I cracked my analytics internship with ease."
        },
        {
            name: "Rahul Singh",
            role: "UI/UX Design Intern",
            image: "/stories/user3.jpg",
            quote:
                "The practical projects and portfolio review helped me stand out. Amazing learning experience!"
        },
        {
            name: "Priya Sharma",
            role: "Java Developer Trainee",
            image: "/stories/user4.jpg",
            quote:
                "I transitioned from non-tech to Java development with PCS Global’s structured roadmap. Highly recommended!"
        }
    ];

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -380, behavior: "smooth" });
        updateActive(-1);
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 380, behavior: "smooth" });
        updateActive(1);
    };

    const updateActive = (dir) => {
        setActive((prev) => {
            let next = prev + dir;
            if (next < 0) next = stories.length - 1;
            if (next >= stories.length) next = 0;
            return next;
        });
    };

    /* Auto scroll */
    useEffect(() => {
        const timer = setInterval(scrollRight, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="stories-wrapper">

            {/* SCROLL BUTTONS – NO BACKGROUND, CENTERED VERTICALLY */}
            <button className="stories-btn clean-arrow left" onClick={scrollLeft}>
                <ChevronLeft size={34} />
            </button>

            <button className="stories-btn clean-arrow right" onClick={scrollRight}>
                <ChevronRight size={34} />
            </button>

            <div className="stories-inner">
                <h2 className="stories-title">Success Stories</h2>
                <p className="stories-subtitle">
                    Hear from students and professionals who accelerated their career with PCS Global.
                </p>

                <div className="stories-carousel" ref={sliderRef}>
                    {stories.map((item, i) => (
                        <div key={i} className={`story-card ${active === i ? "active-card" : ""}`}>
                            <img src={item.image} alt={item.name} className="story-img" />
                            <h3 className="story-name">{item.name}</h3>
                            <p className="story-role">{item.role}</p>
                            <p className="story-quote">“{item.quote}”</p>
                        </div>
                    ))}
                </div>

                {/* DOTS */}
                <div className="stories-dots">
                    {stories.map((_, i) => (
                        <span key={i} className={`dot ${active === i ? "active" : ""}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoriesSection;
