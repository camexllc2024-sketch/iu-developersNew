import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testFixedEmail() {
  console.log('=== TESTING FIXED EMAIL CONFIGURATION ===');
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false // Ignore SSL certificate mismatch
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
      subject: 'FIXED TEST - Email should now arrive',
      html: `
        <h2>Fixed Email Test</h2>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
        <p><strong>To:</strong> info@iudevelopers.com</p>
        <p>This email was sent with SSL certificate validation disabled.</p>
        <p>If you receive this, the issue is fixed!</p>
      `,
    };

    console.log('Sending fixed email...');
    const result = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Accepted:', result.accepted);
    console.log('Rejected:', result.rejected);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testFixedEmail();
