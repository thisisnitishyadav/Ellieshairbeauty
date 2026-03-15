const { sendBookingNotification } = require("../services/emailService");
// In-memory booking store (replace with a real DB in production)
const bookings = [];
let nextId = 1;

const createBooking = (req, res) => {
  const { name, email, phone, service, date, time, notes } = req.body;

  const booking = {
    id: String(nextId++),
    name,
    email,
    phone,
    service,
    date,
    time,
    notes: notes || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);

  console.log(`📅 New booking: ${booking.name} — ${booking.service} on ${booking.date} at ${booking.time}`);

  await sendBookingNotification(booking);
  
  res.status(201).json({
    success: true,
    message: "Booking confirmed! We'll send a reminder before your appointment.",
    data: booking,
  });
};

const getAllBookings = (req, res) => {
  res.json({ success: true, data: bookings });
};

const getBookingById = (req, res) => {
  const booking = bookings.find((b) => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ success: false, error: "Booking not found" });
  }
  res.json({ success: true, data: booking });
};

const updateBookingStatus = (req, res) => {
  const { status } = req.body;
  const booking = bookings.find((b) => b.id === req.params.id);
  if (!booking) {
    return res.status(404).json({ success: false, error: "Booking not found" });
  }
  booking.status = status;
  res.json({ success: true, data: booking });
};

module.exports = { createBooking, getAllBookings, getBookingById, updateBookingStatus };
