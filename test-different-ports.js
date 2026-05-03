import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testDifferentPorts() {
  const ports = [25, 587, 465, 2525];
  const hosts = ['webmail.iudevelopers.com', 'mail.iudevelopers.com', 'smtp.iudevelopers.com'];
  
  for (const host of hosts) {
    for (const port of ports) {
      console.log(`\n🧪 Testing ${host}:${port}`);
      
      try {
        const transporter = nodemailer.createTransport({
          host: host,
          port: port,
          secure: port === 465, // SSL for port 465
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          tls: {
            rejectUnauthorized: false
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 10000
        });

        await transporter.verify();
        console.log(`✅ ${host}:${port} - Connection successful!`);
        
        // Try sending a test email
        const result = await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.SMTP_USER,
          subject: `Test from ${host}:${port}`,
          html: `<p>Test email sent via ${host}:${port} at ${new Date().toLocaleString()}</p>`
        });
        
        console.log(`📧 Email sent successfully! Message ID: ${result.messageId}`);
        return { host, port, success: true };
        
      } catch (error) {
        console.log(`❌ ${host}:${port} - Failed: ${error.message}`);
      }
    }
  }
  
  console.log('\n❌ All configurations failed');
  return null;
}

testDifferentPorts();
