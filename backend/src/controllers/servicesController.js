const services = require("../models/services");

const getAllServices = (req, res) => {
  res.json({ success: true, data: services });
};

const getServiceBySlug = (req, res) => {
  const { slug } = req.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return res.status(404).json({ success: false, error: "Service category not found" });
  }
  res.json({ success: true, data: service });
};

module.exports = { getAllServices, getServiceBySlug };
