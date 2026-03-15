const sendWhatsAppMessage = (contact) => {
    try {
      const phone = process.env.WHATSAPP_NUMBER;
  
      const text = `
  New Contact Message
  
  Name: ${contact.name}
  Email: ${contact.email}
  Phone: ${contact.phone || "N/A"}
  
  Subject: ${contact.subject}
  
  Message:
  ${contact.message}
  `;
  
      const encodedText = encodeURIComponent(text);
  
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
  
      console.log("📱 WhatsApp message link:");
      console.log(whatsappUrl);
  
      return whatsappUrl;
  
    } catch (error) {
      console.error("WhatsApp error:", error);
    }
  };
  
  module.exports = { sendWhatsAppMessage };