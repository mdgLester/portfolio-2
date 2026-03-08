const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

// Try multiple connection methods
const createTransporter = async () => {
  // Method 1: Try port 465 with secure connection
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 5000, // 5 seconds
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });
    
    // Verify connection
    await transporter.verify();
    console.log('✅ Using port 465');
    return transporter;
  } catch (error) {
    console.log('❌ Port 465 failed, trying port 587...');
    
    // Method 2: Try port 587
    const transporter2 = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });
    
    await transporter2.verify();
    console.log('✅ Using port 587');
    return transporter2;
  }
};

// Contact form submission
router.post('/', async (req, res) => {
  console.log('📨 Contact form received:', req.body);
  
  // Validate input
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    // Create transporter with fallback
    const transporter = await createTransporter();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'lestermdg@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p><small>Sent from your portfolio website</small></p>
      `,
    };

    console.log('📧 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent! ID:', info.messageId);
    res.json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('❌ Error:', error);
    
    // Determine if it's a network issue or auth issue
    if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
      res.status(500).json({ 
        success: false, 
        message: 'Cannot connect to email server. Please try again later.' 
      });
    } else if (error.code === 'EAUTH') {
      res.status(500).json({ 
        success: false, 
        message: 'Email authentication failed. Please contact site owner.' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
  }
});

module.exports = router;