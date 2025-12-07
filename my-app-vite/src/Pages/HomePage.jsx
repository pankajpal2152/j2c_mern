import React from "react";

import Hero from "../Components/Hero";
import PartnerSlider from "../Components/PartnerSlider";
import TrendingSection from "../Components/Trending";
import JobSection from "../Components/JobSection";
import InternshipSection from "../Components/InternshipSection";
import CourseSection from "../Components/CourseSection";
import CertificateSection from "../Components/CertificateSection";
import EmployerSection from "../Components/EmployerSection";
import StoriesSection from "../Components/StoriesSection";
import GovernmentBody from "../Components/GovernmentBody";
import KickStart from "../Components/KickStart";
import QuickLinks from "../Components/QuickLinks";

const HomePage = () => {
    return (
        <>
            <Hero />
            <PartnerSlider />
            <TrendingSection />
            <JobSection />
            <InternshipSection />
            <CourseSection />
            <CertificateSection />
            <EmployerSection />
            <StoriesSection />
            <GovernmentBody />
            <KickStart />
            <QuickLinks />
        </>
    );
};

export default HomePage;
