import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { createConnection } from 'net';
import { resolve4 } from 'dns/promises';

dotenv.config();

async function checkDNS() {
  try {
    const addresses = await resolve4('mail.iudevelopers.com');
    console.log('✅ DNS resolves to:', addresses);
    return addresses[0];
  } catch (error) {
    console.log('❌ DNS resolution failed:', error.message);
    return null;
  }
}

async function testTCPPort(host, port) {
  return new Promise((resolve) => {
    const socket = createConnection({ host, port, timeout: 5000 });
    
    socket.on('connect', () => {
      console.log(`✅ TCP connection to ${host}:${port} successful`);
      socket.end();
      resolve(true);
    });
    
    socket.on('timeout', () => {
      console.log(`❌ TCP connection to ${host}:${port} timeout`);
      socket.destroy();
      resolve(false);
    });
    
    socket.on('error', (error) => {
      console.log(`❌ TCP connection to ${host}:${port} error:`, error.message);
      resolve(false);
    });
  });
}

async function testSMTPConnection() {
  console.log('=== SMTP DIAGNOSIS ===');
  
  const ip = await checkDNS();
  if (!ip) {
    console.log('❌ Cannot proceed without DNS resolution');
    return;
  }
  
  const ports = [25, 587, 465, 26];
  for (const port of ports) {
    await testTCPPort(ip, port);
  }
  
  console.log('\n=== RECOMMENDATIONS ===');
  console.log('1. Your SMTP server (mail.iudevelopers.com) is not responding');
  console.log('2. Possible causes:');
  console.log('   - Firewall blocking SMTP ports');
  console.log('   - SMTP service down on cPanel');
  console.log('   - Network connectivity issues');
  console.log('   - Incorrect SMTP hostname');
  console.log('\n3. Solutions:');
  console.log('   - Contact your hosting provider to check SMTP service');
  console.log('   - Use alternative SMTP (Gmail, SendGrid, etc.)');
  console.log('   - Check cPanel email configuration');
}

testSMTPConnection();
