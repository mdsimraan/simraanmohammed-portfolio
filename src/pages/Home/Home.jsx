import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-greeting fade-in">Hello, I'm</span>
              <h1 className="hero-title slide-in-up">
                <span className="name-highlight">Simraan Mohammed</span>
                <br />
                Front End Developer
              </h1>
              <p className="hero-description slide-in-up">
                I craft beautiful, responsive web applications using modern
                technologies like React, Node.js, and the MERN stack. Passionate
                about creating user-friendly experiences and clean, efficient
                code.
              </p>
              <div className="hero-buttons slide-in-up">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
              <div className="hero-stats slide-in-up">
                <div className="stat">
                  <h3>7+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>3.3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          
              <div className="hero-image slide-in-up">
                <ParticlesBackground />
              </div>
        
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="skills-preview section-small">
        <div className="container">
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="skills-grid">
            <div className="skill-item1">
              <div className="skill-icon">
                <SiReact size={40} color="#61DAFB" title="React" />
              </div>{" "}
              <h3>React</h3>
              <p>Modern React with hooks, context, and functional components</p>
            </div>
            <div className="skill-item1">
              <div className="skill-icon">
                <SiNodedotjs size={40} color="#83CD29" title="Node.js" />
              </div>{" "}
              <h3>Node.js</h3>
              <p>Server-side development with Express.js and RESTful APIs</p>
            </div>
            <div className="skill-item1">
              <div className="skill-icon">
                <SiMongodb size={40} color="#47A248" title="MongoDB" />
              </div>{" "}
              <h3>MongoDB</h3>
              <p>NoSQL database design and optimization</p>
            </div>
            <div className="skill-item1">
              <div className="skill-icon">
                <SiFigma size={40} color="#F24E1E" title="Figma (UI/UX)" />
              </div>{" "}
              <h3>UI/UX</h3>
              <p>Responsive design with CSS3, Flexbox, and Grid</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to bring your ideas to life?</h2>
            <p>
              Let's work together to create something amazing. I'm available for
              freelance projects and full-time opportunities.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
