import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function debugEmailSending() {
  console.log('=== DEBUGGING EMAIL DELIVERY ===');
  
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

  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@iudevelopers.com',
      subject: 'DEBUG TEST - Please check if this arrives',
      html: `
        <h2>Debug Email Test</h2>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
        <p><strong>To:</strong> info@iudevelopers.com</p>
        <p><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</p>
        <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</p>
        <p>This is a debug test to track email delivery.</p>
      `,
    };

    console.log('Sending debug email...');
    const result = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    console.log('Accepted:', result.accepted);
    console.log('Rejected:', result.rejected);
    console.log('Pending:', result.pending);
    
  } catch (error) {
    console.error('❌ Error:', error);
    console.error('Full error details:', JSON.stringify(error, null, 2));
  }
}

debugEmailSending();
