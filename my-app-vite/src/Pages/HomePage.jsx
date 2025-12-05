import React from "react";
import Hero from "../Components/Hero";
import PartnerSlider from "../Components/PartnerSlider";
import Trending from "../Components/Trending";
import JobSection from "../Components/JobSection";
import InternshipSection from "../Components/InternshipSection";
import CourseSection from "../Components/CourseSection";

const HomePage = () => {
    return (
        <>
            <Hero />
            <PartnerSlider />
            <Trending />
            <JobSection />
            <InternshipSection/>
            <CourseSection />
        </>
    );
};

export default HomePage;
