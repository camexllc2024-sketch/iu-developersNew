import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,      // Your Gmail address
    pass: process.env.GMAIL_APP_PASS,  // Your Gmail app password
  },
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;
    
    if (!name || !email || !phone || !projectType || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    const projectTypeMap = {
      residential: 'Residential Villa',
      commercial: 'Commercial Development',
      interior: 'Luxury Interior Fit-out',
      consultation: 'Project Consultation',
    };

    // Send to info@iudevelopers.com
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@iudevelopers.com',
      subject: `New Project Inquiry: ${projectTypeMap[projectType] || projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1B3558; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1B3558; margin-top: 0;">Client Information</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Name:</strong> ${name}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #C9A84C;">${email}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Phone:</strong> <a href="tel:${phone}" style="color: #C9A84C;">${phone}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Project Type:</strong> ${projectTypeMap[projectType] || projectType}
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1B3558; margin-bottom: 10px;">Project Details:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #C9A84C;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
              <p>This inquiry was submitted through the IU Developers website contact form.</p>
              <p>Please respond to this inquiry as soon as possible.</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to info@iudevelopers.com');
    
    res.json({
      success: true,
      message: 'Email sent successfully'
    });
    
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Gmail email server running on port ${PORT}`);
  console.log('Make sure to set GMAIL_USER and GMAIL_APP_PASS in your .env file');
});
