import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  const socialLinks = [
  { url: 'https://github.com/mdsimraan', label: 'GitHub', icon: <FaGithub size={20} /> },
  { url: 'https://www.linkedin.com/in/simraanmd/', label: 'LinkedIn', icon: <FaLinkedin size={20} /> },
  { url: 'mailto:mohammedsimraan786@gmail.com', label: 'Email', icon: <FaEnvelope size={20} /> }
];


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Portfolio</span>
            </Link>
            <p className="footer-description">
              ReactJS Developer passionate about creating beautiful, 
              functional web applications. Ready to contribute and learn!
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-nav">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:your.email@example.com" className="contact-link">
                mohammedsimraan786@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+919876543210" className="contact-link">
                +91 7842182250
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Simraan Mohammed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
