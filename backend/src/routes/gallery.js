const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

router.get("/", galleryController.getAllImages);
router.get("/:category", galleryController.getImagesByCategory);

module.exports = router;
