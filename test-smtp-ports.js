import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testDifferentPorts() {
  const configs = [
    { port: 25, secure: false, name: 'Standard SMTP (Port 25)' },
    { port: 587, secure: false, name: 'Submission Port (Port 587)' },
    { port: 465, secure: true, name: 'SMTPS (Port 465)' },
    { port: 26, secure: false, name: 'Alternative SMTP (Port 26)' }
  ];

  for (const config of configs) {
    console.log(`\n=== Testing ${config.name} ===`);
    
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: config.port,
        secure: config.secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        timeout: 10000, // 10 second timeout
        connectionTimeout: 10000,
      });

      await transporter.verify();
      console.log(`✅ SUCCESS: Port ${config.port} works!`);
      
      // Send test email
      const result = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'info@iudevelopers.com',
        subject: `TEST - Port ${config.port} Works!`,
        html: `<p>Test email from port ${config.port}</p>`,
      });
      
      console.log(`✅ Email sent via port ${config.port}`);
      break;
      
    } catch (error) {
      console.log(`❌ FAILED: Port ${config.port} - ${error.message}`);
    }
  }
}

testDifferentPorts();
