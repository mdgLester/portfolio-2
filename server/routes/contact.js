const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

// Email configuration - Using port 465 with secure connection
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Add timeout settings to prevent hanging
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// Contact form submission
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    console.log('📨 Contact form received:', req.body);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
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

      console.log('📧 Attempting to send email...');
      const info = await transporter.sendMail(mailOptions);
      
      console.log('✅ Email sent! Message ID:', info.messageId);
      res.json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
      console.error('❌ Error details:');
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error code:', error.code);
      
      // More specific error messages
      let errorMessage = 'Failed to send message';
      
      if (error.code === 'EAUTH') {
        errorMessage = 'Email authentication failed. Check your credentials.';
      } else if (error.code === 'ESOCKET') {
        errorMessage = 'Could not connect to email server. Please try again.';
      } else if (error.code === 'ETIMEDOUT') {
        errorMessage = 'Connection timed out. Please try again.';
      }
      
      res.status(500).json({ 
        success: false, 
        message: errorMessage 
      });
    }
  }
);

module.exports = router;