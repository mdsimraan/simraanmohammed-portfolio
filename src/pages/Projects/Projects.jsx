import React, { useState } from 'react'
import './Projects.css'
import LP from '../../assets/LP.jpeg'
import adeiaz from '../../assets/adeiaz.png'
import anandam from '../../assets/anandam.png'
import port from '../../assets/port.jpg'
import ERP from '../../assets/ERP.jpg'
import cm from '../../assets/cm.jpg'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Lets-Play',
      category: 'fullstack',
      image: LP,
      description: 'Built a multi-module sports and fitness app enabling users to find buddies, book gyms, courts, events, and experts. ',
      technologies: ['React', 'Node.js', 'MySQL', 'Express','FIREBASE'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Adeiaz',
      category: 'frontend',
      image: adeiaz,
      description: 'Collaboratively developed a React-based platform for managing LED rooftop car advertisements, inspired by Lyt-ads and Flash DOOH',
      technologies: ['React', 'Context API', 'CSS3', 'PHP','AWS EC2'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Coaching-Master',
      category: 'fullstack',
      image: cm,
      description: 'Developed a full-stack educational web application for student enrollment in Software, IT, and AI courses',
      technologies: ['Node.js', 'Express', 'MongoDB', 'CORS', 'React','FIREBASE'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Anandam Learning',
      category: 'frontend',
      image: anandam,
      description: 'Developed an interactive educational website using React.js, focusing on student engagement and smooth course access',
      technologies: ['React', 'RestfulAPI', 'CSS3', 'Node.js','Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'frontend',
      image: port,
      description: 'A responsive portfolio website built with React and modern CSS. Features smooth animations, dark mode toggle, and contact form.',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Netlify','MUI','SI-React-icons'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
     {
      id: 6,
      title: 'Lead Management System',
      category: 'frontend',
      image: ERP,
      description: 'Designed and developed the front-end of an ERP website to streamline business operations ',
      technologies: ['React', 'API Integration', 'CSS3', 'Chart.js','Shadcn-ui','MUI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    // { key: 'backend', label: 'Backend' }
  ]

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'featured') return project.featured
    return project.category === filter
  })

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero section">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="projects-title fade-in">My Projects</h1>
            <p className="projects-subtitle slide-in-up">
              A showcase of my work and the technologies I love to use
            </p>
            <p className="projects-description slide-in-up">
              Here you'll find a collection of projects that demonstrate my skills 
              in full-stack development, from responsive frontends to robust backend systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter section-small">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section section-small">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveUrl} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>
              I'm always open to discussing new projects and opportunities. 
              Let's create something amazing together!
            </p>
            <a href="/contact" className="btn btn-primary">Start a Conversation</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
