# Email Setup Guide for Contact Form

Your portfolio uses **EmailJS** to send contact form submissions to your Gmail. Follow these steps to set it up:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Gmail Service
1. Go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account** and authorize with your Gmail (simarjitjohar319@gmail.com)
5. Give it a name (e.g., "Portfolio Gmail")
6. Copy the **Service ID** (looks like `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Set up your template:
   - **Template Name**: Portfolio Contact Form
   - **Subject**: Portfolio Contact: {{subject}}
   - **Content**:
   ```
   You received a new message from your portfolio contact form:

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
4. In **To email** field, use: `{{to_email}}`
5. Click **Save**
6. Copy the **Template ID** (looks like `template_xyz789`)

## Step 4: Get Your Public Key
1. Click on your profile/account in the top right
2. Go to **Account** → **General**
3. Find your **Public Key** (looks like a random string)
4. Copy it

## Step 5: Update Your Code
1. Open `/src/components/Contact/Contact.js`
2. Find these lines around line 95:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',      // Replace with your Service ID from Step 2
     'YOUR_TEMPLATE_ID',     // Replace with your Template ID from Step 3
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
       to_email: 'simarjitjohar319@gmail.com'
     },
     'YOUR_PUBLIC_KEY'       // Replace with your Public Key from Step 4
   );
   ```
3. Replace:
   - `YOUR_SERVICE_ID` with the Service ID from Step 2
   - `YOUR_TEMPLATE_ID` with the Template ID from Step 3
   - `YOUR_PUBLIC_KEY` with the Public Key from Step 4

## Step 6: Test
1. Save the file
2. Go to your portfolio contact form
3. Fill out and submit a test message
4. Check your Gmail inbox for the message!

## Example Configuration
After setup, your code should look like:
```javascript
await emailjs.send(
  'service_abc123',           // Your actual Service ID
  'template_xyz789',          // Your actual Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'simarjitjohar319@gmail.com'
  },
  'AbC123xYz456'             // Your actual Public Key
);
```

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio contact form

## Troubleshooting
- If emails don't arrive, check your Gmail spam folder
- Make sure you've verified your email on EmailJS
- Check browser console for any error messages
- Ensure all three IDs are correctly copied (no extra spaces)

## Alternative: Formspree
If you prefer a simpler setup without coding, you can use Formspree:
1. Go to https://formspree.io/
2. Create a free account
3. Create a new form and get the form endpoint
4. Update the form action to use Formspree endpoint

Let me know if you need help with setup!
