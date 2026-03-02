const express = require("express");
const router = express.Router();
const servicesController = require("../controllers/servicesController");

router.get("/", servicesController.getAllServices);
router.get("/:slug", servicesController.getServiceBySlug);

module.exports = router;
