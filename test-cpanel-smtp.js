import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testCPanelSMTP() {
  console.log('=== TESTING CPANEL SMTP CONFIGURATIONS ===');
  
  // Common cPanel SMTP configurations
  const configs = [
    {
      name: 'Standard cPanel SMTP',
      host: 'mail.iudevelopers.com',
      port: 25,
      secure: false,
      tls: { rejectUnauthorized: false }
    },
    {
      name: 'cPanel with TLS',
      host: 'mail.iudevelopers.com',
      port: 587,
      secure: false,
      tls: { rejectUnauthorized: false }
    },
    {
      name: 'cPanel SMTPS',
      host: 'mail.iudevelopers.com',
      port: 465,
      secure: true,
      tls: { rejectUnauthorized: false }
    },
    {
      name: 'Alternative hostname',
      host: 'iudevelopers.com',
      port: 25,
      secure: false,
      tls: { rejectUnauthorized: false }
    },
    {
      name: 'Webmail hostname',
      host: 'webmail.iudevelopers.com',
      port: 25,
      secure: false,
      tls: { rejectUnauthorized: false }
    }
  ];

  for (const config of configs) {
    console.log(`\n--- Testing ${config.name} ---`);
    
    try {
      const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: config.tls,
        connectionTimeout: 10000,
        timeout: 10000,
        debug: true,
        logger: true
      });

      console.log(`Attempting connection to ${config.host}:${config.port}...`);
      
      await transporter.verify();
      console.log(`✅ SUCCESS: ${config.name} works!`);
      
      // Test sending email
      const result = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'info@iudevelopers.com',
        subject: `TEST - ${config.name} Working!`,
        html: `<p>Test email via ${config.name}</p>`,
      });
      
      console.log(`✅ Email sent! Message ID: ${result.messageId}`);
      return config; // Return working config
      
    } catch (error) {
      console.log(`❌ FAILED: ${config.name} - ${error.message}`);
    }
  }
  
  console.log('\n=== ALTERNATIVE SOLUTIONS ===');
  console.log('If none of these work, try:');
  console.log('1. Contact your hosting provider for correct SMTP settings');
  console.log('2. Check cPanel > Email > Email Accounts > Configure Email Client');
  console.log('3. Verify the email account exists and password is correct');
  console.log('4. Check if SMTP authentication is enabled in cPanel');
  
  return null;
}

testCPanelSMTP();
