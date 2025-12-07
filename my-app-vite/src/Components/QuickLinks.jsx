import React from "react";
import "../Styles/QuickLinks.css";

const QuickLinks = () => {
    const sections = [
        {
            title: "Internships by Places",
            links: [
                "Internship in Bangalore",
                "Internship in Delhi",
                "Internship in Hyderabad",
                "Internship in Mumbai",
                "Internship in Chennai",
                "Internship in Pune",
                "Work From Home Internships",
            ],
            more: "View all internships"
        },

        {
            title: "Internships by Stream",
            links: [
                "Computer Science Internship",
                "Electronics Internship",
                "Mechanical Internship",
                "Civil Internship",
                "Marketing Internship",
                "Finance Internship"
            ],
            more: "View all internships"
        },

        {
            title: "Jobs by Places",
            links: [
                "Jobs in Bangalore",
                "Jobs in Delhi",
                "Jobs in Hyderabad",
                "Jobs in Chennai",
                "Jobs in Kolkata",
                "Jobs in Mumbai"
            ],
            more: "View all jobs"
        },

        {
            title: "Jobs by Type",
            links: [
                "Data Entry Jobs",
                "Content Writing Jobs",
                "Digital Marketing Jobs",
                "Data Science Jobs",
                "Cyber Security Jobs",
                "HR Jobs"
            ],
            more: "View all jobs"
        },

        {
            title: "Fresher Jobs by Places",
            links: [
                "Fresher Jobs in Bangalore",
                "Fresher Jobs in Delhi",
                "Fresher Jobs in Mumbai",
                "Fresher Jobs in Pune",
                "Fresher Jobs in Hyderabad"
            ],
            more: "View all fresher jobs"
        },

        {
            title: "Certification Courses",
            links: [
                "Web Development with AI",
                "Programming with Python with AI",
                "Digital Marketing with AI",
                "Machine Learning with AI",
                "Financial Modeling & Valuation with AI"
            ],
            more: "View all courses"
        }
    ];

    return (
        <section className="quicklinks-wrapper">
            <div className="quicklinks-inner">
                <h2 className="ql-title">Quick Links</h2>

                {sections.map((sec, idx) => (
                    <div key={idx} className="ql-section">
                        <h3 className="ql-heading">{sec.title}</h3>

                        <div className="ql-links">
                            {sec.links.map((item, i) => (
                                <span key={i} className="ql-link">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="ql-more">
                            <span>{sec.more}</span>
                            <span className="ql-arrow">→</span>
                        </div>

                        <div className="ql-divider"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuickLinks;
