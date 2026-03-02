const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const { validateBooking } = require("../middleware/validation");

router.post("/", validateBooking, bookingController.createBooking);
router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBookingById);
router.patch("/:id/status", bookingController.updateBookingStatus);

module.exports = router;
