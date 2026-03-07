import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setForm({ name: '', email: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({ 
          submitting: false, 
          success: false, 
          error: data.message || 'Something went wrong' 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Network error. Please try again.' 
      });
    }
  };

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
            {/* Status Messages */}
            {status.success && (
              <div className="success-message">
                ✓ Message sent successfully!
              </div>
            )}
            
            {status.error && (
              <div className="error-message">
                ✗ {status.error}
              </div>
            )}

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
                  disabled={status.submitting}
                /> :
                <textarea
                  key={i}
                  name={f}
                  placeholder={`Your ${f}`}
                  value={form[f]}
                  onChange={handleChange}
                  rows={5}
                  required
                  disabled={status.submitting}
                />
            ))}
            
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