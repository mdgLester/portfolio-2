import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <RevealOnScroll direction="fade" duration={0.8}>
        <h2>Get In Touch</h2>
      </RevealOnScroll>
      
      <div className="contact-container">
        <RevealOnScroll direction="left" delay={0.2} threshold={0.3}>
          <motion.div 
            className="contact-info glass-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>Let's Connect!</h3>
            <p>I'm currently seeking entry-level IT opportunities. Feel free to reach out!</p>
            <div className="contact-details">
              {[
                { icon: "📧", text: "lestermdg@gmail.com" },
                { icon: "📱", text: "+63 942 069 7328" },
                { icon: "📍", text: "Santa Maria, Bulacan" },
                { icon: "🎓", text: "Bulacan State University" },
                { icon: "🎵", text: "BulSU Symphonic Band" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  whileHover={{ 
                    x: 10, 
                    backgroundColor: "rgba(0,123,255,0.1)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </RevealOnScroll>
        
        <RevealOnScroll direction="right" delay={0.3} threshold={0.3}>
          <motion.form 
            className="contact-form glass-card" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0 20px 40px rgba(0,123,255,0.2)" }}
          >
            <h3>Send Me a Message</h3>
            {['name', 'email', 'message'].map((field, index) => (
              <motion.div 
                key={field}
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {field === 'message' ? (
                  <textarea
                    name={field}
                    rows="5"
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="glass-input"
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="glass-input"
                  />
                )}
              </motion.div>
            ))}
            <motion.button 
              type="submit" 
              className="btn btn-primary glass-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(0,123,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;