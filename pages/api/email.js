import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const sendGridApiKey = process.env.SENDGRID_API_KEY;
  const toEmail = 'me@namansingh.com';

  console.log("about to send email with the following info:")
  console.log(name)
  console.log(email)
  console.log(message)

  try {
    const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
      personalizations: [
        {
          to: [{ email: toEmail }],
          subject: `Naman <> ${name} via NamanSingh.com Contact Form`,
        },
      ],
      from: { email: "me@namansingh.com", name: "Naman Singh" },
      content: [
        {
          type: 'text/plain',
          value: `From: ${name}, Email: ${email}, Message: ${message}`,
        },
      ],
    }, {
      headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 202) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'Failed to send email.' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    console.log("detailed error:")
    if (error.response && error.response.data && error.response.data.errors) {
      console.error(error.response.data.errors);
    }
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
