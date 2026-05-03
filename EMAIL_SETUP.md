# Email Setup Instructions

This document explains how to configure and run the email functionality for your IU Developers contact form.

## Overview

The email system consists of:
- **Backend API**: Express server (`server.js`) that handles email sending
- **Email Service**: Nodemailer utility (`src/lib/email.ts`) for sending emails
- **Frontend Integration**: Updated contact form that calls the API endpoint

## Setup Steps

### 1. Configure Email Credentials

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your email credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

### 2. Gmail Setup (Recommended)

If using Gmail:

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Enable 2FA under Security

2. **Generate App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" for the app
   - Select "Other (Custom name)" and name it "IU Developers"
   - Copy the generated password (16 characters)

3. **Use App Password**:
   - Use the app password as `SMTP_PASS` in your `.env` file
   - Use your Gmail address as `SMTP_USER`

### 3. Alternative Email Providers

For other providers, update your `.env`:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo Mail:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

**SendGrid:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
```

### 4. Run the Application

You need to run both the frontend and backend servers:

**Terminal 1 - Start the backend server:**
```bash
npm run server
```

**Terminal 2 - Start the frontend:**
```bash
npm run dev
```

The backend will run on `http://localhost:3001` and the frontend on `http://localhost:5173`.

## How It Works

1. User submits the contact form
2. Frontend sends data to `/api/send-email` endpoint
3. Backend validates the request
4. Two emails are sent:
   - **Notification Email**: To `info@iudevelopers.com` with the inquiry details
   - **Confirmation Email**: To the user with a thank you message
5. User sees success/error feedback via toast notifications

## Testing

To test the email functionality:

1. Start both servers
2. Fill out the contact form with valid data
3. Check:
   - Your inbox for the notification email
   - The test user's email for the confirmation email
   - The browser for toast notifications

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords instead of your main email password
- The backend server includes CORS protection
- Input validation is performed on both frontend and backend

## Troubleshooting

**Common Issues:**

1. **"Invalid login" error**: Check your email credentials and app password
2. **CORS errors**: Ensure both servers are running and check the CORS configuration
3. **Connection refused**: Make sure the backend server is running on port 3001
4. **Email not sending**: Verify SMTP settings and check your email provider's security settings

**Debug Mode:**
Set `NODE_ENV=development` in your `.env` file to see more detailed error messages.

## Production Deployment

For production:

1. Update the CORS origin in `server.js` to your domain
2. Use environment variables for your production email credentials
3. Consider using a transactional email service like SendGrid or Mailgun for better deliverability
4. Set up proper SSL certificates for your server

## Email Templates

The email templates are located in `src/lib/email.ts` and can be customized:

- **Notification Email**: Professional template sent to your team
- **Confirmation Email**: Customer-facing template with project information

You can modify the HTML templates to match your brand styling.
