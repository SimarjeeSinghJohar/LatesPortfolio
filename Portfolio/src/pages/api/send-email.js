const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.SENDGRID_VERIFIED_SENDER, // Your email (where you receive messages)
      from: process.env.SENDGRID_VERIFIED_SENDER, // Must be verified in SendGrid
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00E6FF;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('SendGrid error:', error);
        throw error;
      });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.response?.body?.errors || error.message 
    });
  }
}
