import nodemailer from 'nodemailer';

export class EmailService {
  constructor() {
    // Don't initialize in constructor - wait for explicit init
  }

  init() {
    console.log('Email service loading with config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER
    });
    
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.iudevelopers.com',
      port: parseInt(process.env.SMTP_PORT || '25'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendContactEmail(data) {
    const projectTypeMap = {
      residential: 'Residential Villa',
      commercial: 'Commercial Development',
      interior: 'Luxury Interior Fit-out',
      consultation: 'Project Consultation',
    };

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@iudevelopers.com',
      subject: `New Project Inquiry: ${projectTypeMap[data.projectType] || data.projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1B3558; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1B3558; margin-top: 0;">Client Information</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Name:</strong> ${data.name}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Email:</strong> <a href="mailto:${data.email}" style="color: #C9A84C;">${data.email}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Phone:</strong> <a href="tel:${data.phone}" style="color: #C9A84C;">${data.phone}</a>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #333;">Project Type:</strong> ${projectTypeMap[data.projectType] || data.projectType}
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1B3558; margin-bottom: 10px;">Project Details:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #C9A84C;">
                ${data.message.replace(/\n/g, '<br>')}
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

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }

  async sendConfirmationEmail(data) {
    const projectTypeMap = {
      residential: 'Residential Villa',
      commercial: 'Commercial Development',
      interior: 'Luxury Interior Fit-out',
      consultation: 'Project Consultation',
    };

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: data.email,
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
              Dear ${data.name},
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out to IU Developers regarding your ${projectTypeMap[data.projectType] || data.projectType} project. We have received your inquiry and are excited about the opportunity to work with you.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              One of our lead consultants will review your project details and contact you within 24-48 hours to discuss your vision in more detail.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 5px; border-left: 4px solid #C9A84C; margin: 20px 0;">
              <h3 style="color: #1B3558; margin-top: 0;">What happens next?</h3>
              <ul style="color: #333; line-height: 1.6;">
                <li>Our team reviews your project requirements</li>
                <li>We prepare initial recommendations and timeline</li>
                <li>A consultant contacts you for a detailed consultation</li>
                <li>We provide a comprehensive proposal tailored to your needs</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+250783247298" style="display: inline-block; background: #C9A84C; color: #1B3558; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 10px;">
                Call Us
              </a>
              <a href="mailto:info@iudevelopers.com" style="display: inline-block; background: #1B3558; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Email Us
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

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      // Don't throw error here as the main email was sent successfully
    }
  }
}

export const emailService = new EmailService();
