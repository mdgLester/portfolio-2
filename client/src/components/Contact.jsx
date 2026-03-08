import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import RevealOnScroll from './RevealOnScroll';
import SkeletonLoader from './SkeletonLoader';
import '../styles/Contact.css';

// Initialize EmailJS with your Public Key
emailjs.init('92eRYMXKGQW9eJw7m'); // ← Replace with your Public Key from Account → API Keys

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      const response = await emailjs.send(
        'portfolio_email', // ← Replace with your Service ID (from Email Services tab)
        'template_tv59s2x', // ← Replace with your Template ID (from Email Templates tab)
        templateParams
      );

      if (response.status === 200) {
        setStatus({ submitting: false, success: true, error: null });
        setForm({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  // Skeleton loader
  if (loading) {
    return (
      <section id="contact" className="contact">
        <SkeletonLoader.Title level="h2" />
        <div className="contact-container">
          <RevealOnScroll direction="left">
            <div className="glass-card contact-info skeleton-contact-info">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="contact-item skeleton-contact-item">
                  <span className="contact-label skeleton-label" />
                  <span className="contact-value skeleton-value" />
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <div className="glass-card contact-form skeleton-contact-form">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="skeleton-input" />
              ))}
              <div className="skeleton-button" />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <RevealOnScroll direction="fade">
        <h2>Contact Me</h2>
      </RevealOnScroll>
      
      <div className="contact-container">
        <RevealOnScroll direction="left">
          <div className="glass-card contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">lestermdg@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+63 942 069 7328</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Address:</span>
              <span className="contact-value">Santa Maria, Bulacan</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Facebook:</span>
              <span className="contact-value">Lester De Guzman</span>
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll direction="right">
          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            {status.success && (
              <div className="success-message">✓ Message sent successfully!</div>
            )}
            
            {status.error && (
              <div className="error-message">✗ {status.error}</div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status.submitting}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status.submitting}
            />
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              disabled={status.submitting}
            />
            
            <button 
              type="submit" 
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;