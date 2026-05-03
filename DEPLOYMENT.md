# Vercel Deployment Guide for IU Developers

## 🚀 Ready for Deployment

Your IU Developers website is now configured for Vercel deployment with working contact forms!

## 📋 Prerequisites

1. **Vercel Account**: Make sure you have a Vercel account
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Environment Variables**: Configure SMTP settings in Vercel

## 🔧 Environment Variables Setup

In your Vercel dashboard, go to **Settings → Environment Variables** and add:

### Required Variables
```
SMTP_HOST=webmail.iudevelopers.com
SMTP_PORT=25
SMTP_SECURE=false
SMTP_USER=info@iudevelopers.com
SMTP_PASS=Info@2026
```

### Optional Gmail Backup
```
GMAIL_HOST=smtp.gmail.com
GMAIL_PORT=587
GMAIL_SECURE=false
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

## 📁 Project Structure

```
iu-developers/
├── api/
│   ├── send-email.js    # Serverless email function
│   └── health.js       # Health check endpoint
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
├── vercel.json         # Vercel configuration
├── package.json
└── .env.example
```

## 🚀 Deployment Steps

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-deploy on push

### Option 3: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables
5. Deploy

## ✅ What's Configured

- **Serverless Functions**: Email API converted to Vercel functions
- **API Routes**: `/api/send-email` and `/api/health`
- **Frontend**: Updated to use relative URLs
- **Email Service**: Both primary SMTP and Gmail fallback
- **Forms**: Both Home and Contact page forms work
- **Budget Field**: Contact page includes budget information

## 🧪 Testing After Deployment

1. **Health Check**: Visit `https://your-domain.vercel.app/api/health`
2. **Contact Forms**: Test both forms on your deployed site
3. **Email Delivery**: Check `info@iudevelopers.com` inbox

## 🔍 Troubleshooting

### Emails Not Arriving
- Check spam folder
- Verify SMTP credentials
- Check Vercel function logs

### Build Errors
- Ensure all dependencies are in package.json
- Check Vercel build logs

### API Errors
- Verify environment variables
- Check function logs in Vercel dashboard

## 📧 Email Features

- **Primary SMTP**: Your cPanel email server
- **Gmail Fallback**: Backup email service
- **Confirmation Emails**: Auto-replies to users
- **Budget Tracking**: Contact page includes budget info
- **Professional Templates**: Beautiful HTML emails

## 🌐 Production URLs

After deployment:
- **Website**: `https://your-domain.vercel.app`
- **Email API**: `https://your-domain.vercel.app/api/send-email`
- **Health Check**: `https://your-domain.vercel.app/api/health`

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify environment variables
3. Test SMTP connection locally
4. Contact Vercel support if needed

---

**Your contact forms are now production-ready!** 🎉
