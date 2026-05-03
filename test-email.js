import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testEmail() {
  console.log('=== TESTING EMAIL CONFIGURATION ===');
  console.log('SMTP Host:', process.env.SMTP_HOST);
  console.log('SMTP Port:', process.env.SMTP_PORT);
  console.log('SMTP Secure:', process.env.SMTP_SECURE);
  console.log('SMTP User:', process.env.SMTP_USER);
  console.log('SMTP Pass:', process.env.SMTP_PASS ? '[CONFIGURED]' : '[MISSING]');
  console.log('=====================================');

  try {
    // Test transporter creation
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      debug: true,
      logger: true
    });

    console.log('Testing SMTP connection...');
    
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    // Test sending email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@iudevelopers.com',
      subject: 'TEST EMAIL - IU Developers Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the SMTP configuration is working.</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
        <p><strong>To:</strong> info@iudevelopers.com</p>
      `,
    };

    console.log('Sending test email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);

  } catch (error) {
    console.error('❌ ERROR:', error);
    console.error('Error details:', error.message);
    if (error.code) {
      console.error('Error code:', error.code);
    }
  }
}

testEmail();
