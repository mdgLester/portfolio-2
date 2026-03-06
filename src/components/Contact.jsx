import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import '../styles/Contact.css';

const Contact = () => {
  const [form,setForm] = useState({name:'',email:'',message:''});
  const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit=e=>{e.preventDefault(); alert("Message sent!"); setForm({name:'',email:'',message:''})};

  return (
    <section id="contact" className="contact">
      <RevealOnScroll direction="fade"><h2>Contact Me</h2></RevealOnScroll>
      <div className="contact-container">
        <RevealOnScroll direction="left">
          <div className="glass-card contact-info">
            <p>📧 Email: lestermdg@gmail.com</p>
            <p>📱 Phone: +63 942 069 7328</p>
            <p>📍 Santa Maria, Bulacan</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="right">
          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            {['name','email','message'].map((f,i)=>(
              f!=='message'?
              <input key={i} type={f==='email'?'email':'text'} name={f} placeholder={`Your ${f}`} value={form[f]} onChange={handleChange} required/>:
              <textarea key={i} name={f} placeholder={`Your ${f}`} value={form[f]} onChange={handleChange} rows={5} required/>
            ))}
            <button type="submit" className="glass-btn">Send Message</button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;