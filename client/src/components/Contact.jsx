import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import SkeletonLoader from './SkeletonLoader';
import '../styles/Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Simulate loading (remove when using real data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Shows skeleton for 1 second
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: '', email: '', message: '' });
  };

  // Skeleton loader for contact section
  if (loading) {
    return (
      <section id="contact" className="contact">
        {/* Title skeleton for "Contact Me" */}
        <SkeletonLoader.Title level="h2" />
        
        <div className="contact-container">
          {/* Left card skeleton */}
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
          
          {/* Right card skeleton */}
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
            {['name', 'email', 'message'].map((f, i) => (
              f !== 'message' ?
                <input
                  key={i}
                  type={f === 'email' ? 'email' : 'text'}
                  name={f}
                  placeholder={`Your ${f}`}
                  value={form[f]}
                  onChange={handleChange}
                  required
                /> :
                <textarea
                  key={i}
                  name={f}
                  placeholder={`Your ${f}`}
                  value={form[f]}
                  onChange={handleChange}
                  rows={5}
                  required
                />
            ))}
            <button type="submit">Send Message</button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;