import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set.');
    return res.status(500).json({ error: 'Internal server error.' });
  }

  const toEmail = 'me@namansingh.com';
  // onboarding@resend.dev only delivers to the Resend account owner's address.
  // Once namansingh.com is verified in Resend, set CONTACT_FROM_EMAIL to e.g. "Contact Form <contact@namansingh.com>".
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'NamanSingh.com Contact Form <onboarding@resend.dev>';

  try {
    await axios.post('https://api.resend.com/emails', {
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Naman <> ${name} via NamanSingh.com Contact Form`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    }, {
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error.response?.status, error.response?.data || error.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
