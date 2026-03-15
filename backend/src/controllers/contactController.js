const { sendWhatsAppMessage } = require("../services/whatsappService");
const messages = [];

const sendMessage = (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const entry = {
    id: String(messages.length + 1),
    name,
    email,
    phone: phone || "",
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  messages.push(entry);
  console.log(`📬 New contact message from ${name} (${email}): ${subject}`);

  const whatsappLink = sendWhatsAppMessage(entry);

  res.status(201).json({
    success: true,
    message: "Thank you for reaching out! We'll get back to you within 24 hours.",
    whatsappLink,
  });
};

module.exports = { sendMessage };
