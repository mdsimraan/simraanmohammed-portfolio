import React from "react";
import "./About.css";
import profileImage from "../../assets/simraan.jpeg";

const About = () => {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "CSS3", level: 92 },
    { name: "HTML5", level: 95 },
    { name: "Git", level: 88 },
  ];

  const experience = [
    {
      year: "2024 - Present",
      title: "Consultant | ReactJS Developer | React Native(Learning)",
      company: "DND INFOTTECH LLP",
      description:
        "I'm currently expanding my skill set by learning React Native, focusing on building pixel-perfect mobile UIs and integrating APIs using Expo and modern libraries. Leading development of modern web applications using React, Node.js, and cloud technologies. Mentoring junior developers and optimizing application performance.",
    },
    {
      year: "2023 - 2024",
      title: "Consultant | ReactJS Developer",
      company: "DND INFOTTECH LLP",
      description:
        "Developed and maintained multiple client projects using MERN stack. Implemented responsive designs and RESTful APIs.",
    },
    {
      year: "2022 - 2023",
      title: "Software Developer Trainee",
      company: "TRAINING INSTITUTE",
      description:
        "Specialized in creating beautiful, responsive user interfaces using React and modern CSS techniques.",
    },
  ];

  const education = [
    {
      year: "2022",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      school: "Potti Sri Ramulu Chalavadi Malikarjuna Rao College Of Engineering And Technology",
      description:
        "Gained expertise in core mechanical engineering while cultivating an analytical mindset and an interest in technology-driven solutions.",
    },
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-text">
              <h1 className="about-title fade-in">About Me</h1>
              <p className="about-subtitle slide-in-up">
                Enthusiastic Full Stack Developer with nearly 2 years of
                hands-on experience.
              </p>
              <div className="about-description slide-in-up">
                <p>
                  I'm a dedicated full-stack developer who loves creating
                  digital experiences that make a difference. With expertise in
                  React, Node.js, and modern web technologies, I build scalable
                  applications that users love.
                </p>
                <p>
                  My journey started with a curiosity about how websites work,
                  and it has evolved into a passion for crafting clean,
                  efficient, and user-friendly solutions. I believe in writing
                  code that's not just functional, but maintainable and elegant.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>
            <div className="about-image slide-in-up">
              <div className="image-container">
                <div className="profile-placeholder">
                  <img
                    src={profileImage}
                    alt="Your Photo"
                    className="profile-image"
                  />
                </div>

                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-content">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-company">{item.company}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((item, index) => (
              <div key={index} className="education-card card">
                <span className="education-year">{item.year}</span>
                <h3 className="education-degree">{item.degree}</h3>
                <h4 className="education-school">{item.school}</h4>
                <p className="education-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
