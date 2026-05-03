import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env' });

// Debug: Check if environment variables are loaded
console.log('Environment variables loaded:', {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_SECURE: process.env.SMTP_SECURE,
  SMTP_USER: process.env.SMTP_USER
});

import { emailService } from './src/lib/email.js';

// Initialize email service after environment variables are loaded
emailService.init();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.com' 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Send emails
    await emailService.sendContactEmail({ name, email, phone, projectType, message });
    await emailService.sendConfirmationEmail({ name, email, phone, projectType, message });

    res.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Error in email endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
