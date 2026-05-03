import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function testGmailSMTP() {
  console.log('=== Testing Gmail SMTP as Alternative ===');
  
  // For testing, let's try Gmail's SMTP (you'll need to set up app password)
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@gmail.com', // You'll need to configure this
        pass: 'your-app-password',     // You'll need to configure this
      },
    });

    await transporter.verify();
    console.log('✅ Gmail SMTP works');
    
  } catch (error) {
    console.log('❌ Gmail SMTP test failed:', error.message);
  }
}

async function checkDNSResolution() {
  console.log('\n=== Checking DNS Resolution ===');
  
  const { promisify } = await import('dns');
  const dns = promisify(await import('dns')).default;
  
  try {
    const addresses = await dns.resolve4('mail.iudevelopers.com');
    console.log('✅ DNS resolves to:', addresses);
  } catch (error) {
    console.log('❌ DNS resolution failed:', error.message);
  }
}

async function telnetTest() {
  console.log('\n=== Testing Network Connectivity ===');
  
  const { createConnection } = await import('net');
  
  return new Promise((resolve) => {
    const socket = createConnection({
      host: 'mail.iudevelopers.com',
      port: 25,
      timeout: 5000
    });
    
    socket.on('connect', () => {
      console.log('✅ TCP connection successful');
      socket.end();
      resolve(true);
    });
    
    socket.on('timeout', () => {
      console.log('❌ TCP connection timeout');
      socket.destroy();
      resolve(false);
    });
    
    socket.on('error', (error) => {
      console.log('❌ TCP connection error:', error.message);
      resolve(false);
    });
  });
}

async function runAllTests() {
  await checkDNSResolution();
  await telnetTest();
  await testGmailSMTP();
}

runAllTests();
