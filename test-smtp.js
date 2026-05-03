import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('SMTP Host:', process.env.SMTP_HOST);
  console.log('SMTP Port:', process.env.SMTP_PORT);
  console.log('SMTP User:', process.env.SMTP_USER);
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });

  try {
    // Test connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to self for testing
      subject: 'Test Email from IU Developers',
      html: '<h1>Test Email</h1><p>This is a test to verify email functionality.</p>',
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:', error);
  }
}

testEmail();
