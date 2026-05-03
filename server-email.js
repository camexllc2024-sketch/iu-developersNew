import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
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

    console.log('=== SENDING EMAIL ===');
    console.log('To: info@iudevelopers.com');
    console.log('From:', email);
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Project Type:', projectType);
    console.log('Message:', message);
    console.log('======================');
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.iudevelopers.com',
      port: parseInt(process.env.SMTP_PORT || '25'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Ignore SSL certificate mismatch
      },
    });

    const projectTypeMap = {
      residential: 'Residential Villa',
      commercial: 'Commercial Development',
      interior: 'Luxury Interior Fit-out',
      consultation: 'Project Consultation',
    };

    // Send notification email
    const mailOptions = {
      from: process.env.SMTP_USER,
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

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Notification email sent to info@iudevelopers.com');
    console.log('Message ID:', result.messageId);
    
    // Send confirmation email to user
    const confirmationOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting IU Developers',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1B3558; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">IU Developers</h1>
            <p style="color: #C9A84C; margin: 5px 0 0 0;">Rwanda's Premier Development Agency</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1B3558; margin-top: 0;">Thank You for Your Inquiry!</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Dear ${name},
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out to IU Developers regarding your ${projectTypeMap[projectType] || projectType} project. We have received your inquiry and are excited about the opportunity to work with you.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              One of our lead consultants will review your project details and contact you within 24-48 hours to discuss your vision in more detail.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+250783247298" style="display: inline-block; background: #C9A84C; color: #1B3558; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Call Us
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 14px;">
              <p><strong>IU Developers</strong></p>
              <p>Kibagabaga, Gasabo, Kigali</p>
              <p>+250 783 247 298 | info@iudevelopers.com</p>
            </div>
          </div>
        </div>
      `,
    };

    const confirmResult = await transporter.sendMail(confirmationOptions);
    console.log('✅ Confirmation email sent to', email);
    console.log('Confirmation Message ID:', confirmResult.messageId);
    
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
  console.log(`Email server running on port ${PORT}`);
});
