const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'MMDS Backend API is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, service, budget, timeline, message } = req.body;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'itsolutions@morokaandassociates.com',
      subject: `New Service Request: ${service} - ${company}`,
      html: `
        <h2>New Service Request from MMDS Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget Range:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This message was sent from the MMDS website contact form.</em></p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Save to database (if MongoDB is connected)
    // const contact = new Contact({ ...req.body });
    // await contact.save();

    res.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      description: 'Modern, responsive websites and web applications',
      features: ['Corporate Websites', 'E-commerce', 'Landing Pages', 'Web Portals']
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Custom business apps and SaaS systems',
      features: ['iOS & Android Apps', 'Business Portals', 'SaaS Solutions', 'API Integration']
    },
    {
      id: 'ai-solutions',
      title: 'AI & Automation',
      description: 'Intelligent solutions with chatbots and compliance tools',
      features: ['AI Assistants', 'Chatbots', 'Compliance Tools', 'Process Automation']
    }
  ];

  res.json(services);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MMDS Backend Server running on port ${PORT}`);
  console.log(`📧 Email service configured`);
  console.log(`🌐 Frontend should be running on port 3004`);
});

module.exports = app;