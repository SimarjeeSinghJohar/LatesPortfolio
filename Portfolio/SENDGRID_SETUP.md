# SendGrid Setup Instructions

## Step 1: Get SendGrid API Key

1. Go to https://app.sendgrid.com/settings/api_keys
2. Click "Create API Key"
3. Name it: "Portfolio Contact Form"
4. Select "Full Access" (or just "Mail Send" permissions)
5. Copy the API key (you won't see it again!)

## Step 2: Verify Your Sender Email

1. Go to https://app.sendgrid.com/settings/sender_auth/senders
2. Click "Create New Sender"
3. Fill in your information:
   - From Email: connect@simarjeetsinghjohar.com
   - From Name: Simarjeet Singh Johar
   - Reply To: simarjitjohar319@gmail.com (or same as From Email)
4. Click "Create"
5. Check your email and verify the sender

## Step 3: Add Credentials to .env.local

1. Open `.env.local` file in your project root
2. Replace the placeholder values:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   SENDGRID_VERIFIED_SENDER=connect@simarjeetsinghjohar.com
   ```

## Step 4: Restart Your Dev Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 5: Test

1. Go to http://localhost:3000
2. Navigate to the contact form
3. Fill out and submit
4. Check simarjitjohar319@gmail.com for the email!

## Important Notes

- The `.env.local` file is in `.gitignore` - your API key won't be committed to Git
- When deploying to Vercel/Netlify, add these environment variables in their dashboard
- SendGrid free tier: 100 emails/day forever
- Emails sent from: connect@simarjeetsinghjohar.com
- Emails received at: simarjitjohar319@gmail.com

## Troubleshooting

- **401 Error**: API key is incorrect
- **403 Error**: Sender email not verified in SendGrid
- **500 Error**: Check server logs with `npm run dev`
- **No email received**: Check spam folder

## For Production Deployment

When deploying to Vercel:
1. Go to your project settings
2. Add Environment Variables:
   - `SENDGRID_API_KEY`
   - `SENDGRID_VERIFIED_SENDER`
3. Redeploy

Done! Your contact form will now use SendGrid to send emails directly to your Gmail.
