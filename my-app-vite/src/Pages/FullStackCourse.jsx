import React from "react";
import "../Styles/FullStackCourse.css";
import {
  Clock,
  Layers,
  Star,
  CheckCircle2,
  Award,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import logoPng from "../assets/logo.png";

const FullStackCourse = () => {
  return (
    <div className="fs-page">

      {/* ===== COURSE TOP NAVBAR (like Internshala Trainings) ===== */}
      <header className="fs-top-nav">
        <div className="fs-top-inner">
          {/* LEFT: small logo + ribbon */}
          <div className="fs-top-left">
            <div className="fs-top-logo">
              <img src={logoPng} alt="J2C Trainings" />
              <span className="fs-top-brand-text">TRAININGS</span>
            </div>

            <div className="fs-top-ribbon">Career Ki Guarantee</div>
          </div>

          {/* CENTER: two dropdown triggers */}
          <div className="fs-top-center">
            <button className="fs-top-menu-btn">
              <span>Certification Courses</span>
              <span className="fs-offer-pill">offer</span>
              <ChevronDown size={16} />
            </button>

            <button className="fs-top-menu-btn">
              <span>Placement Courses with AI</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* RIGHT: login button */}
          <div className="fs-top-right">
            <button className="fs-top-login-btn">Login</button>
          </div>
        </div>

        {/* colored strip under the nav */}
        <div className="fs-top-strip" />
      </header>

      {/* ===== MAIN COURSE CONTENT ===== */}
      <div className="fs-wrapper">
        {/* HERO SECTION */}
        <section className="fs-hero">
          <div className="fs-hero-left">
            <div className="fs-badge-row">
              <span className="fs-badge primary">Job-ready Program</span>
              <span className="fs-badge outline">Beginner friendly</span>
            </div>

            <h1 className="fs-title">Full Stack Web Development Program</h1>
            <p className="fs-subtitle">
              Learn Frontend, Backend, Databases, and Deployment with real-world
              projects. Tailored for students, freshers, and career-switchers.
            </p>

            <div className="fs-meta-row">
              <div className="fs-meta-pill">
                <Clock size={18} />
                <span>6 Months • Instructor-led</span>
              </div>
              <div className="fs-meta-pill">
                <Layers size={18} />
                <span>MERN / Java Full Stack</span>
              </div>
              <div className="fs-meta-pill">
                <Star size={18} />
                <span>4.8 / 5 Rating</span>
              </div>
            </div>

            <div className="fs-cta-row">
              <button className="fs-btn primary">Enroll Now</button>
              <button className="fs-btn ghost">Download Syllabus</button>
            </div>

            <p className="fs-note">
              💡 Limited seats per batch • Get placement assistance after course
              completion.
            </p>
          </div>

          <div className="fs-hero-right">
            <div className="fs-card">
              <h3>Next Batch Starting</h3>
              <p className="fs-date">15 January 2026</p>

              <div className="fs-price-row">
                <span className="fs-price">₹29,999</span>
                <span className="fs-strike">₹45,000</span>
                <span className="fs-off">35% OFF</span>
              </div>

              <ul className="fs-card-list">
                <li>
                  <CheckCircle2 size={18} /> Live weekend classes
                </li>
                <li>
                  <CheckCircle2 size={18} /> 3 Major Projects + 10 Mini Projects
                </li>
                <li>
                  <CheckCircle2 size={18} /> 1:1 Doubt clearing & mentorship
                </li>
                <li>
                  <CheckCircle2 size={18} /> Resume + Interview preparation
                </li>
              </ul>

              <button className="fs-btn full">Apply for this batch</button>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="fs-section">
          <div className="fs-section-header">
            <h2>What you&apos;ll learn</h2>
            <p>
              A structured path from <strong>HTML/CSS</strong> basics to
              <strong> production-grade full stack applications</strong>.
            </p>
          </div>

          <div className="fs-learn-grid">
            <div className="fs-learn-card">
              <h3>Frontend Foundations</h3>
              <p>
                HTML5, CSS3, Flexbox, Grid, Responsive Design, Modern UI
                patterns.
              </p>
            </div>
            <div className="fs-learn-card">
              <h3>JavaScript & React</h3>
              <p>
                ES6+, asynchronous JS, React basics to advanced, routing, API
                integration.
              </p>
            </div>
            <div className="fs-learn-card">
              <h3>Backend & APIs</h3>
              <p>
                Node.js, Express, REST APIs, authentication, authorization,
                best practices.
              </p>
            </div>
            <div className="fs-learn-card">
              <h3>Databases & Deployment</h3>
              <p>
                MongoDB / SQL basics, schema design, hosting on cloud, CI/CD
                basics.
              </p>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="fs-section">
          <div className="fs-section-header">
            <h2>Curriculum Overview</h2>
            <p>
              Carefully designed weekly roadmap so you don&apos;t feel lost at
              any stage.
            </p>
          </div>

          <div className="fs-curriculum">
            <details open>
              <summary>Module 1: Web Basics & Git</summary>
              <ul>
                <li>Internet basics, how web works</li>
                <li>HTML5 tags, forms, semantics</li>
                <li>CSS, Flexbox, Grid layout</li>
                <li>Intro to Git & GitHub workflow</li>
              </ul>
            </details>

            <details>
              <summary>Module 2: JavaScript & Problem Solving</summary>
              <ul>
                <li>Variables, loops, functions, arrays, objects</li>
                <li>DOM manipulation, events</li>
                <li>Fetch API, promises, async/await</li>
                <li>Mini projects: TODO, Quiz app, API-based UI</li>
              </ul>
            </details>

            <details>
              <summary>Module 3: React & Frontend Architecture</summary>
              <ul>
                <li>React components, props, state, hooks</li>
                <li>React Router, forms, custom hooks</li>
                <li>State management patterns</li>
                <li>Project: Job Portal / Internship Portal frontend</li>
              </ul>
            </details>

            <details>
              <summary>Module 4: Backend, DB & Integration</summary>
              <ul>
                <li>Node.js & Express fundamentals</li>
                <li>REST API design, validation</li>
                <li>MongoDB / SQL basics, models</li>
                <li>Full stack project: Auth, dashboards, admin panel</li>
              </ul>
            </details>

            <details>
              <summary>Module 5: Deployment & Placement Prep</summary>
              <ul>
                <li>Hosting frontend & backend</li>
                <li>Environment variables, configs</li>
                <li>Resume building & GitHub portfolio</li>
                <li>DSA/Interview questions for full stack roles</li>
              </ul>
            </details>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="fs-section">
          <div className="fs-section-header">
            <h2>Program Highlights</h2>
          </div>

          <div className="fs-highlight-grid">
            <div className="fs-highlight-card">
              <Award size={28} />
              <h3>Industry-aligned</h3>
              <p>
                Curriculum created with feedback from hiring partners & working
                engineers.
              </p>
            </div>
            <div className="fs-highlight-card">
              <BookOpen size={28} />
              <h3>Project-first learning</h3>
              <p>Every concept tied to mini projects for a real portfolio.</p>
            </div>
            <div className="fs-highlight-card">
              <CheckCircle2 size={28} />
              <h3>Placement assistance</h3>
              <p>Mock interviews, profile review, and referrals for jobs.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="fs-section fs-faq">
          <div className="fs-section-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="fs-faq-grid">
            <details>
              <summary>Is this course suitable for complete beginners?</summary>
              <p>
                Yes. We start from the absolute basics of web development and
                gradually move to advanced full stack concepts.
              </p>
            </details>
            <details>
              <summary>Do I need a powerful laptop?</summary>
              <p>
                Any system that can run a modern browser and VS Code comfortably
                will work. 8GB RAM recommended.
              </p>
            </details>
            <details>
              <summary>Will I get certificate and projects?</summary>
              <p>
                Yes, you&apos;ll receive a course certificate and host all your
                projects on GitHub.
              </p>
            </details>
            <details>
              <summary>What if I miss a live session?</summary>
              <p>
                All sessions are recorded. You can rewatch them and ask doubts
                in the next live class or on doubt support.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullStackCourse;
