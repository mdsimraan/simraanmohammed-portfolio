import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Modified handleSubmit function - no API calls
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form processing delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create mailto link and open email client
      const mailtoLink = `mailto:aaronamit29@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // Open user's default email client
      window.location.href = mailtoLink
      
      // Show success message
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 5000)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'aaronamit29@gmail.com',
      link: 'mailto:aaronamit29@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8074795696',
      link: 'tel:+918074795696'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bengaluru, India',
      link: '#'
    }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title fade-in">Get In Touch</h1>
            <p className="contact-subtitle slide-in-up">
              Ready to collaborate? Let's discuss opportunities!
            </p>
            <p className="contact-description slide-in-up">
              I'm actively seeking new opportunities to contribute my skills and 
              continue learning. Whether you have a project in mind or want to discuss 
              potential collaboration, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="form-title">Send me a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about the opportunity or project!"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening Email Client...' : 'Send via Email'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    Your email client should have opened with the message pre-filled. Please send the email from there!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    Sorry, there was an error opening your email client. Please email me directly at aaronamit29@gmail.com
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="info-title">Let's connect</h2>
              <p className="info-description">
                I'm always excited to discuss new opportunities and collaborations. 
                Feel free to reach out through any of these channels.
              </p>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="contact-info-item"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3 className="info-label">{info.title}</h3>
                      <p className="info-value">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h3>Follow me</h3>
                <div className="social-buttons">
                  <a href="https://github.com/aaron-dnd" className="social-btn" aria-label="GitHub">
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/aaronamitbirru/" className="social-btn" aria-label="LinkedIn">
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your experience level?</h3>
              <p>I have almost 2 years of hands-on experience in web development with a strong foundation in MERN stack technologies.</p>
            </div>
            <div className="faq-item">
              <h3>Are you available for full-time roles?</h3>
              <p>Yes! I'm actively seeking full-time opportunities where I can contribute while continuing to learn and grow professionally.</p>
            </div>
            <div className="faq-item">
              <h3>What type of work environment do you prefer?</h3>
              <p>I thrive in collaborative environments where I can learn from experienced developers while contributing my fresh perspective and enthusiasm.</p>
            </div>
            <div className="faq-item">
              <h3>What's your approach to learning new technologies?</h3>
              <p>I'm passionate about continuous learning and quickly adapt to new technologies through hands-on practice and documentation study.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
