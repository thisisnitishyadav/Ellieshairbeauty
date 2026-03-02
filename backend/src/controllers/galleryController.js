const gallery = [
  { id: 1, category: "hair", title: "Balayage Transformation", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
  { id: 2, category: "hair", title: "Sleek Blowout", src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600&q=80" },
  { id: 3, category: "hair", title: "Vibrant Colour", src: "https://images.unsplash.com/photo-1560066984-138daaa0c66d?w=600&q=80" },
  { id: 4, category: "skin", title: "Luxury Facial", src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" },
  { id: 5, category: "skin", title: "Glow Treatment", src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80" },
  { id: 6, category: "makeup", title: "Bridal Look", src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80" },
  { id: 7, category: "makeup", title: "Evening Glam", src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80" },
  { id: 8, category: "nails", title: "Nail Art", src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80" },
  { id: 9, category: "spa", title: "Relaxing Massage", src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { id: 10, category: "hair", title: "Precision Cut", src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" },
  { id: 11, category: "skin", title: "Skincare Ritual", src: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&q=80" },
  { id: 12, category: "makeup", title: "Natural Finish", src: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&q=80" },
];

const getAllImages = (req, res) => {
  res.json({ success: true, data: gallery });
};

const getImagesByCategory = (req, res) => {
  const { category } = req.params;
  const filtered = category === "all" ? gallery : gallery.filter((img) => img.category === category);
  res.json({ success: true, data: filtered });
};

module.exports = { getAllImages, getImagesByCategory };
