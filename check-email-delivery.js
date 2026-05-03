import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function checkEmailDelivery() {
  console.log('Checking email delivery with detailed headers...');
  
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
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: '🔍 IU Developers Contact Form Test - Check Inbox',
    html: `
      <h2>Contact Form Test</h2>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Test Purpose:</strong> Verify contact form email delivery</p>
      <p><strong>From Server:</strong> IU Developers Website</p>
      <hr>
      <p>If you receive this email, the contact form is working correctly!</p>
      <p>Check your spam folder if you don't see this in your inbox.</p>
    `,
    headers: {
      'X-Priority': '1',
      'X-MSMail-Priority': 'High',
      'Importance': 'high'
    }
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);
    
    // Check if we can get more delivery info
    console.log('\n📧 Email Details:');
    console.log('From:', mailOptions.from);
    console.log('To:', mailOptions.to);
    console.log('Subject:', mailOptions.subject);
    console.log('SMTP Host:', process.env.SMTP_HOST);
    console.log('SMTP Port:', process.env.SMTP_PORT);
    
  } catch (error) {
    console.error('❌ Email test failed:', error);
  }
}

checkEmailDelivery();
